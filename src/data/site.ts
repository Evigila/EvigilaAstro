export const siteConfig = {
	name: 'Evigila',
	title: 'Evigila的个人博客',
	description: '一个以 Astro 为核心、强调速度与低脚本占比的极简静态博客原型。',
	author: {
		name: 'Evigila',
		avatar: '/avatar.svg',
		bio: '坚持学习，追求自我，热爱技术，享受生活。',
		signature: '.NET | C# | Windows | MultiPlatform | GameDev',
	},
	stageSeed: '3141592653589793238462643383279',
	navigation: [
		{ label: '首页', href: '/' },
		{ label: '文章', href: '#posts' },
		{ label: '友链', href: '/friend' },
	],
	socials: [
		{ label: 'GitHub', href: 'https://github.com', icon: 'github' },
		{ label: '邮箱', href: 'mailto:evigila.shangyi@gmail.com', icon: 'mail' },
	],
} as const;