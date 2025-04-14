#!/usr/bin/env bash
# exit on error
set -o errexit

# Install PHP dependencies
composer install --optimize-autoloader --no-dev

# Install NPM dependencies
npm ci

# Build frontend
npm run build

# Laravel optimizations
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Storage permissions
chmod -R 775 storage bootstrap/cache
