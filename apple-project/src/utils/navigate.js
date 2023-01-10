/**
 *
 * @param { string } to
 * @param { boolean } isReplace
 */
export const navigate = (to, isReplace) => {
  const historyChangeEvent = new CustomEvent('historychange', {
    detail: {
      to,
      isReplace,
    },
  });

  dispatchEvent(historyChangeEvent);
};
