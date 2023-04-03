const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const blur = document.querySelector(".blur");


hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
	blur.classList.toggle("active");
})

window.onscroll = () => {
	const header = document.getElementById("header");

	if (window.scrollY >= 10) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
