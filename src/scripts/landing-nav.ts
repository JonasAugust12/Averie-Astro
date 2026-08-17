let navInitialized = false;

type NavElements = {
    toggle: HTMLElement;
    menu: HTMLElement;
    shell: HTMLElement;
    iconOpen: HTMLElement;
    iconClose: HTMLElement;
};

function setOpen(open: boolean, nav: NavElements) {
    nav.toggle.setAttribute('aria-expanded', String(open));
    nav.menu.classList.toggle('hidden', !open);
    nav.iconOpen.classList.toggle('hidden', open);
    nav.iconClose.classList.toggle('hidden', !open);
    nav.shell.classList.toggle('p-4', open);
    nav.shell.classList.toggle('px-4', !open);
    nav.shell.classList.toggle('py-2.5', !open);
    nav.shell.classList.toggle('sm:py-3', !open);
    nav.shell.classList.toggle('md:px-6', !open);
    nav.shell.classList.toggle('md:py-3.5', !open);
}

export function initLandingNav() {
    if (navInitialized) return;

    const toggleEl = document.getElementById('landing-nav-toggle');
    const menuEl = document.getElementById('landing-mobile-menu');
    const shellEl = document.getElementById('landing-nav-shell');
    const iconOpenEl = document.getElementById('landing-nav-icon-open');
    const iconCloseEl = document.getElementById('landing-nav-icon-close');

    if (!toggleEl || !menuEl || !shellEl || !iconOpenEl || !iconCloseEl) return;

    const nav: NavElements = {
        toggle: toggleEl,
        menu: menuEl,
        shell: shellEl,
        iconOpen: iconOpenEl,
        iconClose: iconCloseEl,
    };

    nav.toggle.addEventListener('click', () => {
        const isOpen = nav.toggle.getAttribute('aria-expanded') === 'true';
        setOpen(!isOpen, nav);
    });

    nav.menu.querySelectorAll('.landing-mobile-link').forEach((link) => {
        link.addEventListener('click', () => setOpen(false, nav));
    });

    navInitialized = true;
}
