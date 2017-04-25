getAuthTokenForSignin = require("./get-authenticity-token-signin");
loginWithAuth = require("./login");
recordNewExpense = require("./recordNewExpense"); 
getExpenseForm = require("./getExpenseForm");

var csv = require("fast-csv");
var async = require("async"); 

function begin() {
    var alldata = []; 
    csv
        .fromPath("register.csv", {headers : true})
        .on("data", function(data){
            console.log(data);
            alldata = alldata.concat(data);  
        })
        .on("end", function(){
            console.log("Completed reading and uploading file.");
            startPosting(alldata); 
        }); 
}

begin(); 

function startPosting(data) {
    async.mapSeries(data, function(dataEntry, callback) {
        doPostForData(dataEntry, callback);
    }, function(err, result) {
        console.log(err); 
        console.log(result); 
    });    
}

function doPostForData(data, callback) {
    getAuthTokenForSignin(function(prelogincookie, token) {
        //console.log("Got the cookie and token"); 
        loginWithAuth("===username===@purdue.edu", "====password====", prelogincookie, token, function(cookie) {
            //console.log("Completed a login attempt.");  
            var datebits = data.Date.split("/");
            console.log(data);
            getExpenseForm(cookie, function(auth, userid, formcookie) {
                //console.log(auth + " ||| " + userid); 
                recordNewExpense(auth, formcookie, data.Outflow.substring(1).replace(",", ""), data.Category, datebits[2], datebits[0], datebits[1], userid, function(err, message) {
                    return callback(err, message); 
                });
            });
        });
    });
}