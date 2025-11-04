/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.golfinn.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.media.golfinn.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.lovepanda.com.br",
        pathname: "/**",
      },
    ],
  },
  // Otimização para reduzir o tamanho do JavaScript
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // Configuração do Turbopack (agora estável)
  turbopack: {
    resolveAlias: {
      // Configure aliases aqui se necessário
    },
    rules: {
      // Configure regras específicas de compilação aqui
    },
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },

  experimental: {
    // Otimizando imports de pacotes pesados
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-icons",
      "react-icons/si",
      "react-icons/fa",
      "react-icons/fa6",
      "react-icons/md",
      "react-icons/io",
      "react-icons/io5",
      "react-icons/bs",
      "react-icons/ri",
      "react-icons/fi",
      "react-icons/gi",
      "react-icons/wi",
      "react-icons/di",
      "react-icons/ai",
      "react-icons/bi",
      "react-icons/tb",
      "react-icons/go",
      "react-icons/gr",
      "react-icons/hi",
      "react-icons/hi2",
      "swiper",
      "@dnd-kit/core",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "canvas-confetti",
      "dayjs",
      "emoji-picker-react",
    ],
    // Otimização para navegação mais rápida
    optimisticClientCache: true,
  },
  // Configuração importante para o Next.js servir arquivos de mídia corretamente
  async headers() {
    return [
      // Configurações de CORS para PostHog Ingest, separadas por host
      ...[
        "lovepanda.com.br",
        "www.lovepanda.com.br",
        "lovepanda.es",
        "www.lovepanda.es",
      ].map((host) => ({
        source: "/ingest/:path*",
        has: [
          {
            type: "host",
            value: host,
          },
        ],
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: `https://${host}`, // Responde com o host exato que fez a requisição
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      })),
      {
        source: "/wrapped/:path*.png",
        headers: [
          {
            key: "Content-Type",
            value: "image/png",
          },
        ],
      },
      {
        source: "/wrapped/:path*.jpg",
        headers: [
          {
            key: "Content-Type",
            value: "image/jpeg",
          },
        ],
      },
      {
        source: "/wrapped/:path*.mp4",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4; charset=utf-8",
          },
        ],
      },
      {
        source: "/landing/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
        ],
      },
      // Adicionar CORS headers para permitir cookies cross-domain
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
