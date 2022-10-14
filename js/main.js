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

// Click events
onePackageBtn.addEventListener("click", () => {
  Package("./img/1product.png", "./img/stamp.png", "display-none", "display-block", threePackageBtn, sixPackageBtn, onePackageBtn, 'https://www.tracker.com/link-1', onePackageBtn, prices.onePackagePriceSubscribe, prices.onePackagePriceRetail, prices.onePackagePriceMain, 'https://www.tracker.com/subscribe-link-1');
});

threePackageBtn.addEventListener("click", () => {
  Package("./img/3pack.png", "./img/stamp.png", "display-block", "display-none", onePackageBtn, sixPackageBtn, threePackageBtn, 'https://www.tracker.com/link-3', threePackageBtn, prices.threePackagePriceSubscribe, prices.threePackagePriceRetail, prices.threePackagePriceMain, 'https://www.tracker.com/subscribe-link-3');
});

sixPackageBtn.addEventListener("click", () => {
  Package("./img/6pack.png", "./img/stamp_green.png", "display-block", "display-none", onePackageBtn, threePackageBtn, sixPackageBtn, 'https://www.tracker.com/link-6', sixPackageBtn, prices.sixPackagePriceSubscribe, prices.sixPackagePriceRetail, prices.sixPackagePriceMain, 'https://www.tracker.com/subscribe-link-6');
});  

purchaseModeBtn.addEventListener("click", () => {
  Modes(subscribeModeBtn, purchaseModeBtn, "none", false, 'cta-enabled' ,'cta-disabled', purchaseModeBtn, Math.round(prices.onePackagePriceMain), Math.round(prices.onePackagePriceMain), 'https://www.tracker.com/link-1', Math.round(prices.threePackagePriceMain), Math.round(prices.threePackagePriceMain), 'https://www.tracker.com/link-3', Math.round(prices.sixPackagePriceMain), Math.round(prices.sixPackagePriceMain), 'https://www.tracker.com/link-6');
});

subscribeModeBtn.addEventListener("click", () => {
  Modes(purchaseModeBtn, subscribeModeBtn, "block", false, 'cta-disabled', 'cta-enabled', subscribeModeBtn, Math.round(prices.onePackagePriceSubscribe) + "/month", Math.round(prices.onePackagePriceSubscribe), 'https://www.tracker.com/subscribe-link-1', Math.round(prices.threePackagePriceSubscribe) + "/month", Math.round(prices.threePackagePriceSubscribe), 'https://www.tracker.com/subscribe-link-3', Math.round(prices.sixPackagePriceSubscribe) + "/month", Math.round(prices.sixPackagePriceSubscribe), 'https://www.tracker.com/subscribe-link-6');
});

checkboxBtn.addEventListener("click", validate);

// Modes (purchase & subscribe)
function Modes(btnOne, btnTwo, display, boolean, ctaOne, ctaTwo, btnThree, priceOne, priceTwo, linkOne, priceThree, priceFour, linkTwo, priceFive, priceSix, linkThree) {
  btnOne.classList.remove("active");
  btnTwo.classList.add("active");
  disclaimerBox.style.display = display;
  checkboxBtn.checked = boolean;
  ctaBtn.classList.add(ctaOne);
  ctaBtn.classList.remove(ctaTwo);
  
  if (onePackageBtn.classList.contains("active") && btnThree.classList.contains("active")) {
    priceMain.value = "$" + priceOne;
    priceSavings.value = "$" + (Math.round(prices.onePackagePriceRetail) - priceTwo);
    ctaBtn.onclick = function() {
      window.open(linkOne, '_blank');
    }
  } else if (threePackageBtn.classList.contains("active") && btnThree.classList.contains("active")) {
    priceMain.value = "$" + priceThree;
    priceSavings.value = "$" + (Math.round(prices.threePackagePriceRetail) - priceFour);
    ctaBtn.onclick = function() {
      window.open(linkTwo, '_blank');
    }
  } else if (sixPackageBtn.classList.contains("active") && btnThree.classList.contains("active")) {
    priceMain.value = "$" + priceFive;
    priceSavings.value = "$" + (Math.round(prices.sixPackagePriceRetail) - priceSix);
    ctaBtn.onclick = function() {
      window.open(linkThree, '_blank');
    }
  }

  updatePrice();
  inputWidth();
}

// Package options
function Package(productImg, stampImg, classActionOne, classActionTwo, firstPack, secondPack, thirdPack, linkOne, packageBtn, subscribePrice, retailPrice, mainPrice, linkTwo) {
  productImage.src = productImg;
  productStamp.src = stampImg;
  productStamp.classList.add(classActionOne);
  productStamp.classList.remove(classActionTwo);

  firstPack.classList.remove("active");
  secondPack.classList.remove("active");
  thirdPack.classList.add("active");

  disclaimerBox.style.display = "none";
  ctaBtn.classList.add('cta-enabled');
  ctaBtn.classList.remove('cta-disabled');
  checkboxBtn.checked = false;

  ctaBtn.onclick = function() {
    window.open(linkOne, '_blank');
  }

  if (packageBtn.classList.contains("active") && subscribeModeBtn.classList.contains("active")) {
    disclaimerBox.style.display = "block";
    ctaBtn.classList.add('cta-disabled');
    ctaBtn.classList.remove('cta-enabled');
    priceMain.value = "$" + Math.round(subscribePrice) + "/month";
    priceRetail.value = "$" + Math.round(retailPrice);
    priceSavings.value = "$" + (Math.round(retailPrice) - Math.round(subscribePrice));
    ctaBtn.onclick = function() {
      window.open(linkTwo, '_blank');
    }
  } else {
    priceMain.value = "$" + Math.round(mainPrice);
    priceRetail.value = "$" + Math.round(retailPrice);
    priceSavings.value = "$" + (Math.round(retailPrice) - Math.round(mainPrice));
  }

  updatePrice();
  inputWidth();
}

// Checkbox validation
function validate(){
  if (checkboxBtn.checked){
    ctaBtn.classList.add('cta-enabled');
    ctaBtn.classList.remove('cta-disabled');
  } else {
    ctaBtn.classList.add('cta-disabled');
    ctaBtn.classList.remove('cta-enabled');
  }
}

ctaBtn.onclick = function() {
  window.open('https://www.tracker.com/link-3', '_blank');
}

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

function updatePrice() {
  var updatedMainPrice = parseInt(priceMain.value.replace("$", ""));
  var updatedRetailPrice = parseInt(priceRetail.value.replace("$", ""));
  var updatedSavingsPrice = parseInt(priceSavings.value.replace("$", ""));

  console.log("Main price: " + updatedMainPrice);
  console.log("Retail price: " + updatedRetailPrice);
  console.log("Savings price: " + updatedSavingsPrice);
}

inputWidth();