/*
 * CustomEvent: represents events initialized by an application for any purpose,
 * this interface inherits properties from its parent, Event.
 * CustomEvent.detail: returns any data passed when initializing the event
 */

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
