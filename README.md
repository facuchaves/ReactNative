
# ReactNative App

[![npm version](https://badge.fury.io/js/react-native-localize.svg)](https://www.npmjs.org/package/react-native-localize)
[![Platform - Android](https://img.shields.io/badge/platform-Android-3ddc84.svg?style=flat&logo=android)](https://www.android.com)

<img width="400" height="auto" center src="https://github.com/facuchaves/challengeReactNative/blob/master/images/AppDemo.gif" />

Contenido:

- [Intro](#intro)
- [Versiones](#versiones)
- [Librerias y Frameworks](#librerias-y-frameworks)
- [Correr Proyecto](#correr-proyecto)
- [Desarrollo](#desarrollo)
- [Tips](#tips)


## Intro
Proyecto realizado para aprender los fundamentos de React Native, el mismo consume un backend que desarrolle en Java 13. Tener en cuenta que al momento de querer ejecutar el proyecto en su equipo va a tener que tener levantado previamente el correspondiente [Backend](https://github.com/csulak/challenge) ya que es una api que expone los endpoints que consume este proyecto de React


## Versiones

Las versiones que se muestras en el cuadro son las que use para crear y correr el proyecto. Para poder correr el programa de forma local son todos necesarios.

|   Watchman  |  Node  |  NPM  | Yarn | ADB | Java |
|----------|--------|--------|--------|--------|--------|
| 4.9.0 | 12.16.3 | 6.14.5 | 1.22.4 | 29.0.6 | 11 |


## Librerias y Frameworks
Tener en cuenta que para el desarrollo del proyecto se instalaron las siguientes librerias y frameworks

npx react-native init nombreApp

adentro del proyecto correr

```bash
npm i redux
npm i react-redux
npm i redux-devtools
npm i redux-thunk
npm i axios
npm install react-router-dom
npm install react-hook-form
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm i --save react-native-elements
npm i --save react-native-vector-icons
npm install @react-navigation/stack
npm install @react-navigation/drawer

npx react-native link
```

## Correr Proyecto

Se debe correr en la raiz del proyecto lo siguiete

```bash
$ yarn
$ yarn start
```

En una nueva consola
```bash
$ yarn android
```

## Desarrollo
Proyecto desarrollado en React Native

Utilizacion de: Components, Hooks, router, userState, useEffect, useSelector, store, Ducks, redux, Navigation

Puertos usados: 8081 (Proyecto)


## Tips

-si al querer pegarle a los endpoints del proyecto challenge levantado de forma local no funciona
correr en la consola en la raiz del proyecto

```bash
$ adb reverse tcp:8080 tcp:8080
```

(seria el puerto en el que tengo levantado el proyecto backend)

-Se recomienda para poder visualizar en el browser(chrome) todo lo relacionado con Components y Redux las siguientes 2 extensiones: React Developer Tools y Redux DevTools

-Si al levantar el proyecto te dice que no puede leer alguna propery de undefined cerrar todas las consolas y volver a ejecutar los comandos de [Correr Proyecto](#correr-proyecto)

-Cuando te falla al querer subir la app por algo de metro correr en la raiz del proyecto
watchman watch-del-all && rm -rf node_modules && rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-map-* && yarn
