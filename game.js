//game vars
var $wallet = 0;

var $faucet = 0.00000001;
var _level = 0;

//page load and close functions
window.onload = function start() {

  load();

};

window.onbeforeunload = closingCode;
function closingCode() {

  save();

  return null;

}

//save and load functions
function save() {

  localStorage.setItem("$wallet", $wallet);

}

function load() {

  $wallet = localStorage.getItem("$wallet");
  $wallet = parseFloat($wallet);
  updateWallet();

}


//game clock (1000 ms)
setInterval(function update() {

  updateWallet();
  save();

}, 1000);


//utility functions
function updateWallet() {

  document.getElementById("wallet").value = $wallet.toFixed(8);

}


//game functions
function claim() {

  $wallet += $faucet;
  updateWallet();

}

function faucetUpgrade() {

  _level++;

}
