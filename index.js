// console에서 node index.js

// NPMjs: Node Package Manager(like pip)
// express: javascript server framwork

// npm에서 정한 방법으로 프로젝트 시작 - create package.json
// npm init

// package.json이 있는 폴더에서
// npm install express
// - package.json에 dependencies 항목 생성
// dependencies가 있는 상태에서 npm install 하면 package 설치

// gitignore에 package-lock.json 추가(security issue)


/*
package.json에

  "script": {
    "start": "node index.js" // start 옵션을 줄 때마가 node index.js 실행
  }
추가

npm start만 하면 index.js 실행

*/

// babel: transpose new javascript to old javascript
// npm install @babel/node
// babel은 stage가 있음(preset)
// npm install @babel/core 
// npm install @babel/preset-env
// .babelrc 파일 생성
// 실행할 때 babel-node index.js
// package.json에도 babel-node index.js


// nodemon: 코드를 저장할 때마다 서버를 새로 실행
// npm install nodemon -D
// -D는 실행하는 데 필요한 게 아니라 개발자에게 필요한 devDependencies
// package.json>scripts>"start": "nodemon --exec babel-node index.js --delay 2"
//--delay는 nodemon 실행 전 babel에게 코드 변환을 위한 시간을 위한 것


// middleware: 서버와 사용자 사이. express에서의 모든 함수는 middleware가 될 수 있다.


// morgan: middleware for logging.
// npm install morgan

// helmet: middleware for security.
// npm install helmet


// body-parser: middleware for getting information from body.

// cookie-parser: middleware for saving user data to cookie to be able to handle session.



// import express
// const express = require('express'); // old style
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


// create express app
const app = express();

const PORT = 4000;


const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

/*
function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}
*/
// request object, response object
const handleHome = (req, res) => res.send('Hello from home');

// arrow function in ES6
const handleProfile = (req, res) => res.send("You are on my profile"); // 마지막 함수라서 next 없음
/*
function handleProfile(req, res){
    res.send("You are on my profile");
}
*/

const betweenHome = (req, res, next) => { // next: key
    console.log('Between');
    next(); // call next middleware
};

//app.use(betweenHome); // use global middleware to every route that behind this.

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("dev"));


const middleware = (req, res, next) => {
    res.send('not happening'); // middleware can close connection.
}

app.get("/",betweenHome, handleHome); // get(beginning, middleware, start)

app.get("/profile", handleProfile);

app.listen(4000, handleListening); // listen 4000 port


// GET POST