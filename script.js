const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealItems.forEach((item) => observer.observe(item));

const notice = document.querySelector('.notice[data-hide-after]');
if (notice && new Date() > new Date(`${notice.dataset.hideAfter}T23:59:59`)) {
  notice.remove();
}

const yearTarget = document.getElementById('rok');
if (yearTarget) {
  yearTarget.textContent = `Praha | ${new Date().getFullYear()}`;
}
