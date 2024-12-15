/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['ipfs.io',"gateway.pinata.cloud"], // Add 'ipfs.io' to allow images from this domain
    },
  };
  
  export default nextConfig;
  