import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    // Default to secure=false if VITE_SECURE is not set
    const isSecure = process.env.VITE_SECURE === 'true';
    
    let httpsConfig = {};
    
    // Set up HTTPS if enabled
    if (isSecure) {
        console.log('HTTPS is enabled for Vite development server');
        // Use self-signed certs if available
        const certPath = path.resolve(__dirname, './certs');
        if (fs.existsSync(path.join(certPath, 'cert.pem')) && 
            fs.existsSync(path.join(certPath, 'key.pem'))) {
            httpsConfig = {
                cert: fs.readFileSync(path.join(certPath, 'cert.pem')),
                key: fs.readFileSync(path.join(certPath, 'key.pem'))
            };
        }
    }
    
    return {
        plugins: [
            react(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './resources/js')
            }
        },
        build: {
            outDir: 'public/build',
            emptyOutDir: true,
            manifest: true,
            assetsDir: 'assets',
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    }
                }
            }
        },
        server: {
            hmr: {
                host: '0.0.0.0',
                protocol: isSecure ? 'wss' : 'ws',
            },
            host: '0.0.0.0',
            port: 5173,
            https: isSecure ? httpsConfig : false,
            watch: {
                usePolling: true,
            },
            // Allow connections from any origin for use in deployment environments
            cors: {
                origin: '*',
                methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
                credentials: true
            }
        }
    };
});
