/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
                domains: ['s3-alpha-sig.figma.com'],
            },
};

export default nextConfig;
