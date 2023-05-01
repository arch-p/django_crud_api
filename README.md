# About The Project

This is a simple website where you can make GET, POST, PUT and DELETE requests to manage your notes.

The front end is built with React on top of Next.js. Typescript and tailwind are used.

The server that will handle the requests is built on top of Django with the Django Rest Framework and django cors headers are used to allow http requests in the development environment.

## Prerequisites

To run the project correctly in your environment of development you requires have installed python v3.11.3 or highest and and node v12.22 or highest.

## Instalation

### Run the backend

Is recommended run the backend before of the frontend for evit problems for cors refused connection in your http requests.

**You need are located in the directory _server_ before run any command.**

* Create a virtual environment 
```sh
python3 -m venv env
```
* Init your virtual environment (Linux or MacOS)
```sh
source env/bin/activate
```
* I recommend you upgrade pip in this point
```sh
pip install --upgrade pip 
```
* Install dependences in your environment
```sh
pip install -r requirements.txt
```
* Run server
```sh
python3 manage.py runserver
```

You can go to https://localhost:8000 to verify the correct run of backend service. 

### Run the frontend

**You need are located in the _root_ directory before run any command.**

* Install dependences
```sh
npm install
```
* Run the local server
```sh
npm run dev
```

You can go to https://localhost:3000 to verify the correct run of backend service. 




