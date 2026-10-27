/**
 * ==========================================================================
 * SARWADNYA NIRWAL - PORTFOLIO ENGINE
 * Clean, Flat, High-Performance Interactions (No 3D Effects, Simple Cursor)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCopyrightYear();
  initModalInteractions();
});

/* --------------------------------------------------------------------------
   1. Dynamic Copyright Year
   -------------------------------------------------------------------------- */
function initCopyrightYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   2. AlphaForge Project Modal
   -------------------------------------------------------------------------- */
  function initModalInteractions() {
    // Close modal when pressing the Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeProjectModal();
        }
      });

        // Close modal when clicking the outer backdrop
        const modal = document.getElementById('project-modal');
        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) {
              closeProjectModal();
            }
          });
        }
      }

      window.openProjectModal = function () {
        const modal = document.getElementById('project-modal');
        if (modal) {
          modal.classList.add('open');
          modal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
      };

      window.closeProjectModal = function () {
        const modal = document.getElementById('project-modal');
        if (modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = ''; // Restore background scrolling
        }
      };
