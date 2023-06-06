# Utilizar una imagen base de Jenkins con soporte para Docker
FROM jenkins/jenkins:latest

USER root

# Instalar dependencias necesarias para Docker
RUN apt-get update \
    && apt-get install -y apt-transport-https \
                          ca-certificates \
                          curl \
                          gnupg \
                          lsb-release

# Agregar la clave GPG oficial de Docker
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Configurar el repositorio estable de Docker
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker CLI
RUN apt-get update \
    && apt-get install -y docker-ce-cli

USER jenkins
