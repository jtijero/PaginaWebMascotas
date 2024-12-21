# PaginaWebMascotas
Este proyecto es la finalizacion del proyecto final de programacion web 1 de otro repositorio, aqui se terminara este proyecto de crear una pagina web usando principalmente DBI, AJAX

# Estructura de archivos
siendo la continuacion del proyecto final en otro repositorio pero sin funcionar, debemos hacer varios cambios para hacer mas entendible su estructura reutilizando las imagenes y pues teniendo un mejor orden, el cual siendo la primera idea, es este:

docker-compose.yml
mariadb
pagina
1  cgi-bin
2  htdocs
3  images
4  scripts
5  comandos.txt

# Funcionamiento
desde la construccion de docker-compose.yml hasta el guardado de productos
2 Dockerfile se construyen servidor y mariadb siguiendo la estructura propuesta
en servidor estan las carpetas que contienen html cgi imagenes y javascript

#Arquitectura de Carpetas
servidor
├── cgi-bin
│   ├── admin
│   │   ├── agregar_producto.cgi
│   │   ├── borrar_producto.cgi
│   │   ├── update_producto.cgi
│   │   ├── registroexitoso.cgi
│   │   ├── ver_grafico.cgi
│   │   └── ver_inventario.cgi
│   └── client
│       ├── acceder.cgi
│       └── todoslosproductos.cgi
├── configuraciones
│   ├── 000-default.conf
│   ├── comandos.txt
│   ├── git.txt
│   └── my.cnf
├── db
│   ├── login.sql
│   └── productos.sql
├── images
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Dockerfile
├── init_db.sh
└── start_services.sh

Dentro del contenedor:

/
├── usr
│   ├── lib
│   │   └── cgi-bin
│   │       ├── admin
│   │       │   ├── agregar_producto.cgi
│   │       │   ├── borrar_producto.cgi
│   │       │   ├── update_producto.cgi
│   │       │   ├── registroexitoso.cgi
│   │       │   ├── ver_grafico.cgi
│   │       │   └── ver_inventario.cgi
│   │       └── client
│   │           ├── acceder.cgi
│   │           └── todoslosproductos.cgi
│   └── local
│       └── bin
│           ├── start_services.sh
│           └── init_db.sh
├── etc
│   ├── apache2
│   │   └── sites-available
│   │       └── 000-default.conf
│   └── mysql
│       └── my.cnf
├── var
│   └── www
│       └── html
│           ├── index.html
│           ├── style.css
│           └── script.js
├── docker-entrypoint-initdb.d
│   ├── login.sql
│   └── productos.sql
├── usr
│   └── src
│       └── app
│           └── images
└── etc
    └── locale.gen
