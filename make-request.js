var request = require("request");

var options = { method: 'POST',
  url: 'https://expense-report-sugato.herokuapp.com/expenses',
  headers: 
   { 'cache-control': 'no-cache',
     cookie: '_expense-tracker_session=eHMyZktWOVF6dXFxY0pRZXhWVkVRYTdTU0lYOUNqNUE2Q0RlVXJlc05KcjN0d1RIa0t4K2hQNm1FaURVdlRmRUZsMHAvVVYvbFEwVFdoS09IWWR1dHpXaWVsbWhsamtjUFhUUXc3QTRLUDZCeFBadUZ3VFpjMmo0amR5UGNxTjcxNFI2YlN1YWtycHcveW5vZjJOL2dBY04vYlN4d1BnNWorUVFiZCtBb0YvSDBacnJLRzRzN2l3VTdrV0VxS2FPMVlrQUdHaHFmNjIwLzJiUWxxMHJOdEtTR2s5ZGdXeHI0WXV4UG1sdUNrST0tLTNzSzJqT0EwTEZ4N2tHNyt6em8vdXc9PQ%3D%3D--d3089cd37c36e0ba0e5f4cf37ea9c26ae340d1aa',
     'accept-language': 'en-US,en;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     referer: 'https://expense-report-sugato.herokuapp.com/expenses/new',
     dnt: '1',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     'content-type': 'application/x-www-form-urlencoded',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
     'upgrade-insecure-requests': '1',
     'x-devtools-emulate-network-conditions-client-id': 'ab3aa01a-ae7f-4b42-bd72-bef6b41a5fe7',
     origin: 'https://expense-report-sugato.herokuapp.com' },
  form: {} };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
