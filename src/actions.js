var db = require('./untils');

var responseMap = db.getResponseMap();
var questionArr = db.getQuestionArr();
var getUsersMap = db.getUsersMap();
var titleText = db.firstTime();

function getQuestionList(id){
    let res = titleText;
    getUsersMap.forEach((sender) => {
        if (sender === id) res = 'คำสั่ง \n';
    });

    questionArr.forEach((question, index) => {
        res += '\n' + (index + 1).toString() + '.' + question;
    });
    return res;
}

function getRes(req){
    var resKey = null;
    var keys = Object.keys(responseMap);
    for(var i=0 ; i<keys.length ; i++){
        var key = keys[i];
        var regex = new RegExp(key);
        if(req.match(regex)){
            resKey = key;
            break;
        }
    }
    if(resKey){
        return responseMap[resKey];
    } else {
        return null;
    }
}

function actions(req, id, sendMessage){
    var response = getRes(req);
    if(!response) response = getQuestionList(id);

    sendMessage(response, id).then(() => {
        console.log('respond to \"' + req + '\" success');
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}


module.exports = actions;
