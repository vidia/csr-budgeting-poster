var request = require("request");
var cheerio = require('cheerio');

function getExpenseForm(cookie, onGetForm) {
    var options = { method: 'GET',
    url: 'https://expense-report-sugato.herokuapp.com/expenses/new',
    headers: 
    { 'cache-control': 'no-cache',
        cookie: cookie, 
        'accept-language': 'en-US,en;q=0.8',
        'accept-encoding': 'gzip, deflate, sdch, br',
        referer: 'https://expense-report-sugato.herokuapp.com/',
        dnt: '1',
        'x-xhr-referer': 'https://expense-report-sugato.herokuapp.com/',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        accept: 'text/html, application/xhtml+xml, application/xml' 
        } 
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        //console.log(response.headers);
        //console.log(body);

        let $ = cheerio.load(body);
        authenticity_token = $('#new_expense > input[type="hidden"]:nth-child(2)').attr("value");

        //console.log("auth token: "+authenticity_token);

        userid = $('#expense_user_id').attr("value");
        //console.log("User ID: "+userid);

        cookie = response.headers["set-cookie"]; 
        //console.log("cookies: "+cookie);

        if(cookie && userid && authenticity_token) {
            console.log("::: Expense form was gathered and parsed successfully ... OK"); 
            onGetForm(authenticity_token, userid, cookie);
        } else {
            console.log("::: Err: Expense form gathering failed ... ABORT");             
        }
    });
}

module.exports = getExpenseForm; 