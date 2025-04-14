<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // In development mode, we don't need the fallback manifest
        // since the Vite server will be running
        if (app()->environment('production') && !File::exists(public_path('build/.vite/manifest.json'))) {
            Log::warning('Vite manifest not found. Using fallback manifest.');
            
            // Create directory if it doesn't exist
            if (!File::exists(public_path('build/.vite'))) {
                File::makeDirectory(public_path('build/.vite'), 0755, true);
            }
            
            // Create a basic fallback manifest if it doesn't exist
            $fallbackManifest = [
                "resources/js/app.jsx" => [
                    "file" => "assets/app.js",
                    "src" => "resources/js/app.jsx",
                    "isEntry" => true,
                    "css" => ["assets/app.css"]
                ]
            ];
            
            File::put(
                public_path('build/.vite/manifest.json'),
                json_encode($fallbackManifest, JSON_PRETTY_PRINT)
            );
            
            // Create assets directory if it doesn't exist
            if (!File::exists(public_path('build/assets'))) {
                File::makeDirectory(public_path('build/assets'), 0755, true);
            }
            
            // Create empty placeholder files
            if (!File::exists(public_path('build/assets/app.js'))) {
                File::put(public_path('build/assets/app.js'), '// Placeholder file');
            }
            
            if (!File::exists(public_path('build/assets/app.css'))) {
                File::put(public_path('build/assets/app.css'), '/* Placeholder file */');
            }
        }
    }
}
