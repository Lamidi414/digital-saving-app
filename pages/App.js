// app.js

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");

  const routes = {
    "#dashboard": "./pages/dashboard.html",
    "#groups": "./pages/groups.html",
    "#create": "./pages/create.html",
  };

  async function loadContent(route) {
    const path = routes[route] || routes["#dashboard"];
    try {
      const res = await fetch(path);
      const html = await res.text();
      mainContent.innerHTML = html;
    } catch (err) {
      mainContent.innerHTML = "<p class='text-red-600'>Failed to load content.</p>";
    }
  }

  window.addEventListener("hashchange", () => loadContent(location.hash));

  // Initial load
  loadContent(location.hash);
});
