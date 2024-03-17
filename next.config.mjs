/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ibb.co',
            port: '',
            pathname: '/denilson-david/',
          },
        ],
        domains: ['i.ibb.co', 'ibb.co'],
      },
};

export default nextConfig;
