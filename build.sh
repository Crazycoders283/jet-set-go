#!/bin/bash

# Install Composer dependencies
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Install NPM dependencies
npm ci

# Build frontend assets
npm run build

# Laravel optimizations
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set permissions
chmod -R 755 storage bootstrap/cache
