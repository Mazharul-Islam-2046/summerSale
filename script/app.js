// Sell200btn Function
function sell200Btn() {
	const couponInput = document.getElementById("couponInput");
	couponInput.value = "SELL200";
}

// Coupon Apply Btn Function
let coupon = false;
function couponApply() {
	const couponInput = document.getElementById("couponInput");
	const couponCode = couponInput.value;
	if (couponCode == "SELL200") {
		// Clearing Input Field
		couponInput.value = "";

		// collecting elements
		const totalPriceSpan = document.getElementById("totalPrice");
		const discountSpan = document.getElementById("discount");
		const totalSpan = document.getElementById("total");

		// Calculating
		const totalPrice = parseFloat(totalPriceSpan.innerText).toFixed(2);
		const discountString = (totalPrice * 0.2).toFixed(2);
		const discount = parseFloat(discountString);
		const totalInt = totalPrice - discount;
		const total = totalInt.toFixed(2);

		// Setting The Prices
		totalPriceSpan.innerText = totalPrice;
		discountSpan.innerText = discountString;
		totalSpan.innerText = total;

		// Returing Value
		coupon = true;
	}
	couponInput.value = "";
}

// Card onClick Fuction
let currentNum = 1;
function cardClick(target) {
	// Collecting The Elements
	const prodName = target.children[1].children[1].innerText;
	const prodPrice = parseFloat(
		target.children[1].children[2].innerText
	).toFixed(2);
	const itmeList = document.getElementById("itemList");

	// Creating New Elements
	const liNode = document.createElement("li");
	liNode.innerText = currentNum + ". " + prodName;

	// Appended New Element
	itmeList.appendChild(liNode);

	// Make hr Visible
	const hr = document.getElementById("hiddenHr");
	hr.classList.remove("hidden");

	// Counting the List Item Number
	currentNum += 1;

	// coupon apply
	// CalcNSet and sending coupon as peram
	CalcNdSet(prodPrice, coupon);
}

// CalcNdSet Function
let totalPrice = 0;
function CalcNdSet(price, coupon) {
	// getElements
	const totalPriceSpan = document.getElementById("totalPrice");
	const discountSpan = document.getElementById("discount");
	const totalSpan = document.getElementById("total");

	if (coupon) {
		const priceFloat = parseFloat(price);
		totalPrice += priceFloat;
		const discountString = (totalPrice * 0.2).toFixed(2);
		const discount = parseFloat(discountString)
		const totalInt = totalPrice - discount;
		const total = totalInt.toFixed(2);

		totalPriceSpan.innerText = totalPrice.toFixed(2);
		discountSpan.innerText = discountString;
		totalSpan.innerText = total;
	} else {
		const priceFloat = parseFloat(price);
		totalPrice += priceFloat;

		applyBtnEnable(totalPrice)
		purchaseBtnEnable(totalPrice)

		totalPriceSpan.innerText = totalPrice.toFixed(2);
		totalSpan.innerText = totalPrice.toFixed(2);
	}
}

// Apply Button Enable Function
function applyBtnEnable(total) {
	if (total >= 200) {
		const couponApplyBtn = document.getElementById("couponApply");

		couponApplyBtn.removeAttribute('disabled');
	}
}

// Purchase Button Enable
function purchaseBtnEnable(total) {
	if (total >= 0) {
		const purchaseBtn = document.getElementById("purchase");

		purchaseBtn.removeAttribute('disabled');
	}
}


// On Home Page or Refresh Function
function onHomePage() {
	location.href = "index.html";
}
