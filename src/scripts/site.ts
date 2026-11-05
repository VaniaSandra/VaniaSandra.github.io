export function initReveal(): void {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (targets.length === 0) return;

  targetShowAllOnFallback(targets);

  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );

  targets.forEach((element) => observer.observe(element));

  window.addEventListener('load', () => {
    window.setTimeout(() => {
      targets.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('is-in');
        }
      });
    }, 2200);
  });
}

function targetShowAllOnFallback(targets: HTMLElement[]): void {
  if (!document.documentElement.classList.contains('js')) {
    targets.forEach((element) => element.classList.add('is-in'));
  }
}

export function initFilters(): void {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-tags]'));
  const status = document.querySelector<HTMLElement>('[data-filter-status]');
  if (buttons.length === 0 || items.length === 0) return;

  const apply = (id: string): void => {
    let visible = 0;

    for (const item of items) {
      const tags = (item.dataset.tags ?? '').split(/\s+/).filter(Boolean);
      const show = id === 'all' || tags.includes(id);
      item.hidden = !show;
      if (show) visible += 1;
    }

    for (const button of buttons) {
      const active = button.dataset.filter === id;
      button.setAttribute('aria-pressed', String(active));
    }

    if (status) {
      const total = items.length;
      status.textContent = `Showing ${visible} of ${total} works.`;
    }
  };

  for (const button of buttons) {
    button.addEventListener('click', () => {
      apply(button.dataset.filter ?? 'all');
    });
  }

  apply('all');
}
