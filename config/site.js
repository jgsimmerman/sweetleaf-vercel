module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Sweet Leaf Succulents', // Navigation and Site Title
  titleAlt: 'Sweet Leaf Succulents and Ornamental Plants', // Title for JSONLD
  description:
    'Sweet Leaf Succulents and Ornamental Plants -- Now selling carnivorous plants!',
  url: 'https://sweetleaf.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://sweetleaf.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'SweetLeaf', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Sweet Leaf Succulents and Ornamental Plants, LLC', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@jacobsimmerman', // Twitter Username
};
