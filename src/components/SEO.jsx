import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, banner, pathname, price, sku, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleAlt,
          shortName,
          author,
          siteLanguage,
          logo,
          siteUrl,
          pathPrefix,
          defaultDescription,
          defaultBanner,
          twitter,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}/${banner || defaultBanner}`,
        url: `${siteUrl}${pathname || '/'}`,
        price: `$${price}`,
      };
      const realPrefix = pathPrefix === '/' ? '' : pathPrefix;
      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: titleAlt || '',
        },
      ];
      if (article) {
        schemaOrgJSONLDProduct = [
          {
            '@context': 'http://schema.org',
            '@type': 'Product',
            '@id': seo.url,
            url: seo.url,
            name: title,
            sku: sku,
            description: description,
            //alternateName: titleAlt || '',
            //headline: title,
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            brand: 'Sweet Leaf Succulents and Ornamental Plants',
            offers: {
              '@type': 'Offer',
              "availability": "http://schema.org/InStock",
              price: seo.price,
              "priceCurrency": "USD"
            },
            
            //datePublished: buildTime,
            //dateModified: buildTime,
            // author: {
            //   '@type': 'Organization',
            //   name: author,
            // },
            // publisher: {
            //   '@type': 'Organization',
            //   name: author,
            //   logo: {
            //     '@type': 'ImageObject',
            //     url: siteUrl + "/" + realPrefix + logo,
            //   },
            // },
            //isPartOf: siteUrl,
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl,
            },
          },
        ];
      }
      return (
        <>
          <Helmet title={seo.title}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <meta name="p:domain_verify" content="25dbb4735617b64cd0bafe0086789449"/>
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLDProduct)}
            </script>

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://googletagmanager.com/gtag/js?id=UA-158535531-1"></script>
            {/* <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'UA-158535531-1');
            </script> */}

            {/* OpenGraph  */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={article ? 'article' : null} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
          </Helmet>
        </>
      );
    }}
  />
);
//   }
// }

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  price: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  price: null,
};

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        titleAlt
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        defaultBanner: banner
        twitter
      }
    }
  }
`;
