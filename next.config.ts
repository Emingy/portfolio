import type { NextConfig } from 'next';
import os from 'os';

const localNetworkIPs = Object.values(os.networkInterfaces())
    .flatMap((interfaces) => interfaces ?? [])
    .filter((inter) => inter.family === 'IPv4' && !inter.internal)
    .map((inter) => inter.address);

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `
            @use "@/styles/variables.scss" as *;
            @use "@/styles/mixins.scss" as *;
        `,
    },
    allowedDevOrigins: localNetworkIPs,
};

export default nextConfig;

import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev());
