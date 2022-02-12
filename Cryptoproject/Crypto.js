var btc = document.getElementById("bitcoin");
var btc = document.getElementById("ethereum");
var btc = document.getElementById("dogecoin");
//get id

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "Get",
  //get data from api
  headers: {},
};
$.ajax(settings).done(function (response) {
  bitcoin.innerHTML = response.bitcoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
  //update coin prices
});
