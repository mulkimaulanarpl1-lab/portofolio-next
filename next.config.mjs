/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yflkvrebccomeusvepia.supabase.co",
        pathname: "/storage/v1/object/public/proyek/**",
      },
    ],
  },
};

export default nextConfig;