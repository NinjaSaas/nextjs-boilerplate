export interface InviewPortType {
  callback: () => void;
  target: HTMLElement | null;
  options: IntersectionObserverInit | undefined;
  freezeOnceVisible: boolean;
}

/**
 * Checks if the target element is in the viewport using Intersection Observer.
 *
 * @param {InviewPortType} options - The options for the Intersection Observer.
 * @param {Element} options.target - The target element to observe.
 * @param {IntersectionObserverInit} options.options - The options for the Intersection Observer.
 * @param {Function} options.callback - The callback function to be called when the target element is in the viewport.
 * @param {boolean} options.freezeOnceVisible - Flag indicating whether to stop observing the target element once it becomes visible.
 */
const checkInViewIntersectionObserver = ({
  target,
  options = { root: null, rootMargin: `0%`, threshold: 0 },
  callback,
  freezeOnceVisible = false,
}: InviewPortType) => {
  const _funCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.map((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        //
        callback();
        //  ---- IF TRUE WE WILL UNOBSERVER AND FALSE IS NO
        if (freezeOnceVisible) {
          observer.unobserve(entry.target);
        }
      }
      return true;
    });
  };

  // _checkBrowserSupport-----
  if (typeof window.IntersectionObserver === "undefined") {
    console.error(
      "window.IntersectionObserver === undefined! => Your Browser is Notsupport",
    );
    return;
  }

  const observer = new IntersectionObserver(_funCallback, options);
  target && observer.observe(target);
};

export default checkInViewIntersectionObserver;
