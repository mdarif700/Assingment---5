// donation btn

const btnHistory = mySelector("btn-history");
const btnDonation = mySelector("btn-donation");
const btnBlog = mySelector("btn-blog");
const cardSection = mySelector("card-section");
const historySection = mySelector("history");
const blogSection = mySelector("blog-section");

// history btn addEventListener

btnHistory.addEventListener("click", function (e) {
	btnHistory.classList.add("text-black", "bg-[#B4F461]");

	btnDonation.classList.remove("text-black", "bg-[#B4F461]");

	// hidden
	cardSection.classList.add("hidden");
	blogSection.classList.add("hidden");
	// show sectiion
	historySection.classList.remove("hidden");
});

//  donation btn addEventListener

btnDonation.addEventListener("click", function (e) {
	btnDonation.classList.add("text-black", "bg-[#B4F461]");

	btnHistory.classList.remove("text-black", "bg-[#B4F461]");

	// show sectiion
	cardSection.classList.remove("hidden");

	// hidden
	historySection.classList.add("hidden");
});

//  donation btn addEventListener
btnBlog.addEventListener("click", function () {
	// hidden
	cardSection.classList.add("hidden");
	historySection.classList.add("hidden");
	// show
	blogSection.classList.remove("hidden");
	// remove
	btnDonation.classList.remove("text-black", "bg-[#B4F461]");
	btnHistory.classList.remove("text-black", "bg-[#B4F461]");
});

const noakhaliBtn = mySelector("noakhaliBtn");
let noakhaliContent = mySelector("noakhaliContent").innerHTML;
let historyContent = mySelector("histor-content-continer");

noakhaliBtn.addEventListener("click", function (e) {
	e.preventDefault();

	let inputValue = inputValidSelector("noakhaliInput");

	if (isNaN(inputValue) || inputValue < 0) {
		alert("please valid number");
		return;
	}

	// total cash
	let myCash = textValid("myCash");
	let noakhaliChash = textValid("noakhaliChash");

	let newBalance = myCash - inputValue;

	let addTaka = inputValue + noakhaliChash;
	document.getElementById("myCash").innerHTML = newBalance;
	mySelector("noakhaliChash").innerHTML = addTaka;

	let d = new Date().toString();
	let myHtml = `
                <div class="border-2 p-5 rounded-md space-y-3">
						<h2 class="font-bold">
							${inputValue} ${noakhaliContent}
						</h2>
						<p>
							Date: ${d}
						</p>
					</div>
    
    `;
	noakhaliBtn.setAttribute("onclick", "my_modal_5.showModal()");
	historyContent.innerHTML += myHtml;
	return mySelector("noakhaliInput").value = null;
});

// feni input

const feniBtn = mySelector("feniBtn");
const feniContent = mySelector("feniContent").innerHTML

feniBtn.addEventListener("click", function (e) {

	e.preventDefault();

	let inputValue = inputValidSelector("feniInput");
    

	if (isNaN(inputValue) || inputValue < 0) {
		alert("please valid number");
		return;
	}else{

	// total cash
	let myCash = textValid("myCash");
	let feniCash = textValid("feniCash");

	let newBalance = myCash - inputValue;

	let addTaka = inputValue + feniCash;
	mySelector("myCash").innerHTML = newBalance;
	mySelector("feniCash").innerHTML = addTaka;

	let d = new Date().toString();
	let myHtml = `
                <div class="border-2 p-5 rounded-md space-y-3">
						<h2 class="font-bold">
							${inputValue} ${feniContent}
						</h2>
						<p>
							Date: ${d}
						</p>
					</div>
    
    `;
	// noakhaliBtn.setAttribute("onclick", "my_modal_5.showModal()");
    
	historyContent.innerHTML += myHtml;
	return mySelector("feniInput").value = null;
}
});
