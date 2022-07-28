const w = 50,
	h = 50;
let fogo;
const ii = 0.5;
let incremento = 20;
const fireColorsPaletteRed = [
	{ r: 7, g: 7, b: 7 },
	{ r: 31, g: 7, b: 7 },
	{ r: 47, g: 15, b: 7 },
	{ r: 71, g: 15, b: 7 },
	{ r: 87, g: 23, b: 7 },
	{ r: 103, g: 31, b: 7 },
	{ r: 119, g: 31, b: 7 },
	{ r: 143, g: 39, b: 7 },
	{ r: 159, g: 47, b: 7 },
	{ r: 175, g: 63, b: 7 },
	{ r: 191, g: 71, b: 7 },
	{ r: 199, g: 71, b: 7 },
	{ r: 223, g: 79, b: 7 },
	{ r: 223, g: 87, b: 7 },
	{ r: 223, g: 87, b: 7 },
	{ r: 215, g: 95, b: 7 },
	{ r: 215, g: 95, b: 7 },
	{ r: 215, g: 103, b: 15 },
	{ r: 207, g: 111, b: 15 },
	{ r: 207, g: 119, b: 15 },
	{ r: 207, g: 127, b: 15 },
	{ r: 207, g: 135, b: 23 },
	{ r: 199, g: 135, b: 23 },
	{ r: 199, g: 143, b: 23 },
	{ r: 199, g: 151, b: 31 },
	{ r: 191, g: 159, b: 31 },
	{ r: 191, g: 159, b: 31 },
	{ r: 191, g: 167, b: 39 },
	{ r: 191, g: 167, b: 39 },
	{ r: 191, g: 175, b: 47 },
	{ r: 183, g: 175, b: 47 },
	{ r: 183, g: 183, b: 47 },
	{ r: 183, g: 183, b: 55 },
	{ r: 207, g: 207, b: 111 },
	{ r: 223, g: 223, b: 159 },
	{ r: 239, g: 239, b: 199 },
	{ r: 255, g: 255, b: 255 }
];
let debug = false;
function start() {
	const $btnmore = document.getElementById("+");
	const $btnminus = document.getElementById("-");
	const $debug = document.getElementById("d");
	create();

	$btnmore.addEventListener("click", (e) => {
		if (incremento == 1) alert("valor maximo atingido");
		else incremento-=ii;
	});
	$btnminus.addEventListener("click", (e) => {
		if (incremento == 12) alert("valor minimo atingido");
		else incremento+=ii;
	});
	$debug.addEventListener("click", (e) => {
		debug = !debug;
	});

	setInterval(algofire, 50);
}

function algofire() {
	for (i = 0; i < w - 1; i++) {
		for (j = 0; j < h; j++) {
			const firedeg = parseInt(Math.random() * incremento);

			const bottom = fogo[i + 1][j] - firedeg;
			if (bottom > 0) fogo[i][j] = bottom;
			else if (fogo[i][j] > 0) {
				fogo[i][j] = fogo[i][j] - firedeg < 0 ? 0 : fogo[i][j] - firedeg;
			}
		}
	}
	renderFire();
}

function renderFire() {
	let html = "<table>";
	for (i = 0; i < w; i++) {
		html += "<tr>";
		for (j = 0; j < h; j++) {
			html += `<td style='background: rgb(${fireColorsPaletteRed[fogo[i][j]].r},${
				fireColorsPaletteRed[fogo[i][j]].g
			},${fireColorsPaletteRed[fogo[i][j]].b})'>`;

			html += debug == true ? fogo[i][j] : "";
			html += "</td>";
		}
		html += "</tr>";
	}
	html += "</table>";
	const $div = document.getElementById("screen");

	$div.innerHTML = html;
}

function create() {
	fogo = new Array(w);
	for (i = 0; i < w; i++) {
		fogo[i] = new Array(h);
	}

	for (i = 0; i < w; i++) {
		for (j = 0; j < h; j++) {
			if (i == w - 1) fogo[i][j] = 36;
			else fogo[i][j] = 0;
		}
	}
}

window.onload = start;
