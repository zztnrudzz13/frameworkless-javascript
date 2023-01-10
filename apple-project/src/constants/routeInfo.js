import Main from '../pages/main';
import Post from '../pages/post';
import Shop from '../pages/shop';

export const BASE_URL = 'http://127.0.0.1:5173';

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /^\/shop$/, element: Shop },
];
