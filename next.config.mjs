import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  fallbacks: {
    document: "/~offline",
    font: "/Inter-Medium.ttf",
    data: "/fallback.json",
  },
});

const nextConfig = {};

export default withPWA(nextConfig);
