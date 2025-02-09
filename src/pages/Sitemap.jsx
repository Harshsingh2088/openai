// import React from "react";

// const Sitemap = () => {
//   return (
//     <pre>
//       {`<?xml version="1.0" encoding="UTF-8"?>
// <urlset
//       xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//       xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
//             http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
// <!-- SEO Optimized Sitemap for DKG Labs -->

// <url>
//   <loc>https://www.dkglabs.com/</loc>
//   <lastmod>2025-01-19T09:00:33+00:00</lastmod>
//   <changefreq>daily</changefreq>
//   <priority>1.0</priority>
// </url>

// <url>
//   <loc>https://www.dkglabs.com/about</loc>
//   <lastmod>2025-01-19T09:00:33+00:00</lastmod>
//   <changefreq>monthly</changefreq>
//   <priority>0.8</priority>
// </url>

// <url>
//   <loc>https://www.dkglabs.com/services</loc>
//   <lastmod>2025-01-19T09:00:33+00:00</lastmod>
//   <changefreq>weekly</changefreq>
//   <priority>0.9</priority>
// </url>

// <url>
//   <loc>https://www.dkglabs.com/blog</loc>
//   <lastmod>2025-01-19T09:00:33+00:00</lastmod>
//   <changefreq>daily</changefreq>
//   <priority>0.7</priority>
// </url>

// <url>
//   <loc>https://www.dkglabs.com/contact</loc>
//   <lastmod>2025-01-19T09:00:33+00:00</lastmod>
//   <changefreq>yearly</changefreq>
//   <priority>0.6</priority>
// </url>

// </urlset>`}
//     </pre>
//   );
// };

// export default Sitemap;




import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Sitemap = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if current route is /sitemap.xml
    if (location.pathname === '/sitemap.xml') {
      document.body.classList.add('sitemap-xml-route');
    } else {
      document.body.classList.remove('sitemap-xml-route');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('sitemap-xml-route');
    };
  }, [location]);

  const sitemaps = [
    {
      url: 'https://www.dkglabs.com/',
      lastModified: '2024-06-20 08:26 +00:00'
    },
    {
      url: 'https://brandlyng.com/page-sitemap.xml',
      lastModified: '2024-11-27 11:30 +00:00'
    },
    {
      url: 'https://brandlyng.com/category-sitemap.xml',
      lastModified: '2024-06-20 08:26 +00:00'
    },
    {
      url: 'https://brandlyng.com/author-sitemap.xml',
      lastModified: '2024-09-07 10:43 +00:00'
    }
  ];

  return (
    <div className="sitemap-container">
      <h1 className="sitemap-title">XML Sitemap</h1>
      
      <p className="sitemap-description">
        Generated by <a href="https://yoast.com/" className="yoast-link">Yoast SEO</a>
        , this is an XML Sitemap, meant for consumption by search engines.
      </p>
      
      <p className="sitemap-description">
        You can find more information about XML sitemaps on{' '}
        <a href="https://www.sitemaps.org/" className="sitemaps-link">sitemaps.org</a>.
      </p>
      
      <p className="sitemap-description">
        This XML Sitemap Index file contains {sitemaps.length} sitemaps.
      </p>

      <table className="sitemap-table">
        <thead>
          <tr>
            <th>Sitemap</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {sitemaps.map((sitemap, index) => (
            <tr key={index}>
              <td>
                <a href={sitemap.url}>{sitemap.url}</a>
              </td>
              <td>{sitemap.lastModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sitemap;