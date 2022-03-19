const colors = [
	"green",
	"red",
	"rgba(133,122,200)",
	"#f15025",
	"rgb(209, 139, 8)",
	"rgb(27, 6, 6)",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	const randomNum = Math.floor(Math.random() * colors.length);

	document.body.style.backgroundColor = colors[randomNum];
	color.textContent = colors[randomNum];
});
