import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Next Started",
  author: "HaiPT",
  description:
    "Next.js 14+ starter template with app router, Material UI, typesafe env, keycloak, icons and configs setup.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Material UI", "Keycloak"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/haipt28",
  },
  links: {
    github: "https://github.com/haipt28/nextjs-app-route-started",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
