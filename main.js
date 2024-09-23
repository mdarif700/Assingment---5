
// donation btn

const btnHistory = mySelector("btn-history")
const btnDonation = mySelector("btn-donation")
const btnBlog = mySelector("btn-blog")
const cardSection = mySelector("card-section")
const historySection = mySelector("history")
const blogSection = mySelector("blog-section")


// history btn addEventListener

btnHistory.addEventListener("click",function (e) {
    btnHistory.classList.add("text-black", "bg-[#B4F461]")

    btnDonation.classList.remove("text-black", "bg-[#B4F461]")

    // hidden
    cardSection.classList.add("hidden")
    blogSection.classList.add("hidden")
    // show sectiion
    historySection.classList.remove("hidden")
})


//  donation btn addEventListener

btnDonation.addEventListener("click",function (e) {
    btnDonation.classList.add("text-black", "bg-[#B4F461]")

    btnHistory.classList.remove("text-black", "bg-[#B4F461]")


    // show sectiion
    cardSection.classList.remove("hidden")

    // hidden
    historySection.classList.add("hidden")
})

//  donation btn addEventListener
btnBlog.addEventListener("click", function () {
    // hidden
    cardSection.classList.add("hidden")
    historySection.classList.add("hidden")
    // show
    blogSection.classList.remove("hidden")
    // remove
    btnDonation.classList.remove("text-black", "bg-[#B4F461]")
    btnHistory.classList.remove("text-black", "bg-[#B4F461]")
})