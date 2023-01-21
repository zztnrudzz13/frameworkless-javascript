import Main from '../pages/main';
import Mac from '../pages/mac';
import Search from '../pages/search';
import Iphone from '../pages/iphone';
import Watch from '../pages/Watch';
import Ipad from '../pages/ipad';
import TV from '../pages/tv';
import Exclusive from '../pages/exclusive';

export const BASE_URL = 'http://127.0.0.1:5173';
// /^\/ipad\/[\w]+$/

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/store$/, element: Iphone },
  { path: /^\/mac$/, element: Mac },
  { path: /^\/ipad$/, element: Ipad },
  { path: /^\/iphone$/, element: Iphone },
  { path: /^\/watch$/, element: Watch },
  { path: /^\/airpod$/, element: Iphone },
  { path: /^\/tv$/, element: TV },
  { path: /^\/exclusive$/, element: Exclusive },
  { path: /^\/accessories$/, element: Iphone },
  { path: /^\/customer$/, element: Iphone },
  { path: /^\/search$/, element: Search },
  { path: /^\/shoppingbag$/, element: Iphone },
];
