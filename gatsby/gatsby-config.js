import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

console.log(process.env.SANITY_TOKEN);
export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ljh980yd',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
