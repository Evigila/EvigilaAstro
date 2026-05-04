export const siteConfig = {
	name: 'Evigila',
	title: 'Evigila / Still Frames',
	description: '一个以 Astro 为核心、强调速度与低脚本占比的极简静态博客原型。',
	author: {
		name: 'Evigila',
		avatar: '/avatar.svg',
		bio: '只保留必要的结构、必要的层次和必要的动效，让页面先于脚本完成表达。',
		signature: 'Speed first. Motion second. Noise never.',
	},
	stageSeed: '3141592653589793238462643383279',
	navigation: [
		{ label: '首页', href: '/' },
		{ label: '文章', href: '#posts' },
		{ label: '关于', href: '/about' },
		{ label: '友链', href: '/friend' },
	],
	socials: [
		{ label: 'GitHub', href: 'https://github.com/evigila', icon: 'github' },
		{ label: '邮箱', href: 'mailto:hello@evigila.dev', icon: 'mail' },
	],
} as const;