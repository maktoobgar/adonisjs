# Example Project

## Requirements

<p align="left">
    <a href="https://nodejs.org/en/">
        <img alt="mysql" src="https://img.shields.io/github/v/release/nodejs/node?label=nodejs&logo=javascript">
    </a>
    <a href="https://www.npmjs.com/package/npm">
        <img alt="Django" src="https://img.shields.io/npm/v/npm?label=npm&logo=npm">
    </a>
    <a href="https://www.mysql.com/downloads/">
        <img alt="mysql" src="https://img.shields.io/github/v/tag/mysql/mysql-server?label=mysql&logo=mysql&logoColor=white">
    </a>
    <a href="https://www.npmjs.com/package/adonis">
        <img alt="Python" src="https://img.shields.io/npm/v/adonis?label=adonis&logo=npm">
    </a>
</p>

## About

This repository is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

Right now, at this exact moment, this repository is just an app that uses nodejs and adonis framework api.\
That's it.\
yeaaaayyyyy...

## Setup

Use my preconfigured script in [`commands`](commands) folder.\
All you have to do is running that script and it will start the process.\
⚠️ Note: That script just works on __Linux__.\
So just run:
```js
source ./commands/install
```
And don't forget to run the script just from inside the main project directory.\
⚠️ Note: __Do not__ run the script like `./commands/install` cause it is not gonna work.\
After running it, wait till it asks you to give it some data that it wants.\
Answer its every question and after that, if you do anything right and there was no problem, run migrations:

```js
adonis migration:run
```
And now run the server.
```js
adonis serve
```

## At the end
The repository is not compeleted? Ofcourse it is not, but it will...\
It is an example project for adonisjs? Maybe yes, maybe not, it depends on what I add to the repository.\
Best wishes. 😃