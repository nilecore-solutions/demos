/* Gallery page — renders demo cards from shared DEMOS data (demos.js) */

const ICONS = {
  "business-website":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  "analytics-dashboard":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  "ecommerce-store":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  "seo-dashboard":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  "whatsapp-business":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  "google-business-profile":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  "web-app-dashboard":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  "api-documentation":
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

(function () {
  const grid = document.getElementById("js-demos-grid");

  DEMOS.forEach(function (demo) {
    const href = demo.live
      ? demo.slug + "/index.html"
      : "coming-soon/index.html?demo=" + demo.slug;

    const card = document.createElement("li");
    card.className = "demo-card " + (demo.live ? "is-live" : "is-coming");
    card.style.setProperty("--card-accent", demo.accent);

    card.innerHTML =
      '<div class="card-accent-bar"></div>' +
      '<div class="card-body">' +
      '<div class="card-top">' +
      '<div class="card-icon">' +
      (ICONS[demo.slug] || "") +
      "</div>" +
      '<div class="card-badges">' +
      '<span class="badge-num">#' +
      demo.num +
      "</span>" +
      (demo.live
        ? '<span class="badge-live">Live</span>'
        : '<span class="badge-soon">Coming soon</span>') +
      "</div>" +
      "</div>" +
      '<div class="card-content">' +
      '<h2 class="card-name">' +
      demo.name +
      "</h2>" +
      '<p class="card-desc">' +
      demo.desc +
      "</p>" +
      '<div class="card-tags">' +
      demo.tags
        .map(function (t) {
          return '<span class="tag">' + t + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>" +
      '<div class="card-footer">' +
      '<div class="card-price">' +
      '<span class="price-amount">' +
      demo.price +
      "</span>" +
      '<span class="price-label">' +
      demo.service +
      "</span>" +
      "</div>" +
      '<a href="' +
      href +
      '" class="card-cta ' +
      (demo.live ? "cta-live" : "cta-soon") +
      '"' +
      (demo.live ? "" : ' aria-disabled="true" tabindex="-1"') +
      ">" +
      (demo.live
        ? 'View Demo <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
        : "Coming Soon") +
      "</a>" +
      "</div>" +
      "</div>";

    grid.appendChild(card);
  });
})();
