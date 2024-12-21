#!/bin/bash

# Iniciar MariaDB
service mysql start

# Iniciar Apache en primer plano
apachectl -D FOREGROUND
