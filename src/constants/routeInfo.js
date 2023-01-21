import Accessories from '../pages/accessories';
import Airpod from '../pages/airpod';
import Customer from '../pages/customer';
import Exclusive from '../pages/exclusive';
import Ipad from '../pages/ipad';
import Iphone from '../pages/iphone';
import Mac from '../pages/mac';
import Main from '../pages/main';
import Search from '../pages/search';
import Shoppingbag from '../pages/shoppingbag';
import Store from '../pages/store';
import TV from '../pages/tv';
import Watch from '../pages/watch';

// export const BASE_URL = 'http://127.0.0.1:5173';
export const BASE_URL =
  'http://ec2-13-125-110-58.ap-northeast-2.compute.amazonaws.com';

// /^\/ipad\/[\w]+$/

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/store$/, element: Store },
  { path: /^\/mac$/, element: Mac },
  { path: /^\/ipad$/, element: Ipad },
  { path: /^\/iphone$/, element: Iphone },
  { path: /^\/watch$/, element: Watch },
  { path: /^\/airpod$/, element: Airpod },
  { path: /^\/tv$/, element: TV },
  { path: /^\/exclusive$/, element: Exclusive },
  { path: /^\/accessories$/, element: Accessories },
  { path: /^\/customer$/, element: Customer },
  { path: /^\/search$/, element: Search },
  { path: /^\/shoppingbag$/, element: Shoppingbag },
];
