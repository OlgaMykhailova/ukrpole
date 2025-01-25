/** @type {import('next-sitemap').IConfig} */

import { articlesList } from "./src/mockedData/articles.ts";
import { productsList } from "./src/mockedData/products.ts";

const articlesIds = articlesList.uk.map((article) => article.id);
const productsIds = productsList.uk.map(
  (product) => `${product.trademark.id}-${product.category}-${product.volume}`
);

async function getDynamicArticlesPages() {
  return articlesIds.map((id) => `/articles/${id}`);
}

async function getDynamicProductsPages() {
  return productsIds.map((id) => `/products/${id}`);
}

async function getDynamicPages() {
  const articlesPages = await getDynamicArticlesPages();
  const productsPages = await getDynamicProductsPages();

  return [...articlesPages, ...productsPages];
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  changefreq: "monthly",
  sitemapSize: 5000,
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/*" },
    ],
  },
  alternateRefs: [
    {
      href: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
      hreflang: "en",
    },
  ],
  additionalPaths: async (config) => {
    const staticPages = [
      {
        loc: "/",
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/about",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/products",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/cooperation",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/news",
        changefreq: "monthly",
        priority: 0.6,
      },
      {
        loc: "/contacts",
        changefreq: "monthly",
        priority: 0.6,
      },
      {
        loc: "/policy",
        changefreq: "monthly",
        priority: 0.5,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async (page) => {
        const transformed = await config.transform(config, page.loc);
        return {
          ...transformed,
          changefreq: page.changefreq,
          priority: page.priority,
        };
      })
    );

    const dynamicPages = await getDynamicPages(config);
    const dynamicPaths = await Promise.all(
      dynamicPages.map((page) => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};
