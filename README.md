# JS TECHNICAL TEST

En este proyecto existe 2 arrays: **launches** y **rockets** los cuales tiene la siguente estructura:

## launches
```js
[
  {
    "flight_number": "number",
    "mission_name": "string",
    "mission_id": [],
    "launch_date_utc": "string",
    "rocket": {
      "rocket_id": "string",
      "rocket_name": "string",
      "rocket_type": "string",
      "second_stage": {
        "block": "number",
        "payloads": [
          {
            "payload_id": "string",
            "nationality": "string",
            "manufacturer": "string",
            "payload_type": "string",
            "payload_mass_kg": "number",
            "payload_mass_lbs": "number",
            "orbit": "string"
          }
        ]
      }
    }
  }
]
```

## rockets
```js
[
  {
    "id": "number",
    "flickr_images": [
      "string"
    ],
    "wikipedia": "string",
    "description": "string",
    "rocket_id": "string",
    "rocket_name": "string",
    "rocket_type": "string"
  }
]
```

Cada registro de los arrays se relacionan con el campo **rocket_id**

El objetivo de este desafio es armar un nuevo array partiendo de la informacion de los arrays **launches** y **rockets** con la sigiente estructura:

## response
```js
[
  {
    "flight_number": "number",
    "mission_name": "string",
    "rocket": {
      "rocket_id": "string",
      "rocket_name": "string",
      "description": "string",
      "images": [
        "string"
      ]
    },
    "payloads": [
      {
        "payload_id": "string",
        "manufacturer": "string",
        "type": "string"
      }
    ]
  }
]
```

Para ello debes modificar la funcion **buildResponse** que se encuentra en **src/index.js** y levantar el server (**npm start**) o si se prefiere usar el comando **npm run test** en la terminal