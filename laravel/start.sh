#!/bin/bash

# Create tables in Aiven (safe to run on every deploy, it only runs new migrations)
php artisan migrate --force

# Uncomment ONCE to fill with seed data, then comment out again
# php artisan db:seed --force

# Start Apache in the foreground (keeps the container alive)
apache2-foreground