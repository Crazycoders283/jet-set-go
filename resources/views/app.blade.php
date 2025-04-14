<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @if (app()->environment('local'))
            <script>
                // Determine protocol based on current page protocol
                window.VITE_APP_URL = (window.location.protocol === 'https:' ? 'https:' : 'http:') + 
                                      '//{{ request()->getHost() }}:5173';
                
                // Function to create and append script tags
                function loadScript(src, type = 'module') {
                    return new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.type = type;
                        script.src = window.VITE_APP_URL + src;
                        script.onload = resolve;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    });
                }

                // Load scripts in sequence
                document.addEventListener('DOMContentLoaded', async () => {
                    try {
                        // First load the client
                        await loadScript('/@vite/client');
                        // Then load the app
                        await loadScript('/resources/js/app.jsx');
                        console.log('Vite scripts loaded successfully');
                    } catch (error) {
                        console.error('Failed to load Vite scripts:', error);
                        // Fallback to built assets if available
                        document.body.classList.add('vite-loading-failed');
                    }
                });

                // Handle React refresh runtime
                (async () => {
                    try {
                        const refreshUrl = window.VITE_APP_URL + '/@react-refresh';
                        const module = await import(refreshUrl);
                        const RefreshRuntime = module.default;
                        RefreshRuntime.injectIntoGlobalHook(window);
                        window.$RefreshReg$ = () => {};
                        window.$RefreshSig$ = () => (type) => type;
                        window.__vite_plugin_react_preamble_installed__ = true;
                    } catch (e) {
                        console.error('Failed to load React refresh:', e);
                    }
                })();
            </script>
        @else
            <!-- Use built assets in production -->
            @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @endif
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
