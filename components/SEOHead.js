import Head from 'next/head';

const defaultMeta = {
  title: 'Retto uPVC Makassar | Distributor Pintu & Jendela uPVC',
  description:
    'Distributor kusen uPVC terpercaya di Makassar. Solusi pintu & jendela uPVC berkualitas untuk hunian dan proyek komersial.',
  keywords:
    'Distributor Kusen uPVC, uPVC Door Indonesia, Pintu Sliding uPVC, Pintu uPVC Makassar, Jendela uPVC',
  url: 'https://retto-upvc-makassar.com'
};

const SEOHead = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  url = defaultMeta.url
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={`${defaultMeta.url}/images/og-image.svg`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${defaultMeta.url}/images/og-image.svg`} />
  </Head>
);

export default SEOHead;
