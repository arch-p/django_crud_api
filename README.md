## About The Project
.

### Prerequisites

This project is divided in 2 parts (front-end and back-end). To run the project in your environment of development you requires have installed python v3.11.3 or highest and and node v12.22 or highest.


### Instalation

## Run the backend

Is recommended run the backend before of the frontend for evit problems for cors refused connection in your http requests.

You need are located in the directory _server_ before run any command.

* Create a virtual environment 
 ```sh
   python3 -m venv env
  ```
* Init your virtual environment (Linux or MacOS)
  ```sh
   source env/bin/activate
  ```
* Install dependences in your environment
  ```sh
   pip install --upgrade pip 
  ```
  And then 
    ```sh
    pip install -r requirements.txt
    ```
* Run server
 ```sh
    python3 manage.py runserver
    ```




