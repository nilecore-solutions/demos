/* NileCore Demos — Theme Toggle
   Include before </body>: <script src="styles/theme.js"></script>
   Add data-theme-toggle to the toggle button in each demo's HTML. */

(function () {
  const KEY = "nilecore-theme";
  const root = document.documentElement;

  // Apply theme immediately (before paint) to avoid flash
  const saved = localStorage.getItem(KEY);
  setTheme(saved || "dark");

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;

    renderIcon(btn);

    btn.addEventListener("click", function () {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
      localStorage.setItem(KEY, next);
      renderIcon(btn);
    });
  });

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function renderIcon(btn) {
    const isDark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    btn.innerHTML = isDark ? iconSun() : iconMoon();
  }

  function iconSun() {
    return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  }

  function iconMoon() {
    return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();
