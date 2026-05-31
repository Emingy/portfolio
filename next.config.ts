import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import os from 'os';

const withNextIntl = createNextIntlPlugin('./src/intl/request.ts');

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

export default withNextIntl(nextConfig);

import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev());
