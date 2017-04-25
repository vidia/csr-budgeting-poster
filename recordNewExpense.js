var request = require("request");

function recordNewExpense(auth, cookie, amount, category, year, month, day, userid, callback) {

    var options = { method: 'POST',
    url: 'https://expense-report-sugato.herokuapp.com/expenses',
    followRedirect: false, 
    headers: 
    { 'postman-token': '0e968667-4987-42f6-fce0-1804a907822b',
        'cache-control': 'no-cache',
        cookie: cookie,
        'accept-language': 'en-US,en;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        referer: 'https://expense-report-sugato.herokuapp.com/expenses/new',
        dnt: '1',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        'upgrade-insecure-requests': '1',
        origin: 'https://expense-report-sugato.herokuapp.com' },
    form: {
        authenticity_token: auth, 
        commit: "Create Expense", 
        expense: {
            amount: amount, 
            category: category, 
            "date(1i)": year, 
            "date(2i)": month, 
            "date(3i)": day, 
            user_id: userid
        }
    } };

    request.post(options, function (error, response, body) {
        if (error) return callback(error, "An error occured.");;
        console.log("::: Attempted to post a new expense"); 
        if(response.statusCode == 302) {
            console.log("::: Posted an expense correctly, being redirected to home...");
            if (callback) return callback(false, "Successfully posted the expense.");
        } else {
            console.log("::: Expense failed to POST properly.")
            if(callback) return callback(true, "An error occured.");
        }
    });
}

module.exports = recordNewExpense; 
