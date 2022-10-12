// Elements
var subscribeModeBtn = document.getElementById("subscribe-mode");
var purchaseModeBtn = document.getElementById("purchase-mode");
var disclaimerBox = document.getElementById("disclaimer");
var productStamp = document.getElementById("product-stamp");
var checkboxBtn = document.getElementById("checkbox");
var ctaBtn = document.getElementById("cta-btn");
var onePackageBtn = document.getElementById("one-package");
var threePackageBtn = document.getElementById("three-package");
var sixPackageBtn = document.getElementById("six-package");
var productImage = document.getElementById("product-image");
var priceMain = document.getElementById("price-main");
var priceRetail = document.getElementById("price-retail");
var priceSavings = document.getElementById("price-savings");

// Click events
onePackageBtn.addEventListener("click", onePackage);
threePackageBtn.addEventListener("click", threePackage);
sixPackageBtn.addEventListener("click", sixPackage);
purchaseModeBtn.addEventListener("click", purchaseMode);
subscribeModeBtn.addEventListener("click", subscribeMode);

checkboxBtn.addEventListener("click", () => {
  validate(checkboxBtn, ctaBtn);
});

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

// Default product & stamp images
productImage.src = "./img/3pack.png";
productStamp.src = "./img/stamp.png";

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
  ctaBtn.classList.add('cta-enabled');
  ctaBtn.classList.remove('cta-disabled');

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
  ctaBtn.classList.add('cta-disabled');
  ctaBtn.classList.remove('cta-enabled');

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
function validate(x, y){
  if (x.checked){
    y.classList.add('cta-enabled');
    y.classList.remove('cta-disabled');
  } else {
    y.classList.add('cta-disabled');
    y.classList.remove('cta-enabled');
  }
}

ctaBtn.onclick = function() {
  window.open('https://www.tracker.com/link-3', '_blank');
}

// Package options
function onePackage() {
  productImage.src = "./img/1product.png";
  productStamp.src = "./img/stamp.png";
  productStamp.classList.add("display-none")

  threePackageBtn.classList.remove("active");
  sixPackageBtn.classList.remove("active");
  onePackageBtn.classList.add("active");

  disclaimerBox.style.display = "none";
  ctaBtn.classList.add('cta-enabled');
  ctaBtn.classList.remove('cta-disabled');
  checkboxBtn.checked = false;

  ctaBtn.onclick = function() {
    window.open('https://www.tracker.com/link-1', '_blank');
  }

  if (onePackageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    disclaimerBox.style.display = "block";
    ctaBtn.classList.add('cta-disabled');
    ctaBtn.classList.remove('cta-enabled');
    priceMain.value = "$" + Math.round(prices.onePackagePriceSubscribe) + "/month";
    priceRetail.value = "$" + Math.round(prices.onePackagePriceRetail);
    priceSavings.value = "$" + (Math.round(prices.onePackagePriceRetail) - Math.round(prices.onePackagePriceSubscribe));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/subscribe-link-1', '_blank');
    }
  } else {
    priceMain.value = "$" + Math.round(prices.onePackagePriceMain);
    priceRetail.value = "$" + Math.round(prices.onePackagePriceRetail);
    priceSavings.value = "$" + (Math.round(prices.onePackagePriceRetail) - Math.round(prices.onePackagePriceMain));
  }

  inputWidth();
}

function threePackage() {
  productImage.src = "./img/3pack.png";
  productStamp.src = "./img/stamp.png";
  productStamp.classList.remove("display-none")

  onePackageBtn.classList.remove("active");
  sixPackageBtn.classList.remove("active");
  threePackageBtn.classList.add("active");

  disclaimerBox.style.display = "none";
  ctaBtn.classList.add('cta-enabled');
  ctaBtn.classList.remove('cta-disabled');
  checkboxBtn.checked = false;

  ctaBtn.onclick = function() {
    window.open('https://www.tracker.com/link-3', '_blank');
  }

  if (threePackageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    disclaimerBox.style.display = "block";
    ctaBtn.classList.add('cta-disabled');
    ctaBtn.classList.remove('cta-enabled');
    priceMain.value = "$" + Math.round(prices.threePackagePriceSubscribe) + "/month";
    priceRetail.value = "$" + Math.round(prices.threePackagePriceRetail);
    priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - Math.round(prices.threePackagePriceSubscribe));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/subscribe-link-3', '_blank');
    }
  } else {
    priceMain.value = "$" + Math.round(prices.threePackagePriceMain);
    priceRetail.value = "$" + Math.round(prices.threePackagePriceRetail);
    priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - Math.round(prices.threePackagePriceMain));
  }

  inputWidth();
}

function sixPackage() {
  productImage.src = "./img/6pack.png";
  productStamp.src = "./img/stamp_green.png";
  productStamp.classList.remove("display-none")

  onePackageBtn.classList.remove("active");
  threePackageBtn.classList.remove("active");
  sixPackageBtn.classList.add("active");

  disclaimerBox.style.display = "none";
  ctaBtn.classList.add('cta-enabled');
  ctaBtn.classList.remove('cta-disabled');
  checkboxBtn.checked = false;

  ctaBtn.onclick = function() {
    window.open('https://www.tracker.com/link-6', '_blank');
  }

  if (sixPackageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    disclaimerBox.style.display = "block";
    ctaBtn.classList.add('cta-disabled');
    ctaBtn.classList.remove('cta-enabled');
    priceMain.value = "$" + Math.round(prices.sixPackagePriceSubscribe) + "/month";
    priceRetail.value = "$" + Math.round(prices.sixPackagePriceRetail);
    priceSavings.value = "$" + (Math.round(prices.sixPackagePriceRetail) - Math.round(prices.sixPackagePriceSubscribe));
    ctaBtn.onclick = function() {
      window.open('https://www.tracker.com/subscribe-link-6', '_blank');
    }
  } else {
    priceMain.value = "$" + Math.round(prices.sixPackagePriceMain);
    priceRetail.value = "$" + Math.round(prices.sixPackagePriceRetail);
    priceSavings.value = "$" + (Math.round(prices.sixPackagePriceRetail) - Math.round(prices.sixPackagePriceMain));
  }

  inputWidth();
}