var request = require("request");

function loginWithAuth(email, password, cookie, authtoken, onLogin) {
  var options = { method: 'POST',
    url: 'https://expense-report-sugato.herokuapp.com/users/sign_in',
    headers: 
    { 'cache-control': 'no-cache',
      'accept-language': 'en-US,en;q=0.8',
      'accept-encoding': 'gzip, deflate, br',
      referer: 'https://expense-report-sugato.herokuapp.com/users/sign_in',
      dnt: '1',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
      'upgrade-insecure-requests': '1',
      origin: 'https://expense-report-sugato.herokuapp.com', 
      "cookie": cookie
    },
    form: {
      authenticity_token: authtoken, 
      commit: "Log in", 
      user: {
        email: email, 
        password: password, 
        remember_me: 1
      }
    } 
  };

  request.post(options, function (error, response, body) {
    if (error) throw new Error(error);
    
    if(response.statusCode >= 200 && response.statusCode < 400) {
      console.log("::: Login was successful ... OK"); 
      return onLogin(response.headers["set-cookie"]);
    } else {
      console.log("::: ERR: Login was not successful ... ABORT");       
    }
  });
}

module.exports = loginWithAuth