'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

import './index.scss';

const root = document.getElementById('root');

class VideoControls {
	constructor(root, { header }) {

		if (header) {
			let headerElement = document.createElement('header');
			headerElement.setAttribute('id', 'player-header');
			root.append(headerElement);
		}
		console.log('I am working', header);
	}
}

const player = new VideoControls(root, { header: true });
