import App from './src/app';
import './style.css';
import { $ } from './src/utils/querySelector';

/*
 * DOMContentLoaded: fires when the HTML document has been completely parsed,
 * and all deferred scripts have downloaded and executed.
 * It doesn't wait for other things like images, subframes, and async scripts to finish loading.
 */

window.addEventListener('DOMContentLoaded', e => {
  new App($('#app'));
});
