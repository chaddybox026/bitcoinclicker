//game variables
var wallet;

var faucet;
var faucetLevel;
var faucetCost;

//page load function
window.onload = function start() {

    load();

};

//page close function
window.onbeforeunload = function closingCode() {

  save();

  return null;

}

//utility functions
function updateValue(id) {

  document.getElementById(id).value = this[id].toFixed(8);;

}

function init() {

  wallet = 0;

  faucet = 0.00000001;
  faucetLevel = 1;
  faucetCost = 0.00000050;

  updateValue("faucetCost");

}

function save() {

  localStorage.setItem("wallet", wallet);
  localStorage.setItem("faucet", faucet);
  localStorage.setItem("faucetLevel", faucetLevel);
  localStorage.setItem("faucetCost", faucetCost);

}

function load() {

  Object.keys(localStorage).forEach(function parse(key) {

    window[key] = parseFloat(localStorage.getItem(key));

  });

}

function reset() {

  Object.keys(localStorage).forEach(function parse(key) {

    localStorage.removeItem(key);

  });

  init();

}

//game clock (1000 ms)
setInterval(function update() {

  updateValue("wallet");
  save();

}, 1000);


//game functions
function claim() {

  wallet += faucet;
  updateValue("wallet");

}

function faucetUpgrade() {

  if(((wallet * 1e8) * 1e-8) >= faucetCost) {

    faucet *= 2;
    faucetLevel++;
    wallet -= faucetCost;
    faucetCost *= Math.exp(1);
    updateValue("faucetCost");
    updateValue("wallet");

  }

}
