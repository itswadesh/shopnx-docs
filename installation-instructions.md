---
title: Installation Instructions
date: 2019-10-12 06:40:12
---

# Installation Instructions
::: warning COMPATIBILITY NOTE
ShopNx v8 requires Node.js 11.x
:::

## Softwares Required
Download and install the following softwares
- [NodeJS (Web Server)](https://nodejs.org/en/)
- [MongoDB (Database)](https://www.mongodb.com/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Python 2.7](https://www.python.org/downloads/release/python-2715/)

OR through terminal (Need [chocolatey](https://chocolatey.org/) for windows)
``` bash
# For Windows
choco install nodejs mongodb yarn python2
# OR for linux
sudo apt-get install nodejs mongodb yarn python2
```

## Node Gyp
We also need node-gyp installed. Please follow the steps to install it
[https://github.com/nodejs/node-gyp#installation](https://github.com/nodejs/node-gyp#installation)

## Installation
Download and unzip the file from codecanyon and navigate inside the directory

``` bash
cd shopnx
```
### Start database
Start mongodb in a separate shell
Run the follwoing commands from an elevated termnial/command prompt. In Windows operating system we can start it by opening the following file.
  ``` bash
  C:/Program Files/MongoDB/Server/3.2/bin/mongod.exe
  ```  

### Run the following 2 commands
  This will install the required node dependencies and start the Server at [http://localhost:4200](http://localhost:4200) 

  ``` bash
cd D:\shopnx
yarn
yarn dev
  ```  
**That's it !!!**

Now open [http://localhost:4200](http://localhost:4200) 


## Building files for production server

<img src="./img/deploy.png" alt="deployment"/>

The follwing command will generate both client and server files inside dist directory which can be directly copied to production server
  ``` bash
yarn prod
  ```  
Now copy the files inside **.nuxt** and **dist** directory to the production server (For both store front and store back office)

### Start the server
Login to cloud shell and run the following command
  ``` bash
yarn start
  ```  

### Deploy to heroku
Login to heroku from command prompt/terminal
  ``` bash
yarn live
  ```  
