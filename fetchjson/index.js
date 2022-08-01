"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/17';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var userId = todo.userId;
    var title = todo.title;
    var complete = todo.completed;
    console.log("the id is ".concat(id, " the userID is ").concat(userId, " the title is ").concat(title, " the complete is ").concat(complete));
});
