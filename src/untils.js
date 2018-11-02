var fs = require('fs');
var path = require('path');

var databaseDir = path.resolve(__dirname + '/../configs/');

function getResponseMap() {
    var data = fs.readFileSync(databaseDir + '/respond.json', 'utf8');
    try {
        var responseMap = JSON.parse(data);
        return responseMap;
    } catch (err) {
        console.log(err);
    }
}

function getQuestionArr() {
    var data = fs.readFileSync(databaseDir + '/question.json', 'utf8');
    try {
        var json = JSON.parse(data);
        return json;
    } catch (err) {
        console.log(err);
    }
}

function getUsersMap() {
    var data = fs.readFileSync(databaseDir + '/users.json', 'utf8');
    try {
        var usersMap = JSON.parse(data);
        return usersMap;
    } catch (err) {
        console.log(err);
    }
}

function setUser(id){
    var data = fs.readFileSync(databaseDir + '/users.json', 'utf8');
    try {
        var usersMap = JSON.parse(data);
        var data = usersMap.push(id);
        fs.writeFileSync(databaseDir + '/users.json', JSON.stringify(data), 'utf8');
    } catch (err) {
        console.log(err);
    }
}

function firstTime(){
    return 'นี้เป็นระบบตอบโต้อัตโนมัติจากทางร้านค้า \n' +
        '** ทางเราจะเก็บข้อความในการสนทนาของลูกค้าเพื่อใช้ในการพัฒนาระบบ **\n' +
        'ตัวอย่างการใช้งาน เช่น หากต้องการติดต่อข้อมูลผู้ขายให้ผิดคำว่า “ ติดต่องาน ”\n\n' +
        'คำสั่ง \n';
}

module.exports.getResponseMap = getResponseMap;
module.exports.getQuestionArr = getQuestionArr;
module.exports.getUsersMap = getUsersMap;
module.exports.setUser = setUser;
module.exports.firstTime = firstTime;