const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "weekly", priority: 0.8 },
    { url: "/refund-policy", changefreq: "monthly", priority: 0.7 },
    { url: "/terms", changefreq: "monthly", priority: 0.7 },
    { url: "/privacy-policy", changefreq: "monthly", priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: "https://bornosoftnr.com" });

streamToPromise(sitemap.pipe(createWriteStream("public/sitemap.xml")))
    .then(() => console.log("Sitemap created successfully"));

links.forEach((link) => sitemap.write(link));
sitemap.end();
