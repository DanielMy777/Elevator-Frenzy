# Elevator Frenzy

This elevator system simulator was developed using Javascript under the React.js framework.

## ⚡️ Quick Start

> To start the app using docker-compose

1. Clone the repository (Or download the files).
2. In the terminnal, reach the root directory of this project. 
3. run `docker-compose up`.

> To start the app with node

1. Clone the repository (Or download the files).
2. In the terminal, reach the root folder.
3. Run `npm install`.
4. Run `npm start` and open your browser on `localhost:3000`.

## 👨‍💻 Technical Features
* Parallelism. (multipile batches of code excecuting simultaneously)
* User friendly GUI.
* Containerization.

## 😁 Behavioural Features
* Queueing requests.
* Configuring the number of floors / elevators.
* Waiting timer countdown.

## 📖 Manual!
* At First, you will be presented with a form, enter the number of floors / elevators you want your system to integrate with.
* To call an elevator to your floor, press the 'Call' button near your floor. Your button text will switch to 'Waiting'.
* The system will assign the elevator that will take the shortest amount of time to reach your floor.
* When an elevator arrives at your floor, Your button text will switch to 'Arrived' and then switch back to 'Call' if you want to call again.
* When an elevator is on the move, it will turn red. each floor is ~1.2 seconds of travel time.
* When an elevator arrives at a floor, it will turn green and will stay that way for 2 seconds, after that the elevator will again become available.
* When calling a floor, a timer presenting the remainig waiting time will be presented in the relevant elevator shaft.
* You can call multipile floors at once, just do be surprised if you wait a long time ;).

## 📷 Screenshots
![image](https://user-images.githubusercontent.com/79100490/227968342-916746b1-280c-46e7-a205-b8afb8363da2.png)


## ⭐️ Contributors

* Daniel Malky

> Feel free to add any contribution, it will be blessed.
