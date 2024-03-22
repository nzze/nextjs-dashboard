/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/cool-page',
                destination: '/dashboard'
            }
        ];
    }
};

module.exports = nextConfig;
