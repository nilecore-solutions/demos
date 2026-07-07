/* NileCore Demos — Coming Soon Redirect
   Reads the target URL from data-redirect on <html> and navigates there.
   Usage: <html data-redirect="../coming-soon/?demo=slug"> */

(function () {
  const url = document.documentElement.getAttribute("data-redirect");
  if (url) globalThis.location.replace(url);
})();
