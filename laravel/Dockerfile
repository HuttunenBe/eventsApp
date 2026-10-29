# PHP 8.2 with Apache
FROM php:8.2-apache

# System deps + PHP extensions (pdo_mysql is needed for Aiven MySQL)
RUN apt-get update && apt-get install -y \
    git zip unzip libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip \
    && rm -rf /var/lib/apt/lists/*

# Laravel needs mod_rewrite for pretty URLs
RUN a2enmod rewrite

# Serve from /public instead of the project root
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|' \
    /etc/apache2/sites-available/000-default.conf

# Allow .htaccess overrides (Laravel's routing depends on it)
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' \
    /etc/apache2/apache2.conf

# Silences the "could not determine server's fully qualified domain name" warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

WORKDIR /var/www/html

# Copy the app
COPY . /var/www/html

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Laravel needs write access to these
RUN chown -R www-data:www-data storage bootstrap/cache

# Avoids git "dubious ownership" errors
RUN git config --global --add safe.directory /var/www/html

# Start script: runs migrations, then starts Apache.
# sed strips Windows line endings (CRLF), which otherwise break the script on Linux
RUN sed -i 's/\r$//' /var/www/html/start.sh && chmod +x /var/www/html/start.sh

CMD ["/var/www/html/start.sh"]