// Shared behaviour for the resume pages
document.addEventListener('DOMContentLoaded', () => {
  // Print buttons
  document.querySelectorAll('[data-action="print"]').forEach(btn =>
    btn.addEventListener('click', () => window.print()));

  // Open external links (portfolio, hubs, LinkedIn) in a new tab
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    if (a.host !== location.host) { a.target = '_blank'; a.rel = 'noopener'; }
  });
});
