# Usa una imagen base de Debian
FROM debian:latest

# Instala dependencias y módulos necesarios en una sola capa
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    apache2 \
    libapache2-mod-perl2 \
    perl \
    locales \
    mariadb-server \
    libdbi-perl \
    libdbd-mysql-perl \
    libwww-perl \
    build-essential \
    libmodule-build-perl \
    cpanminus \
    default-libmysqlclient-dev \
    libmariadb-dev \
    libssl-dev \
    pkg-config \
    libgd-dev \
    libemail-sender-perl \
    libemail-simple-perl \
    libemail-mime-perl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Instala el módulo CGI usando cpanm
RUN cpanm CGI

# Generar locales y establecer la configuración de UTF-8
RUN echo "es_ES.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen && \
    update-locale LANG=es_ES.UTF-8

# Configurar variables de entorno para UTF-8
ENV LANG=es_ES.UTF-8 \
    LANGUAGE=es_ES:es \
    LC_ALL=es_ES.UTF-8

# Habilita los módulos CGI, headers, rewrite y ssl de Apache
RUN a2enmod cgi headers rewrite ssl

# Crea los directorios necesarios
RUN mkdir -p /usr/lib/cgi-bin/admin /usr/lib/cgi-bin/client /usr/src/app/images/

# Copia los scripts Perl y archivos HTML
COPY cgi-bin/admin/*.cgi /usr/lib/cgi-bin/admin/
COPY cgi-bin/client/*.cgi /usr/lib/cgi-bin/client/
COPY public/index.html /var/www/html/index.html
COPY public/style.css /var/www/html/style.css
COPY public/script.js /var/www/html/script.js
COPY images/ /usr/src/app/images/
COPY configuraciones/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY db/login.sql /docker-entrypoint-initdb.d/login.sql
COPY db/productos.sql /docker-entrypoint-initdb.d/productos.sql
RUN chmod +x /docker-entrypoint-initdb.d/*.sql

# Copia el archivo de configuración de MariaDB
COPY configuraciones/my.cnf /etc/mysql/my.cnf

# Copiar el script de inicio de servicios
COPY start_services.sh /usr/local/bin/start_services.sh
RUN chmod +x /usr/local/bin/start_services.sh

# Copia el script de inicialización de la base de datos
COPY init_db.sh /usr/local/bin/init_db.sh
RUN chmod +x /usr/local/bin/init_db.sh

# Cambia permisos de los scripts Perl
RUN chmod +x /usr/lib/cgi-bin/admin/*.cgi /usr/lib/cgi-bin/client/*.cgi

# Configura el charset de Apache
RUN echo 'AddDefaultCharset UTF-8' >> /etc/apache2/apache2.conf

# Exponer puertos
EXPOSE 80 

# Instalar librerías adicionales
RUN cpanm Crypt::Eksblowfish Bytes::Random::Secure

# Comando para iniciar los servicios
CMD ["/usr/local/bin/start_services.sh"]
