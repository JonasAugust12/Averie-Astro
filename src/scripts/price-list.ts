function getColumns(): number {
    const w = window.innerWidth;
    if (w >= 1280) return 3;
    if (w >= 640) return 2;
    return 1;
}

function layoutMasonry() {
    const grid = document.getElementById('price-cards-grid') as HTMLElement | null;
    if (!grid) return;

    const wrappers = Array.from(
        grid.querySelectorAll<HTMLElement>('.price-category-wrapper'),
    ).filter((w) => w.style.display !== 'none');

    if (wrappers.length === 0) {
        grid.style.height = '0px';
        return;
    }

    const columns = getColumns();
    const gap = window.innerWidth >= 1024 ? 24 : 20;
    const gridWidth = grid.clientWidth;
    const colWidth = columns === 1 ? gridWidth : (gridWidth - gap * (columns - 1)) / columns;

    wrappers.forEach((wrapper) => {
        wrapper.style.position = 'absolute';
        wrapper.style.width = colWidth + 'px';
    });

    const colHeights = new Array<number>(columns).fill(0);

    wrappers.forEach((wrapper) => {
        const col = colHeights.indexOf(Math.min(...colHeights));
        const x = col * (colWidth + gap);
        const y = colHeights[col];

        wrapper.style.left = x + 'px';
        wrapper.style.top = y + 'px';

        colHeights[col] += wrapper.offsetHeight + gap;
    });

    grid.style.height = Math.max(...colHeights) - gap + 'px';
}

let resizeTimer: ReturnType<typeof setTimeout>;

function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutMasonry, 100);
}

function initPriceListFilters() {
    const filterBtns = document.querySelectorAll<HTMLButtonElement>('.price-filter-btn');
    const categoryCards = document.querySelectorAll<HTMLElement>('.price-category-card');

    if (!filterBtns.length || !categoryCards.length) return;

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetGroup = btn.getAttribute('data-filter-target');
            if (!targetGroup) return;

            const nav = btn.closest('nav');
            if (nav && nav.scrollWidth > nav.clientWidth) {
                const scrollLeft = btn.offsetLeft - nav.clientWidth / 2 + btn.clientWidth / 2;
                nav.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }

            filterBtns.forEach((b) => {
                const isActive = b === btn;
                b.setAttribute('aria-selected', isActive ? 'true' : 'false');

                const badge = b.querySelector('.filter-badge');
                const sparkle = b.querySelector('.filter-sparkle');

                if (isActive) {
                    b.classList.remove(
                        'bg-transparent',
                        'text-secondary-800',
                        'border-transparent',
                        'hover:bg-nude/10',
                        'hover:text-secondary-900',
                        'hover:border-nude/25',
                    );
                    b.classList.add(
                        'bg-third',
                        'text-cream',
                        'border-nude/40',
                        'shadow-sm',
                        'scale-[1.02]',
                    );
                    badge?.classList.remove('bg-nude/10', 'text-nude', 'border-nude/15');
                    badge?.classList.add('bg-nude/25', 'text-cream', 'border-nude/30');
                    sparkle?.classList.remove('opacity-0', 'scale-0', 'w-0', '-mr-1');
                    sparkle?.classList.add('opacity-100', 'scale-100');
                } else {
                    b.classList.remove(
                        'bg-third',
                        'text-cream',
                        'border-nude/40',
                        'shadow-sm',
                        'scale-[1.02]',
                    );
                    b.classList.add(
                        'bg-transparent',
                        'text-secondary-800',
                        'border-transparent',
                        'hover:bg-nude/10',
                        'hover:text-secondary-900',
                        'hover:border-nude/25',
                    );
                    badge?.classList.remove('bg-nude/25', 'text-cream', 'border-nude/30');
                    badge?.classList.add('bg-nude/10', 'text-nude', 'border-nude/15');
                    sparkle?.classList.remove('opacity-100', 'scale-100');
                    sparkle?.classList.add('opacity-0', 'scale-0', 'w-0', '-mr-1');
                }
            });

            let hidePending = 0;

            categoryCards.forEach((card) => {
                const cardGroup = card.getAttribute('data-filter-group');
                const wrapper = card.closest('.price-category-wrapper') as HTMLElement | null;
                const shouldShow = targetGroup === 'all' || cardGroup === targetGroup;

                if (shouldShow) {
                    if (wrapper) wrapper.style.display = '';
                    card.style.display = 'flex';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    });
                } else {
                    hidePending++;
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.96)';
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                            if (wrapper) wrapper.style.display = 'none';
                        }
                        hidePending--;
                        if (hidePending === 0) layoutMasonry();
                    }, 220);
                }
            });

            if (hidePending === 0) layoutMasonry();
        });
    });
}

export function initPriceList() {
    initPriceListFilters();
    requestAnimationFrame(() => {
        requestAnimationFrame(layoutMasonry);
    });
    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
}
