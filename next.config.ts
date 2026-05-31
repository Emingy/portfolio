import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `
            @use "@/styles/variables.scss" as *;
            @use "@/styles/mixins.scss" as *;
        `,
    },
    allowedDevOrigins: ['192.168.0.218'],
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
