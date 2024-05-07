/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() { // '/'경로를 '/home'으로 설정
        return [
          {
            source: "/",
            destination: "/home",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
