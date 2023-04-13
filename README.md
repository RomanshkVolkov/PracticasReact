# PracticasReact
Curso de Udemy REACT


# ED-API

##Breve descripción del proyecto.

Este proyecto es una API para la evaluación de docentes, alumnos. La aplicación proporciona una plataforma en línea para
la evaluación de los profesores por parte de los estudiantes. La API está desarrollada en Express con TypeScript y
utiliza una base de datos para almacenar los datos de los usuarios, las evaluaciones y los resultados.

La estructura de carpetas del proyecto está diseñada para facilitar el mantenimiento y la escalabilidad. Los archivos se
organizan en controladores, modelos, rutas y otros módulos relacionados con la base de datos y los servicios de la
aplicación.

En resumen, este proyecto es una herramienta valiosa para evaluar a los docentes y mejorar la calidad de la enseñanza en
las instituciones educativas.

Requerimientos Node.js >= v16.14.1 Docker (opcional)

## Instalación

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/usuario/ED-API.git
   ```

2. Instalar las dependencias:

   ```sh
   cd ED-API
   npm install
   ```

3. Crear el archivo `.env` en la raíz del proyecto y configurar las variables de entorno necesarias.

4. Compilar el proyecto:

   ```sh
   npm run build
   ```

5. Iniciar el servidor:

   ```sh
   npm start
   ```

6. Para ejecutar en modo de desarrollo:

   ```sh
   npm run dev
   ```

7. Para ejecutar las pruebas:

   ```sh
   npm test
   ```

8. Para formatear el código:

   ```sh
   npm run format
   ```

Si se desea usar Docker, se debe tener instalado Docker en la máquina, y se puede ejecutar el proyecto con Docker
Compose:

1. Ejecutar el contenedor:

   ```sh
   docker-compose up
   ```

2. Acceder a la aplicación en el puerto especificado en el archivo `docker-compose.yml`.

3. Acceder a PHPMyAdmin en el puerto especificado en el archivo `docker-compose.yml`.

#Instalar prettier para formatear el codigo
![image](https://user-images.githubusercontent.com/85083888/219972326-637d43d1-518f-4af3-90fe-70688180bcfb.png)

Seleccionar cambiar como formateador predeterminado

`Ctrl+Shift+P`
![image](https://user-images.githubusercontent.com/85083888/219972576-4c3bfa51-6ffe-4018-9cc2-143042e1808d.png)

Cambiamos el predeterminado
![image](https://user-images.githubusercontent.com/85083888/219972597-01b3df2b-ecd1-4f27-ab3c-ddca01b27b83.png)

Seleccionamos prettier
![image](https://user-images.githubusercontent.com/85083888/219972614-b9cd6b27-0b1e-49e1-a223-e863d7b11d88.png)

# Estructura de carpetas:

```
├── src
│   ├── controllers
│   │   └── AuthController.ts
│   ├── middlewares
│   │   └── corsOptions.ts
│   ├── models
│   │   └── AnswerTestComment.ts
│   └── routers
│       ├── AuthRouter.ts
│       └── index.ts
├── app.ts
├── index.ts
└── test
```

# Explicación:

`controllers`: carpeta que contiene todos los controladores para manejar las solicitudes HTTP entrantes. En este ejemplo
se encuentra el archivo `AuthController.ts` que exporta una clase que maneja la solicitud login.

`middlewares`: carpeta que contiene todos los middleware personalizados para la aplicación. En este ejemplo se encuentra
el archivo `corsOptions.ts` que exporta una constante con las opciones de configuración para permitir solicitudes
`CORS`.

`models`: carpeta que contiene todos los modelos de datos para interactuar con la base de datos. En este ejemplo se
encuentra el archivo `AnswerTestComment.ts` que exporta una clase que extiende el modelo Sequelize y define la
estructura de la tabla respuesta_evaluacion_comentario.

`router`: carpeta que contiene todas las rutas de la aplicación. En este ejemplo se encuentran dos archivos:

`AuthRouter`.ts: exporta una clase que define las rutas para el controlador `AuthController`.

En la carpeta `router` sobre el archivo `index.ts`: exporta una clase que define todas las rutas de la aplicación. En
este archivo se importa la clase `AuthRouter` y se define la ruta base /auth para todas las rutas del controlador
`AuthController`.

`app.ts` es el archivo que contiene la configuración y la instancia de la aplicación Express. `index.ts` es el archivo
que inicia la aplicación y la hace escuchar en el puerto especificado. `test` es la carpeta que contiene los tests de la
aplicación.

# Rutas

Documentacion mas detallada sobre las rutas en Postman

- [Alumnos](https://documenter.getpostman.com/view/26377950/2s93RZMpuq)
- [Coordinadores](https://documenter.getpostman.com/view/26377950/2s93RZMpqV)

## Traer los datos de los maestros de un alumno

- Method: `GET`
- Endpoint: `http://localhost:3000/api/v1/student/professors/:matricula`
- Example: `http://localhost:3000/api/v1/student/professors/202000110`
- Response:

```json
[
 {
    "id_periodo": 3231,
    "id_curso": 8839,
    "id_encuesta": 6002, //Es el surveyId usado para enviar la respuesta
    "estatus": 0, // Inidca si esta o no respondido
    "id_materia": 546,
    "nombre_materia": "ANALISIS FINANCIERO DE SOFTWARE",
    "clave_grupo": "28AV",
    "nombre_corto_materia": "ANFI",
    "id_docente": 486,
    "nombre": "JOSE DANIEL",
    "apellido_materno": "BALAN",
    "apellido_paterno": "TUYUB",
    "nombre_carrera": "INGENIERIA EN SOFTWARE"
  },
]
 // En caso de que la matricula no exista o no este registrado en el periodo actual
  {
  "message": "Matricula no encontrada"
  }
```

## Traer las preguntas de la encuesta que le corresponde

- Method: `GET`
- Endpoint: `http://localhost:3000/api/v1/student/survey`
- Response:

```json
[
    {
        "id_pregunta": 1,
        "id_cuestionario_ad": 2, // Este campo indica la version del cuestionario y se usa en el endpoint para guardar las respuestas(survey_version)
        "pregunta": "El o la docente al inicio del cuatrimestre, dio a conocer: los objetivos de aprendizaje y programa de asignatura"
    },
    {
        "id_pregunta": 2,
        "id_cuestionario_ad": 2,
        "pregunta": "El o la docente al inicio del cuatrimestre, dio a conocer: los criterios y periodos de evaluación"
    },
    ...
]
```

## Guardar respuesta

se guardar las respuestas de la evaluación por cada profesor

- Method: `POST`
- Endpoint: `http://localhost:3000/api/v1/student/saveAnswer/:surveyId`
  > surveyId es el id_encuesta que viene en la consulta de los maestros
- Example: `http://localhost:3000/api/v1/student/saveAnswer/4`
- body:

```json
{
    "survey_version": 2, //Viene en la consulta de las preguntas como "id_cuestionario_ad"
    "answers": [
        {
            "questionId": 5,
            "value": 3
        },
        {
            "questionId": 3,
            "value": 3
        },
        ...
    ],
    // En caso de el estudiante no ponga comentario se
    // puede mandar un valor null o directamente no enviarlo
    "comment": "no explica nada"
}
```

- Response:

```json
// Cuando las respuestas se guardan bien, status:200
{
    "message": "Save answer successfully."
}
// Cuando no se manden los datos completos en el body, status:400
{
    "message": "answers or survey_version undefined"
}
// Cuando los datos de las respuestas no estan completas, es decir algun valor no se especifico o el id de la pregunta. **No se guarda ninguna respuesta.
{
  "message": "respuestas incompletas",
  "errors": [
    {
      "questionId": 5,
      "value": null // no puede ser null
    },
    {
      // falto el id de la pregunta
      "value": 3
    }
  ]
}
```

# Ruta para los Admin

## Envio de archivos DBF para el registro de nuevos alumnos, profesores, materia

### Se crea en automatico los cursos y encuestas de los alumnos

- Method: `POST`
- Endpoint: `http://localhost:3000/api/v1/admin/upload`

### Se deben de enviar los 5 archivos DBF

- DALUMN.DBF
- DGRUPO.DBF
- DLISTA.DBF
- DMATER.DBF
- DPERSO.DBF

## Routa para obtener las estadisticas de las encuestas realizadas y no realizadas

1. ### Responde el numero de alumnos que ya realizaron su encuesta `R`
2. ### Responde el número de alumnos que no han realizado su encuesta `NA`
3. ### Responde el total de alumnos `Total`

- Method: `GET`
- Endpoint: `http://localhost:3000/api/v1/admin/statistics`
- Response:

```json
{
  "statistics": "R = 0.  NA = 1060,  Total = 1060"
}
```

## Routa para obtener el periodo mas actual

1. Responde el periodo mas actual y su estado

- Method: `GET`
- Endpoint: `http://localhost:3000/api/v1/admin/period`
- Response:

```json
{
  "period": 3223,
  "status": 0
}
```

## Routa para cambiar el estado del periodo

1. Responde un mensaje de que todo a salido correcto

- Method: `PATCH`
- Endpoint: `http://localhost:3000/api/v1/admin/period/:period/:newEstatus`
- Example: `http://localhost:3000/api/v1/admin/period/3231/1`
- Response:

```json
{
  "messge": "Estatus del periodo actualizado"
}
```

## Routa para registrar un nuevo periodo

1. Responde un mensaje de que todo a salido correcto

- Method: `POST`
- Endpoint: `http://localhost:3000/api/v1/admin/period/:period`
- Example: `http://localhost:3000/api/v1/admin/period/3231`
- Response:

```json
{
  "message": "Periodo registrado"
}
```
