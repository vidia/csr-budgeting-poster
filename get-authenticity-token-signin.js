var request = require("request");
var cheerio = require('cheerio');

function getAuthTokenForSignin(onAuthToken) {
  var options = { method: 'GET',
    url: 'https://expense-report-sugato.herokuapp.com/users/sign_in',
    headers: 
    { 
      'accept-language': 'en-US,en;q=0.8',
      'accept-encoding': 'gzip, deflate, br',
      dnt: '1',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
      'upgrade-insecure-requests': '1' 
    }    
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let $ = cheerio.load(body);
    authenticity_token = $('#new_user > input[type="hidden"]:nth-child(2)').attr("value");
    if(authenticity_token) {
      console.log("::: Authenticity token for signin gathered ... OK"); 
      return onAuthToken(response.headers["set-cookie"][0], authenticity_token); 
    } else {
      console.log("::: ERR: Authenticity token for signin not gathered... ABORT"); 
    }
  });
}

module.exports = getAuthTokenForSignin; 
