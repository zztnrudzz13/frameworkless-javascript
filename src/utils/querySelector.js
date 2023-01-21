/**
 *
 * @param {string} selector
 * @returns HTMLElement || null
 * querySeletor returns the 'first' element within the document that matches the specified
 * selector, or group of selectors
 */
export const $ = selector => {
  const result = document.querySelector(selector);
  if (!(result instanceof HTMLElement)) return null;

  return result;
};
