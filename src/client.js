import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ikgp9gk5',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skL6dxMfjJydPr51J4fd2AvJ84Exq40ZThx1VUOVeTi6kymYDS5n8fEtoSyQf5l4gFlxrMTwF1MHOGl9yWnmtP83nG4EVnxCRcCuaM688EbOr22SkzdEQKGd7MvIOesT7LxSjncAzRTm0eLc89lWo61OuwAiHgG6Lwday6UdKdekQRgiQkrN',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
