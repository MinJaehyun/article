var express = require('express');
var router = express.Router();
const todolist = require('../data/todolist');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('toDoList respond with a resource');
    console.log(todolist);
    res.json(todolist);
});

module.exports = router;

/** 
 * 1. http://127.0.0.1:3000/todo/ URL 로 접근 시
 * 2. server 에서 가지고 있는 데이터를 보낸다
 * 3. 데이터 내용은? json 형태?
 * 4. 
*/