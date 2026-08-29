// Injects the site's shared structured-data (JSON-LD) into every HTML page,
// automatically, at request time. This keeps the Organization/Person/Book
// info in ONE place (below) instead of pasted into every .html file.
//
// How it works:
// 1. Netlify runs this function on every request, right before the page is sent.
// 2. It looks at the page's own JSON-LD (if any) to see which of the shared
//    entities the page has already defined for itself.
// 3. It appends only the shared entities the page does NOT already define,
//    just before </head>.
//
// If you ever need to change the business address, author bio, or book
// details site-wide, edit SHARED_GRAPH below — every page picks it up on
// the next deploy automatically. No need to touch individual .html files.

const SHARED_GRAPH = [
  {
    "@type": "WebSite",
    "@id": "https://onlinedigitalfortress.com/#website",
    "url": "https://onlinedigitalfortress.com/",
    "name": "Online Digital Fortress",
    "description": "Building a Business That Outlasts Everything You Fear — Greg R. Traver's Triple Shield Architecture protects your revenue, operations, and IP from lawsuits.",
    "publisher": { "@id": "https://onlinedigitalfortress.com/#organization" }
  },
  {
    "@type": "Organization",
    "@id": "https://onlinedigitalfortress.com/#organization",
    "name": "Phoenix Rising Media LLC",
    "url": "https://onlinedigitalfortress.com/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 N. Gould Street #62245",
      "addressLocality": "Sheridan",
      "addressRegion": "WY",
      "postalCode": "82801",
      "addressCountry": "US"
    }
  },
  {
    "@type": "Person",
    "@id": "https://onlinedigitalfortress.com/#author",
    "name": "Greg R. Traver",
    "url": "https://onlinedigitalfortress.com/"
  },
  {
    "@type": "Book",
    "@id": "https://onlinedigitalfortress.com/#book",
    "name": "Online Digital Fortress",
    "alternateName": "Building a Business That Outlasts Everything You Fear",
    "author": { "@id": "https://onlinedigitalfortress.com/#author" },
    "publisher": { "@id": "https://onlinedigitalfortress.com/#organization" },
    "image": "https://onlinedigitalfortress.com/assets/images/book-cover-odf.jpg",
    "url": "https://onlinedigitalfortress.com/",
    "inLanguage": "en",
    "genre": "Business / Asset Protection",
    "keywords": "Triple Shield Architecture, business protection, asset protection, entity structuring",
    "isbn": "979-8-9963698-2-9",
    "copyrightHolder": {
      "@type": "Organization",
      "@id": "https://onlinedigitalfortress.com/#copyright-holder",
      "name": "Phoenix Star Holdings LLC",
      "description": "Holds the copyright to Online Digital Fortress; Phoenix Rising Media LLC publishes the book under license from this entity."
    }
  }
];

export default async (request, context) => {
  const response = await context.next();

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  let html = await response.text();
  if (!html.includes("</head>")) {
    return new Response(html, response);
  }

  // Find shared entities the page already defines fully for itself,
  // so we never inject a duplicate or conflicting copy.
  const existingIds = new Set();
  const scriptPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = scriptPattern.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      const nodes = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
      for (const node of nodes) {
        if (node && node["@id"] && node["@type"]) {
          existingIds.add(node["@id"]);
        }
      }
    } catch (e) {
      // Malformed JSON-LD on the page shouldn't block serving it.
    }
  }

  const nodesToInject = SHARED_GRAPH.filter((node) => !existingIds.has(node["@id"]));
  if (nodesToInject.length === 0) {
    return new Response(html, response);
  }

  const block =
    '<script type="application/ld+json">\n' +
    JSON.stringify({ "@context": "https://schema.org", "@graph": nodesToInject }, null, 2) +
    "\n</script>\n";

  html = html.replace("</head>", block + "</head>");

  return new Response(html, response);
};

export const config = { path: "/*" };
