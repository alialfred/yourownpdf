// TS-001: Tool Status - Applies "Coming Soon" overlays based on workingTools config
(function() {
  'use strict';

  function applyToolOverlays() {
    var working = (window.YOUROWNPDF && window.YOUROWNPDF.workingTools) || [];
    var cards = document.querySelectorAll('.tool-card');

    cards.forEach(function(card) {
      var name = card.getAttribute('data-tool-name') || card.getAttribute('data-name');
      if (!name) return;

      var pos = window.getComputedStyle(card).position;
      if (pos === 'static') {
        card.style.position = 'relative';
      }

      var isWorking = working.indexOf(name) !== -1;
      var existing = card.querySelector('.coming-soon-overlay');

      if (isWorking) {
        if (existing) existing.remove();
      } else {
        if (!existing) {
          var overlay = document.createElement('div');
          overlay.className = 'coming-soon-overlay';
          overlay.innerHTML = '<span class="coming-soon-text"><span class="coming-soon-icon">\u25CF</span> Coming Soon</span>';
          overlay.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
          });
          card.appendChild(overlay);
        }
      }
    });
  }

  // Watch for tool cards being added to the DOM at any time
  var observer = new MutationObserver(function() {
    applyToolOverlays();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Run immediately in case cards already exist
  applyToolOverlays();

  // Also run on SPA route changes (navigating back to home page)
  document.addEventListener('routeChange', applyToolOverlays);

  window.YOUROWNPDF = window.YOUROWNPDF || {};
  window.YOUROWNPDF.applyToolOverlays = applyToolOverlays;
})();
