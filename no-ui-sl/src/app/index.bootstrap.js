'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

const noUiSlider = require('nouislider');
import 'nouislider/distribute/nouislider.css'

const slider = document.getElementById('slider');

slider.setAttribute('disable', true);

setTimeout(function () {
	slider.removeAttribute('disabled');
}, 1500);

noUiSlider.create(slider, {
	start: [20, 60, 80],
	connect: true,
	range: {
		min: 0,
		max: 100
	},
	tooltips: true,
});
