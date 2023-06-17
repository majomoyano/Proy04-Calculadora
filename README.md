# Aplicaciones

Clone el proyecto base, con:
```
git clone https://github.com/DAWFIEC/DAWM-apps.git
```

## Calculadora

### Frontend

#### Hitos

* **[`hito1-calculadora`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-calculadora)** esqueleto de frontend con MDBootstrap.

## Album de fotos

### Cliente

#### Hitos

* **[`hito1-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-album)** Configuración básica de un proyecto Angular, según las instrucciones de [Angular Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html).
* **[`hito2-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito2-album)** Incorpora una plantilla de Bootstrap en un proyecto Angular, según las instrucciones de [Angular Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html).
* **[`hito3-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito3-album)** Usa un componente, comunicación de una vía (vista-controlador del componente) y directivas de repetición (\*ngFor), según las instrucciones de [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM/tutoriales/angular_bases.html)
* **[`hito4-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito4-album)** TDD con Karma: directiva condicional (\*ngIf) y plantillas (ng-container), según las instrucciones de [Capítulo 04/Ejercicio05](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2004/ejercicio05)
* **[`hito5-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito5-album)** PWA, según las instrucciones de [Angular - PWA](https://dawfiec.github.io/DAWM/tutoriales/angular_pwa.html)
* **[`hito6-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito6-album)** Servicios, según las instrucciones de [Angular - Servicios](https://dawfiec.github.io/DAWM/tutoriales/angular_servicios.html)
* **[`hito7-album`](https://github.com/DAWFIEC/DAWM-apps/tree/hito7-album)** TDD con Karma: Servicios, según las instrucciones de [Capítulo 04/Ejercicio06](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2004/ejercicio06)

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-album  #Cámbiese a la rama deseada
cd album/clienteAngular   #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
ng serve -o               #Levante el servidor
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-album  #Cámbiese a la rama deseada
cd album/clienteAngular   #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

### Admin

#### Hitos

* **[`hito1-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-admin)** Configuración básica de un proyecto Express, según las instrucciones de [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html).
* **[`hito2-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito2-admin)** Incorpora una plantilla de Bootstrap en un proyecto Express, según las instrucciones de [Express - Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/express_bootstrap.html).
* **[`hito3-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito3-admin)** Reutilización de componentes, según las instrucciones de [Express - Layouts y Partials](https://dawfiec.github.io/DAWM/tutoriales/express_partials.html).
* **[`hito4-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito4-admin)** Comunicación con la aplicación API, según las instrucciones de [Guía 18](https://dawfiec.github.io/DAWM/guias/guia18.html).
* **[`hito5-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito5-admin)** Uso de formularios para el envío de datos al API , según las instrucciones de [Express - Formularios I](https://dawfiec.github.io/DAWM/tutoriales/express_forms1.html).
* **[`hito6-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito6-admin)** Uso de formularios para cargar un archivo en el API , según las instrucciones de [Express - Formularios II](https://dawfiec.github.io/DAWM/tutoriales/express_forms2.html).
* **[`hito7-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito7-admin)** Autorización y autenticación, según las instrucciones de [Express - Manejo de estados I: Sesión](https://dawfiec.github.io/DAWM/tutoriales/express_estados1.html).
* **[`hito8-admin`](https://github.com/DAWFIEC/DAWM-apps/tree/hito8-admin)** Rastreo, según las instrucciones de [Express - Manejo de estados II: Cookies](https://dawfiec.github.io/DAWM/tutoriales/express_estados2.html).

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-admin  #Cámbiese a la rama deseada
cd album/admin            #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm start                 #Levante el servidor
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-admin  #Cámbiese a la rama deseada
cd album/admin            #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

### API (dbrms)

#### Hitos

* **[`hito1-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-api)** Configuración básica de un proyecto Express, según las instrucciones de [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html).
* **[`hito2-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito2-api)** Uso básico del ORM del modelo FOTO y del modelo CATEGORIA, según las instrucciones de [Express - ORM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_ormbasico.html).
* **[`hito3-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito3-api)** Uso intermedio del ORM al modificar la relación entre los modelos FOTO y CATEGORIA, e imágenes en la carpeta public; según las instrucciones de [Express - ORM (Intermedio)](https://dawfiec.github.io/DAWM/tutoriales/express_ormintermedio.html) y [Guía 18](https://dawfiec.github.io/DAWM/guias/guia18.html).
* **[`hito4-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito4-api)** TDD con Jest: FOTO, ETIQUETA y FOTOETIQUETA, según las instrucciones de [Capítulo 05/Ejercicio02](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2005/ejercicio02).
* **[`hito5-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito5-api)** Uso de parámetros de consulta y parámetros de ruta, según las instrucciones de [Express - Parámetros de consulta y Parámetros de ruta](https://dawfiec.github.io/DAWM/tutoriales/express_pcpr.html).
* **[`hito6-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito6-api)** TDD con Jest: Etiqueta con uso de parámetros de consulta y parámetros de ruta, según las instrucciones de [Capítulo 05/Ejercicio03](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2005/ejercicio03).
* **[`hito7-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito7-api)** Implementación del API REST del modelo FOTO, según las instrucciones de [Express - REST](https://dawfiec.github.io/DAWM/tutoriales/express_rest.html).
* **[`hito8-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito8-api)** TDD con Jest: FOTO, según las instrucciones de [Capítulo 06/Ejercicio01](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2006/ejercicio01).
* **[`hito9-api`](https://github.com/DAWFIEC/DAWM-apps/tree/hito9-api)** Carga de archivo, según las instrucciones de [Express - Formularios II](https://dawfiec.github.io/DAWM/tutoriales/express_forms2.html).

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-api    #Cámbiese a la rama deseada
cd album/api              #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias

#Modifique la configuración para la conexión con la base de datos


sequelize db:drop         #Eliminación del schema
sequelize db:create       #Creación del schema
sequelize db:migrate      #Aplique las migraciones
sequelize db:seed:all     #Genere los datos

#Levante el servidor

npm start                 #Servidor predeterminado de Express
npm run devstart          #Servidor con detección de cambios (nodemon)
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-api    #Cámbiese a la rama deseada
cd album/api            #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

### API2 (nodbrms)

#### Hitos

* **[`hito1-api2`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-api2)** Configuración básica de un proyecto Express, según las instrucciones de [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html).
* **[`hito2-api2`](https://github.com/DAWFIEC/DAWM-apps/tree/hito2-api2)** Uso básico del ODM, según las instrucciones de [Express - ODM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_odmbasico.html).

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-api2   #Cámbiese a la rama deseada
cd album/api2             #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias

#Modifique la configuración para la conexión con la base de datos no relacional
#Levante el servidor

npm start                 #Servidor predeterminado de Express
npm run devstart          #Servidor con detección de cambios (nodemon)
```

## SPA

### Cliente

#### Hitos

* **[`hito1-spa`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-spa)** Sitio básico con Bootstrap y componentes compartidos, según las instrucciones de [Guía 13](https://dawfiec.github.io/DAWM/guias/guia13.html).
* **[`hito2-spa`](https://github.com/DAWFIEC/DAWM-apps/tree/hito2-spa)** PWA y servicios, según las instrucciones de [Guía 14](https://dawfiec.github.io/DAWM/guias/guia14.html).

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-spa    #Cámbiese a la rama deseada
cd spa/clienteAngular     #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
ng serve -o               #Levante el servidor
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-spa    #Cámbiese a la rama deseada
cd album/clienteAngular   #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

## Híbrida

### Cliente

#### Hitos

* **[`hito1-hibrida`](https://github.com/DAWFIEC/DAWM-apps/tree/hito1-hibrida)** Sitio básico con Bootstrap, según las instrucciones de [Angular Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html) y de [Angular Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html)..
* **[`hito2-hibrida`](https://github.com/DAWFIEC/DAWM-apps/tree/hito2-hibrida)** usa Angular Material, según las instrucciones de [Angular Material](https://dawfiec.github.io/DAWM/tutoriales/angular_material.html).
* **[`hito3-hibrida`](https://github.com/DAWFIEC/DAWM-apps/tree/hito3-hibrida)** incorpora el manejo de rutas, según las instrucciones de [Angular Rutas](https://dawfiec.github.io/DAWM/tutoriales/angular_rutas.html).
* **[`hito4-hibrida`](https://github.com/DAWFIEC/DAWM-apps/tree/hito4-hibrida)** TDD con Karma: Material y Rutas, según las instrucciones de [Capítulo 04/Ejercicio07](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2004/ejercicio07)


#### Instalación y Ejecución

```
cd DAWM-apps               #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-hibrida #Cámbiese a la rama deseada
cd hibrida/clienteAngular  #Ingrese a la carpeta del proyecto
npm i                      #Instale las dependencias
ng serve -o                #Levante el servidor
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>-hibrida#Cámbiese a la rama deseada
cd hibrida/clienteAngular #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

## Referencias

* Guía completa markdown y su integración con R. (2022). Retrieved 28 November 2022, from https://rstudio-pubs-static.s3.amazonaws.com/330387_5a40ca72c3b14824acedceb7d34618d1.html
* Basic Syntax | Markdown Guide. (2022). Retrieved 28 November 2022, from https://www.markdownguide.org/basic-syntax/#paragraphs-1
* head, W., Stewart, R., & Bailey, C. (2011). What to do with commit made in a detached head. Retrieved 25 November 2022, from https://stackoverflow.com/questions/7124486/what-to-do-with-commit-made-in-a-detached-head/7124513#7124513
* How to rename and change a Git branch name locally &amp; remotely. (2022). Retrieved 28 November 2022, from https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/rename-Git-branch-local-remote-GitHub-GitLab-BitBucket
