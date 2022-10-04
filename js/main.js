// Elements
var subscribeModeBtn = document.getElementById("subscribe-mode");
var purchaseModeBtn = document.getElementById("purchase-mode");
var disclaimerBox = document.getElementById("disclaimer");
var checkboxBtn = document.getElementById("checkbox");
var ctaBtn = document.getElementById("cta-btn");
var onePackageBtn = document.getElementById("one-package");
var threePackageBtn = document.getElementById("three-package");
var sixPackageBtn = document.getElementById("six-package");
var priceMain = document.getElementById("price-main");
var priceRetail = document.getElementById("price-retail");
var priceSavings = document.getElementById("price-savings");

// Package prices
var prices = {
  onePackagePriceMain: 39.95,
  onePackagePriceRetail: 58.00,
  onePackagePriceSubscribe: 35.95,
  threePackagePriceMain: 102.00,
  threePackagePriceRetail: 174.00,
  threePackagePriceSubscribe: 91.80,
  sixPackagePriceMain: 186.00,
  sixPackagePriceRetail: 348.00,
  sixPackagePriceSubscribe: 167.40
};

// Default prices
priceMain.value = "$" + Math.round(prices.threePackagePriceMain);
priceRetail.value = "$" + Math.round(prices.threePackagePriceRetail);
priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - Math.round(prices.threePackagePriceMain));

// Input width from content
function inputWidth() {
  priceMain.addEventListener("input", resizeInput);
  priceRetail.addEventListener("input", resizeInput);
  priceSavings.addEventListener("input", resizeInput);
  resizeInput.call(priceMain);
  resizeInput.call(priceRetail);
  resizeInput.call(priceSavings);
  
  function resizeInput() {
    this.style.width = this.value.length + 0.5 + "ch";
  }
}

inputWidth();

// Purchase modes
function purchaseMode() {
  subscribeModeBtn.classList.remove("active");
  purchaseModeBtn.classList.add("active");
  disclaimerBox.style.display = "none";
  checkboxBtn.checked = false;
  ctaBtn.style.pointerEvents ="unset";
  ctaBtn.style.backgroundColor ="#7fb457";

  if (onePackageBtn.classList.contains("active") && purchaseModeBtn.classList.contains("active")) {
    priceMain.value = "$" + Math.round(prices.onePackagePriceMain);
    priceSavings.value = "$" + (Math.round(prices.onePackagePriceRetail) - Math.round(prices.onePackagePriceMain));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/link-1', '_blank');
    }
  } else if (threePackageBtn.classList.contains("active") && purchaseModeBtn.classList.contains("active")) {
    priceMain.value = "$" + Math.round(prices.threePackagePriceMain);
    priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - Math.round(prices.threePackagePriceMain));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/link-3', '_blank');
    }
  } else if (sixPackageBtn.classList.contains("active") && purchaseModeBtn.classList.contains("active")) {
    priceMain.value = "$" + Math.round(prices.sixPackagePriceMain);
    priceSavings.value = "$" + (Math.round(prices.sixPackagePriceRetail) - Math.round(prices.sixPackagePriceMain));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/link-6', '_blank');
    }
  }

  inputWidth();
}

function subscribeMode() {
  purchaseModeBtn.classList.remove("active");
  subscribeModeBtn.classList.add("active");
  disclaimerBox.style.display = "block";
  ctaBtn.style.pointerEvents ="none";
  ctaBtn.style.backgroundColor ="#9a9b9c";

  if (onePackageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    priceMain.value = "$" + Math.round(prices.onePackagePriceSubscribe) + "/month";
    priceSavings.value = "$" + (Math.round(prices.onePackagePriceRetail) - Math.round(prices.onePackagePriceSubscribe));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/subscribe-link-1', '_blank');
    }
  } else if (threePackageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    priceMain.value = "$" + Math.round(prices.threePackagePriceSubscribe) + "/month";
    priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - Math.round(prices.threePackagePriceSubscribe));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/subscribe-link-3', '_blank');
    }
  } else if (sixPackageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    priceMain.value = "$" + Math.round(prices.sixPackagePriceSubscribe) + "/month";
    priceSavings.value = "$" + (Math.round(prices.sixPackagePriceRetail) - Math.round(prices.sixPackagePriceSubscribe));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/subscribe-link-6', '_blank');
    }
  }

  inputWidth();
}

// Checkbox validation
function validate(){
  if (checkboxBtn.checked){
    ctaBtn.style.pointerEvents ="unset";
    ctaBtn.style.backgroundColor ="#7fb457";
  } else {
    ctaBtn.style.pointerEvents ="none";
    ctaBtn.style.backgroundColor ="#9a9b9c";
  }
}

ctaBtn.onclick = function() {
  window.open('https://www.tracker.com/link-3', '_blank');
}

// Package options
function onePackage() {
  threePackageBtn.classList.remove("active");
  sixPackageBtn.classList.remove("active");
  onePackageBtn.classList.add("active");

  purchaseModeBtn.classList.add("active");
  subscribeModeBtn.classList.remove("active");
  disclaimerBox.style.display = "none";
  ctaBtn.style.pointerEvents ="unset";
  ctaBtn.style.backgroundColor ="#7fb457";
  checkboxBtn.checked = false;

  priceMain.value = "$" + Math.round(prices.onePackagePriceMain);
  priceRetail.value = "$" + Math.round(prices.onePackagePriceRetail);
  priceSavings.value = "$" + (Math.round(prices.onePackagePriceRetail) - Math.round(prices.onePackagePriceMain));

  ctaBtn.onclick = function() {
    window.open('https://www.tracker.com/link-1', '_blank');
  }

  inputWidth();
}

function threePackage() {
  onePackageBtn.classList.remove("active");
  sixPackageBtn.classList.remove("active");
  threePackageBtn.classList.add("active");

  purchaseModeBtn.classList.add("active");
  subscribeModeBtn.classList.remove("active");
  disclaimerBox.style.display = "none";
  ctaBtn.style.pointerEvents ="unset";
  ctaBtn.style.backgroundColor ="#7fb457";
  checkboxBtn.checked = false;

  priceMain.value = "$" + Math.round(prices.threePackagePriceMain);
  priceRetail.value = "$" + Math.round(prices.threePackagePriceRetail);
  priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - Math.round(prices.threePackagePriceMain));

  ctaBtn.onclick = function() {
    window.open('https://www.tracker.com/link-3', '_blank');
  }

  inputWidth();
}

function sixPackage() {
  onePackageBtn.classList.remove("active");
  threePackageBtn.classList.remove("active");
  sixPackageBtn.classList.add("active");

  purchaseModeBtn.classList.add("active");
  subscribeModeBtn.classList.remove("active");
  disclaimerBox.style.display = "none";
  ctaBtn.style.pointerEvents ="unset";
  ctaBtn.style.backgroundColor ="#7fb457";
  checkboxBtn.checked = false;

  priceMain.value = "$" + Math.round(prices.sixPackagePriceMain);
  priceRetail.value = "$" + Math.round(prices.sixPackagePriceRetail);
  priceSavings.value = "$" + (Math.round(prices.sixPackagePriceRetail) - Math.round(prices.sixPackagePriceMain));

  ctaBtn.onclick = function() {
    window.open('https://www.tracker.com/link-6', '_blank');
  }

  inputWidth();
}