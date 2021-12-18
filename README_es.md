# 📊 MC > Discord Updater

*[In English](README.md)*

---

## 🚀 Introducción

Este es un bot para Discord que actualiza un canal o la actividad del bot con la cantidad de jugadores dentro de un
servidor de MC. Por el momento, el bot soporta actualización de nombre de canal, descripción de canal y actividad del bot.

---

## 🚧 Advertencia

Los límites de la API de Discord para renombrar canales y cambiar descripción de canales parecen ser altos actualmente
(nadie parece saber cuáles son en realidad, pero alrededor de 2 actualizaciones cada 10 minutos parece ser el consensus
general). Debido a esto, no intentes poner timeouts más cortos que esto o puede que el bot deje de funcionar.

---

## ⚙ Configuración

Toda la configuración es hecha en el archivo de `config.json`.
Las opciones que tengan el tag de **Bool** (Boolean), significan que solo puede ir `true` (Activado) o `false` (Desactivado)
en ellas. Cualquier otro valor va a causar un error.

* `token` - El token del bot en Discord.
* `server` - Opciones de conexión al servidor.
  * `ip` - La IP del servidor (puede ser un dominio).
  * `port` - El puerto del servidor.
* `motd_pfp` - **(Bool)** Si es que el bot va a cambiar su foto de acuerdo al ícono del servidor (Cada 6 horas).
* `defPresence` - Opciones de la Actividad del bot por defecto.
  * `status` - El status del bot. [Valores Posibles.](https://discord.js.org/#/docs/main/stable/typedef/PresenceStatus).
  * `activity` - La Actividad del bot (Esto solo se usa si `updates - presence` está desactivado)
    * `type` - El tipo de actividad del bot. [Valores Posibles.](https://discord.js.org/#/docs/main/stable/typedef/ActivityType)
    * `name` - El texto a usar como Actividad del bot.
* `updates` - Opciones principales del bot.
  * `presence` - Opciones para actualizar la Actividad del bot.
    * `enabled` - **(Bool)** Si es que la actualización de la Actividad del bot está activada o no.
    * `type` - El tipo de Actividad del bot. [Valores Posibles.](https://discord.js.org/#/docs/main/stable/typedef/ActivityType)
    * `format` - El texto a usar al actualizar. `%p%` es un placeholder que se reemplaza con la cantidad de jugadores.
    * `offline` - El texto a usar si el servidor está fuera de línea.
    * `timeout` - El timeout (en segundos) entre cada actualización.
  * `channel_name` - Opciones para actualizar el nombre de un canal.
    * `enabled` - **(Bool)** Si es que la actualización del nombre de un canal está activada o no.
    * `channel_id` - La ID (no nombre) del canal a actualizar.
    * `format` - El texto a usar al actualizar. `%p%` es un placeholder que se reemplaza con la cantidad de jugadores.
    * `offline` - El texto a usar si el servidor está fuera de línea.
    * `timeout` - El timeout (en segundos) entre cada actualización.
  * `channel_description` - Opciones para actualizar la descripción de un canal.
    * `enabled` - **(Bool)** Si es que la actualización de la descripción de un canal está activada o no.
    * `channel_id` - La ID (no nombre) del canal a actualizar.
    * `format` - El texto a usar al actualizar. `%p%` es un placeholder que se reemplaza con la cantidad de jugadores.
    * `offline` - El texto a usar si el servidor está fuera de línea.
    * `timeout` - El timeout (en segundos) entre cada actualización.

---

## 🏃‍♂️ Configurando el Bot

El bot usa Discord.js v13, así que necesitarás **Node.js 16.6.0 o más alto**.

1. Cambia el `exampleconfig.json` de acuerdo a tus necesidades.
2. Renombra `exampleconfig.json` a `config.json`.
3. En una ventana de comandos abierta en la misma carpeta que el bot, usa `npm i` para instalar las dependencias.
4. En la misma ventana de comandos usa `node .`
5. Disfruta!

---

## 💻 Desarrollo

El bot usa la librería de [minecraft-server-ping](https://www.npmjs.com/package/minecraft-server-ping) para obtener
información del servidor directamente haciéndole ping. Si crees tener una mejor implementación, siéntete libre de dejar una PR.

---
