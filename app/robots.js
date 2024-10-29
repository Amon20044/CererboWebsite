export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/','/events','/merch','/sponsors','/team','/contactUs'],
        disallow: '',
      },
      sitemap: 'https://cerebro2024.vercel.app/sitemap.xml',
    }
  }