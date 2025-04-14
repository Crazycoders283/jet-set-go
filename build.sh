#!/bin/bash

# Define PHP version to use
export PHP_VERSION="8.2"

# Install Composer dependencies
/opt/render/project/util/render-php.sh composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Install NPM dependencies
npm ci

# Build frontend assets
npm run build

# Laravel optimizations
/opt/render/project/util/render-php.sh php artisan config:cache
/opt/render/project/util/render-php.sh php artisan route:cache
/opt/render/project/util/render-php.sh php artisan view:cache

# Set permissions
chmod -R 755 storage bootstrap/cache
