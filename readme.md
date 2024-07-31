# API REST del curso "Sequelize" brindado por @ColmenaTEC
[Playlist Curso Sequelize](https://youtube.com/playlist?list=PLRFOqDrY-6nsu5nRPwLSoYuv99cbsODoL&si=vJF2vbK-Py5Tf8Ko)

## Utilizando NodeJs, Express, Sequelize y MySql. 

Para probar el proyecto:

1. Modificar los datos de la conexión a la BBDD con los propios (archivo connect.js)
   
   ~~~ js
    const sequelize = new Sequelize('curso-sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
    })
   ~~~
   En donde:
   - 'curso-sequelize' = nombre de la BBDD
   - 'root' = usuario
   - '' = contraseña. Si no usas contraseña, dejar el string vacío
   - port = puerto en donde está corriendo MySql (por defecto es el 3306)
  
2. Antes de ejecutar el proyecto por primera vez, descomentar los bloques de código que tienen las funciones sync() de los modelos que se encuentran al final de los archivos:
   - company.js
   - studentCourse.js
   - person.js
  
    y las líneas de importación del archivo index.js

3. Para ejecutar el proyecto:
   ~~~ bash
   npm install
   npm start
   ~~~