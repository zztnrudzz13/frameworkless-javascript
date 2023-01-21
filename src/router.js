import { routes } from './constants/routeInfo';
import NotFound from './pages/notfound';

/*
 * ✅ location: Window.location is read-only property that returns a Location object
 * about the current location of the document
 * ✅ History.replaceState(stateObj, unused, url?): modifies the current history entry, replacing
 * it with the state object and URL passed in the method parameters.
 * ✅ History.pushState(state, unused, url?): adds an entry to the browser's session history stack
 */

/**
 *
 * @param {HTMLElement || null} $container
 */
function Router($container) {
  this.$container = $container;
  let currentPage = undefined;

  const findMatchedRoute = () =>
    routes.find(route => route.path.test(location.pathname));

  const route = () => {
    currentPage = null;
    const TargetPage = findMatchedRoute()?.element || NotFound;
    currentPage = new TargetPage(this.$container);
  };

  const init = () => {
    window.addEventListener('historychange', ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname)
        history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      route();
    });
  };

  window.addEventListener('popstate', () => {
    route();
  });

  init();
  route();
}

export default Router;
