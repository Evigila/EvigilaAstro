export const initTheme = (
	button: HTMLElement | null,
	label: HTMLElement | null,
) => {
	const root = document.documentElement;

	const sync = () => {
		const isDark = root.dataset.theme === 'dark';
		const themeName = isDark ? '深色' : '浅色';

		if (label) {
			label.textContent = themeName;
		}

		if (button) {
			button.setAttribute('aria-label', `切换主题，当前${themeName}`);
			button.setAttribute('aria-pressed', String(isDark));
		}
	};

	sync();

	button?.addEventListener('click', () => {
		const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
		root.dataset.theme = nextTheme;
		localStorage.setItem('evigila-theme', nextTheme);
		sync();
	});
};
