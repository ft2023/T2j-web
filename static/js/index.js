// Progressive enhancements; research content and results remain visible without JS.
document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('harness-filter');
  const rows = [...document.querySelectorAll('tr[data-harness]')];
  filter.addEventListener('change', () => {
    let count = 0;
    rows.forEach(row => {
      row.hidden = filter.value !== 'all' && row.dataset.harness !== filter.value;
      if (!row.hidden) count++;
    });
    document.getElementById('result-count').textContent = `${count} agent configuration${count === 1 ? '' : 's'} + reference oracle`;
  });
  document.getElementById('copy-bibtex').addEventListener('click', async () => {
    const code = document.querySelector('#BibTeX code');
    const status = document.getElementById('copy-status');
    try {
      await Promise.race([
        navigator.clipboard.writeText(code.textContent),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Clipboard unavailable')), 1500))
      ]);
      status.textContent = 'BibTeX copied to clipboard.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges(); selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
  const links = [...document.querySelectorAll('.section-nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) links.forEach(link => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -65% 0px'});
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
});
