# Eat Out
## Demo
For demo you can download [APK](https://drive.google.com/file/d/1OMxeuzLrB6i1Ou0yUYUVKoyJfaKk63IE/view?usp=sharing) 

## Preview
https://github.com/devilGhostman/ReactNative-PlayMe/assets/82955240/0c767c22-7996-445e-b2e0-cb9fe84e4047


## Getting started
### Prerequisites
**Node version 14.x**

**Android Emulator**

### Cloning the repository

```shell
https://github.com/devilGhostman/Eat-Out.git
```

### Install packages

```shell
cd foodAppBackend/
npm install
cd ..
cd foodApp/
npm install
```

### Setup .env file in backend
rename .env-example to .env
```js
MONGODB_URL=
PORT_NO=5000
JWT_SECRET='SECRET'
```
### Setup .env file in app
rename .env-example to .env
```js
API_BASE_URL=
```
### Run backend
```shell
npm start
```
### Run app
```shell
npx react-native start
```
**It will start Metro bundler then press a to run app on android**

## Available commands

Running commands with npm or npx `npm [command]` and `npx [command]` 

| command         | description                                        |
| :-------------- | :------------------------------------------------- |
| `i` or `install`| Install all the dev dependency to run app          |
| `react-native start`|Starts a development instance of the app with Metro Bundler  |
