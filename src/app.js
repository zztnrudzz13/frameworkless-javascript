import { navigate } from './utils/navigate';
import { $ } from './utils/querySelector';
import { BASE_URL } from './constants/routeInfo';
import Router from './router';

/*
 * Element.closest(selectors): the closest method of the Element interface traverses
 * the element and its parents(heading toward the document root) until it finds a node that
 * matches the specified CSS selector
 */

/**
 *
 * @param {HTMLElement || null} $container
 */
function App($container) {
  this.$container = $container;
  const init = () => {
    $('.navbar').addEventListener('click', e => {
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      const targetURL = target.href.replace(BASE_URL, '');
      navigate(targetURL);
    });

    new Router($container);
  };

  init();
}

export default App;
