interface MenuItem {
	component: string;
	title: string;
}

const menuConfig: Array<MenuItem> = [
	{ component: 'Button', title: 'Button 按钮' },
	{ component: 'Icon', title: 'Icon 图标' },
	{ component: 'Layout', title: 'Layout 布局' },
	{ component: 'Grid', title: 'Grid 栅格' },
	{ component: 'Breadcrumb', title: 'Breadcrumb 面包屑' },
	{ component: 'Affix', title: 'Affix 固钉' },
	{ component: 'Steps', title: 'Steps 步骤条' },
	{ component: 'Message', title: 'Message 全局提示' },
	{ component: 'Dialog', title: 'Dialog 对话框' },
];

export default menuConfig;