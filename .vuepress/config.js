module.exports = {
    title: 'Documentation for ShopNx v8',
    description: 'Install and start ShopNx with these simple steps',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }],
        ['link', { rel: 'shortcut icon', type: "image/png", href: '/img/favicon.png' }]
    ],
    serviceWorker: true,
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Installation', link: '/installation-instructions.html' },
            { text: 'Guide', link: '/guide.html' },
            { text: 'Settings', link: '/settings.html' },
            { text: 'Manual', link: '/manual.html' },
            { text: 'Features', link: '/features.html' },
            { text: 'ShopNx', link: 'https://codecanyon.net/item/shopnx-angular4-single-page-shopping-cart-application/20338033' },
        ],
        serviceWorker: {
            updatePopup: true
        }
    }
}