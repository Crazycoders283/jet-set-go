#!/usr/bin/env bash
# exit on error
set -o errexit

# Define PHP version to use
export PHP_VERSION="8.2"

# Install PHP dependencies
/opt/render/project/util/render-php.sh composer install --optimize-autoloader --no-dev

# Install NPM dependencies
npm ci

# Build frontend
npm run build

# Laravel optimizations
/opt/render/project/util/render-php.sh php artisan config:cache
/opt/render/project/util/render-php.sh php artisan route:cache
/opt/render/project/util/render-php.sh php artisan view:cache

# Storage permissions
chmod -R 775 storage bootstrap/cache
