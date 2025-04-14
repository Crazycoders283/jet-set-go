#!/bin/bash

# Let Render handle the start command from render.yaml
# This script is empty because we're relying on the startCommand in render.yaml
# which is: "heroku-php-apache2 -p ${PORT:-8000} public/"

# We don't need to do any Laravel optimizations here as they're already done in the build phase
# via render-build.sh