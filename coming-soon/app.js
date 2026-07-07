/* DEMOS array is provided by ../styles/demos.js, loaded before this file. */

(function () {
  const params = new URLSearchParams(globalThis.location.search);
  const current = params.get("demo") || "";
  const demo = DEMOS.find(function (d) {
    return d.slug === current;
  });

  if (demo) {
    document.title = demo.name + " — Coming Soon · NileCore Solutions";
    document.getElementById("js-demo-name").innerHTML = demo.name.replace(
      /(\S+)\s(\S+.*)/,
      "$1<br><em>$2</em>",
    );
    document.getElementById("js-demo-desc").textContent = demo.desc;
    document.getElementById("js-hours").textContent = demo.hours + " to build";
  }

  const grid = document.getElementById("js-demos-grid");
  DEMOS.forEach(function (d) {
    const isCurrent = d.slug === current;
    const chip = document.createElement(d.live ? "a" : "span");
    if (d.live) chip.href = "../" + d.slug + "/index.html";
    chip.className =
      "demo-chip" +
      (d.live ? " is-live" : "") +
      (isCurrent ? " is-current" : "");
    chip.innerHTML =
      '<span class="status-dot ' +
      (d.live ? "dot-live" : isCurrent ? "dot-current" : "dot-soon") +
      '"></span>' +
      d.name;
    grid.appendChild(chip);
  });
})();
