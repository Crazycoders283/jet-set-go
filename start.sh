# Use Render's PHP utilities
export PHP_VERSION="8.2"

# Install dependencies
/opt/render/project/util/render-php.sh composer install --no-dev --optimize-autoloader

# Clear and optimize
/opt/render/project/util/render-php.sh php artisan cache:clear
/opt/render/project/util/render-php.sh php artisan config:clear
/opt/render/project/util/render-php.sh php artisan route:clear
/opt/render/project/util/render-php.sh php artisan view:clear

# Optimize for production
/opt/render/project/util/render-php.sh php artisan optimize
/opt/render/project/util/render-php.sh php artisan config:cache
/opt/render/project/util/render-php.sh php artisan route:cache
/opt/render/project/util/render-php.sh php artisan view:cache

# We don't need to start the server here - Render will use the startCommand from render.yaml