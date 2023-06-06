# Utilizar una imagen base de servidor web Apache
FROM httpd:latest

# Copiar los archivos HTML al directorio raíz del servidor web
COPY . /usr/local/apache2/htdocs/
