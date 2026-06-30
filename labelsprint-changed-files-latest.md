# LabelsPrint changed files

Rolled back the latest SEO/AEO/GEO homepage rewrite and restored the prior hidden static SEO shell, metadata, schema, and app brand heading while preserving app functionality and earlier refinements.

## index.html
``html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LabelsPrint - Free Avery Label Maker</title>
    <meta name="description" content="LabelsPrint is a free, no-signup Avery label maker and mail merge label tool that runs in your browser. Upload a CSV, paste data, or enter labels manually, then export print-ready PDF or DOCX files.">
    <meta name="keywords" content="avery label maker, avery 5160 labels, free label maker, mail merge labels, Avery mail merge, pdf label generator, csv labels, docx labels">
    <meta name="theme-color" content="#0039A6">
    <link rel="canonical" href="https://labelsprint.app/">
    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="stylesheet" href="/src/index.css">
    <style>
      .seo-static-content {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: normal;
        border: 0;
      }
    </style>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebApplication",
            "@id": "https://labelsprint.app/#webapp",
            "name": "LabelsPrint",
            "url": "https://labelsprint.app/",
            "description": "LabelsPrint is a free, no-signup browser-based Avery label maker and mail merge label tool for CSV upload, pasted data, manual entry, Avery template search, and PDF or DOCX export.",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://labelsprint.app/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is LabelsPrint?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LabelsPrint is a free browser-based label maker for creating Avery-compatible labels from CSV uploads, pasted data, or manual entry."
                }
              },
              {
                "@type": "Question",
                "name": "Does LabelsPrint work with Avery 5160 and other Avery labels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. LabelsPrint supports Avery 5160 labels and includes a searchable Avery template catalog with calibrated layouts for popular Avery formats."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to create an account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. LabelsPrint is free to use and does not require sign-up or an account."
                }
              },
              {
                "@type": "Question",
                "name": "Can I upload a CSV to print labels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You can upload a CSV file, map or auto-detect columns, preview the label layout, and export the finished labels."
                }
              },
              {
                "@type": "Question",
                "name": "What file formats can I export?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LabelsPrint exports labels as PDF and DOCX files."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use LabelsPrint for mail merge labels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. LabelsPrint can create mail merge labels from CSV data, pasted rows, manual entry, or selected Google Sheets rows in the Workspace extension."
                }
              }
            ]
          },
          {
            "@type": "HowTo",
            "@id": "https://labelsprint.app/#how-to",
            "name": "How to Print Avery Mail Merge Labels with LabelsPrint",
            "description": "Use LabelsPrint to create Avery mail merge labels from CSV data, pasted text, manual entry, or Google Sheets data, then export a print-ready PDF or DOCX file.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Choose your input method",
                "text": "Upload a CSV, paste data, or enter labels manually."
              },
              {
                "@type": "HowToStep",
                "name": "Map your columns",
                "text": "Tell LabelsPrint which column is the label text (or use auto-detect)."
              },
              {
                "@type": "HowToStep",
                "name": "Select your label format",
                "text": "Search the Avery catalog and choose a calibrated sheet layout."
              },
              {
                "@type": "HowToStep",
                "name": "Preview your labels",
                "text": "Review layout before exporting."
              },
              {
                "@type": "HowToStep",
                "name": "Export and print",
                "text": "Download as PDF or DOCX, then print on your label sheets."
              }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://labelsprint.app/#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://labelsprint.app/"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://labelsprint.app/#website",
            "name": "LabelsPrint",
            "url": "https://labelsprint.app/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://labelsprint.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      }
    </script>
    <script type="importmap">
      {
        "imports": {
          "docx": "https://esm.sh/docx@8.6.0",
          "jspdf": "https://esm.sh/jspdf@2.5.2",
          "lucide": "https://esm.sh/lucide@0.468.0",
          "papaparse": "https://esm.sh/papaparse@5.4.1",
          "react": "https://esm.sh/react@18.3.1",
          "react-dom/client": "https://esm.sh/react-dom@18.3.1/client"
        }
      }
    </script>
  </head>
  <body>
    <main id="seo-content" class="seo-static-content">
      <h1>Free Avery Label Maker â€” No Sign-Up Required</h1>
      <p>LabelsPrint is a free browser-based Avery label maker and mail merge label tool for creating print-ready labels without installing software or creating an account. Upload a CSV, paste label data, or enter labels manually, then preview your sheet and export as PDF or DOCX.</p>
      <p>LabelsPrint includes a searchable Avery template catalog with calibrated layouts for popular Avery address, shipping, return, file folder, badge, card, and specialty formats. The Google Workspace extension supports mail merge labels from selected Google Sheets rows.</p>

      <section aria-labelledby="seo-features-title">
        <h2 id="seo-features-title">LabelsPrint Features</h2>
        <ul>
          <li>CSV upload for bulk label data</li>
          <li>Paste rows or address blocks directly into the app</li>
          <li>Manual entry for one-off label sheets</li>
          <li>Mail merge labels from spreadsheet rows</li>
          <li>Searchable Avery template catalog with popular calibrated layouts</li>
          <li>PDF and DOCX export for printing</li>
        </ul>
      </section>

      <section aria-labelledby="seo-faq-title">
        <h2 id="seo-faq-title">Frequently Asked Questions</h2>
        <article>
          <h3>What is LabelsPrint?</h3>
          <p>LabelsPrint is a free browser-based label maker for creating Avery-compatible labels from CSV uploads, pasted data, or manual entry.</p>
        </article>
        <article>
          <h3>Does LabelsPrint work with Avery 5160 and other Avery labels?</h3>
          <p>Yes. LabelsPrint supports Avery 5160 labels and includes a searchable Avery template catalog with calibrated layouts for popular Avery formats.</p>
        </article>
        <article>
          <h3>Do I need to create an account?</h3>
          <p>No. LabelsPrint is free to use and does not require sign-up or an account.</p>
        </article>
        <article>
          <h3>Can I upload a CSV to print labels?</h3>
          <p>Yes. You can upload a CSV file, map or auto-detect columns, preview the label layout, and export the finished labels.</p>
        </article>
        <article>
          <h3>What file formats can I export?</h3>
          <p>LabelsPrint exports labels as PDF and DOCX files.</p>
        </article>
        <article>
          <h3>Can I use LabelsPrint for mail merge labels?</h3>
          <p>Yes. LabelsPrint can create mail merge labels from CSV data, pasted rows, manual entry, or selected Google Sheets rows in the Workspace extension.</p>
        </article>
      </section>

      <section aria-labelledby="seo-howto-title">
        <h2 id="seo-howto-title">How to Print Avery Mail Merge Labels with LabelsPrint</h2>
        <ol>
          <li><strong>Choose your input method</strong> â€” Upload a CSV, paste data, or enter labels manually</li>
          <li><strong>Map your columns</strong> â€” Tell LabelsPrint which column is the label text (or use auto-detect)</li>
          <li><strong>Select your label format</strong> â€” Search the Avery catalog and choose a calibrated sheet layout</li>
          <li><strong>Preview your labels</strong> â€” Review layout before exporting</li>
          <li><strong>Export and print</strong> â€” Download as PDF or DOCX, then print on your label sheets</li>
        </ol>
      </section>
    </main>

    <div id="app"></div>
    <div id="howto-modal-root"></div>

    <footer class="site-footer">
      <a href="/privacy.html">Privacy Policy</a>
    </footer>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>

````

## README.md
``markdown
# LabelsPrint

LabelsPrint is a production-ready Avery-compatible label generator for standalone web use and Google Workspace sidebar workflows.

## What It Supports

- Grid-based Avery template selection for common address, shipping, return, file folder, badge, card, and square label formats.
- Comprehensive cleaned Avery catalog lookup with duplicate consolidation and normalized leading-zero/equivalent template codes.
- Manual entry, pasted rows, quoted CSV parsing, CSV upload, and selected Google Sheets ranges.
- Per-label modal overrides plus print-preview rendering that shares geometry with PDF and DOCX export.
- Client-side PDF/DOCX generation with export progress feedback.

## Security Notes

- The browser app does not require API keys.
- Imported address data is kept in memory by default. Device storage is limited to non-sensitive preferences such as selected template, typography, and zoom.
- Project export is an explicit user action that downloads a local JSON file.
- The Google Workspace sidebar uses Apps Script to read only the selected range, then creates the requested Google Doc or PDF output in the user's Drive.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The generated Avery catalog index lives in `src/averyTemplateCatalog.js`. It stores safe template codes only; raw URLs and pasted page fragments are intentionally excluded. The Workspace integration scaffold lives in `workspace-extension/`.

````

## public/privacy.html
``html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - LabelsPrint</title>
    <meta name="description" content="LabelsPrint privacy policy. LabelsPrint processes label data locally in your browser and does not collect, store, or transmit your data.">
    <link rel="canonical" href="https://labelsprint.app/privacy.html">
    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <style>
      body {
        margin: 0;
        background: #f8fafc;
        color: #111827;
        font-family: "Circular", "Diatype", Arial, Helvetica, sans-serif;
        line-height: 1.6;
      }

      main {
        max-width: 720px;
        margin: 0 auto;
        padding: 48px 20px;
      }

      h1 {
        margin: 0 0 16px;
        font-size: 36px;
        line-height: 1.1;
      }

      p {
        margin: 0 0 14px;
        color: #374151;
        font-size: 16px;
      }

      a {
        color: #0b4aa2;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Privacy Policy</h1>
      <p>LabelsPrint processes all label data locally in your browser. No data is collected, stored, or transmitted by LabelsPrint.</p>
      <p>LabelsPrint does not use cookies. LabelsPrint does not use analytics yet.</p>
      <p><a href="/">Back to LabelsPrint</a></p>
    </main>
  </body>
</html>

````

## src/averyTemplateCatalog.js
``javascript
// Generated from Avery template exports. Keep this file free of raw URLs or pasted page fragments.
export const AVERY_TEMPLATE_CATALOG = Object.freeze([
    {
        "code":  "11102",
        "codes":  [
                      "11102"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11109",
        "codes":  [
                      "11109"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11110",
        "codes":  [
                      "11110"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11111",
        "codes":  [
                      "11111"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11112",
        "codes":  [
                      "11112"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11113",
        "codes":  [
                      "11113"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11115",
        "codes":  [
                      "11115"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11116",
        "codes":  [
                      "11116"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11121",
        "codes":  [
                      "11121"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11122",
        "codes":  [
                      "11122"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11123",
        "codes":  [
                      "11123"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11124",
        "codes":  [
                      "11124"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11136",
        "codes":  [
                      "11136"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11137",
        "codes":  [
                      "11137"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11138",
        "codes":  [
                      "11138"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11139",
        "codes":  [
                      "11139"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11144",
        "codes":  [
                      "11144"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11148",
        "codes":  [
                      "11148"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11149",
        "codes":  [
                      "11149"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11150",
        "codes":  [
                      "11150"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11152",
        "codes":  [
                      "11152"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11153",
        "codes":  [
                      "11153"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11160",
        "codes":  [
                      "11160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11161",
        "codes":  [
                      "11161"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11162",
        "codes":  [
                      "11162"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11163",
        "codes":  [
                      "11163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11164",
        "codes":  [
                      "11164"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11165",
        "codes":  [
                      "11165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11171",
        "codes":  [
                      "11171"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11172",
        "codes":  [
                      "11172"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11173",
        "codes":  [
                      "11173"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11178",
        "codes":  [
                      "11178"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11179",
        "codes":  [
                      "11179"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11185",
        "codes":  [
                      "11185"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11189",
        "codes":  [
                      "11189"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11191",
        "codes":  [
                      "11191"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11192",
        "codes":  [
                      "11192"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11194",
        "codes":  [
                      "11194"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11220",
        "codes":  [
                      "11220"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11221",
        "codes":  [
                      "11221"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11222",
        "codes":  [
                      "11222"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11223",
        "codes":  [
                      "11223"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11225",
        "codes":  [
                      "11225"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11230",
        "codes":  [
                      "11230"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11231",
        "codes":  [
                      "11231"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11253",
        "codes":  [
                      "11253"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11260",
        "codes":  [
                      "11260"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11261",
        "codes":  [
                      "11261"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11270",
        "codes":  [
                      "11270"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11271",
        "codes":  [
                      "11271"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11273",
        "codes":  [
                      "11273"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11275",
        "codes":  [
                      "11275"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11276",
        "codes":  [
                      "11276"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11277",
        "codes":  [
                      "11277"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11278",
        "codes":  [
                      "11278"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11279",
        "codes":  [
                      "11279"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11290",
        "codes":  [
                      "11290"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11387",
        "codes":  [
                      "11387"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11388",
        "codes":  [
                      "11388"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11401",
        "codes":  [
                      "11401"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11406",
        "codes":  [
                      "11406"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11407",
        "codes":  [
                      "11407"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11408",
        "codes":  [
                      "11408"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11409",
        "codes":  [
                      "11409"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11410",
        "codes":  [
                      "11410"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11411",
        "codes":  [
                      "11411"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11412",
        "codes":  [
                      "11412"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11413",
        "codes":  [
                      "11413"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11414",
        "codes":  [
                      "11414"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11415",
        "codes":  [
                      "11415"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11416",
        "codes":  [
                      "11416"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11417",
        "codes":  [
                      "11417"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11418",
        "codes":  [
                      "11418"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11419",
        "codes":  [
                      "11419"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11420",
        "codes":  [
                      "11420"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11421",
        "codes":  [
                      "11421"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11422",
        "codes":  [
                      "11422"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11423",
        "codes":  [
                      "11423"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11424",
        "codes":  [
                      "11424"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11426",
        "codes":  [
                      "11426"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11427",
        "codes":  [
                      "11427"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11430",
        "codes":  [
                      "11430"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11431",
        "codes":  [
                      "11431"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11432",
        "codes":  [
                      "11432"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11433",
        "codes":  [
                      "11433"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11436",
        "codes":  [
                      "11436"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11437",
        "codes":  [
                      "11437"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11438",
        "codes":  [
                      "11438"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11439",
        "codes":  [
                      "11439"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11440",
        "codes":  [
                      "11440"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11441",
        "codes":  [
                      "11441"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11443",
        "codes":  [
                      "11443"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11444",
        "codes":  [
                      "11444"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11446",
        "codes":  [
                      "11446"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11447",
        "codes":  [
                      "11447"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11449",
        "codes":  [
                      "11449"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11450",
        "codes":  [
                      "11450"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11451",
        "codes":  [
                      "11451"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11452",
        "codes":  [
                      "11452"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11453",
        "codes":  [
                      "11453"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11512",
        "codes":  [
                      "11512"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11518",
        "codes":  [
                      "11518"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11519",
        "codes":  [
                      "11519"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11520",
        "codes":  [
                      "11520"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11525",
        "codes":  [
                      "11525"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11526",
        "codes":  [
                      "11526"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11527",
        "codes":  [
                      "11527"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11529",
        "codes":  [
                      "11529"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11534",
        "codes":  [
                      "11534"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11535",
        "codes":  [
                      "11535"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11536",
        "codes":  [
                      "11536"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11537",
        "codes":  [
                      "11537"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11556",
        "codes":  [
                      "11556"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11567",
        "codes":  [
                      "11567"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11568",
        "codes":  [
                      "11568"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11569",
        "codes":  [
                      "11569"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11580",
        "codes":  [
                      "11580"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11819",
        "codes":  [
                      "11819"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11820",
        "codes":  [
                      "11820"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11822",
        "codes":  [
                      "11822"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11829",
        "codes":  [
                      "11829"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11835",
        "codes":  [
                      "11835"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11836",
        "codes":  [
                      "11836"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11899",
        "codes":  [
                      "11899"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11900",
        "codes":  [
                      "11900"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11901",
        "codes":  [
                      "11901"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11902",
        "codes":  [
                      "11902"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11903",
        "codes":  [
                      "11903"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11906",
        "codes":  [
                      "11906"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11907",
        "codes":  [
                      "11907"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11908",
        "codes":  [
                      "11908"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11956",
        "codes":  [
                      "11956"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11982",
        "codes":  [
                      "11982"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11983",
        "codes":  [
                      "11983"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11984",
        "codes":  [
                      "11984"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11988",
        "codes":  [
                      "11988"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11989",
        "codes":  [
                      "11989"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "11990",
        "codes":  [
                      "11990"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11991",
        "codes":  [
                      "11991"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11992",
        "codes":  [
                      "11992"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11993",
        "codes":  [
                      "11993"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11994",
        "codes":  [
                      "11994"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11995",
        "codes":  [
                      "11995"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11998",
        "codes":  [
                      "11998"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "11999",
        "codes":  [
                      "11999"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "120",
        "codes":  [
                      "120"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12171",
        "codes":  [
                      "12171"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12172",
        "codes":  [
                      "12172"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12173",
        "codes":  [
                      "12173"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "1223",
        "codes":  [
                      "1223"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12260",
        "codes":  [
                      "12260"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12261",
        "codes":  [
                      "12261"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12433",
        "codes":  [
                      "12433"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12449",
        "codes":  [
                      "12449"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12450",
        "codes":  [
                      "12450"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12451",
        "codes":  [
                      "12451"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "12452",
        "codes":  [
                      "12452"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "12453",
        "codes":  [
                      "12453"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "12584",
        "codes":  [
                      "12584"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13150",
        "codes":  [
                      "13150"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13151",
        "codes":  [
                      "13151"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13152",
        "codes":  [
                      "13152"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13153",
        "codes":  [
                      "13153"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13154",
        "codes":  [
                      "13154"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13155",
        "codes":  [
                      "13155"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13156",
        "codes":  [
                      "13156"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13157",
        "codes":  [
                      "13157"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13158",
        "codes":  [
                      "13158"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "13159",
        "codes":  [
                      "13159"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "1416",
        "codes":  [
                      "1416"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "14201",
        "codes":  [
                      "14201"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "14202",
        "codes":  [
                      "14202"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "14203",
        "codes":  [
                      "14203"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "14205",
        "codes":  [
                      "14205"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "14213",
        "codes":  [
                      "14213"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "14221",
        "codes":  [
                      "14221"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "14225",
        "codes":  [
                      "14225"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "14226",
        "codes":  [
                      "14226"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "14431",
        "codes":  [
                      "14431"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "144433",
        "codes":  [
                      "144433"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "14497",
        "codes":  [
                      "14497"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15009",
        "codes":  [
                      "15009"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15160",
        "codes":  [
                      "15160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15162",
        "codes":  [
                      "15162"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15163",
        "codes":  [
                      "15163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15219",
        "codes":  [
                      "15219"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15264",
        "codes":  [
                      "15264"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15265",
        "codes":  [
                      "15265"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15267",
        "codes":  [
                      "15267"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15510",
        "codes":  [
                      "15510"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15513",
        "codes":  [
                      "15513"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15516",
        "codes":  [
                      "15516"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15563",
        "codes":  [
                      "15563"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15567",
        "codes":  [
                      "15567"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15644",
        "codes":  [
                      "15644"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15660",
        "codes":  [
                      "15660"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15661",
        "codes":  [
                      "15661"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15662",
        "codes":  [
                      "15662"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15663",
        "codes":  [
                      "15663"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15664",
        "codes":  [
                      "15664"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15665",
        "codes":  [
                      "15665"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15667",
        "codes":  [
                      "15667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15695",
        "codes":  [
                      "15695"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15700",
        "codes":  [
                      "15700"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15702",
        "codes":  [
                      "15702"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "15871",
        "codes":  [
                      "15871"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "15960",
        "codes":  [
                      "15960"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "16062",
        "codes":  [
                      "16062"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "16063",
        "codes":  [
                      "16063"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "16069",
        "codes":  [
                      "16069"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16110",
        "codes":  [
                      "16110"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16119",
        "codes":  [
                      "16119"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16152",
        "codes":  [
                      "16152"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16153",
        "codes":  [
                      "16153"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16154",
        "codes":  [
                      "16154"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "162421",
        "codes":  [
                      "162421"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16280",
        "codes":  [
                      "16280"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "1641",
        "codes":  [
                      "1641"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16432",
        "codes":  [
                      "16432"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16434",
        "codes":  [
                      "16434"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16435",
        "codes":  [
                      "16435"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16460",
        "codes":  [
                      "16460"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "16464",
        "codes":  [
                      "16464"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16470",
        "codes":  [
                      "16470"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "167040",
        "codes":  [
                      "167040"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16711",
        "codes":  [
                      "16711"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16750",
        "codes":  [
                      "16750"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16751",
        "codes":  [
                      "16751"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "16790",
        "codes":  [
                      "16790"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "16791",
        "codes":  [
                      "16791"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "16795",
        "codes":  [
                      "16795"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "17221",
        "codes":  [
                      "17221"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "181126",
        "codes":  [
                      "181126"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18126",
        "codes":  [
                      "18126"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18160",
        "codes":  [
                      "18160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18162",
        "codes":  [
                      "18162"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18163",
        "codes":  [
                      "18163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18167",
        "codes":  [
                      "18167"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18195",
        "codes":  [
                      "18195"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "18260",
        "codes":  [
                      "18260"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18262",
        "codes":  [
                      "18262"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18263",
        "codes":  [
                      "18263"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18294",
        "codes":  [
                      "18294"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18295",
        "codes":  [
                      "18295"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18296",
        "codes":  [
                      "18296"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "1860",
        "codes":  [
                      "1860"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18602",
        "codes":  [
                      "18602"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18607",
        "codes":  [
                      "18607"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18608",
        "codes":  [
                      "18608"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "1866",
        "codes":  [
                      "1866"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18660",
        "codes":  [
                      "18660"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "18661",
        "codes":  [
                      "18661"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18662",
        "codes":  [
                      "18662"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18663",
        "codes":  [
                      "18663"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18664",
        "codes":  [
                      "18664"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18665",
        "codes":  [
                      "18665"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "186660",
        "codes":  [
                      "186660"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18667",
        "codes":  [
                      "18667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18695",
        "codes":  [
                      "18695"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18820",
        "codes":  [
                      "18820"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18863",
        "codes":  [
                      "18863"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "18871",
        "codes":  [
                      "18871"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "19801",
        "codes":  [
                      "19801"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "19802",
        "codes":  [
                      "19802"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "19883",
        "codes":  [
                      "19883"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20254",
        "codes":  [
                      "20254"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20265",
        "codes":  [
                      "20265"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20267",
        "codes":  [
                      "20267"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20268",
        "codes":  [
                      "20268"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20270",
        "codes":  [
                      "20270"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20271",
        "codes":  [
                      "20271"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20272",
        "codes":  [
                      "20272"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "20273",
        "codes":  [
                      "20273"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2100",
        "codes":  [
                      "2100"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2102",
        "codes":  [
                      "2102"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2103",
        "codes":  [
                      "2103"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2105",
        "codes":  [
                      "2105"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2106",
        "codes":  [
                      "2106"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2109",
        "codes":  [
                      "2109"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2110",
        "codes":  [
                      "2110"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2111",
        "codes":  [
                      "2111"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2113",
        "codes":  [
                      "2113"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2160",
        "codes":  [
                      "2160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2162",
        "codes":  [
                      "2162"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "2163",
        "codes":  [
                      "2163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2164",
        "codes":  [
                      "2164"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2180",
        "codes":  [
                      "2180"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "2181",
        "codes":  [
                      "2181"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2186",
        "codes":  [
                      "2186"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2207",
        "codes":  [
                      "2207"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "2209",
        "codes":  [
                      "2209"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2213",
        "codes":  [
                      "2213"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2217",
        "codes":  [
                      "2217"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22205",
        "codes":  [
                      "22205"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22206",
        "codes":  [
                      "22206"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2222",
        "codes":  [
                      "2222"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2224",
        "codes":  [
                      "2224"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2225",
        "codes":  [
                      "2225"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22261",
        "codes":  [
                      "22261"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2228",
        "codes":  [
                      "2228"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2230",
        "codes":  [
                      "2230"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2234",
        "codes":  [
                      "2234"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2235",
        "codes":  [
                      "2235"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2236",
        "codes":  [
                      "2236"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22486",
        "codes":  [
                      "22486"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22512",
        "codes":  [
                      "22512"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22513",
        "codes":  [
                      "22513"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22612A",
        "codes":  [
                      "22612A"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22617",
        "codes":  [
                      "22617"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2275",
        "codes":  [
                      "2275"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22802",
        "codes":  [
                      "22802"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22803",
        "codes":  [
                      "22803"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22804",
        "codes":  [
                      "22804"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22804AA",
        "codes":  [
                      "22804AA"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22805",
        "codes":  [
                      "22805"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22806",
        "codes":  [
                      "22806"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22807",
        "codes":  [
                      "22807"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22808",
        "codes":  [
                      "22808"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22809",
        "codes":  [
                      "22809"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22812",
        "codes":  [
                      "22812"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22814",
        "codes":  [
                      "22814"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22815",
        "codes":  [
                      "22815"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22816",
        "codes":  [
                      "22816"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22817",
        "codes":  [
                      "22817"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22818",
        "codes":  [
                      "22818"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22819",
        "codes":  [
                      "22819"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22820",
        "codes":  [
                      "22820"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22821",
        "codes":  [
                      "22821"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22822",
        "codes":  [
                      "22822"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22824",
        "codes":  [
                      "22824"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22825",
        "codes":  [
                      "22825"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22826",
        "codes":  [
                      "22826"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22827",
        "codes":  [
                      "22827"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22828",
        "codes":  [
                      "22828"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22829",
        "codes":  [
                      "22829"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22830",
        "codes":  [
                      "22830"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22831",
        "codes":  [
                      "22831"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22832",
        "codes":  [
                      "22832"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22835",
        "codes":  [
                      "22835"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22836",
        "codes":  [
                      "22836"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22837",
        "codes":  [
                      "22837"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22846",
        "codes":  [
                      "22846"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22847",
        "codes":  [
                      "22847"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22853",
        "codes":  [
                      "22853"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22854",
        "codes":  [
                      "22854"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22855",
        "codes":  [
                      "22855"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22856",
        "codes":  [
                      "22856"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22857",
        "codes":  [
                      "22857"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2287",
        "codes":  [
                      "2287"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22876",
        "codes":  [
                      "22876"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22877",
        "codes":  [
                      "22877"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "228822",
        "codes":  [
                      "228822"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22890",
        "codes":  [
                      "22890"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22920",
        "codes":  [
                      "22920"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22921",
        "codes":  [
                      "22921"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22922",
        "codes":  [
                      "22922"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22923",
        "codes":  [
                      "22923"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22924",
        "codes":  [
                      "22924"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22925",
        "codes":  [
                      "22925"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22926",
        "codes":  [
                      "22926"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22927",
        "codes":  [
                      "22927"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22928",
        "codes":  [
                      "22928"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22929",
        "codes":  [
                      "22929"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "22930",
        "codes":  [
                      "22930"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22931",
        "codes":  [
                      "22931"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22932",
        "codes":  [
                      "22932"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22933",
        "codes":  [
                      "22933"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22934",
        "codes":  [
                      "22934"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22960",
        "codes":  [
                      "22960"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22961",
        "codes":  [
                      "22961"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22962",
        "codes":  [
                      "22962"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22963",
        "codes":  [
                      "22963"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "22964",
        "codes":  [
                      "22964"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "2311",
        "codes":  [
                      "2311"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "23120",
        "codes":  [
                      "23120"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "23121",
        "codes":  [
                      "23121"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2314",
        "codes":  [
                      "2314"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2317",
        "codes":  [
                      "2317"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2318",
        "codes":  [
                      "2318"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "23280",
        "codes":  [
                      "23280"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "23281",
        "codes":  [
                      "23281"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "23284",
        "codes":  [
                      "23284"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "23285",
        "codes":  [
                      "23285"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24487",
        "codes":  [
                      "24487"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24900",
        "codes":  [
                      "24900"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24902",
        "codes":  [
                      "24902"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24903",
        "codes":  [
                      "24903"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24909",
        "codes":  [
                      "24909"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24911",
        "codes":  [
                      "24911"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24912",
        "codes":  [
                      "24912"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24913",
        "codes":  [
                      "24913"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24915",
        "codes":  [
                      "24915"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24916",
        "codes":  [
                      "24916"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24918",
        "codes":  [
                      "24918"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24920",
        "codes":  [
                      "24920"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24922",
        "codes":  [
                      "24922"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24924",
        "codes":  [
                      "24924"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24925",
        "codes":  [
                      "24925"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24926",
        "codes":  [
                      "24926"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24927",
        "codes":  [
                      "24927"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24928",
        "codes":  [
                      "24928"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2493",
        "codes":  [
                      "2493"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "2494",
        "codes":  [
                      "2494"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24943",
        "codes":  [
                      "24943"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "2495",
        "codes":  [
                      "2495"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "24950",
        "codes":  [
                      "24950"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24951",
        "codes":  [
                      "24951"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24963",
        "codes":  [
                      "24963"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24974",
        "codes":  [
                      "24974"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24975",
        "codes":  [
                      "24975"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24976",
        "codes":  [
                      "24976"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "24977",
        "codes":  [
                      "24977"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "25263",
        "codes":  [
                      "25263"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "252890",
        "codes":  [
                      "252890"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "25395",
        "codes":  [
                      "25395"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "25456",
        "codes":  [
                      "25456"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "25995",
        "codes":  [
                      "25995"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "27871",
        "codes":  [
                      "27871"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "27881",
        "codes":  [
                      "27881"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "27882",
        "codes":  [
                      "27882"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "27883",
        "codes":  [
                      "27883"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "27901",
        "codes":  [
                      "27901"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "27902",
        "codes":  [
                      "27902"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "27951",
        "codes":  [
                      "27951"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28371",
        "codes":  [
                      "28371"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "28660",
        "codes":  [
                      "28660"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "28667",
        "codes":  [
                      "28667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28669",
        "codes":  [
                      "28669"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28872",
        "codes":  [
                      "28872"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28873",
        "codes":  [
                      "28873"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28876",
        "codes":  [
                      "28876"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28877",
        "codes":  [
                      "28877"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "28878",
        "codes":  [
                      "28878"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "28920",
        "codes":  [
                      "28920"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "29203",
        "codes":  [
                      "29203"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "30600",
        "codes":  [
                      "30600"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "30601",
        "codes":  [
                      "30601"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "30603",
        "codes":  [
                      "30603"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "30604",
        "codes":  [
                      "30604"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "30605",
        "codes":  [
                      "30605"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3102",
        "codes":  [
                      "3102"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3111",
        "codes":  [
                      "3111"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3112",
        "codes":  [
                      "3112"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3114",
        "codes":  [
                      "3114"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32010",
        "codes":  [
                      "32010"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32011",
        "codes":  [
                      "32011"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32012",
        "codes":  [
                      "32012"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32014",
        "codes":  [
                      "32014"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32017",
        "codes":  [
                      "32017"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32020",
        "codes":  [
                      "32020"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32021",
        "codes":  [
                      "32021"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32022",
        "codes":  [
                      "32022"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32023",
        "codes":  [
                      "32023"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32029",
        "codes":  [
                      "32029"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32030",
        "codes":  [
                      "32030"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32031",
        "codes":  [
                      "32031"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32032",
        "codes":  [
                      "32032"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32036",
        "codes":  [
                      "32036"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32040",
        "codes":  [
                      "32040"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32060",
        "codes":  [
                      "32060"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32061",
        "codes":  [
                      "32061"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32062",
        "codes":  [
                      "32062"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32063",
        "codes":  [
                      "32063"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32064",
        "codes":  [
                      "32064"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32065",
        "codes":  [
                      "32065"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32080",
        "codes":  [
                      "32080"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32081",
        "codes":  [
                      "32081"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32082",
        "codes":  [
                      "32082"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32083",
        "codes":  [
                      "32083"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32098",
        "codes":  [
                      "32098"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32099",
        "codes":  [
                      "32099"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32250",
        "codes":  [
                      "32250"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32251",
        "codes":  [
                      "32251"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32252",
        "codes":  [
                      "32252"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32253",
        "codes":  [
                      "32253"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32254",
        "codes":  [
                      "32254"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32255",
        "codes":  [
                      "32255"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32256",
        "codes":  [
                      "32256"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32257",
        "codes":  [
                      "32257"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32258",
        "codes":  [
                      "32258"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32286",
        "codes":  [
                      "32286"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32287",
        "codes":  [
                      "32287"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32288",
        "codes":  [
                      "32288"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32289",
        "codes":  [
                      "32289"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3234",
        "codes":  [
                      "3234"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3248",
        "codes":  [
                      "3248"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3251",
        "codes":  [
                      "3251"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3252",
        "codes":  [
                      "3252"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3254",
        "codes":  [
                      "3254"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3256",
        "codes":  [
                      "3256"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3259",
        "codes":  [
                      "3259"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3260",
        "codes":  [
                      "3260"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3261",
        "codes":  [
                      "3261"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "3263",
        "codes":  [
                      "3263"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3265",
        "codes":  [
                      "3265"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3266",
        "codes":  [
                      "3266"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "32660",
        "codes":  [
                      "32660"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3268",
        "codes":  [
                      "3268"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3269",
        "codes":  [
                      "3269"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3273",
        "codes":  [
                      "3273"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3274",
        "codes":  [
                      "3274"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "3277",
        "codes":  [
                      "3277"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "33378",
        "codes":  [
                      "33378"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "33379",
        "codes":  [
                      "33379"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "33380",
        "codes":  [
                      "33380"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3377",
        "codes":  [
                      "3377"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3379",
        "codes":  [
                      "3379"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3380",
        "codes":  [
                      "3380"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3381",
        "codes":  [
                      "3381"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3415",
        "codes":  [
                      "3415"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3416",
        "codes":  [
                      "3416"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3418",
        "codes":  [
                      "3418"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3420",
        "codes":  [
                      "3420"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3421",
        "codes":  [
                      "3421"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3422",
        "codes":  [
                      "3422"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "34220",
        "codes":  [
                      "34220"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "34221",
        "codes":  [
                      "34221"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "34222",
        "codes":  [
                      "34222"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3423",
        "codes":  [
                      "3423"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3424",
        "codes":  [
                      "3424"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3425",
        "codes":  [
                      "3425"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3426",
        "codes":  [
                      "3426"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3427",
        "codes":  [
                      "3427"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3448",
        "codes":  [
                      "3448"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3449",
        "codes":  [
                      "3449"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3450",
        "codes":  [
                      "3450"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3451",
        "codes":  [
                      "3451"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3452",
        "codes":  [
                      "3452"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3453",
        "codes":  [
                      "3453"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3454",
        "codes":  [
                      "3454"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3455",
        "codes":  [
                      "3455"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3456",
        "codes":  [
                      "3456"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3457",
        "codes":  [
                      "3457"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3458",
        "codes":  [
                      "3458"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3459",
        "codes":  [
                      "3459"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3470",
        "codes":  [
                      "3470"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3471",
        "codes":  [
                      "3471"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3472",
        "codes":  [
                      "3472"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3473",
        "codes":  [
                      "3473"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3474",
        "codes":  [
                      "3474"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3475",
        "codes":  [
                      "3475"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "3477",
        "codes":  [
                      "3477"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3478",
        "codes":  [
                      "3478"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3479",
        "codes":  [
                      "3479"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3481",
        "codes":  [
                      "3481"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3483",
        "codes":  [
                      "3483"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3484",
        "codes":  [
                      "3484"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3489",
        "codes":  [
                      "3489"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3490",
        "codes":  [
                      "3490"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "35006",
        "codes":  [
                      "35006"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "35007",
        "codes":  [
                      "35007"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "35027",
        "codes":  [
                      "35027"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "35520",
        "codes":  [
                      "35520"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "35523",
        "codes":  [
                      "35523"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "35524",
        "codes":  [
                      "35524"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3651",
        "codes":  [
                      "3651"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3652",
        "codes":  [
                      "3652"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3653",
        "codes":  [
                      "3653"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3654",
        "codes":  [
                      "3654"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3655",
        "codes":  [
                      "3655"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3657",
        "codes":  [
                      "3657"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3658",
        "codes":  [
                      "3658"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3659",
        "codes":  [
                      "3659"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3660",
        "codes":  [
                      "3660"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3661",
        "codes":  [
                      "3661"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3662",
        "codes":  [
                      "3662"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3663",
        "codes":  [
                      "3663"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3664",
        "codes":  [
                      "3664"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3665",
        "codes":  [
                      "3665"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3666",
        "codes":  [
                      "3666"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3667",
        "codes":  [
                      "3667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3668",
        "codes":  [
                      "3668"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3669",
        "codes":  [
                      "3669"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3674",
        "codes":  [
                      "3674"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3675",
        "codes":  [
                      "3675"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3676",
        "codes":  [
                      "3676"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3677",
        "codes":  [
                      "3677"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3684",
        "codes":  [
                      "3684"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3685",
        "codes":  [
                      "3685"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3686",
        "codes":  [
                      "3686"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3687",
        "codes":  [
                      "3687"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3688",
        "codes":  [
                      "3688"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3689",
        "codes":  [
                      "3689"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3691",
        "codes":  [
                      "3691"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3692",
        "codes":  [
                      "3692"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3693",
        "codes":  [
                      "3693"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3694",
        "codes":  [
                      "3694"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3696",
        "codes":  [
                      "3696"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3697",
        "codes":  [
                      "3697"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3698",
        "codes":  [
                      "3698"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "3699",
        "codes":  [
                      "3699"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "38260",
        "codes":  [
                      "38260"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "38363",
        "codes":  [
                      "38363"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "38373",
        "codes":  [
                      "38373"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "38667",
        "codes":  [
                      "38667"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "3880",
        "codes":  [
                      "3880"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "38863",
        "codes":  [
                      "38863"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "38871",
        "codes":  [
                      "38871"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "38873",
        "codes":  [
                      "38873"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "38876",
        "codes":  [
                      "38876"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "39482",
        "codes":  [
                      "39482"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "39989",
        "codes":  [
                      "39989"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4015",
        "codes":  [
                      "4015"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4018",
        "codes":  [
                      "4018"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4020",
        "codes":  [
                      "4020"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4022",
        "codes":  [
                      "4022"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4027",
        "codes":  [
                      "4027"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4030",
        "codes":  [
                      "4030"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4031",
        "codes":  [
                      "4031"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4033",
        "codes":  [
                      "4033"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4052",
        "codes":  [
                      "4052"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4059",
        "codes":  [
                      "4059"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4060",
        "codes":  [
                      "4060"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4065",
        "codes":  [
                      "4065"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41006",
        "codes":  [
                      "41006"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41008",
        "codes":  [
                      "41008"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41400",
        "codes":  [
                      "41400"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41416",
        "codes":  [
                      "41416"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41417",
        "codes":  [
                      "41417"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41420",
        "codes":  [
                      "41420"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41421",
        "codes":  [
                      "41421"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4144",
        "codes":  [
                      "4144"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41441",
        "codes":  [
                      "41441"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41444",
        "codes":  [
                      "41444"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41446",
        "codes":  [
                      "41446"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41447",
        "codes":  [
                      "41447"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41448",
        "codes":  [
                      "41448"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41449",
        "codes":  [
                      "41449"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41456",
        "codes":  [
                      "41456"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41457",
        "codes":  [
                      "41457"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41458",
        "codes":  [
                      "41458"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41459",
        "codes":  [
                      "41459"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41460",
        "codes":  [
                      "41460"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41461",
        "codes":  [
                      "41461"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41462",
        "codes":  [
                      "41462"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41463",
        "codes":  [
                      "41463"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41464",
        "codes":  [
                      "41464"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41465",
        "codes":  [
                      "41465"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41466",
        "codes":  [
                      "41466"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41467",
        "codes":  [
                      "41467"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41490",
        "codes":  [
                      "41490"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41491",
        "codes":  [
                      "41491"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41493",
        "codes":  [
                      "41493"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41494",
        "codes":  [
                      "41494"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41495",
        "codes":  [
                      "41495"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "41496",
        "codes":  [
                      "41496"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4151",
        "codes":  [
                      "4151"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4155",
        "codes":  [
                      "4155"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41554",
        "codes":  [
                      "41554"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41557",
        "codes":  [
                      "41557"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41559",
        "codes":  [
                      "41559"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4156",
        "codes":  [
                      "4156"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41560",
        "codes":  [
                      "41560"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41562",
        "codes":  [
                      "41562"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41565",
        "codes":  [
                      "41565"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41566",
        "codes":  [
                      "41566"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41567",
        "codes":  [
                      "41567"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41568",
        "codes":  [
                      "41568"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41570",
        "codes":  [
                      "41570"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "41571",
        "codes":  [
                      "41571"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4182",
        "codes":  [
                      "4182"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4184",
        "codes":  [
                      "4184"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4185",
        "codes":  [
                      "4185"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4186",
        "codes":  [
                      "4186"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4190",
        "codes":  [
                      "4190"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4191",
        "codes":  [
                      "4191"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4192",
        "codes":  [
                      "4192"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4220",
        "codes":  [
                      "4220"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4221",
        "codes":  [
                      "4221"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4222",
        "codes":  [
                      "4222"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4223",
        "codes":  [
                      "4223"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4225",
        "codes":  [
                      "4225"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4226",
        "codes":  [
                      "4226"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4227",
        "codes":  [
                      "4227"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "42395",
        "codes":  [
                      "42395"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "42895",
        "codes":  [
                      "42895"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "42995",
        "codes":  [
                      "42995"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4330",
        "codes":  [
                      "4330"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4331",
        "codes":  [
                      "4331"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4332",
        "codes":  [
                      "4332"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "43801",
        "codes":  [
                      "43801"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "43805",
        "codes":  [
                      "43805"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4384",
        "codes":  [
                      "4384"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "44129",
        "codes":  [
                      "44129"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "44225",
        "codes":  [
                      "44225"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "44553",
        "codes":  [
                      "44553"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "45004",
        "codes":  [
                      "45004"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "45005",
        "codes":  [
                      "45005"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "45008",
        "codes":  [
                      "45008"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "45160",
        "codes":  [
                      "45160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "45294",
        "codes":  [
                      "45294"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "45366",
        "codes":  [
                      "45366"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "45395",
        "codes":  [
                      "45395"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "45464",
        "codes":  [
                      "45464"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4720",
        "codes":  [
                      "4720"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4721",
        "codes":  [
                      "4721"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4722",
        "codes":  [
                      "4722"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4723",
        "codes":  [
                      "4723"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4730",
        "codes":  [
                      "4730"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4731",
        "codes":  [
                      "4731"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4732",
        "codes":  [
                      "4732"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4733",
        "codes":  [
                      "4733"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4734",
        "codes":  [
                      "4734"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4735",
        "codes":  [
                      "4735"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4736",
        "codes":  [
                      "4736"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4737",
        "codes":  [
                      "4737"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4738",
        "codes":  [
                      "4738"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4739",
        "codes":  [
                      "4739"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4740",
        "codes":  [
                      "4740"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4741",
        "codes":  [
                      "4741"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4742",
        "codes":  [
                      "4742"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4743",
        "codes":  [
                      "4743"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4744",
        "codes":  [
                      "4744"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4745",
        "codes":  [
                      "4745"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4746",
        "codes":  [
                      "4746"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4747",
        "codes":  [
                      "4747"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4748",
        "codes":  [
                      "4748"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4749",
        "codes":  [
                      "4749"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4750",
        "codes":  [
                      "4750"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4751",
        "codes":  [
                      "4751"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4752",
        "codes":  [
                      "4752"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4753",
        "codes":  [
                      "4753"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4754",
        "codes":  [
                      "4754"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4755",
        "codes":  [
                      "4755"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4756",
        "codes":  [
                      "4756"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4757",
        "codes":  [
                      "4757"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4758",
        "codes":  [
                      "4758"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4759",
        "codes":  [
                      "4759"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4760",
        "codes":  [
                      "4760"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4761",
        "codes":  [
                      "4761"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4762",
        "codes":  [
                      "4762"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4763",
        "codes":  [
                      "4763"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4764",
        "codes":  [
                      "4764"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4765",
        "codes":  [
                      "4765"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4766",
        "codes":  [
                      "4766"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4767",
        "codes":  [
                      "4767"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4768",
        "codes":  [
                      "4768"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4769",
        "codes":  [
                      "4769"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4770",
        "codes":  [
                      "4770"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4771",
        "codes":  [
                      "4771"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4772",
        "codes":  [
                      "4772"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4773",
        "codes":  [
                      "4773"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4774",
        "codes":  [
                      "4774"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4775",
        "codes":  [
                      "4775"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4776",
        "codes":  [
                      "4776"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4777",
        "codes":  [
                      "4777"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4780",
        "codes":  [
                      "4780"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "4781",
        "codes":  [
                      "4781"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4782",
        "codes":  [
                      "4782"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "4783",
        "codes":  [
                      "4783"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4784",
        "codes":  [
                      "4784"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4785",
        "codes":  [
                      "4785"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4790",
        "codes":  [
                      "4790"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4791",
        "codes":  [
                      "4791"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4792",
        "codes":  [
                      "4792"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4793",
        "codes":  [
                      "4793"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4794",
        "codes":  [
                      "4794"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4795",
        "codes":  [
                      "4795"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4798",
        "codes":  [
                      "4798"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "4799",
        "codes":  [
                      "4799"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48126",
        "codes":  [
                      "48126"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48160",
        "codes":  [
                      "48160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48163",
        "codes":  [
                      "48163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48165",
        "codes":  [
                      "48165"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48260",
        "codes":  [
                      "48260"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48263",
        "codes":  [
                      "48263"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48264",
        "codes":  [
                      "48264"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48266",
        "codes":  [
                      "48266"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48267",
        "codes":  [
                      "48267"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48335",
        "codes":  [
                      "48335"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48360",
        "codes":  [
                      "48360"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48363",
        "codes":  [
                      "48363"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48366",
        "codes":  [
                      "48366"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48395",
        "codes":  [
                      "48395"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48460",
        "codes":  [
                      "48460"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48462",
        "codes":  [
                      "48462"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48463",
        "codes":  [
                      "48463"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48464",
        "codes":  [
                      "48464"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48467",
        "codes":  [
                      "48467"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48860",
        "codes":  [
                      "48860"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "48862",
        "codes":  [
                      "48862"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48863",
        "codes":  [
                      "48863"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48864",
        "codes":  [
                      "48864"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48867",
        "codes":  [
                      "48867"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "48960",
        "codes":  [
                      "48960"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5026",
        "codes":  [
                      "5026"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5027",
        "codes":  [
                      "5027"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5029",
        "codes":  [
                      "5029"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5051",
        "codes":  [
                      "5051"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5052",
        "codes":  [
                      "5052"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5066",
        "codes":  [
                      "5066"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5068",
        "codes":  [
                      "5068"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5069",
        "codes":  [
                      "5069"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5075",
        "codes":  [
                      "5075"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5095",
        "codes":  [
                      "5095"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5096",
        "codes":  [
                      "5096"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5100",
        "codes":  [
                      "5100"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5105",
        "codes":  [
                      "5105"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5106",
        "codes":  [
                      "5106"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5107",
        "codes":  [
                      "5107"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5112",
        "codes":  [
                      "5112"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5120",
        "codes":  [
                      "5120"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5125",
        "codes":  [
                      "5125"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5126",
        "codes":  [
                      "5126"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "512654",
        "codes":  [
                      "512654"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5132",
        "codes":  [
                      "5132"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5133",
        "codes":  [
                      "5133"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5136",
        "codes":  [
                      "5136"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5137",
        "codes":  [
                      "5137"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5138",
        "codes":  [
                      "5138"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5147",
        "codes":  [
                      "5147"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5152",
        "codes":  [
                      "5152"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5153",
        "codes":  [
                      "5153"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5155",
        "codes":  [
                      "5155"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5156",
        "codes":  [
                      "5156"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "515656",
        "codes":  [
                      "515656"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5157",
        "codes":  [
                      "5157"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5159",
        "codes":  [
                      "5159"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "516",
        "codes":  [
                      "516"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5160",
        "codes":  [
                      "5160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  7
    },
    {
        "code":  "5161",
        "codes":  [
                      "5161"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5162",
        "codes":  [
                      "5162"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5162B",
        "codes":  [
                      "5162B"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5163",
        "codes":  [
                      "5163"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  5
    },
    {
        "code":  "5164",
        "codes":  [
                      "5164"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5165",
        "codes":  [
                      "5165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5166",
        "codes":  [
                      "5166"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5167",
        "codes":  [
                      "5167"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5168",
        "codes":  [
                      "5168"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5169",
        "codes":  [
                      "5169"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5181",
        "codes":  [
                      "5181"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "518163",
        "codes":  [
                      "518163"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5193",
        "codes":  [
                      "5193"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5195",
        "codes":  [
                      "5195"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5196",
        "codes":  [
                      "5196"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5197",
        "codes":  [
                      "5197"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5198",
        "codes":  [
                      "5198"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5199",
        "codes":  [
                      "5199"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5200",
        "codes":  [
                      "5200"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5201",
        "codes":  [
                      "5201"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5202",
        "codes":  [
                      "5202"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5203",
        "codes":  [
                      "5203"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5204",
        "codes":  [
                      "5204"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5205",
        "codes":  [
                      "5205"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5206",
        "codes":  [
                      "5206"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5209",
        "codes":  [
                      "5209"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5211",
        "codes":  [
                      "5211"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5214",
        "codes":  [
                      "5214"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5215",
        "codes":  [
                      "05215",
                      "5215"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5217",
        "codes":  [
                      "5217"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5226",
        "codes":  [
                      "5226"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5230",
        "codes":  [
                      "5230"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5235",
        "codes":  [
                      "5235"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5249",
        "codes":  [
                      "5249"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5258",
        "codes":  [
                      "5258"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5259",
        "codes":  [
                      "5259"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5260",
        "codes":  [
                      "05260",
                      "5260"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5261",
        "codes":  [
                      "5261"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5262",
        "codes":  [
                      "5262"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5263",
        "codes":  [
                      "5263"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5264",
        "codes":  [
                      "5264"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5265",
        "codes":  [
                      "5265"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5266",
        "codes":  [
                      "5266"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5267",
        "codes":  [
                      "5267"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5273",
        "codes":  [
                      "5273"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5289",
        "codes":  [
                      "5289"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5292",
        "codes":  [
                      "5292"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5293",
        "codes":  [
                      "5293"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5294",
        "codes":  [
                      "5294"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  5
    },
    {
        "code":  "530",
        "codes":  [
                      "530"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5300",
        "codes":  [
                      "5300"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5302",
        "codes":  [
                      "05302",
                      "5302"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5302E",
        "codes":  [
                      "5302E"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5303",
        "codes":  [
                      "5303"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5305",
        "codes":  [
                      "5305"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5308",
        "codes":  [
                      "5308"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5309",
        "codes":  [
                      "5309"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5310",
        "codes":  [
                      "5310"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5311",
        "codes":  [
                      "5311"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5314",
        "codes":  [
                      "5314"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5315",
        "codes":  [
                      "5315"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5317",
        "codes":  [
                      "5317"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "53208",
        "codes":  [
                      "53208"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5321",
        "codes":  [
                      "5321"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "53212",
        "codes":  [
                      "53212"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "53215",
        "codes":  [
                      "53215"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "53220",
        "codes":  [
                      "53220"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "53221",
        "codes":  [
                      "53221"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5326",
        "codes":  [
                      "5326"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5327",
        "codes":  [
                      "5327"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5328",
        "codes":  [
                      "5328"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "53283",
        "codes":  [
                      "53283"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5329",
        "codes":  [
                      "5329"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5332",
        "codes":  [
                      "5332"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5334",
        "codes":  [
                      "5334"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5336",
        "codes":  [
                      "5336"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5351",
        "codes":  [
                      "5351"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5352",
        "codes":  [
                      "5352"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5353",
        "codes":  [
                      "5353"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5354",
        "codes":  [
                      "5354"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5360",
        "codes":  [
                      "5360"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5361",
        "codes":  [
                      "5361"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5362",
        "codes":  [
                      "5362"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5363",
        "codes":  [
                      "5363"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5364",
        "codes":  [
                      "5364"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5366",
        "codes":  [
                      "5366"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5371",
        "codes":  [
                      "5371"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5371V",
        "codes":  [
                      "5371V"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5374",
        "codes":  [
                      "5374"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5376",
        "codes":  [
                      "5376"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5377",
        "codes":  [
                      "5377"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5383",
        "codes":  [
                      "5383"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5384",
        "codes":  [
                      "5384"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5385",
        "codes":  [
                      "5385"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5386",
        "codes":  [
                      "5386"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5388",
        "codes":  [
                      "5388"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5389",
        "codes":  [
                      "5389"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5390",
        "codes":  [
                      "5390"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5392",
        "codes":  [
                      "5392"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5393",
        "codes":  [
                      "5393"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5395",
        "codes":  [
                      "5395"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5408",
        "codes":  [
                      "5408"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5410",
        "codes":  [
                      "5410"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5418",
        "codes":  [
                      "5418"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5424",
        "codes":  [
                      "5424"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5430",
        "codes":  [
                      "5430"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5436",
        "codes":  [
                      "05436",
                      "5436"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5440",
        "codes":  [
                      "5440"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5444",
        "codes":  [
                      "5444"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5454",
        "codes":  [
                      "5454"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5456",
        "codes":  [
                      "5456"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5461",
        "codes":  [
                      "5461"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5462",
        "codes":  [
                      "5462"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5463",
        "codes":  [
                      "5463"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5464",
        "codes":  [
                      "5464"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5465",
        "codes":  [
                      "5465"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5466",
        "codes":  [
                      "5466"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5467",
        "codes":  [
                      "5467"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5468",
        "codes":  [
                      "5468"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5469",
        "codes":  [
                      "5469"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5470",
        "codes":  [
                      "5470"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5471",
        "codes":  [
                      "5471"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5472",
        "codes":  [
                      "5472"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5473",
        "codes":  [
                      "5473"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5474",
        "codes":  [
                      "5474"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5477",
        "codes":  [
                      "5477"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5481",
        "codes":  [
                      "5481"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5489",
        "codes":  [
                      "5489"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5490",
        "codes":  [
                      "5490"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5493",
        "codes":  [
                      "5493"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5494",
        "codes":  [
                      "5494"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "55160",
        "codes":  [
                      "55160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55162",
        "codes":  [
                      "55162"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55163",
        "codes":  [
                      "55163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55164",
        "codes":  [
                      "55164"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5520",
        "codes":  [
                      "5520"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5522",
        "codes":  [
                      "5522"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5523",
        "codes":  [
                      "5523"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5524",
        "codes":  [
                      "5524"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5526",
        "codes":  [
                      "5526"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55260",
        "codes":  [
                      "55260"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55264",
        "codes":  [
                      "55264"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55360",
        "codes":  [
                      "55360"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "55364",
        "codes":  [
                      "55364"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55463",
        "codes":  [
                      "55463"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "55464",
        "codes":  [
                      "55464"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5563",
        "codes":  [
                      "5563"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5566",
        "codes":  [
                      "5566"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "55871",
        "codes":  [
                      "55871"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "55876",
        "codes":  [
                      "55876"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5589",
        "codes":  [
                      "5589"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5590",
        "codes":  [
                      "5590"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "55960",
        "codes":  [
                      "55960"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5620",
        "codes":  [
                      "5620"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5626",
        "codes":  [
                      "5626"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5627",
        "codes":  [
                      "5627"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5630",
        "codes":  [
                      "5630"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5639",
        "codes":  [
                      "5639"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5654",
        "codes":  [
                      "5654"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5660",
        "codes":  [
                      "5660"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5661",
        "codes":  [
                      "5661"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5662",
        "codes":  [
                      "5662"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5663",
        "codes":  [
                      "5663"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5664",
        "codes":  [
                      "5664"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5664TR",
        "codes":  [
                      "5664TR"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5666",
        "codes":  [
                      "5666"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5667",
        "codes":  [
                      "5667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5689",
        "codes":  [
                      "5689"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5693",
        "codes":  [
                      "5693"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5694",
        "codes":  [
                      "5694"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5695",
        "codes":  [
                      "5695"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5696",
        "codes":  [
                      "5696"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5742",
        "codes":  [
                      "5742"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5766",
        "codes":  [
                      "5766"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5783",
        "codes":  [
                      "5783"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5784",
        "codes":  [
                      "5784"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5810",
        "codes":  [
                      "5810"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5811",
        "codes":  [
                      "5811"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58160",
        "codes":  [
                      "58160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58163",
        "codes":  [
                      "58163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58164",
        "codes":  [
                      "58164"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5820",
        "codes":  [
                      "5820"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5821",
        "codes":  [
                      "5821"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5824",
        "codes":  [
                      "5824"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58260",
        "codes":  [
                      "58260"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58264",
        "codes":  [
                      "58264"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58471",
        "codes":  [
                      "58471"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5856",
        "codes":  [
                      "5856"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5866",
        "codes":  [
                      "5866"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "58660",
        "codes":  [
                      "58660"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5870",
        "codes":  [
                      "5870"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5871",
        "codes":  [
                      "5871"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5872",
        "codes":  [
                      "5872"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5873",
        "codes":  [
                      "5873"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5874",
        "codes":  [
                      "5874"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5876",
        "codes":  [
                      "5876"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5877",
        "codes":  [
                      "5877"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5878",
        "codes":  [
                      "5878"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5881",
        "codes":  [
                      "5881"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5882",
        "codes":  [
                      "5882"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5883",
        "codes":  [
                      "5883"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5884",
        "codes":  [
                      "5884"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5889",
        "codes":  [
                      "5889"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5895",
        "codes":  [
                      "5895"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5896",
        "codes":  [
                      "5896"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5904",
        "codes":  [
                      "5904"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5905",
        "codes":  [
                      "5905"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5909",
        "codes":  [
                      "5909"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5911",
        "codes":  [
                      "5911"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5912",
        "codes":  [
                      "5912"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5913",
        "codes":  [
                      "5913"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5914",
        "codes":  [
                      "5914"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5917",
        "codes":  [
                      "5917"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5918",
        "codes":  [
                      "5918"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5919",
        "codes":  [
                      "5919"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5922",
        "codes":  [
                      "5922"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5925",
        "codes":  [
                      "5925"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "5930",
        "codes":  [
                      "5930"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5931",
        "codes":  [
                      "5931"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5933",
        "codes":  [
                      "5933"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5934",
        "codes":  [
                      "5934"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5935",
        "codes":  [
                      "5935"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5936",
        "codes":  [
                      "5936"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5940",
        "codes":  [
                      "5940"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5942",
        "codes":  [
                      "5942"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5944",
        "codes":  [
                      "5944"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5946",
        "codes":  [
                      "5946"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5954",
        "codes":  [
                      "5954"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5956",
        "codes":  [
                      "5956"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5960",
        "codes":  [
                      "5960"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5961",
        "codes":  [
                      "5961"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5962",
        "codes":  [
                      "5962"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5963",
        "codes":  [
                      "5963"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5964",
        "codes":  [
                      "5964"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5966",
        "codes":  [
                      "5966"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5967",
        "codes":  [
                      "5967"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5970",
        "codes":  [
                      "5970"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5971",
        "codes":  [
                      "5971"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5972",
        "codes":  [
                      "5972"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5973",
        "codes":  [
                      "5973"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "5974",
        "codes":  [
                      "5974"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5975",
        "codes":  [
                      "5975"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5976",
        "codes":  [
                      "5976"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5978",
        "codes":  [
                      "5978"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5979",
        "codes":  [
                      "5979"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5980",
        "codes":  [
                      "5980"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5989",
        "codes":  [
                      "5989"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5994",
        "codes":  [
                      "5994"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "5997",
        "codes":  [
                      "5997"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "5998",
        "codes":  [
                      "5998"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6002",
        "codes":  [
                      "6002"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "600281",
        "codes":  [
                      "600281"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "600297",
        "codes":  [
                      "600297"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6003",
        "codes":  [
                      "6003"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6004",
        "codes":  [
                      "6004"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6005",
        "codes":  [
                      "6005"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6006",
        "codes":  [
                      "6006"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6008",
        "codes":  [
                      "6008"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6009",
        "codes":  [
                      "6009"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6011",
        "codes":  [
                      "6011"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6012",
        "codes":  [
                      "6012"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6013",
        "codes":  [
                      "6013"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6014",
        "codes":  [
                      "6014"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6015",
        "codes":  [
                      "6015"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6019",
        "codes":  [
                      "6019"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6020",
        "codes":  [
                      "6020"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6021",
        "codes":  [
                      "6021"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6022",
        "codes":  [
                      "6022"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6023",
        "codes":  [
                      "6023"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6024",
        "codes":  [
                      "6024"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6025",
        "codes":  [
                      "6025"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6026",
        "codes":  [
                      "6026"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6029",
        "codes":  [
                      "6029"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6030",
        "codes":  [
                      "6030"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6031",
        "codes":  [
                      "6031"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6036",
        "codes":  [
                      "6036"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6037",
        "codes":  [
                      "6037"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6038",
        "codes":  [
                      "6038"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6039",
        "codes":  [
                      "6039"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6040",
        "codes":  [
                      "6040"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6041",
        "codes":  [
                      "6041"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6043",
        "codes":  [
                      "6043"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6044",
        "codes":  [
                      "6044"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6045",
        "codes":  [
                      "6045"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6046",
        "codes":  [
                      "6046"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6047",
        "codes":  [
                      "6047"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60505",
        "codes":  [
                      "60505"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60512",
        "codes":  [
                      "60512"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60513",
        "codes":  [
                      "60513"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60517",
        "codes":  [
                      "60517"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60519",
        "codes":  [
                      "60519"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60525",
        "codes":  [
                      "60525"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60527",
        "codes":  [
                      "60527"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60528",
        "codes":  [
                      "60528"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60529",
        "codes":  [
                      "60529"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "60535",
        "codes":  [
                      "60535"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6058",
        "codes":  [
                      "6058"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6059",
        "codes":  [
                      "6059"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6060",
        "codes":  [
                      "6060"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6061",
        "codes":  [
                      "6061"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6074",
        "codes":  [
                      "6074"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6077",
        "codes":  [
                      "6077"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6078",
        "codes":  [
                      "6078"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6079",
        "codes":  [
                      "6079"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6080",
        "codes":  [
                      "6080"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6081",
        "codes":  [
                      "6081"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6082",
        "codes":  [
                      "6082"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6083",
        "codes":  [
                      "6083"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6090",
        "codes":  [
                      "6090"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6091",
        "codes":  [
                      "6091"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6092",
        "codes":  [
                      "6092"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6093",
        "codes":  [
                      "6093"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6094",
        "codes":  [
                      "6094"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6102",
        "codes":  [
                      "6102"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6103",
        "codes":  [
                      "6103"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6104",
        "codes":  [
                      "6104"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6105",
        "codes":  [
                      "6105"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6106",
        "codes":  [
                      "6106"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6107",
        "codes":  [
                      "6107"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6108",
        "codes":  [
                      "6108"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6109",
        "codes":  [
                      "6109"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6110",
        "codes":  [
                      "6110"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6111",
        "codes":  [
                      "6111"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6112",
        "codes":  [
                      "6112"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6113",
        "codes":  [
                      "6113"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6114",
        "codes":  [
                      "6114"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6115",
        "codes":  [
                      "6115"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6116",
        "codes":  [
                      "6116"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6117",
        "codes":  [
                      "6117"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6118",
        "codes":  [
                      "6118"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6122",
        "codes":  [
                      "6122"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6125",
        "codes":  [
                      "6125"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61501",
        "codes":  [
                      "61501"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61502",
        "codes":  [
                      "61502"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61506",
        "codes":  [
                      "61506"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61507",
        "codes":  [
                      "61507"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61515",
        "codes":  [
                      "61515"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61516",
        "codes":  [
                      "61516"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61525",
        "codes":  [
                      "61525"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61526",
        "codes":  [
                      "61526"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61527",
        "codes":  [
                      "61527"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61530",
        "codes":  [
                      "61530"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61533",
        "codes":  [
                      "61533"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61539",
        "codes":  [
                      "61539"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61541",
        "codes":  [
                      "61541"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61550",
        "codes":  [
                      "61550"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61551",
        "codes":  [
                      "61551"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61552",
        "codes":  [
                      "61552"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61553",
        "codes":  [
                      "61553"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61554",
        "codes":  [
                      "61554"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61555",
        "codes":  [
                      "61555"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61582",
        "codes":  [
                      "61582"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "61583",
        "codes":  [
                      "61583"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6175",
        "codes":  [
                      "6175"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6240",
        "codes":  [
                      "6240"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "62401",
        "codes":  [
                      "62401"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "62402",
        "codes":  [
                      "62402"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "62403",
        "codes":  [
                      "62403"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "62404",
        "codes":  [
                      "62404"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6241",
        "codes":  [
                      "6241"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6245",
        "codes":  [
                      "6245"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6305",
        "codes":  [
                      "6305"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6427",
        "codes":  [
                      "6427"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6430",
        "codes":  [
                      "6430"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "64335",
        "codes":  [
                      "64335"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6436",
        "codes":  [
                      "6436"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6440",
        "codes":  [
                      "6440"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6445",
        "codes":  [
                      "6445"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6450",
        "codes":  [
                      "6450"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64500",
        "codes":  [
                      "64500"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64501",
        "codes":  [
                      "64501"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64502",
        "codes":  [
                      "64502"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "64503",
        "codes":  [
                      "64503"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64504",
        "codes":  [
                      "64504"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64505",
        "codes":  [
                      "64505"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64506",
        "codes":  [
                      "64506"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6455",
        "codes":  [
                      "6455"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6460",
        "codes":  [
                      "6460"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6461",
        "codes":  [
                      "6461"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6462",
        "codes":  [
                      "6462"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6463",
        "codes":  [
                      "6463"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6464",
        "codes":  [
                      "6464"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6465",
        "codes":  [
                      "6465"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "64658",
        "codes":  [
                      "64658"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6466",
        "codes":  [
                      "6466"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6467",
        "codes":  [
                      "6467"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6468",
        "codes":  [
                      "6468"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "64710",
        "codes":  [
                      "64710"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6475",
        "codes":  [
                      "6475"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6476",
        "codes":  [
                      "6476"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "64765",
        "codes":  [
                      "64765"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6477",
        "codes":  [
                      "6477"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6478",
        "codes":  [
                      "6478"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6479",
        "codes":  [
                      "6479"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6481",
        "codes":  [
                      "6481"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6482",
        "codes":  [
                      "6482"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6490",
        "codes":  [
                      "6490"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "64916",
        "codes":  [
                      "64916"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6498",
        "codes":  [
                      "6498"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6499",
        "codes":  [
                      "6499"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6500",
        "codes":  [
                      "6500"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6503",
        "codes":  [
                      "6503"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6504",
        "codes":  [
                      "6504"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6505",
        "codes":  [
                      "6505"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6520",
        "codes":  [
                      "6520"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6521",
        "codes":  [
                      "6521"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6522",
        "codes":  [
                      "6522"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6523",
        "codes":  [
                      "6523"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6524",
        "codes":  [
                      "6524"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6525",
        "codes":  [
                      "6525"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6526",
        "codes":  [
                      "6526"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6527",
        "codes":  [
                      "6527"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6528",
        "codes":  [
                      "6528"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6529",
        "codes":  [
                      "6529"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6530",
        "codes":  [
                      "6530"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6539",
        "codes":  [
                      "6539"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6540",
        "codes":  [
                      "6540"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6543",
        "codes":  [
                      "6543"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6570",
        "codes":  [
                      "6570"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6571",
        "codes":  [
                      "6571"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6572",
        "codes":  [
                      "6572"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6573",
        "codes":  [
                      "6573"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6574",
        "codes":  [
                      "6574"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6576",
        "codes":  [
                      "6576"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6577",
        "codes":  [
                      "6577"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6578",
        "codes":  [
                      "6578"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6579",
        "codes":  [
                      "6579"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6581",
        "codes":  [
                      "6581"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6585",
        "codes":  [
                      "6585"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "658828",
        "codes":  [
                      "658828"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6590",
        "codes":  [
                      "6590"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6591",
        "codes":  [
                      "6591"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6678",
        "codes":  [
                      "6678"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6692",
        "codes":  [
                      "6692"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6693",
        "codes":  [
                      "6693"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6695",
        "codes":  [
                      "6695"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "67620",
        "codes":  [
                      "67620"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6790",
        "codes":  [
                      "6790"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6791",
        "codes":  [
                      "6791"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6792",
        "codes":  [
                      "6792"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6793",
        "codes":  [
                      "6793"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6794",
        "codes":  [
                      "6794"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "6870",
        "codes":  [
                      "6870"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6871",
        "codes":  [
                      "6871"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6873",
        "codes":  [
                      "6873"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6874",
        "codes":  [
                      "6874"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6878",
        "codes":  [
                      "6878"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6879",
        "codes":  [
                      "6879"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "6950",
        "codes":  [
                      "6950"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "69684",
        "codes":  [
                      "69684"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "71111",
        "codes":  [
                      "71111"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "71200",
        "codes":  [
                      "71200"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "71201",
        "codes":  [
                      "71201"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7160",
        "codes":  [
                      "7160"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "71901",
        "codes":  [
                      "71901"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "71907",
        "codes":  [
                      "71907"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72427",
        "codes":  [
                      "72427"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72428",
        "codes":  [
                      "72428"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72429",
        "codes":  [
                      "72429"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72430",
        "codes":  [
                      "72430"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72432",
        "codes":  [
                      "72432"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72433",
        "codes":  [
                      "72433"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72434",
        "codes":  [
                      "72434"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72435",
        "codes":  [
                      "72435"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72436",
        "codes":  [
                      "72436"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72437",
        "codes":  [
                      "72437"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72438",
        "codes":  [
                      "72438"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72439",
        "codes":  [
                      "72439"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72440",
        "codes":  [
                      "72440"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72441",
        "codes":  [
                      "72441"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72442",
        "codes":  [
                      "72442"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72443",
        "codes":  [
                      "72443"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72450",
        "codes":  [
                      "72450"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72451",
        "codes":  [
                      "72451"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72458",
        "codes":  [
                      "72458"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72461",
        "codes":  [
                      "72461"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72462",
        "codes":  [
                      "72462"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72465",
        "codes":  [
                      "72465"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72466",
        "codes":  [
                      "72466"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72467",
        "codes":  [
                      "72467"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72468",
        "codes":  [
                      "72468"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72469",
        "codes":  [
                      "72469"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72470",
        "codes":  [
                      "72470"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72471",
        "codes":  [
                      "72471"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72472",
        "codes":  [
                      "72472"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72473",
        "codes":  [
                      "72473"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72474",
        "codes":  [
                      "72474"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72475",
        "codes":  [
                      "72475"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72478",
        "codes":  [
                      "72478"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72500",
        "codes":  [
                      "72500"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72501",
        "codes":  [
                      "72501"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7260",
        "codes":  [
                      "7260"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "72830",
        "codes":  [
                      "72830"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74431",
        "codes":  [
                      "74431"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74432",
        "codes":  [
                      "74432"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74433",
        "codes":  [
                      "74433"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74435",
        "codes":  [
                      "74435"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74436",
        "codes":  [
                      "74436"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74457",
        "codes":  [
                      "74457"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74459",
        "codes":  [
                      "74459"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74461",
        "codes":  [
                      "74461"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74465",
        "codes":  [
                      "74465"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "74466",
        "codes":  [
                      "74466"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74467",
        "codes":  [
                      "74467"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "74468",
        "codes":  [
                      "74468"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "74520",
        "codes":  [
                      "74520"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74536",
        "codes":  [
                      "74536"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7454",
        "codes":  [
                      "7454"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74540",
        "codes":  [
                      "74540"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74541",
        "codes":  [
                      "74541"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74549",
        "codes":  [
                      "74549"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74550",
        "codes":  [
                      "74550"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74552",
        "codes":  [
                      "74552"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74553",
        "codes":  [
                      "74553"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74554",
        "codes":  [
                      "74554"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74556",
        "codes":  [
                      "74556"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74558",
        "codes":  [
                      "74558"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "74600",
        "codes":  [
                      "74600"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74650",
        "codes":  [
                      "74650"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "74651",
        "codes":  [
                      "74651"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "750",
        "codes":  [
                      "00750",
                      "750"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "751",
        "codes":  [
                      "751"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "75160",
        "codes":  [
                      "75160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "752",
        "codes":  [
                      "00752",
                      "752"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "753",
        "codes":  [
                      "00753",
                      "753"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "75335",
        "codes":  [
                      "75335"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "75361",
        "codes":  [
                      "75361"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "75366",
        "codes":  [
                      "75366"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "754",
        "codes":  [
                      "00754",
                      "754"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "755",
        "codes":  [
                      "755"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "75501",
        "codes":  [
                      "75501"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "756",
        "codes":  [
                      "00756",
                      "756"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "757",
        "codes":  [
                      "00757",
                      "757"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "760",
        "codes":  [
                      "760"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "76004",
        "codes":  [
                      "76004"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "761",
        "codes":  [
                      "00761",
                      "761"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "76152",
        "codes":  [
                      "76152"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "76154",
        "codes":  [
                      "76154"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7654",
        "codes":  [
                      "7654"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7660",
        "codes":  [
                      "7660"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7661",
        "codes":  [
                      "7661"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7662",
        "codes":  [
                      "7662"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7663",
        "codes":  [
                      "7663"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "7664",
        "codes":  [
                      "7664"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7666",
        "codes":  [
                      "7666"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "7667",
        "codes":  [
                      "7667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7668",
        "codes":  [
                      "7668"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7670",
        "codes":  [
                      "7670"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7708",
        "codes":  [
                      "07708",
                      "7708"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "7709",
        "codes":  [
                      "07709",
                      "7709"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "7712",
        "codes":  [
                      "7712"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7713",
        "codes":  [
                      "7713"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "7714",
        "codes":  [
                      "07714",
                      "7714"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "7720",
        "codes":  [
                      "7720"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7721",
        "codes":  [
                      "7721"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "7762",
        "codes":  [
                      "7762"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7791",
        "codes":  [
                      "7791"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "7830",
        "codes":  [
                      "7830"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "78613",
        "codes":  [
                      "78613"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "78617",
        "codes":  [
                      "78617"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "78619",
        "codes":  [
                      "78619"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "80017",
        "codes":  [
                      "80017"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80500",
        "codes":  [
                      "80500"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80501",
        "codes":  [
                      "80501"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80503",
        "codes":  [
                      "80503"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80505",
        "codes":  [
                      "80505"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80506",
        "codes":  [
                      "80506"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80508",
        "codes":  [
                      "80508"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "80509",
        "codes":  [
                      "80509"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "80511",
        "codes":  [
                      "80511"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8066",
        "codes":  [
                      "8066"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8126",
        "codes":  [
                      "8126"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "81310",
        "codes":  [
                      "81310"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "81311",
        "codes":  [
                      "81311"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8146",
        "codes":  [
                      "8146"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8150",
        "codes":  [
                      "8150"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "816",
        "codes":  [
                      "816"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8160",
        "codes":  [
                      "08160",
                      "8160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "8160GO",
        "codes":  [
                      "8160GO"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8161",
        "codes":  [
                      "8161"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8162",
        "codes":  [
                      "08162",
                      "8162"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8163",
        "codes":  [
                      "8163"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "8164",
        "codes":  [
                      "8164"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8165",
        "codes":  [
                      "8165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8166",
        "codes":  [
                      "8166"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8167",
        "codes":  [
                      "8167"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8168",
        "codes":  [
                      "8168"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8169",
        "codes":  [
                      "8169"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8183",
        "codes":  [
                      "8183"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8190",
        "codes":  [
                      "8190"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8195",
        "codes":  [
                      "8195"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8196",
        "codes":  [
                      "8196"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8211",
        "codes":  [
                      "8211"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8214",
        "codes":  [
                      "8214"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8215",
        "codes":  [
                      "8215"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8216",
        "codes":  [
                      "8216"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8217",
        "codes":  [
                      "08217",
                      "8217"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8218",
        "codes":  [
                      "8218"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "822916",
        "codes":  [
                      "822916"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8250",
        "codes":  [
                      "8250"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8252",
        "codes":  [
                      "8252"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8253",
        "codes":  [
                      "8253"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8254",
        "codes":  [
                      "8254"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8255",
        "codes":  [
                      "8255"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8257",
        "codes":  [
                      "8257"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8271",
        "codes":  [
                      "8271"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "82822",
        "codes":  [
                      "82822"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8293",
        "codes":  [
                      "08293",
                      "8293"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8308",
        "codes":  [
                      "8308"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8309",
        "codes":  [
                      "8309"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8313",
        "codes":  [
                      "8313"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8314",
        "codes":  [
                      "8314"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8315",
        "codes":  [
                      "8315"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8316",
        "codes":  [
                      "8316"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "8317",
        "codes":  [
                      "8317"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8324",
        "codes":  [
                      "8324"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8356",
        "codes":  [
                      "8356"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8363",
        "codes":  [
                      "8363"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8366",
        "codes":  [
                      "8366"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8371",
        "codes":  [
                      "8371"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8372",
        "codes":  [
                      "8372"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8373",
        "codes":  [
                      "8373"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8376",
        "codes":  [
                      "8376"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8377",
        "codes":  [
                      "8377"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8383",
        "codes":  [
                      "8383"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8384",
        "codes":  [
                      "8384"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8385",
        "codes":  [
                      "8385"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8386",
        "codes":  [
                      "8386"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8387",
        "codes":  [
                      "8387"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "8388",
        "codes":  [
                      "8388"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8389",
        "codes":  [
                      "8389"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8392",
        "codes":  [
                      "8392"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8394",
        "codes":  [
                      "8394"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8395",
        "codes":  [
                      "8395"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "84006",
        "codes":  [
                      "84006"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8416",
        "codes":  [
                      "8416"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8425",
        "codes":  [
                      "8425"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8460",
        "codes":  [
                      "8460"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8461",
        "codes":  [
                      "8461"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8462",
        "codes":  [
                      "8462"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8463",
        "codes":  [
                      "8463"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8464",
        "codes":  [
                      "8464"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8465",
        "codes":  [
                      "8465"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8471",
        "codes":  [
                      "8471"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8472",
        "codes":  [
                      "8472"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8476",
        "codes":  [
                      "8476"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8478",
        "codes":  [
                      "8478"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "85395",
        "codes":  [
                      "85395"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "85560",
        "codes":  [
                      "85560"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "85563",
        "codes":  [
                      "85563"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8563",
        "codes":  [
                      "8563"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8564",
        "codes":  [
                      "8564"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8571",
        "codes":  [
                      "8571"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8577",
        "codes":  [
                      "8577"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "85783",
        "codes":  [
                      "85783"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8590",
        "codes":  [
                      "8590"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8593",
        "codes":  [
                      "8593"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8610",
        "codes":  [
                      "8610"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8614",
        "codes":  [
                      "8614"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8620",
        "codes":  [
                      "8620"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8641",
        "codes":  [
                      "8641"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8660",
        "codes":  [
                      "8660"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8662",
        "codes":  [
                      "8662"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8663",
        "codes":  [
                      "8663"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8665",
        "codes":  [
                      "8665"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8667",
        "codes":  [
                      "8667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8699",
        "codes":  [
                      "8699"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8720",
        "codes":  [
                      "8720"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8722",
        "codes":  [
                      "8722"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8763",
        "codes":  [
                      "8763"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8769",
        "codes":  [
                      "8769"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8780",
        "codes":  [
                      "8780"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8781",
        "codes":  [
                      "8781"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8801",
        "codes":  [
                      "8801"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8810",
        "codes":  [
                      "8810"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88127",
        "codes":  [
                      "88127"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8820",
        "codes":  [
                      "8820"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88221",
        "codes":  [
                      "88221"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88389",
        "codes":  [
                      "88389"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88395",
        "codes":  [
                      "88395"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88560",
        "codes":  [
                      "88560"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8860",
        "codes":  [
                      "8860"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8865",
        "codes":  [
                      "8865"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88662",
        "codes":  [
                      "88662"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8867",
        "codes":  [
                      "8867"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8869",
        "codes":  [
                      "8869"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88695",
        "codes":  [
                      "88695"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8870",
        "codes":  [
                      "8870"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8871",
        "codes":  [
                      "8871"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8872",
        "codes":  [
                      "8872"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8873",
        "codes":  [
                      "8873"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8874",
        "codes":  [
                      "8874"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8875",
        "codes":  [
                      "8875"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8876",
        "codes":  [
                      "8876"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8877",
        "codes":  [
                      "8877"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8878",
        "codes":  [
                      "8878"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8879",
        "codes":  [
                      "8879"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "88871",
        "codes":  [
                      "88871"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8920",
        "codes":  [
                      "8920"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8923",
        "codes":  [
                      "8923"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8925",
        "codes":  [
                      "8925"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "8927",
        "codes":  [
                      "8927"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8931",
        "codes":  [
                      "8931"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "8938",
        "codes":  [
                      "8938"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8942",
        "codes":  [
                      "8942"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8943",
        "codes":  [
                      "8943"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8964",
        "codes":  [
                      "8964"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8965",
        "codes":  [
                      "8965"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "8986",
        "codes":  [
                      "8986"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "8987",
        "codes":  [
                      "8987"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "91041",
        "codes":  [
                      "91041"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "914614",
        "codes":  [
                      "914614"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "9160",
        "codes":  [
                      "9160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "9170",
        "codes":  [
                      "9170"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "9177",
        "codes":  [
                      "9177"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "92102",
        "codes":  [
                      "92102"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "92119",
        "codes":  [
                      "92119"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "92121",
        "codes":  [
                      "92121"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "92126",
        "codes":  [
                      "92126"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "92127",
        "codes":  [
                      "92127"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "92802",
        "codes":  [
                      "92802"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "92804",
        "codes":  [
                      "92804"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "92807",
        "codes":  [
                      "92807"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "93802",
        "codes":  [
                      "93802"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "93803",
        "codes":  [
                      "93803"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938200",
        "codes":  [
                      "938200"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938201",
        "codes":  [
                      "938201"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938202",
        "codes":  [
                      "938202"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938203",
        "codes":  [
                      "938203"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938206",
        "codes":  [
                      "938206"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938207",
        "codes":  [
                      "938207"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938208",
        "codes":  [
                      "938208"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938209",
        "codes":  [
                      "938209"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938210",
        "codes":  [
                      "938210"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938211",
        "codes":  [
                      "938211"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "938212",
        "codes":  [
                      "938212"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94053",
        "codes":  [
                      "94053"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94055",
        "codes":  [
                      "94055"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94056",
        "codes":  [
                      "94056"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94058",
        "codes":  [
                      "94058"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94060",
        "codes":  [
                      "94060"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94061",
        "codes":  [
                      "94061"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94066",
        "codes":  [
                      "94066"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94069",
        "codes":  [
                      "94069"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94070",
        "codes":  [
                      "94070"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94073",
        "codes":  [
                      "94073"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94074",
        "codes":  [
                      "94074"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94075",
        "codes":  [
                      "94075"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94076",
        "codes":  [
                      "94076"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94077",
        "codes":  [
                      "94077"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94079",
        "codes":  [
                      "94079"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94081",
        "codes":  [
                      "94081"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94087",
        "codes":  [
                      "94087"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94089",
        "codes":  [
                      "94089"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94090",
        "codes":  [
                      "94090"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94091",
        "codes":  [
                      "94091"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94093",
        "codes":  [
                      "94093"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94100",
        "codes":  [
                      "94100"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94101",
        "codes":  [
                      "94101"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94102",
        "codes":  [
                      "94102"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94105",
        "codes":  [
                      "94105"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94106",
        "codes":  [
                      "94106"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94107",
        "codes":  [
                      "94107"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94108",
        "codes":  [
                      "94108"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94109",
        "codes":  [
                      "94109"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94119",
        "codes":  [
                      "94119"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94120",
        "codes":  [
                      "94120"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94121",
        "codes":  [
                      "94121"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94122",
        "codes":  [
                      "94122"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94124",
        "codes":  [
                      "94124"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94126",
        "codes":  [
                      "94126"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94127",
        "codes":  [
                      "94127"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94128",
        "codes":  [
                      "94128"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94200",
        "codes":  [
                      "94200"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94201",
        "codes":  [
                      "94201"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94202",
        "codes":  [
                      "94202"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94203",
        "codes":  [
                      "94203"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94204",
        "codes":  [
                      "94204"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94205",
        "codes":  [
                      "94205"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94206",
        "codes":  [
                      "94206"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94207",
        "codes":  [
                      "94207"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94210",
        "codes":  [
                      "94210"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94211",
        "codes":  [
                      "94211"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94213",
        "codes":  [
                      "94213"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94214",
        "codes":  [
                      "94214"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94215",
        "codes":  [
                      "94215"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94216",
        "codes":  [
                      "94216"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94217",
        "codes":  [
                      "94217"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94218",
        "codes":  [
                      "94218"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94219",
        "codes":  [
                      "94219"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94220",
        "codes":  [
                      "94220"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94221",
        "codes":  [
                      "94221"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94223",
        "codes":  [
                      "94223"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94224",
        "codes":  [
                      "94224"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94225",
        "codes":  [
                      "94225"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94226",
        "codes":  [
                      "94226"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94227",
        "codes":  [
                      "94227"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94228",
        "codes":  [
                      "94228"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94230",
        "codes":  [
                      "94230"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94232",
        "codes":  [
                      "94232"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94237",
        "codes":  [
                      "94237"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94238",
        "codes":  [
                      "94238"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94240",
        "codes":  [
                      "94240"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94241",
        "codes":  [
                      "94241"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94242",
        "codes":  [
                      "94242"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94243",
        "codes":  [
                      "94243"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94248",
        "codes":  [
                      "94248"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94250",
        "codes":  [
                      "94250"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94251",
        "codes":  [
                      "94251"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94253",
        "codes":  [
                      "94253"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94254",
        "codes":  [
                      "94254"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94255",
        "codes":  [
                      "94255"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94256",
        "codes":  [
                      "94256"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94257",
        "codes":  [
                      "94257"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94258",
        "codes":  [
                      "94258"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94259",
        "codes":  [
                      "94259"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94261",
        "codes":  [
                      "94261"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94263",
        "codes":  [
                      "94263"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94266",
        "codes":  [
                      "94266"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94267",
        "codes":  [
                      "94267"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94269",
        "codes":  [
                      "94269"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94270",
        "codes":  [
                      "94270"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94278",
        "codes":  [
                      "94278"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94282",
        "codes":  [
                      "94282"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94284",
        "codes":  [
                      "94284"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94287",
        "codes":  [
                      "94287"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94289",
        "codes":  [
                      "94289"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94290",
        "codes":  [
                      "94290"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94294",
        "codes":  [
                      "94294"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94296",
        "codes":  [
                      "94296"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94298",
        "codes":  [
                      "94298"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94299",
        "codes":  [
                      "94299"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94300",
        "codes":  [
                      "94300"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94303",
        "codes":  [
                      "94303"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94304",
        "codes":  [
                      "94304"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94307",
        "codes":  [
                      "94307"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94312",
        "codes":  [
                      "94312"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94313",
        "codes":  [
                      "94313"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94314",
        "codes":  [
                      "94314"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94315",
        "codes":  [
                      "94315"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94316",
        "codes":  [
                      "94316"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94317",
        "codes":  [
                      "94317"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94324",
        "codes":  [
                      "94324"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94325",
        "codes":  [
                      "94325"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94326",
        "codes":  [
                      "94326"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94327",
        "codes":  [
                      "94327"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94328",
        "codes":  [
                      "94328"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94329",
        "codes":  [
                      "94329"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94333",
        "codes":  [
                      "94333"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94334",
        "codes":  [
                      "94334"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94335",
        "codes":  [
                      "94335"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94336",
        "codes":  [
                      "94336"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94337",
        "codes":  [
                      "94337"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94338",
        "codes":  [
                      "94338"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94342",
        "codes":  [
                      "94342"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94344",
        "codes":  [
                      "94344"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94346",
        "codes":  [
                      "94346"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94347",
        "codes":  [
                      "94347"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94349",
        "codes":  [
                      "94349"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94350",
        "codes":  [
                      "94350"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94352",
        "codes":  [
                      "94352"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94354",
        "codes":  [
                      "94354"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94359",
        "codes":  [
                      "94359"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94361",
        "codes":  [
                      "94361"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94362",
        "codes":  [
                      "94362"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94500",
        "codes":  [
                      "94500"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94501",
        "codes":  [
                      "94501"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "94502",
        "codes":  [
                      "94502"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94503",
        "codes":  [
                      "94503"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94504",
        "codes":  [
                      "94504"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94505",
        "codes":  [
                      "94505"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94506",
        "codes":  [
                      "94506"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94507",
        "codes":  [
                      "94507"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94509",
        "codes":  [
                      "94509"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94510",
        "codes":  [
                      "94510"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94513",
        "codes":  [
                      "94513"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "94514",
        "codes":  [
                      "94514"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94515",
        "codes":  [
                      "94515"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94600",
        "codes":  [
                      "94600"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94602",
        "codes":  [
                      "94602"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94603",
        "codes":  [
                      "94603"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94606",
        "codes":  [
                      "94606"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "94749",
        "codes":  [
                      "94749"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "952003",
        "codes":  [
                      "952003"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95268",
        "codes":  [
                      "95268"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95269",
        "codes":  [
                      "95269"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "9527",
        "codes":  [
                      "9527"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95270",
        "codes":  [
                      "95270"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95272",
        "codes":  [
                      "95272"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95273",
        "codes":  [
                      "95273"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95274",
        "codes":  [
                      "95274"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95276",
        "codes":  [
                      "95276"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95278",
        "codes":  [
                      "95278"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95279",
        "codes":  [
                      "95279"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95280",
        "codes":  [
                      "95280"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95281",
        "codes":  [
                      "95281"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95283",
        "codes":  [
                      "95283"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95289",
        "codes":  [
                      "95289"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95316",
        "codes":  [
                      "95316"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95323",
        "codes":  [
                      "95323"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95329",
        "codes":  [
                      "95329"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95331",
        "codes":  [
                      "95331"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95337",
        "codes":  [
                      "95337"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95342",
        "codes":  [
                      "95342"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95347",
        "codes":  [
                      "95347"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95348",
        "codes":  [
                      "95348"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95520",
        "codes":  [
                      "95520"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95522",
        "codes":  [
                      "95522"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95523",
        "codes":  [
                      "95523"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95526",
        "codes":  [
                      "95526"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95662",
        "codes":  [
                      "95662"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "95667",
        "codes":  [
                      "95667"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "95669",
        "codes":  [
                      "95669"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95900",
        "codes":  [
                      "95900"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959004",
        "codes":  [
                      "959004"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959046",
        "codes":  [
                      "959046"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95905",
        "codes":  [
                      "95905"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959060",
        "codes":  [
                      "959060"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959062",
        "codes":  [
                      "959062"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959089",
        "codes":  [
                      "959089"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95910",
        "codes":  [
                      "95910"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959110",
        "codes":  [
                      "959110"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95915",
        "codes":  [
                      "95915"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959170",
        "codes":  [
                      "959170"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95920",
        "codes":  [
                      "95920"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95930",
        "codes":  [
                      "95930"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959304",
        "codes":  [
                      "959304"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95935",
        "codes":  [
                      "95935"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95940",
        "codes":  [
                      "95940"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "959417",
        "codes":  [
                      "959417"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "95945",
        "codes":  [
                      "95945"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "96150",
        "codes":  [
                      "96150"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "96578",
        "codes":  [
                      "96578"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "96579",
        "codes":  [
                      "96579"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "97197",
        "codes":  [
                      "97197"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "97203",
        "codes":  [
                      "97203"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "98110",
        "codes":  [
                      "98110"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "98122",
        "codes":  [
                      "98122"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "98124",
        "codes":  [
                      "98124"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "99154",
        "codes":  [
                      "99154"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "9960",
        "codes":  [
                      "9960"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "99763",
        "codes":  [
                      "99763"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2050",
        "codes":  [
                      "C2050"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "C2070",
        "codes":  [
                      "C2070"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2080",
        "codes":  [
                      "C2080"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2090",
        "codes":  [
                      "C2090"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2160",
        "codes":  [
                      "C2160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2163",
        "codes":  [
                      "C2163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2165",
        "codes":  [
                      "C2165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2166",
        "codes":  [
                      "C2166"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2241",
        "codes":  [
                      "C2241"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2243",
        "codes":  [
                      "C2243"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2244",
        "codes":  [
                      "C2244"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2246",
        "codes":  [
                      "C2246"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2265",
        "codes":  [
                      "C2265"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2341",
        "codes":  [
                      "C2341"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "C2342",
        "codes":  [
                      "C2342"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "C2351",
        "codes":  [
                      "C2351"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2352",
        "codes":  [
                      "C2352"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2353",
        "codes":  [
                      "C2353"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2354",
        "codes":  [
                      "C2354"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2355",
        "codes":  [
                      "C2355"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2356",
        "codes":  [
                      "C2356"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2357",
        "codes":  [
                      "C2357"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2361",
        "codes":  [
                      "C2361"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2364",
        "codes":  [
                      "C2364"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2365",
        "codes":  [
                      "C2365"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2366",
        "codes":  [
                      "C2366"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2367",
        "codes":  [
                      "C2367"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2370",
        "codes":  [
                      "C2370"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2371",
        "codes":  [
                      "C2371"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2374",
        "codes":  [
                      "C2374"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2375",
        "codes":  [
                      "C2375"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2376",
        "codes":  [
                      "C2376"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2377",
        "codes":  [
                      "C2377"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2378",
        "codes":  [
                      "C2378"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2379",
        "codes":  [
                      "C2379"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2410",
        "codes":  [
                      "C2410"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2420",
        "codes":  [
                      "C2420"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C2546",
        "codes":  [
                      "C2546"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2547",
        "codes":  [
                      "C2547"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C2651",
        "codes":  [
                      "C2651"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C6353",
        "codes":  [
                      "C6353"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9146",
        "codes":  [
                      "C9146"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9151",
        "codes":  [
                      "C9151"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9169",
        "codes":  [
                      "C9169"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9312",
        "codes":  [
                      "C9312"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9351",
        "codes":  [
                      "C9351"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9352",
        "codes":  [
                      "C9352"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9353",
        "codes":  [
                      "C9353"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9354",
        "codes":  [
                      "C9354"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9355",
        "codes":  [
                      "C9355"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9356",
        "codes":  [
                      "C9356"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9362",
        "codes":  [
                      "C9362"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9372",
        "codes":  [
                      "C9372"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9373",
        "codes":  [
                      "C9373"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9374",
        "codes":  [
                      "C9374"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9405",
        "codes":  [
                      "C9405"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9406",
        "codes":  [
                      "C9406"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9430",
        "codes":  [
                      "C9430"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9431",
        "codes":  [
                      "C9431"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9433",
        "codes":  [
                      "C9433"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9434",
        "codes":  [
                      "C9434"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "C9612",
        "codes":  [
                      "C9612"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "C9660",
        "codes":  [
                      "C9660"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "DL16",
        "codes":  [
                      "DL16"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "DP246",
        "codes":  [
                      "DP246"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "DPS16",
        "codes":  [
                      "DPS16"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "E3211",
        "codes":  [
                      "E3211"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "E3230",
        "codes":  [
                      "E3230"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "E3410",
        "codes":  [
                      "E3410"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "E3411",
        "codes":  [
                      "E3411"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "IJT310",
        "codes":  [
                      "IJT310"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "IJT311",
        "codes":  [
                      "IJT311"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J400",
        "codes":  [
                      "J400"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "J40063",
        "codes":  [
                      "J40063"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J40065",
        "codes":  [
                      "J40065"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J400DK",
        "codes":  [
                      "J400DK"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J400SL",
        "codes":  [
                      "J400SL"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J4720",
        "codes":  [
                      "J4720"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J4721",
        "codes":  [
                      "J4721"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J4773",
        "codes":  [
                      "J4773"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J4774",
        "codes":  [
                      "J4774"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J4791",
        "codes":  [
                      "J4791"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J4792",
        "codes":  [
                      "J4792"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8156",
        "codes":  [
                      "J8156"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8157",
        "codes":  [
                      "J8157"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8158",
        "codes":  [
                      "J8158"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8159",
        "codes":  [
                      "J8159"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8160",
        "codes":  [
                      "J8160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8161",
        "codes":  [
                      "J8161"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8162",
        "codes":  [
                      "J8162"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8163",
        "codes":  [
                      "J8163"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8164",
        "codes":  [
                      "J8164"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8165",
        "codes":  [
                      "J8165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8166",
        "codes":  [
                      "J8166"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8167",
        "codes":  [
                      "J8167"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8168",
        "codes":  [
                      "J8168"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8169",
        "codes":  [
                      "J8169"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8170",
        "codes":  [
                      "J8170"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8171",
        "codes":  [
                      "J8171"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8173",
        "codes":  [
                      "J8173"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8177",
        "codes":  [
                      "J8177"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8359",
        "codes":  [
                      "J8359"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8360",
        "codes":  [
                      "J8360"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8361",
        "codes":  [
                      "J8361"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8362",
        "codes":  [
                      "J8362"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8363",
        "codes":  [
                      "J8363"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8364",
        "codes":  [
                      "J8364"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8365",
        "codes":  [
                      "J8365"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8366",
        "codes":  [
                      "J8366"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8367",
        "codes":  [
                      "J8367"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8368",
        "codes":  [
                      "J8368"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8369",
        "codes":  [
                      "J8369"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8371",
        "codes":  [
                      "J8371"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8414",
        "codes":  [
                      "J8414"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8415",
        "codes":  [
                      "J8415"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8416",
        "codes":  [
                      "J8416"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8423",
        "codes":  [
                      "J8423"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8431",
        "codes":  [
                      "J8431"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8432",
        "codes":  [
                      "J8432"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8433",
        "codes":  [
                      "J8433"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8434",
        "codes":  [
                      "J8434"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "J8435",
        "codes":  [
                      "J8435"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  5
    },
    {
        "code":  "J8436",
        "codes":  [
                      "J8436"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8440",
        "codes":  [
                      "J8440"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8551",
        "codes":  [
                      "J8551"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8560",
        "codes":  [
                      "J8560"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8562",
        "codes":  [
                      "J8562"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8563",
        "codes":  [
                      "J8563"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8565",
        "codes":  [
                      "J8565"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8567",
        "codes":  [
                      "J8567"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8570",
        "codes":  [
                      "J8570"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8587",
        "codes":  [
                      "J8587"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8612",
        "codes":  [
                      "J8612"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8651",
        "codes":  [
                      "J8651"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8654",
        "codes":  [
                      "J8654"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8655",
        "codes":  [
                      "J8655"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8656",
        "codes":  [
                      "J8656"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8657",
        "codes":  [
                      "J8657"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8658",
        "codes":  [
                      "J8658"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8659",
        "codes":  [
                      "J8659"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8666",
        "codes":  [
                      "J8666"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8667",
        "codes":  [
                      "J8667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "J8668",
        "codes":  [
                      "J8668"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8671",
        "codes":  [
                      "J8671"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8674",
        "codes":  [
                      "J8674"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8676",
        "codes":  [
                      "J8676"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8701",
        "codes":  [
                      "J8701"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8702",
        "codes":  [
                      "J8702"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8751",
        "codes":  [
                      "J8751"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8766",
        "codes":  [
                      "J8766"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8770",
        "codes":  [
                      "J8770"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8771",
        "codes":  [
                      "J8771"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8774",
        "codes":  [
                      "J8774"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8776",
        "codes":  [
                      "J8776"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8777",
        "codes":  [
                      "J8777"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8778",
        "codes":  [
                      "J8778"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "J8867",
        "codes":  [
                      "J8867"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8871",
        "codes":  [
                      "J8871"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J8875",
        "codes":  [
                      "J8875"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "J9124",
        "codes":  [
                      "J9124"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L300",
        "codes":  [
                      "L300"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "L30063",
        "codes":  [
                      "L30063"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L30065",
        "codes":  [
                      "L30065"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L300DK",
        "codes":  [
                      "L300DK"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L300SL",
        "codes":  [
                      "L300SL"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4727",
        "codes":  [
                      "L4727"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4732",
        "codes":  [
                      "L4732"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L4733",
        "codes":  [
                      "L4733"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L4734",
        "codes":  [
                      "L4734"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4736",
        "codes":  [
                      "L4736"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L4737",
        "codes":  [
                      "L4737"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4743",
        "codes":  [
                      "L4743"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4770",
        "codes":  [
                      "L4770"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4772",
        "codes":  [
                      "L4772"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4773",
        "codes":  [
                      "L4773"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L4774",
        "codes":  [
                      "L4774"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4776",
        "codes":  [
                      "L4776"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4778",
        "codes":  [
                      "L4778"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4784",
        "codes":  [
                      "L4784"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4785",
        "codes":  [
                      "L4785"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4787",
        "codes":  [
                      "L4787"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4790",
        "codes":  [
                      "L4790"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4791",
        "codes":  [
                      "L4791"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4792",
        "codes":  [
                      "L4792"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L4793",
        "codes":  [
                      "L4793"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6003",
        "codes":  [
                      "L6003"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6004",
        "codes":  [
                      "L6004"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6008",
        "codes":  [
                      "L6008"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6009",
        "codes":  [
                      "L6009"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6011",
        "codes":  [
                      "L6011"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6012",
        "codes":  [
                      "L6012"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6023",
        "codes":  [
                      "L6023"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6025",
        "codes":  [
                      "L6025"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6032",
        "codes":  [
                      "L6032"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6033",
        "codes":  [
                      "L6033"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6034",
        "codes":  [
                      "L6034"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6035",
        "codes":  [
                      "L6035"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6038",
        "codes":  [
                      "L6038"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6039",
        "codes":  [
                      "L6039"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6040",
        "codes":  [
                      "L6040"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6041",
        "codes":  [
                      "L6041"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6050",
        "codes":  [
                      "L6050"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6051",
        "codes":  [
                      "L6051"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6052",
        "codes":  [
                      "L6052"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6053",
        "codes":  [
                      "L6053"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6099",
        "codes":  [
                      "L6099"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6103",
        "codes":  [
                      "L6103"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6105",
        "codes":  [
                      "L6105"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6112",
        "codes":  [
                      "L6112"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6113",
        "codes":  [
                      "L6113"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6114",
        "codes":  [
                      "L6114"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6140",
        "codes":  [
                      "L6140"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6141",
        "codes":  [
                      "L6141"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6145",
        "codes":  [
                      "L6145"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L6146",
        "codes":  [
                      "L6146"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7051",
        "codes":  [
                      "L7051"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7060",
        "codes":  [
                      "L7060"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7063",
        "codes":  [
                      "L7063"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7065",
        "codes":  [
                      "L7065"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7067",
        "codes":  [
                      "L7067"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7068",
        "codes":  [
                      "L7068"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7069",
        "codes":  [
                      "L7069"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7106",
        "codes":  [
                      "L7106"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7156",
        "codes":  [
                      "L7156"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7157",
        "codes":  [
                      "L7157"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7158",
        "codes":  [
                      "L7158"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7159",
        "codes":  [
                      "L7159"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "L7160",
        "codes":  [
                      "L7160"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "L7161",
        "codes":  [
                      "L7161"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "L7162",
        "codes":  [
                      "L7162"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7163",
        "codes":  [
                      "L7163"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "L7164",
        "codes":  [
                      "L7164"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7165",
        "codes":  [
                      "L7165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7166",
        "codes":  [
                      "L7166"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  3
    },
    {
        "code":  "L7167",
        "codes":  [
                      "L7167"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7168",
        "codes":  [
                      "L7168"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7169",
        "codes":  [
                      "L7169"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7170",
        "codes":  [
                      "L7170"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7171",
        "codes":  [
                      "L7171"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "L7172",
        "codes":  [
                      "L7172"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7173",
        "codes":  [
                      "L7173"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  4
    },
    {
        "code":  "L7176",
        "codes":  [
                      "L7176"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7177",
        "codes":  [
                      "L7177"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7178",
        "codes":  [
                      "L7178"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7179",
        "codes":  [
                      "L7179"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7263",
        "codes":  [
                      "L7263"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7363",
        "codes":  [
                      "L7363"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7400",
        "codes":  [
                      "L7400"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7408",
        "codes":  [
                      "L7408"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7409",
        "codes":  [
                      "L7409"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7411",
        "codes":  [
                      "L7411"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  5
    },
    {
        "code":  "L7413",
        "codes":  [
                      "L7413"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7414",
        "codes":  [
                      "L7414"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7415",
        "codes":  [
                      "L7415"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7417",
        "codes":  [
                      "L7417"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7418",
        "codes":  [
                      "L7418"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7419",
        "codes":  [
                      "L7419"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7421",
        "codes":  [
                      "L7421"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7422",
        "codes":  [
                      "L7422"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7423",
        "codes":  [
                      "L7423"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7424",
        "codes":  [
                      "L7424"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7425",
        "codes":  [
                      "L7425"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7426",
        "codes":  [
                      "L7426"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7551",
        "codes":  [
                      "L7551"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7552",
        "codes":  [
                      "L7552"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7553",
        "codes":  [
                      "L7553"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7560",
        "codes":  [
                      "L7560"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7562",
        "codes":  [
                      "L7562"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7563",
        "codes":  [
                      "L7563"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7565",
        "codes":  [
                      "L7565"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7567",
        "codes":  [
                      "L7567"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7568",
        "codes":  [
                      "L7568"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7587",
        "codes":  [
                      "L7587"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7630",
        "codes":  [
                      "L7630"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7636",
        "codes":  [
                      "L7636"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7650",
        "codes":  [
                      "L7650"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7651",
        "codes":  [
                      "L7651"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  6
    },
    {
        "code":  "L7652",
        "codes":  [
                      "L7652"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7653",
        "codes":  [
                      "L7653"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7654",
        "codes":  [
                      "L7654"
                  ],
        "sources":  [
                        "avery_urls",
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7655",
        "codes":  [
                      "L7655"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7656",
        "codes":  [
                      "L7656"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7657",
        "codes":  [
                      "L7657"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7658",
        "codes":  [
                      "L7658"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7663",
        "codes":  [
                      "L7663"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7664",
        "codes":  [
                      "L7664"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7665",
        "codes":  [
                      "L7665"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7666",
        "codes":  [
                      "L7666"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7667",
        "codes":  [
                      "L7667"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7668",
        "codes":  [
                      "L7668"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7669",
        "codes":  [
                      "L7669"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7670",
        "codes":  [
                      "L7670"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7671",
        "codes":  [
                      "L7671"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7674",
        "codes":  [
                      "L7674"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L76754",
        "codes":  [
                      "L76754"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7676",
        "codes":  [
                      "L7676"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7680",
        "codes":  [
                      "L7680"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7690",
        "codes":  [
                      "L7690"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7701",
        "codes":  [
                      "L7701"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7702",
        "codes":  [
                      "L7702"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L773",
        "codes":  [
                      "L773"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7760",
        "codes":  [
                      "L7760"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7765",
        "codes":  [
                      "L7765"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7767",
        "codes":  [
                      "L7767"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7768",
        "codes":  [
                      "L7768"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7769",
        "codes":  [
                      "L7769"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  2
    },
    {
        "code":  "L7781",
        "codes":  [
                      "L7781"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7782",
        "codes":  [
                      "L7782"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7901",
        "codes":  [
                      "L7901"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7902",
        "codes":  [
                      "L7902"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7905",
        "codes":  [
                      "L7905"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7960",
        "codes":  [
                      "L7960"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7966",
        "codes":  [
                      "L7966"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7973",
        "codes":  [
                      "L7973"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7992",
        "codes":  [
                      "L7992"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7994",
        "codes":  [
                      "L7994"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7995",
        "codes":  [
                      "L7995"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "L7996",
        "codes":  [
                      "L7996"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LPT110",
        "codes":  [
                      "LPT110"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LPT111",
        "codes":  [
                      "LPT111"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LR7159",
        "codes":  [
                      "LR7159"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LR7160",
        "codes":  [
                      "LR7160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LR7165",
        "codes":  [
                      "LR7165"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LR7168",
        "codes":  [
                      "LR7168"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "LR7651",
        "codes":  [
                      "LR7651"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "M8360",
        "codes":  [
                      "M8360"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "MP7160",
        "codes":  [
                      "MP7160"
                  ],
        "sources":  [
                        "pasted_text"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "PLS780",
        "codes":  [
                      "PLS780"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "T00-1VA",
        "codes":  [
                      "T00-1VA"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "T00-27V",
        "codes":  [
                      "T00-27V"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "T00-8G2",
        "codes":  [
                      "T00-8G2"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    },
    {
        "code":  "TD5730",
        "codes":  [
                      "TD5730"
                  ],
        "sources":  [
                        "avery_urls"
                    ],
        "sourceRows":  1
    }
]);

export const AVERY_TEMPLATE_CODE_COUNT = AVERY_TEMPLATE_CATALOG.length;
````

## src/templates.js
``javascript
import {
  AVERY_TEMPLATE_CATALOG,
  AVERY_TEMPLATE_CODE_COUNT,
} from "./averyTemplateCatalog.js";

export const POINTS_PER_INCH = 72;
export const TWIPS_PER_INCH = 1440;

export { AVERY_TEMPLATE_CATALOG, AVERY_TEMPLATE_CODE_COUNT };

export const TOP_AVERY_CODES = Object.freeze([
  "5160",
  "5163",
  "8160",
  "5164",
  "5162",
  "18160",
  "5371",
  "5366",
  "5161",
  "5167",
  "5260",
  "5392",
  "5302",
  "8163",
  "5395",
  "22807",
  "5390",
  "5309",
  "18660",
  "5388",
]);

export const FEATURED_AVERY_CODES = TOP_AVERY_CODES;

export const LETTER = Object.freeze({
  widthIn: 8.5,
  heightIn: 11,
  widthPt: 8.5 * POINTS_PER_INCH,
  heightPt: 11 * POINTS_PER_INCH,
  widthTwip: 8.5 * TWIPS_PER_INCH,
  heightTwip: 11 * TWIPS_PER_INCH,
});

const round = (value, places = 4) => Number(value.toFixed(places));

export function normalizeTemplateCode(value) {
  const compact = String(value || "").trim().replace(/[^A-Za-z0-9-]/g, "").toUpperCase();
  if (!compact) return "";

  const ticketMatch = compact.match(/^T\d{2}-[A-Z0-9]{2,5}$/);
  if (ticketMatch) return compact;

  const numericMatch = compact.match(/^0*(\d{3,6})([A-Z]{0,2})$/);
  if (numericMatch) return `${Number(numericMatch[1])}${numericMatch[2]}`;

  const prefixedMatch = compact.match(/^([A-Z]{1,3})0*(\d{2,6})([A-Z]{0,3})$/);
  if (prefixedMatch) return `${prefixedMatch[1]}${Number(prefixedMatch[2])}${prefixedMatch[3]}`;

  return compact;
}

function createTemplate(config) {
  const {
    id,
    aliases = [],
    category,
    name,
    description,
    w,
    h,
    rows,
    cols,
    top,
    left,
    hGap = 0,
    vGap = 0,
  } = config;

  const usedWidth = cols * w + Math.max(0, cols - 1) * hGap;
  const usedHeight = rows * h + Math.max(0, rows - 1) * vGap;

  return Object.freeze({
    id,
    aliases,
    category,
    name,
    description,
    w,
    h,
    rows,
    cols,
    top,
    left,
    hGap,
    vGap,
    perSheet: rows * cols,
    right: round(LETTER.widthIn - left - usedWidth),
    bottom: round(LETTER.heightIn - top - usedHeight),
  });
}

export const AVERY_TEMPLATES = Object.freeze([
  createTemplate({
    id: "5160",
    aliases: ["5260", "55160", "5520", "5630", "5960", "5970", "8160", "8250", "8460", "8660", "18160", "18660"],
    category: "Address",
    name: "Avery 5160 / 8160",
    description: "Address labels, 30 per sheet",
    w: 2.625,
    h: 1,
    rows: 10,
    cols: 3,
    top: 0.5,
    left: 0.1875,
    hGap: 0.125,
  }),
  createTemplate({
    id: "5161",
    aliases: ["5261", "5961", "8161"],
    category: "Address",
    name: "Avery 5161 / 8161",
    description: "Address labels, 20 per sheet",
    w: 4,
    h: 1,
    rows: 10,
    cols: 2,
    top: 0.5,
    left: 0.15625,
    hGap: 0.1875,
  }),
  createTemplate({
    id: "5162",
    aliases: ["5262", "5962", "8162"],
    category: "Address",
    name: "Avery 5162 / 8162",
    description: "Address labels, 14 per sheet",
    w: 4,
    h: 1.333333,
    rows: 7,
    cols: 2,
    top: 0.833333,
    left: 0.25,
  }),
  createTemplate({
    id: "5163",
    aliases: ["5263", "5663", "5963", "8163", "18163"],
    category: "Shipping",
    name: "Avery 5163 / 8163",
    description: "Shipping labels, 10 per sheet",
    w: 4,
    h: 2,
    rows: 5,
    cols: 2,
    top: 0.5,
    left: 0.25,
  }),
  createTemplate({
    id: "5164",
    aliases: ["5264", "5664", "8164"],
    category: "Shipping",
    name: "Avery 5164 / 8164",
    description: "Shipping labels, 6 per sheet",
    w: 4,
    h: 3.333333,
    rows: 3,
    cols: 2,
    top: 0.5,
    left: 0.25,
  }),
  createTemplate({
    id: "5126",
    aliases: ["8126"],
    category: "Shipping",
    name: "Avery 5126 / 8126",
    description: "Half-sheet shipping labels, 2 per sheet",
    w: 8.5,
    h: 5.5,
    rows: 2,
    cols: 1,
    top: 0,
    left: 0,
  }),
  createTemplate({
    id: "5168",
    aliases: ["5268", "8168"],
    category: "Shipping",
    name: "Avery 5168 / 8168",
    description: "Large shipping labels, 4 per sheet",
    w: 3.5,
    h: 5,
    rows: 2,
    cols: 2,
    top: 0.5,
    left: 0.75,
  }),
  createTemplate({
    id: "5167",
    aliases: ["5267", "5667", "8167"],
    category: "Return",
    name: "Avery 5167 / 8167",
    description: "Return address labels, 80 per sheet",
    w: 1.75,
    h: 0.5,
    rows: 20,
    cols: 4,
    top: 0.5,
    left: 0.28125,
    hGap: 0.3125,
  }),
  createTemplate({
    id: "5195",
    aliases: ["8195"],
    category: "Return",
    name: "Avery 5195 / 8195",
    description: "Return address labels, 60 per sheet",
    w: 1.75,
    h: 0.666667,
    rows: 15,
    cols: 4,
    top: 0.5,
    left: 0.28125,
    hGap: 0.3125,
  }),
  createTemplate({
    id: "5366",
    aliases: ["5266", "8366"],
    category: "File Folder",
    name: "Avery 5366",
    description: "File folder labels, 30 per sheet",
    w: 3.4375,
    h: 0.666667,
    rows: 15,
    cols: 2,
    top: 0.5,
    left: 0.8125,
  }),
  createTemplate({
    id: "5371",
    aliases: ["28371", "8371", "8871"],
    category: "Cards",
    name: "Avery 5371 / 8371",
    description: "Business cards, 10 per sheet",
    w: 3.5,
    h: 2,
    rows: 5,
    cols: 2,
    top: 0.5,
    left: 0.75,
  }),
  createTemplate({
    id: "5395",
    aliases: ["8395"],
    category: "Badges",
    name: "Avery 5395",
    description: "Name badges, 8 per sheet",
    w: 3.375,
    h: 2.333333,
    rows: 4,
    cols: 2,
    top: 0.833333,
    left: 0.6875,
    hGap: 0.375,
  }),
  createTemplate({
    id: "5392",
    aliases: ["35392", "5384", "5393", "74459", "74536", "74540", "74541", "78617", "78619", "8780", "8781"],
    category: "Badges",
    name: "Avery 5392",
    description: "Name badge insert refills, 6 per sheet",
    w: 4,
    h: 3,
    rows: 3,
    cols: 2,
    top: 1,
    left: 0.25,
  }),
  createTemplate({
    id: "5302",
    aliases: ["5812", "5913"],
    category: "Cards",
    name: "Avery 5302",
    description: "Small tent cards, 4 per sheet",
    w: 3.5,
    h: 2,
    rows: 2,
    cols: 2,
    top: 3.5,
    left: 0.75,
  }),
  createTemplate({
    id: "22806",
    aliases: ["22807"],
    category: "Specialty",
    name: "Avery 22806",
    description: "Square labels, 12 per sheet",
    w: 2,
    h: 2,
    rows: 4,
    cols: 3,
    top: 0.75,
    left: 1.125,
    hGap: 0.125,
    vGap: 0.125,
  }),
]);

const templateLookup = new Map();
for (const template of AVERY_TEMPLATES) {
  templateLookup.set(normalizeTemplateCode(template.id), template);
  for (const alias of template.aliases) {
    templateLookup.set(normalizeTemplateCode(alias), template);
  }
}

const catalogLookup = new Map();
for (const record of AVERY_TEMPLATE_CATALOG) {
  catalogLookup.set(normalizeTemplateCode(record.code), record);
  for (const code of record.codes || []) {
    catalogLookup.set(normalizeTemplateCode(code), record);
  }
}

export function getTemplateById(id) {
  return templateLookup.get(normalizeTemplateCode(id)) || AVERY_TEMPLATES[0];
}

export function getTemplateCatalogRecord(id) {
  return catalogLookup.get(normalizeTemplateCode(id)) || null;
}

export function getFeaturedTemplates() {
  const seen = new Set();
  const templates = [];

  for (const code of FEATURED_AVERY_CODES) {
    const template = templateLookup.get(normalizeTemplateCode(code));
    if (!template || seen.has(template.id)) continue;
    seen.add(template.id);
    templates.push(template);
  }

  return templates;
}

export function isFeaturedTemplate(template) {
  if (!template) return false;
  return FEATURED_AVERY_CODES.some((code) => templateLookup.get(normalizeTemplateCode(code)) === template);
}

export function getFeaturedCatalogRecords() {
  const seen = new Set();
  const records = [];

  for (const code of FEATURED_AVERY_CODES) {
    const template = templateLookup.get(normalizeTemplateCode(code));
    if (template) continue;

    const record = catalogLookup.get(normalizeTemplateCode(code));
    if (!record || seen.has(record.code)) continue;
    seen.add(record.code);
    records.push(record);
  }

  return records;
}

export function getTopTemplateEntries() {
  const entries = [];

  for (const code of TOP_AVERY_CODES) {
    const normalizedCode = normalizeTemplateCode(code);
    const template = templateLookup.get(normalizedCode);

    if (template) {
      entries.push({ type: "template", code, codes: [code], template });
      continue;
    }

    const record = catalogLookup.get(normalizedCode);
    if (!record) continue;
    entries.push({ type: "catalog", code, codes: [code], record });
  }

  return entries;
}

function getNumericSortValue(code) {
  const match = String(code || "").match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

export function getAllTemplateLibraryEntries() {
  const entries = [];
  const seenCatalogCodes = new Set();

  for (const template of AVERY_TEMPLATES) {
    entries.push({
      type: "template",
      code: template.id,
      template,
      sortCode: getNumericSortValue(template.id),
      sortLabel: template.id,
    });

    seenCatalogCodes.add(normalizeTemplateCode(template.id));
    for (const alias of template.aliases || []) {
      seenCatalogCodes.add(normalizeTemplateCode(alias));
    }
  }

  for (const record of AVERY_TEMPLATE_CATALOG) {
    const recordCodes = [record.code, ...(record.codes || [])];
    if (recordCodes.some((code) => seenCatalogCodes.has(normalizeTemplateCode(code)))) continue;
    entries.push({
      type: "catalog",
      code: record.code,
      record,
      sortCode: getNumericSortValue(record.code),
      sortLabel: record.code,
    });
  }

  return entries.sort((a, b) => {
    if (a.sortCode !== b.sortCode) return a.sortCode - b.sortCode;
    return String(a.sortLabel).localeCompare(String(b.sortLabel), undefined, { numeric: true });
  });
}

export function getTemplateSearchText(template) {
  return [
    template.id,
    ...template.aliases,
    template.category,
    template.name,
    template.description,
    `${template.w}x${template.h}`,
    `${template.perSheet}`,
  ].join(" ").toLowerCase();
}

export function templateMatchesSearch(template, query) {
  const rawQuery = String(query || "").trim().toLowerCase();
  if (!rawQuery) return true;
  if (getTemplateSearchText(template).includes(rawQuery)) return true;

  const normalizedQuery = normalizeTemplateCode(query);
  return templateLookup.get(normalizedQuery) === template;
}

export function getUncalibratedCatalogMatches(query, limit = 18) {
  const rawQuery = String(query || "").trim().toLowerCase();
  if (!rawQuery) return [];

  const normalizedQuery = normalizeTemplateCode(query);
  const matches = [];

  for (const record of AVERY_TEMPLATE_CATALOG) {
    const recordCodes = [record.code, ...(record.codes || [])];
    const isCalibrated = recordCodes.some((code) => templateLookup.has(normalizeTemplateCode(code)));
    if (isCalibrated) continue;

    const searchText = recordCodes.join(" ").toLowerCase();
    const normalizedMatch = normalizedQuery && recordCodes.some((code) => normalizeTemplateCode(code).includes(normalizedQuery));
    if (searchText.includes(rawQuery) || normalizedMatch) {
      matches.push(record);
      if (matches.length >= limit) break;
    }
  }

  return matches;
}

export function validateTemplateGeometry(template) {
  const errors = [];
  const usedWidth = template.cols * template.w + Math.max(0, template.cols - 1) * template.hGap;
  const usedHeight = template.rows * template.h + Math.max(0, template.rows - 1) * template.vGap;

  if (template.left < 0 || template.top < 0) errors.push("Margins cannot be negative.");
  if (template.left + usedWidth > LETTER.widthIn + 0.001) errors.push("Template is wider than letter paper.");
  if (template.top + usedHeight > LETTER.heightIn + 0.001) errors.push("Template is taller than letter paper.");
  if (!Number.isFinite(template.perSheet) || template.perSheet <= 0) errors.push("Template has no printable labels.");

  return errors;
}

export function buildSlots(template) {
  const slots = [];
  for (let row = 0; row < template.rows; row += 1) {
    for (let col = 0; col < template.cols; col += 1) {
      const xIn = template.left + col * (template.w + template.hGap);
      const yIn = template.top + row * (template.h + template.vGap);
      slots.push({
        index: slots.length,
        row,
        col,
        xIn,
        yIn,
        wIn: template.w,
        hIn: template.h,
        xPt: xIn * POINTS_PER_INCH,
        yPt: yIn * POINTS_PER_INCH,
        wPt: template.w * POINTS_PER_INCH,
        hPt: template.h * POINTS_PER_INCH,
        xTwip: xIn * TWIPS_PER_INCH,
        yTwip: yIn * TWIPS_PER_INCH,
        wTwip: template.w * TWIPS_PER_INCH,
        hTwip: template.h * TWIPS_PER_INCH,
      });
    }
  }
  return slots;
}

````

## src/templateEngine.js
``javascript
import Papa from "papaparse";

const MAX_ROWS = 25000;
const MAX_CELL_LENGTH = 1000;

export const DEFAULT_LABEL_TEMPLATE = "John Doe\n123 Street Ave\nCity, State 12345";

export const DEFAULT_STYLE = Object.freeze({
  fontFamily: "diatype",
  fontSize: 10,
  alignment: "left",
  verticalAlign: "top",
  isBold: false,
  isItalic: false,
  isUpper: false,
});

export function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

export function normalizeFieldName(rawName, fallback, used = new Set()) {
  const base = String(rawName || fallback || "field")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || String(fallback || "field");

  let candidate = base;
  let suffix = 2;
  while (used.has(candidate)) {
    candidate = `${base}_${suffix}`;
    suffix += 1;
  }
  used.add(candidate);
  return candidate;
}

export function sanitizeCell(value) {
  return String(value ?? "")
    .replace(/\u0000/g, "")
    .slice(0, MAX_CELL_LENGTH)
    .trim();
}

export function sanitizeRows(rows, headers) {
  const safeHeaders = headers.length > 0 ? headers : ["content"];
  return rows.slice(0, MAX_ROWS).map((row) => {
    const normalized = {};
    for (const header of safeHeaders) {
      normalized[header] = sanitizeCell(row?.[header]);
    }
    return normalized;
  });
}

function guessFieldName(rows, colIndex) {
  const samples = rows.slice(0, 6).map((row) => sanitizeCell(row[colIndex])).filter(Boolean);
  if (samples.length === 0) return `field_${colIndex + 1}`;
  if (colIndex === 0 && samples.every((sample) => /^[A-Za-z &.,'-]+$/.test(sample))) return "name";
  if (samples.some((sample) => /^\d+\s+\w/.test(sample))) return "address";
  if (samples.some((sample) => /\b[A-Za-z]{2}\b\s*\d{5}/.test(sample))) return "city_state_zip";
  if (samples.some((sample) => /@/.test(sample))) return "email";
  if (samples.some((sample) => /\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(sample))) return "phone";
  return `field_${colIndex + 1}`;
}

function rowsToObjects(rawRows, firstRowIsHeader) {
  const rows = rawRows
    .map((row) => Array.isArray(row) ? row.map(sanitizeCell) : [])
    .filter((row) => row.some(Boolean));

  if (rows.length === 0) return { data: [], headers: [] };

  const used = new Set();
  let dataRows = rows;
  let headers;

  if (firstRowIsHeader && rows.length > 1) {
    headers = rows[0].map((name, index) => normalizeFieldName(name, `field_${index + 1}`, used));
    dataRows = rows.slice(1);
  } else {
    const colCount = Math.max(...rows.map((row) => row.length));
    headers = Array.from({ length: colCount }, (_, index) =>
      normalizeFieldName(guessFieldName(rows, index), `field_${index + 1}`, used)
    );
  }

  const objects = dataRows.map((row) => {
    const result = {};
    headers.forEach((header, index) => {
      result[header] = sanitizeCell(row[index]);
    });
    return result;
  });

  return { data: sanitizeRows(objects, headers), headers };
}

function parseAddressBlocks(text, firstRowIsHeader) {
  const blocks = text.split(/\r?\n\s*\r?\n/).map((block) => block.trim()).filter(Boolean);
  const rows = blocks.map((block) => block.split(/\r?\n/).map(sanitizeCell));
  return rowsToObjects(rows, firstRowIsHeader);
}

export function parsePastedText(text, firstRowIsHeader = true) {
  const cleanText = String(text || "").trim();
  if (!cleanText) return { data: [], headers: [] };

  const hasTabs = cleanText.includes("\t");
  const hasBlankBlocks = /\r?\n\s*\r?\n/.test(cleanText);
  const hasLikelyCsv = /(?:^|[\r\n])[^"\r\n]*,[^"\r\n]*(?:[\r\n]|$)/.test(cleanText) || /".*,.*"/.test(cleanText);

  if (hasBlankBlocks && !hasTabs && !hasLikelyCsv) {
    return parseAddressBlocks(cleanText, firstRowIsHeader);
  }

  if (hasTabs || hasLikelyCsv) {
    const parsed = Papa.parse(cleanText, {
      delimiter: hasTabs ? "\t" : "",
      skipEmptyLines: true,
    });

    if (parsed.errors?.length) {
      const blocking = parsed.errors.find((error) => error.type === "Quotes" || error.code === "UndetectableDelimiter");
      if (blocking) throw new Error(`Could not parse pasted rows: ${blocking.message}`);
    }

    return rowsToObjects(parsed.data, firstRowIsHeader);
  }

  const lines = cleanText.split(/\r?\n/).map(sanitizeCell).filter(Boolean);
  if (lines.length === 0) return { data: [], headers: [] };

  if (firstRowIsHeader && lines.length > 1) {
    const used = new Set();
    const header = normalizeFieldName(lines[0], "content", used);
    return {
      data: sanitizeRows(lines.slice(1).map((line) => ({ [header]: line })), [header]),
      headers: [header],
    };
  }

  return {
    data: sanitizeRows(lines.map((line) => ({ content: line })), ["content"]),
    headers: ["content"],
  };
}

export function parseCsvFile(file, firstRowIsHeader = true) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: firstRowIsHeader,
      skipEmptyLines: true,
      worker: file.size > 512 * 1024,
      complete: (results) => {
        if (results.errors?.length) {
          const blocking = results.errors.find((error) => error.type === "Quotes" || error.type === "Delimiter");
          if (blocking) {
            reject(new Error(`CSV parse failed: ${blocking.message}`));
            return;
          }
        }

        if (firstRowIsHeader) {
          const used = new Set();
          const headers = (results.meta.fields || []).map((field, index) =>
            normalizeFieldName(field, `field_${index + 1}`, used)
          );
          const renamedRows = results.data.map((row) => {
            const next = {};
            (results.meta.fields || []).forEach((source, index) => {
              next[headers[index]] = sanitizeCell(row[source]);
            });
            return next;
          });
          resolve({ data: sanitizeRows(renamedRows, headers), headers });
          return;
        }

        resolve(rowsToObjects(results.data, false));
      },
      error: (error) => reject(error),
    });
  });
}

export function rowsFromWorkspace(values, firstRowIsHeader = true) {
  if (!Array.isArray(values)) return { data: [], headers: [] };
  return rowsToObjects(values, firstRowIsHeader);
}

export function deriveTemplateFromHeaders(headers) {
  if (!headers?.length) return DEFAULT_LABEL_TEMPLATE;
  const preferredOrder = ["name", "company", "address", "address_2", "city", "state", "zip", "city_state_zip"];
  const ordered = [
    ...preferredOrder.filter((name) => headers.includes(name)),
    ...headers.filter((name) => !preferredOrder.includes(name)),
  ];
  return ordered.slice(0, 6).map((header) => `{{${header}}}`).join("\n");
}

export function mergeTemplate(template, rowData = {}, options = {}) {
  const source = String(template || "");
  const normalizedRow = new Map();

  for (const [key, value] of Object.entries(rowData || {})) {
    const safeValue = sanitizeCell(value);
    const rawKey = String(key);
    normalizedRow.set(rawKey.toLowerCase(), safeValue);
    normalizedRow.set(normalizeFieldName(rawKey, rawKey, new Set()).toLowerCase(), safeValue);
  }

  const merged = source.replace(/{{\s*([^{}]+?)\s*}}/g, (_match, token) => {
    const normalizedToken = normalizeFieldName(token, token, new Set()).toLowerCase();
    return normalizedRow.get(normalizedToken) ?? "";
  });

  return options.uppercase ? merged.toUpperCase() : merged;
}

export function createManualRows(count) {
  return Array.from({ length: clampNumber(count, 1, MAX_ROWS, 1) }, () => ({}));
}

export function getDataRows(state) {
  if (state.inputMethod === "manual") return createManualRows(state.manualCount);
  return Array.isArray(state.data) ? state.data : [];
}

export function getMaxOverrideIndex(overrides = {}) {
  return Object.keys(overrides).reduce((max, key) => {
    const index = Number.parseInt(key, 10);
    return Number.isFinite(index) ? Math.max(max, index) : max;
  }, -1);
}

export function getTotalLabels(state) {
  const dataRows = getDataRows(state);
  const contentTotal = dataRows.length + clampNumber(state.skipCount, 0, MAX_ROWS, 0);
  return Math.max(contentTotal, getMaxOverrideIndex(state.overrides) + 1, 1);
}

export function getStyleForIndex(state, index) {
  const base = { ...DEFAULT_STYLE, ...state.style };
  return state.overrides?.[index]?.style ? { ...base, ...state.overrides[index].style } : base;
}

export function resolveLabelAt(state, index) {
  const dataRows = getDataRows(state);
  const skipCount = clampNumber(state.skipCount, 0, MAX_ROWS, 0);
  const override = state.overrides?.[index];
  const style = getStyleForIndex(state, index);

  if (override) {
    return {
      content: style.isUpper ? String(override.content || "").toUpperCase() : String(override.content || ""),
      style,
      skipped: false,
      custom: true,
    };
  }

  if (index < skipCount) {
    return { content: "", style, skipped: true, custom: false };
  }

  const dataIndex = index - skipCount;
  if (dataIndex >= dataRows.length) {
    return { content: "", style, skipped: false, custom: false };
  }

  return {
    content: mergeTemplate(state.labelTemplate, dataRows[dataIndex], { uppercase: style.isUpper }),
    style,
    skipped: false,
    custom: false,
  };
}

export function validateImportedProject(project) {
  if (!project || typeof project !== "object") throw new Error("Project file is empty.");
  if (project.data && !Array.isArray(project.data)) throw new Error("Project data is invalid.");
  if (project.headers && !Array.isArray(project.headers)) throw new Error("Project headers are invalid.");
  return project;
}

````

## src/exporters.js
``javascript
import { jsPDF } from "jspdf";
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeightRule,
  ImageRun,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from "docx";

import { buildSlots, LETTER, TWIPS_PER_INCH } from "./templates.js";
import { getTotalLabels, resolveLabelAt } from "./templateEngine.js";

const PT_TO_PX = 96 / 72;

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function waitForPaint() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function getImageFormat(dataUrl) {
  if (/^data:image\/jpe?g/i.test(dataUrl)) return "JPEG";
  if (/^data:image\/webp/i.test(dataUrl)) return "WEBP";
  return "PNG";
}

function dataUrlToUint8Array(dataUrl) {
  const [, raw = ""] = String(dataUrl).split(",");
  const binary = atob(raw);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function textAlignToDocx(alignment) {
  if (alignment === "center") return AlignmentType.CENTER;
  if (alignment === "right") return AlignmentType.RIGHT;
  return AlignmentType.LEFT;
}

function verticalAlignToDocx(alignment) {
  if (alignment === "middle") return VerticalAlign.CENTER;
  if (alignment === "bottom") return VerticalAlign.BOTTOM;
  return VerticalAlign.TOP;
}

function pdfFontFamily(style) {
  return {
    diatype: "helvetica",
    circular: "helvetica",
    arial: "helvetica",
    helvetica: "helvetica",
    times: "times",
    courier: "courier",
  }[style.fontFamily] || "helvetica";
}

function docxFontFamily(style) {
  return {
    diatype: "Diatype",
    circular: "Circular",
    arial: "Arial",
    helvetica: "Helvetica",
    times: "Times New Roman",
    courier: "Courier New",
  }[style.fontFamily] || "Diatype";
}

function borderlessCellBorders() {
  const border = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: border, bottom: border, left: border, right: border };
}

function normalizeLogoPosition(position) {
  if (position === "top-left") return "above";
  if (position === "top-right") return "right";
  if (position === "center") return "watermark";
  return ["above", "below", "left", "right", "watermark"].includes(position) ? position : "above";
}

function getLogoSize(state, slot, position) {
  const rawSize = Math.min(slot.wPt, slot.hPt) * (state.logoSize / 100);
  const padding = Math.max(4, Math.min(8, slot.hPt * 0.08));

  if (position === "left" || position === "right") {
    return Math.max(6, Math.min(rawSize, slot.wPt * 0.38, slot.hPt - padding * 2));
  }

  if (position === "above" || position === "below") {
    return Math.max(6, Math.min(rawSize, slot.hPt * 0.36, slot.wPt - padding * 2));
  }

  return Math.max(6, Math.min(rawSize, slot.wPt * 0.75, slot.hPt * 0.75));
}

function drawPdfImage(doc, state, x, y, size, opacity = 1) {
  const format = getImageFormat(state.logoDataUrl);

  if (opacity < 1) {
    try {
      doc.setGState(new doc.GState({ opacity }));
    } catch {
      // Some jsPDF builds omit advanced graphics state support.
    }
  }

  try {
    doc.addImage(state.logoDataUrl, format, x, y, size, size);
  } catch (error) {
    console.warn("Logo could not be embedded in PDF:", error);
  } finally {
    if (opacity < 1) {
      try {
        doc.setGState(new doc.GState({ opacity: 1 }));
      } catch {
        // Best effort reset.
      }
    }
  }
}

function drawPdfText(doc, content, style, box) {
  if (!content) return;

  const padding = Math.max(4, Math.min(8, box.hPt * 0.08));
  const maxWidth = Math.max(8, box.wPt - padding * 2);
  const lines = doc.splitTextToSize(content, maxWidth);
  const lineHeight = style.fontSize * 1.18;
  const textHeight = lines.length * lineHeight;

  doc.setFont(pdfFontFamily(style), style.isBold ? (style.isItalic ? "bolditalic" : "bold") : (style.isItalic ? "italic" : "normal"));
  doc.setFontSize(style.fontSize);
  doc.setTextColor(20, 27, 36);

  let y = box.yPt + padding + style.fontSize * 0.82;
  if (style.verticalAlign === "middle") {
    y = box.yPt + (box.hPt - textHeight) / 2 + style.fontSize * 0.82;
  } else if (style.verticalAlign === "bottom") {
    y = box.yPt + box.hPt - textHeight - padding + style.fontSize * 0.82;
  }

  for (const line of lines) {
    let x = box.xPt + padding;
    if (style.alignment === "center") {
      x = box.xPt + box.wPt / 2;
      doc.text(line, x, y, { align: "center", maxWidth });
    } else if (style.alignment === "right") {
      x = box.xPt + box.wPt - padding;
      doc.text(line, x, y, { align: "right", maxWidth });
    } else {
      doc.text(line, x, y, { maxWidth });
    }
    y += lineHeight;
  }
}

function drawPdfLabel(doc, content, style, state, slot) {
  if (!state.logoDataUrl) {
    drawPdfText(doc, content, style, slot);
    return;
  }

  const position = normalizeLogoPosition(state.logoPosition);
  const size = getLogoSize(state, slot, position);
  const gap = Math.max(3, Math.min(6, slot.hPt * 0.06));
  const padding = Math.max(4, Math.min(8, slot.hPt * 0.08));

  if (position === "watermark") {
    drawPdfImage(
      doc,
      state,
      slot.xPt + (slot.wPt - size) / 2,
      slot.yPt + (slot.hPt - size) / 2,
      size,
      0.14
    );
    drawPdfText(doc, content, style, slot);
    return;
  }

  if (position === "left") {
    const sideStyle = { ...style, verticalAlign: style.verticalAlign === "top" ? "middle" : style.verticalAlign };
    drawPdfImage(doc, state, slot.xPt + padding, slot.yPt + (slot.hPt - size) / 2, size);
    drawPdfText(doc, content, sideStyle, {
      ...slot,
      xPt: slot.xPt + padding + size + gap,
      wPt: Math.max(8, slot.wPt - padding * 2 - size - gap),
      hPt: slot.hPt,
    });
    return;
  }

  if (position === "right") {
    const sideStyle = { ...style, verticalAlign: style.verticalAlign === "top" ? "middle" : style.verticalAlign };
    drawPdfImage(doc, state, slot.xPt + slot.wPt - padding - size, slot.yPt + (slot.hPt - size) / 2, size);
    drawPdfText(doc, content, sideStyle, {
      ...slot,
      wPt: Math.max(8, slot.wPt - padding * 2 - size - gap),
      hPt: slot.hPt,
    });
    return;
  }

  if (position === "below") {
    drawPdfText(doc, content, style, {
      ...slot,
      hPt: Math.max(8, slot.hPt - padding - size - gap),
    });
    drawPdfImage(doc, state, slot.xPt + (slot.wPt - size) / 2, slot.yPt + slot.hPt - padding - size, size);
    return;
  }

  drawPdfImage(doc, state, slot.xPt + (slot.wPt - size) / 2, slot.yPt + padding, size);
  drawPdfText(doc, content, style, {
    ...slot,
    yPt: slot.yPt + padding + size + gap,
    hPt: Math.max(8, slot.hPt - padding * 2 - size - gap),
  });
}

export async function exportPdf(state, template, callbacks = {}) {
  const totalLabels = getTotalLabels(state);
  const slots = buildSlots(template);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));
  const doc = new jsPDF({ unit: "pt", format: "letter", compress: true });

  callbacks.onStart?.({ totalPages, totalLabels });

  for (let page = 0; page < totalPages; page += 1) {
    if (page > 0) doc.addPage("letter", "portrait");

    for (const slot of slots) {
      const absoluteIndex = page * template.perSheet + slot.index;
      if (absoluteIndex >= totalLabels && !state.overrides?.[absoluteIndex]) continue;

      const label = resolveLabelAt(state, absoluteIndex);
      if (label.skipped) continue;

      drawPdfLabel(doc, label.content, label.style, state, slot);
    }

    callbacks.onProgress?.({ currentPage: page + 1, totalPages, percent: Math.round(((page + 1) / totalPages) * 100) });
    if (page % 2 === 0) await waitForPaint();
  }

  doc.save(`labels-avery-${template.id}-${Date.now()}.pdf`);
  callbacks.onComplete?.({ totalPages, totalLabels });
  return { totalPages, totalLabels };
}

function createDocxImageParagraph(state, slot, position, alignment = AlignmentType.CENTER) {
  try {
    const imageSize = Math.max(8, Math.round(getLogoSize(state, slot, position) * PT_TO_PX));
    return new Paragraph({
      alignment,
      children: [
        new ImageRun({
          data: dataUrlToUint8Array(state.logoDataUrl),
          transformation: {
            width: imageSize,
            height: imageSize,
          },
        }),
      ],
      spacing: { before: 0, after: 0 },
    });
  } catch (error) {
    console.warn("Logo could not be embedded in DOCX:", error);
    return null;
  }
}

function createDocxTextParagraphs(content, style) {
  const lines = String(content || "").split(/\r?\n/);
  return (lines.length ? lines : [""]).map((line) =>
    new Paragraph({
      alignment: textAlignToDocx(style.alignment),
      children: [
        new TextRun({
          text: line,
          bold: style.isBold,
          italics: style.isItalic,
          size: style.fontSize * 2,
          font: docxFontFamily(style),
        }),
      ],
      spacing: {
        before: 0,
        after: 0,
        line: Math.round(style.fontSize * 24),
      },
    })
  );
}

function createDocxLogoTextTable(imageParagraph, textParagraphs, slot, position) {
  const imageWidth = Math.round(Math.min(slot.wTwip * 0.36, slot.hTwip));
  const textWidth = Math.max(1, Math.round(slot.wTwip - imageWidth));
  const borders = borderlessCellBorders();
  const imageCell = new TableCell({
    width: { size: imageWidth, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: position === "right"
      ? { top: 0, bottom: 0, left: 80, right: 0 }
      : { top: 0, bottom: 0, left: 0, right: 80 },
    borders,
    children: [imageParagraph],
  });
  const textCell = new TableCell({
    width: { size: textWidth, type: WidthType.DXA },
    verticalAlign: VerticalAlign.TOP,
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    borders,
    children: textParagraphs,
  });
  const children = position === "right" ? [textCell, imageCell] : [imageCell, textCell];

  return new Table({
    rows: [new TableRow({ children })],
    layout: TableLayoutType.FIXED,
    width: { size: 100, type: WidthType.PERCENTAGE },
  });
}

function createDocxParagraphs(content, style, state, slot) {
  const textParagraphs = createDocxTextParagraphs(content, style);
  const position = normalizeLogoPosition(state.logoPosition);

  if (!state.logoDataUrl) return textParagraphs.length ? textParagraphs : [new Paragraph("")];

  const imageAlignment = position === "above" || position === "below" || position === "watermark"
    ? AlignmentType.CENTER
    : textAlignToDocx(style.alignment);
  const imageParagraph = createDocxImageParagraph(state, slot, position, imageAlignment);
  if (!imageParagraph) return textParagraphs;

  if (position === "left" || position === "right") {
    return [createDocxLogoTextTable(imageParagraph, textParagraphs, slot, position)];
  }

  if (position === "below") {
    return [...textParagraphs, imageParagraph];
  }

  return [imageParagraph, ...textParagraphs];
}

function createEmptyCell(widthTwip) {
  return new TableCell({
    width: { size: widthTwip, type: WidthType.DXA },
    borders: borderlessCellBorders(),
    children: [new Paragraph("")],
  });
}

export async function exportDocx(state, template, callbacks = {}) {
  const totalLabels = getTotalLabels(state);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));
  const sections = [];

  callbacks.onStart?.({ totalPages, totalLabels });

  const layoutWidth = (template.cols * template.w + Math.max(0, template.cols - 1) * template.hGap) * TWIPS_PER_INCH;

  for (let page = 0; page < totalPages; page += 1) {
    const tableRows = [];

    for (let row = 0; row < template.rows; row += 1) {
      const cells = [];

      for (let col = 0; col < template.cols; col += 1) {
        const index = page * template.perSheet + row * template.cols + col;
        const slot = {
          wPt: template.w * 72,
          hPt: template.h * 72,
          wTwip: template.w * TWIPS_PER_INCH,
          hTwip: template.h * TWIPS_PER_INCH,
        };
        const label = index < totalLabels || state.overrides?.[index]
          ? resolveLabelAt(state, index)
          : { content: "", style: state.style, skipped: false };
        const logoPosition = normalizeLogoPosition(state.logoPosition);
        const cellVerticalAlign = state.logoDataUrl && (logoPosition === "left" || logoPosition === "right") && label.style.verticalAlign === "top"
          ? VerticalAlign.CENTER
          : verticalAlignToDocx(label.style.verticalAlign);

        cells.push(new TableCell({
          width: { size: slot.wTwip, type: WidthType.DXA },
          verticalAlign: cellVerticalAlign,
          margins: { top: 90, bottom: 50, left: 90, right: 90 },
          borders: borderlessCellBorders(),
          children: label.skipped ? [new Paragraph("")] : createDocxParagraphs(label.content, label.style, state, slot),
        }));

        if (col < template.cols - 1 && template.hGap > 0) {
          cells.push(createEmptyCell(template.hGap * TWIPS_PER_INCH));
        }
      }

      tableRows.push(new TableRow({
        children: cells,
        height: { value: template.h * TWIPS_PER_INCH, rule: HeightRule.EXACT },
      }));

      if (row < template.rows - 1 && template.vGap > 0) {
        tableRows.push(new TableRow({
          children: [createEmptyCell(layoutWidth)],
          height: { value: template.vGap * TWIPS_PER_INCH, rule: HeightRule.EXACT },
        }));
      }
    }

    sections.push({
      properties: {
        page: {
          margin: {
            top: Math.max(0, template.top * TWIPS_PER_INCH),
            left: Math.max(0, template.left * TWIPS_PER_INCH),
            right: Math.max(0, template.right * TWIPS_PER_INCH),
            bottom: Math.max(0, template.bottom * TWIPS_PER_INCH),
          },
          size: {
            width: LETTER.widthTwip,
            height: LETTER.heightTwip,
          },
        },
      },
      children: [
        new Table({
          rows: tableRows,
          layout: TableLayoutType.FIXED,
          width: { size: layoutWidth, type: WidthType.DXA },
        }),
      ],
    });

    callbacks.onProgress?.({ currentPage: page + 1, totalPages, percent: Math.round(((page + 1) / totalPages) * 100) });
    if (page % 2 === 0) await waitForPaint();
  }

  const document = new Document({ sections });
  const blob = await Packer.toBlob(document);
  saveBlob(blob, `labels-avery-${template.id}-${Date.now()}.docx`);
  callbacks.onComplete?.({ totalPages, totalLabels });
  return { totalPages, totalLabels };
}

````

## src/main.js
``javascript
import { createIcons, icons } from "lucide";

import { exportDocx, exportPdf } from "./exporters.js";
import {
  AVERY_TEMPLATES,
  AVERY_TEMPLATE_CODE_COUNT,
  buildSlots,
  getAllTemplateLibraryEntries,
  getTopTemplateEntries,
  getUncalibratedCatalogMatches,
  getTemplateById,
  LETTER,
  POINTS_PER_INCH,
  templateMatchesSearch,
  validateTemplateGeometry,
} from "./templates.js";
import {
  DEFAULT_LABEL_TEMPLATE,
  DEFAULT_STYLE,
  clampNumber,
  deriveTemplateFromHeaders,
  getDataRows,
  getStyleForIndex,
  getTotalLabels,
  parseCsvFile,
  parsePastedText,
  resolveLabelAt,
  rowsFromWorkspace,
  validateImportedProject,
} from "./templateEngine.js";
import { initWorkspaceBridge, isWorkspaceMode } from "./workspaceBridge.js";

const PREF_KEY = "labelsprint_preferences_v3";
const PROJECT_VERSION = "3.0";
const LOGO_POSITIONS = new Set(["above", "below", "left", "right", "watermark"]);
const TUTORIAL_KEY = "labelsprint_tutorial_seen";

const sampleRows = [
  { name: "Ada Lovelace", address: "12 Analytical Way", city_state_zip: "London, UK" },
  { name: "Grace Hopper", address: "77 Compiler Ct", city_state_zip: "Arlington, VA 22201" },
  { name: "Katherine Johnson", address: "101 Orbit Road", city_state_zip: "Hampton, VA 23666" },
];

let state = {
  projectId: crypto.randomUUID(),
  templateId: "5160",
  inputMethod: "manual",
  manualCount: 30,
  firstRowIsHeader: true,
  data: [],
  headers: [],
  labelTemplate: DEFAULT_LABEL_TEMPLATE,
  overrides: {},
  style: { ...DEFAULT_STYLE },
  skipCount: 0,
  zoom: 0.72,
  logoDataUrl: null,
  logoName: "",
  logoPosition: "above",
  logoSize: 30,
  workspaceSource: "",
  exportBusy: false,
  activeEditIndex: null,
  sessionLabelsGenerated: 0,
};

let els = {};
let undoStack = [];
let redoStack = [];
let tutorialIndex = 0;
let tutorialIsOpen = false;
let templateLibraryMode = "top";

const tutorialSteps = [
  {
    target: "#dataSourceSection",
    title: "Choose data",
    body: "Start with manual entry, pasted rows, or a CSV mail merge.",
  },
  {
    target: "#labelTemplate",
    title: "Enter label text",
    body: "Type the label text or insert merge fields from your data.",
  },
  {
    target: "#formatSection",
    title: "Format labels",
    body: "Set typeface, size, alignment, bold, italic, and uppercase.",
  },
  {
    target: "#logoSection",
    title: "Add a logo",
    body: "Upload a logo and place it above, below, left, right, or as a watermark.",
  },
  {
    target: "#previewArea",
    title: "Preview the sheet",
    body: "Review labels exactly as they will print before exporting.",
  },
  {
    target: "#labelModal",
    fallbackTarget: "#previewArea",
    title: "Edit one label",
    body: "Select any label single to customize or reset only that label.",
  },
  {
    target: "#exportControls",
    title: "Finish",
    body: "Download PDF/DOCX or print directly when the sheet looks right.",
  },
];

function cloneStateSnapshot(source = state) {
  return JSON.parse(JSON.stringify({
    ...source,
    exportBusy: false,
    activeEditIndex: null,
  }));
}

function pushHistory() {
  undoStack.push(cloneStateSnapshot());
  if (undoStack.length > 80) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function restoreHistorySnapshot(snapshot) {
  state = {
    ...state,
    ...cloneStateSnapshot(snapshot),
    exportBusy: false,
    activeEditIndex: null,
  };
  savePreferences();
  closeLabelModal();
  closeTemplateModal();
  renderAll();
}

function undoChange() {
  if (!undoStack.length) return;
  redoStack.push(cloneStateSnapshot());
  restoreHistorySnapshot(undoStack.pop());
}

function redoChange() {
  if (!redoStack.length) return;
  undoStack.push(cloneStateSnapshot());
  restoreHistorySnapshot(redoStack.pop());
}

function updateHistoryButtons() {
  if (!els.undoButton || !els.redoButton) return;
  els.undoButton.disabled = undoStack.length === 0;
  els.redoButton.disabled = redoStack.length === 0;
}

function normalizeLogoPosition(position) {
  if (position === "top-left") return "above";
  if (position === "top-right") return "right";
  if (position === "center") return "watermark";
  return LOGO_POSITIONS.has(position) ? position : "above";
}

function html(strings, ...values) {
  return strings.reduce((result, part, index) => `${result}${part}${values[index] ?? ""}`, "");
}

function renderShell() {
  document.querySelector("#app").innerHTML = html`
    <header class="app-header">
      <div class="brand-mark" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="brand-copy">
        <h1>LabelsPrint.app</h1>
        <p>Production label maker for Avery-compatible sheets</p>
      </div>
      <div class="header-spacer"></div>
      <div id="workspaceChip" class="status-chip hidden">
        <i data-lucide="table-2"></i>
        <span>Workspace</span>
      </div>
      <button id="templateButton" class="toolbar-button primary-soft" type="button">
        <i data-lucide="layout-template"></i>
        <span id="templateButtonLabel">Avery 5160</span>
      </button>
      <button id="undoButton" class="toolbar-button icon-only" type="button" title="Undo" aria-label="Undo">
        <i data-lucide="undo-2"></i>
      </button>
      <button id="redoButton" class="toolbar-button icon-only" type="button" title="Redo" aria-label="Redo">
        <i data-lucide="redo-2"></i>
      </button>
      <button id="tutorialButton" class="toolbar-button" type="button">
        <i data-lucide="circle-help"></i>
        <span>Tutorial</span>
      </button>
      <label class="toolbar-button" for="projectImport">
        <i data-lucide="upload-cloud"></i>
        <span>Import</span>
      </label>
      <input id="projectImport" class="sr-only" type="file" accept="application/json,.json">
      <button id="projectExport" class="toolbar-button icon-only" type="button" title="Save project" aria-label="Save project">
        <i data-lucide="save"></i>
      </button>
      <button id="startOver" class="toolbar-button danger" type="button">
        <i data-lucide="refresh-ccw"></i>
        <span>Reset</span>
      </button>
      <div id="exportControls" class="header-export-group">
        <details id="downloadMenu" class="download-menu">
          <summary class="export-button">
            <i data-lucide="download"></i>
            <span>Download</span>
            <i data-lucide="chevron-down"></i>
          </summary>
          <div class="download-options">
            <button id="downloadPdf" type="button">
              <i data-lucide="file-down"></i>
              <span>PDF</span>
            </button>
            <button id="downloadDocx" type="button">
              <i data-lucide="file-text"></i>
              <span>DOCX</span>
            </button>
          </div>
        </details>
        <button id="printLabels" class="export-button dark" type="button">
          <i data-lucide="printer"></i>
          <span>Print</span>
        </button>
      </div>
    </header>

    <main class="app-grid">
      <aside class="control-panel">
        <section id="dataSourceSection" class="panel-section">
          <div class="section-heading">
            <div>
              <div class="step-kicker">
                <p>Step 1</p>
                <span class="step-help" tabindex="0" aria-label="Step 1 help" data-help="Choose how to create Avery-compatible labels: type one label manually, paste multiple addresses, or upload a CSV for mail merge.">?</span>
              </div>
              <h2>Data Source</h2>
            </div>
            <span id="dataSummary" class="mini-metric">Manual</span>
          </div>

          <div class="segmented-control" role="tablist" aria-label="Data source">
            <button class="mode-button" data-mode="manual" type="button">Manual</button>
            <button class="mode-button" data-mode="paste" type="button">Paste</button>
            <button class="mode-button" data-mode="upload" type="button">CSV</button>
          </div>

          <div id="manualPanel" class="mode-panel">
          </div>

          <div id="pastePanel" class="mode-panel hidden">
            <label class="field-label" for="pasteArea">Paste rows or address blocks</label>
            <textarea id="pasteArea" class="input-control mono tall" spellcheck="false" placeholder="Name,Address,City State Zip"></textarea>
            <label class="check-row">
              <input id="pasteHeader" type="checkbox">
              <span>First row contains headers</span>
            </label>
            <button id="processPaste" class="action-button" type="button">
              <i data-lucide="wand-2"></i>
              Process rows
            </button>
          </div>

          <div id="uploadPanel" class="mode-panel hidden">
            <label class="check-row">
              <input id="uploadHeader" type="checkbox">
              <span>First row contains headers</span>
            </label>
            <label id="dropZone" class="drop-zone" for="csvInput">
              <i data-lucide="upload"></i>
              <strong id="fileName">Choose CSV</strong>
              <span>or drop a file here</span>
            </label>
            <input id="csvInput" class="sr-only" type="file" accept=".csv,text/csv">
          </div>
        </section>

        <section id="sheetSetupSection" class="panel-section">
          <div class="section-heading">
            <div>
              <div class="step-kicker">
                <p>Step 2</p>
                <span class="step-help" tabindex="0" aria-label="Step 2 help" data-help="Use this when printing on a partially used Avery sheet.">?</span>
              </div>
              <h2>Sheet Setup</h2>
            </div>
          </div>
          <div class="sheet-setup-row">
            <label>
              <span class="field-label">Labels to generate</span>
              <input id="manualCount" class="input-control compact" type="number" min="1" max="25000">
            </label>
            <label>
              <span class="field-label">Skip used labels</span>
              <input id="skipCount" class="input-control compact" type="number" min="0">
            </label>
          </div>
        </section>

        <section id="mergeSection" class="panel-section hidden">
          <div class="section-heading">
            <div>
              <p>Mail merge</p>
              <h2>Merge Fields</h2>
            </div>
          </div>
          <div id="fieldPills" class="field-pills"></div>
        </section>

        <section id="labelContentSection" class="panel-section">
          <div class="section-heading">
            <div>
              <div class="step-kicker">
                <p>Step 3</p>
                <span class="step-help" tabindex="0" aria-label="Step 3 help" data-help="Enter name, street address, city, state, and ZIP code exactly as you want them printed.">?</span>
              </div>
              <h2>Label Content</h2>
            </div>
            <button id="clearOverrides" class="text-button hidden" type="button">Clear custom labels</button>
          </div>
          <textarea id="labelTemplate" class="input-control editor" spellcheck="false"></textarea>

          <div id="formatSection" class="format-section">
            <div id="formatControls" class="style-grid">
              <label>
                <span class="field-label">Typeface</span>
                <select id="fontFamily" class="input-control compact">
                  <option value="diatype">Diatype</option>
                  <option value="circular">Circular</option>
                  <option value="arial">Arial</option>
                  <option value="times">Times New Roman</option>
                  <option value="courier">Courier New</option>
                </select>
              </label>
              <label>
                <span class="field-label">Font size</span>
                <input id="fontSize" class="input-control compact" type="number" min="6" max="36">
              </label>
            </div>

            <div class="button-row" aria-label="Horizontal alignment">
              <button class="icon-toggle align-toggle" data-align="left" type="button" title="Align left"><i data-lucide="align-left"></i></button>
              <button class="icon-toggle align-toggle" data-align="center" type="button" title="Align center"><i data-lucide="align-center"></i></button>
              <button class="icon-toggle align-toggle" data-align="right" type="button" title="Align right"><i data-lucide="align-right"></i></button>
            </div>

            <div class="button-row" aria-label="Vertical alignment">
              <button class="icon-toggle valign-toggle" data-valign="top" type="button" title="Align top"><i data-lucide="align-vertical-justify-start"></i></button>
              <button class="icon-toggle valign-toggle" data-valign="middle" type="button" title="Align middle"><i data-lucide="align-vertical-justify-center"></i></button>
              <button class="icon-toggle valign-toggle" data-valign="bottom" type="button" title="Align bottom"><i data-lucide="align-vertical-justify-end"></i></button>
            </div>

            <div class="button-row" aria-label="Text style">
              <button id="boldToggle" class="icon-toggle" type="button" title="Bold"><i data-lucide="bold"></i></button>
              <button id="italicToggle" class="icon-toggle" type="button" title="Italic"><i data-lucide="italic"></i></button>
              <button id="upperToggle" class="icon-toggle text-toggle" type="button" title="Uppercase">AA</button>
            </div>
          </div>
        </section>

        <section id="logoSection" class="panel-section">
          <div class="section-heading">
            <div>
              <p>Optional</p>
              <h2>Logo</h2>
            </div>
            <button id="removeLogo" class="text-button hidden" type="button">Remove</button>
          </div>
          <label id="logoDrop" class="drop-zone compact-drop" for="logoInput">
            <i data-lucide="image-plus"></i>
            <strong id="logoName">Add logo or icon</strong>
            <span>PNG, JPG, or WebP</span>
          </label>
          <input id="logoInput" class="sr-only" type="file" accept="image/png,image/jpeg,image/webp">
          <div id="logoControls" class="style-grid hidden">
            <label>
              <span class="field-label">Position</span>
              <select id="logoPosition" class="input-control compact">
                <option value="above">Above text</option>
                <option value="below">Below text</option>
                <option value="left">Left of text</option>
                <option value="right">Right of text</option>
                <option value="watermark">Watermark</option>
              </select>
            </label>
            <label>
              <span class="field-label">Size</span>
              <input id="logoSize" class="input-control compact" type="number" min="5" max="100">
            </label>
          </div>
        </section>
      </aside>

      <section class="preview-panel">
        <div class="preview-toolbar">
          <div>
            <p id="templateMeta" class="preview-kicker">Avery template</p>
            <h2 id="previewTitle">Live sheet preview</h2>
          </div>
          <div class="preview-actions">
            <span id="fillCounter" class="counter-chip">0 labels</span>
            <select id="zoomSelect" class="zoom-select" aria-label="Zoom">
              <option value="fit">Fit</option>
              <option value="0.5">50%</option>
              <option value="0.72">72%</option>
              <option value="1">100%</option>
              <option value="1.25">125%</option>
            </select>
          </div>
        </div>
        <div id="previewArea" class="sheet-preview">
          <div id="pagesContainer"></div>
        </div>
      </section>
    </main>

    <div id="templateModal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="templateModalTitle">
      <div class="modal-card wide">
        <div class="modal-header">
          <div>
            <p>Template Library</p>
            <h2 id="templateModalTitle">Choose an Avery format</h2>
          </div>
          <button id="closeTemplateModal" class="icon-toggle" type="button" aria-label="Close"><i data-lucide="x"></i></button>
        </div>
        <input id="templateSearch" class="input-control search" type="search" placeholder="Search by Avery number, size, or type">
        <div id="templateGrid" class="template-grid"></div>
      </div>
    </div>

    <div id="labelModal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="labelModalTitle">
      <div class="modal-card">
        <div class="modal-header">
          <div>
            <p>Custom Label</p>
            <h2 id="labelModalTitle">Edit selected label</h2>
          </div>
          <button id="closeLabelModal" class="icon-toggle" type="button" aria-label="Close"><i data-lucide="x"></i></button>
        </div>
        <textarea id="labelModalBody" class="input-control editor modal-editor" spellcheck="false"></textarea>
        <div class="modal-actions">
          <button id="resetLabel" class="toolbar-button danger" type="button">Reset label</button>
          <div class="header-spacer"></div>
          <button id="cancelLabel" class="toolbar-button" type="button">Cancel</button>
          <button id="saveLabel" class="export-button" type="button">Save label</button>
        </div>
      </div>
    </div>

    <div id="exportModal" class="modal-backdrop hidden" role="status" aria-live="polite">
      <div class="export-card">
        <div class="spinner"></div>
        <div>
          <h2 id="exportTitle">Preparing export</h2>
          <p id="exportDetail">Building print-ready pages...</p>
          <div class="progress-track">
            <span id="exportProgress"></span>
          </div>
        </div>
      </div>
    </div>

    <div id="tutorialOverlay" class="tutorial-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="tutorialTitle" aria-describedby="tutorialBody">
      <div id="tutorialSpotlight" class="tutorial-spotlight" aria-hidden="true"></div>
      <section id="tutorialCard" class="tutorial-card">
        <div class="tutorial-card-header">
          <div id="tutorialDots" class="tutorial-dots" aria-label="Tutorial progress"></div>
          <button id="tutorialSkip" class="text-button" type="button">Skip</button>
        </div>
        <h2 id="tutorialTitle">Tutorial</h2>
        <p id="tutorialBody"></p>
        <div class="tutorial-actions">
          <button id="tutorialBack" class="toolbar-button" type="button">Back</button>
          <button id="tutorialNext" class="export-button" type="button">Next</button>
        </div>
      </section>
    </div>

    <div id="toast" class="toast hidden"></div>
  `;
}

function cacheElements() {
  const ids = [
    "workspaceChip", "templateButton", "templateButtonLabel", "projectImport", "projectExport", "startOver",
    "undoButton", "redoButton", "tutorialButton", "exportControls", "downloadMenu", "downloadPdf", "downloadDocx", "printLabels", "dataSummary", "manualPanel", "pastePanel", "uploadPanel", "manualCount",
    "pasteArea", "pasteHeader", "uploadHeader", "processPaste", "dropZone", "csvInput", "fileName",
    "mergeSection", "fieldPills", "clearOverrides", "labelTemplate", "fontFamily", "fontSize", "skipCount", "boldToggle",
    "italicToggle", "upperToggle", "logoInput", "logoName", "removeLogo", "logoControls", "logoPosition",
    "logoSize", "templateMeta", "previewTitle", "fillCounter", "zoomSelect", "previewArea", "pagesContainer",
    "templateModal", "closeTemplateModal", "templateSearch", "templateGrid", "labelModal", "closeLabelModal",
    "labelModalTitle", "labelModalBody", "resetLabel", "cancelLabel", "saveLabel", "exportModal", "exportTitle",
    "exportDetail", "exportProgress", "tutorialOverlay", "tutorialSpotlight", "tutorialCard", "tutorialDots",
    "tutorialSkip", "tutorialTitle", "tutorialBody", "tutorialBack", "tutorialNext", "toast",
  ];
  els = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
  els.modeButtons = [...document.querySelectorAll(".mode-button")];
  els.alignToggles = [...document.querySelectorAll(".align-toggle")];
  els.valignToggles = [...document.querySelectorAll(".valign-toggle")];
}

function loadPreferences() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
    state = {
      ...state,
      templateId: parsed.templateId || state.templateId,
      inputMethod: parsed.inputMethod || state.inputMethod,
      manualCount: clampNumber(parsed.manualCount, 1, 25000, state.manualCount),
      firstRowIsHeader: parsed.firstRowIsHeader !== false,
      style: { ...DEFAULT_STYLE, ...(parsed.style || {}) },
      skipCount: clampNumber(parsed.skipCount, 0, 25000, 0),
      zoom: Number.isFinite(parsed.zoom) ? parsed.zoom : state.zoom,
      logoPosition: normalizeLogoPosition(parsed.logoPosition || state.logoPosition),
      logoSize: clampNumber(parsed.logoSize, 5, 100, state.logoSize),
    };
  } catch {
    localStorage.removeItem(PREF_KEY);
  }
}

function savePreferences() {
  const prefs = {
    templateId: state.templateId,
    inputMethod: state.inputMethod,
    manualCount: state.manualCount,
    firstRowIsHeader: state.firstRowIsHeader,
    style: state.style,
    skipCount: state.skipCount,
    zoom: state.zoom,
    logoPosition: state.logoPosition,
    logoSize: state.logoSize,
  };
  localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
}

function selectedTemplate() {
  return getTemplateById(state.templateId);
}

function showToast(message, tone = "info") {
  els.toast.textContent = message;
  els.toast.dataset.tone = tone;
  els.toast.classList.remove("hidden");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => els.toast.classList.add("hidden"), 4200);
}

function setBusy(isBusy) {
  state.exportBusy = isBusy;
  els.downloadPdf.disabled = isBusy;
  els.downloadDocx.disabled = isBusy;
  els.printLabels.disabled = isBusy;
  els.downloadPdf.classList.toggle("is-busy", isBusy);
  els.downloadDocx.classList.toggle("is-busy", isBusy);
  els.printLabels.classList.toggle("is-busy", isBusy);
}

function showExportProgress(title, detail, percent = 0) {
  els.exportTitle.textContent = title;
  els.exportDetail.textContent = detail;
  els.exportProgress.style.width = `${Math.max(4, percent)}%`;
  els.exportModal.classList.remove("hidden");
}

function hideExportProgress() {
  els.exportModal.classList.add("hidden");
}

function getAveryTemplateUrl(code) {
  return `https://www.avery.com/templates/${encodeURIComponent(String(code || "").trim())}`;
}

function createAveryLink(code) {
  const link = document.createElement("a");
  link.className = "template-external-link";
  link.href = getAveryTemplateUrl(code);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.title = `Open Avery ${code} template`;
  link.setAttribute("aria-label", `Open Avery ${code} template on avery.com`);

  const icon = document.createElement("i");
  icon.dataset.lucide = "external-link";
  link.appendChild(icon);

  return link;
}

function createTemplateCard(template, contextLabel = "Top template", representedCodes = [], displayCode = "") {
  const errors = validateTemplateGeometry(template);
  const card = document.createElement("article");
  card.className = "template-card";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "template-card-main";
  const normalizedDisplayCode = String(displayCode || "").trim();
  card.classList.toggle("active", template.id === selectedTemplate().id || normalizedDisplayCode === selectedTemplate().id);
  button.dataset.templateId = template.id;
  const averyCode = normalizedDisplayCode || template.id;

  const title = document.createElement("strong");
  title.textContent = normalizedDisplayCode ? `Avery ${normalizedDisplayCode}` : template.name;

  const description = document.createElement("span");
  description.textContent = template.description;

  const meta = document.createElement("small");
  meta.textContent = `${template.w}" x ${template.h}" | ${template.rows} x ${template.cols}`;
  if (normalizedDisplayCode && normalizedDisplayCode !== template.id) {
    meta.textContent += ` | Uses ${template.name}`;
  } else if (representedCodes.length > 1) {
    meta.textContent += ` | Top IDs ${representedCodes.join(", ")}`;
  }

  const category = document.createElement("em");
  category.textContent = errors.length ? "Check geometry" : contextLabel;

  button.append(title, description, meta, category);
  card.append(button, createAveryLink(averyCode));
  button.addEventListener("click", () => {
    pushHistory();
    state.templateId = template.id;
    state.skipCount = Math.min(state.skipCount, template.perSheet - 1);
    savePreferences();
    closeTemplateModal();
    renderAll();
  });

  return card;
}

function createCatalogCard(record, listStyle = false, representedCodes = []) {
  const card = document.createElement("article");
  card.className = listStyle ? "template-card catalog-only list-item" : "template-card catalog-only";
  const content = document.createElement("div");
  content.className = "template-card-main";

  const title = document.createElement("strong");
  title.textContent = `Avery ${record.code}`;

  const description = document.createElement("span");
  description.textContent = "Imported Avery catalog record";

  const aliases = (record.codes || []).filter((code) => code !== record.code);
  const meta = document.createElement("small");
  meta.textContent = representedCodes.length > 1
    ? `Top IDs ${representedCodes.join(", ")}`
    : aliases.length
      ? `Also listed as ${aliases.slice(0, 4).join(", ")}`
      : `${record.sourceRows} catalog source row${record.sourceRows === 1 ? "" : "s"}`;

  const category = document.createElement("em");
  category.textContent = "Coming soon";

  content.append(title, description, meta, category);
  card.append(content, createAveryLink(record.code));
  return card;
}

function renderTemplateGrid() {
  const query = els.templateSearch.value.trim();
  const isSearching = query.length > 0;
  const showAll = !isSearching && templateLibraryMode === "all";
  const fragment = document.createDocumentFragment();

  els.templateGrid.innerHTML = "";
  els.templateGrid.classList.toggle("list", showAll);

  const heading = document.createElement("p");
  heading.className = "template-section-title";
  heading.textContent = isSearching
    ? "Catalog matches"
    : showAll
      ? "All Avery templates"
      : "Top Avery templates";
  fragment.appendChild(heading);

  if (isSearching) {
    const calibratedMatches = AVERY_TEMPLATES.filter((template) => templateMatchesSearch(template, query));
    const catalogMatches = getUncalibratedCatalogMatches(query, 24);

    calibratedMatches.forEach((template) => {
      fragment.appendChild(createTemplateCard(template, template.category));
    });
    catalogMatches.forEach((record) => {
      fragment.appendChild(createCatalogCard(record));
    });

    if (!calibratedMatches.length && !catalogMatches.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = `No Avery template matches found in ${AVERY_TEMPLATE_CODE_COUNT.toLocaleString()} imported catalog records.`;
      fragment.appendChild(empty);
    }
  } else if (showAll) {
    getAllTemplateLibraryEntries().forEach((entry) => {
      if (entry.type === "template") {
        fragment.appendChild(createTemplateCard(entry.template, entry.template.category));
      } else {
        fragment.appendChild(createCatalogCard(entry.record, true));
      }
    });
  } else {
    getTopTemplateEntries().forEach((entry) => {
      if (entry.type === "template") {
        fragment.appendChild(createTemplateCard(entry.template, "Top template", entry.codes, entry.code));
      } else {
        fragment.appendChild(createCatalogCard(entry.record, false, entry.codes));
      }
    });

    const seeAll = document.createElement("button");
    seeAll.type = "button";
    seeAll.className = "template-see-all";
    seeAll.textContent = `See all ${AVERY_TEMPLATE_CODE_COUNT.toLocaleString()} Avery templates`;
    seeAll.addEventListener("click", () => {
      templateLibraryMode = "all";
      renderTemplateGrid();
    });
    fragment.appendChild(seeAll);
  }

  if (showAll) {
    const showTop = document.createElement("button");
    showTop.type = "button";
    showTop.className = "template-see-all";
    showTop.textContent = "Back to top templates";
    showTop.addEventListener("click", () => {
      templateLibraryMode = "top";
      renderTemplateGrid();
    });
    fragment.appendChild(showTop);
  }

  els.templateGrid.appendChild(fragment);
  createIcons({ icons });
}

function openTemplateModal() {
  templateLibraryMode = "top";
  els.templateModal.classList.remove("hidden");
  els.templateSearch.focus();
  renderTemplateGrid();
}

function closeTemplateModal() {
  els.templateModal.classList.add("hidden");
}

function setInputMethod(mode) {
  if (state.inputMethod === mode) return;
  pushHistory();
  state.inputMethod = mode;
  savePreferences();
  renderAll();
}

function setHeadersAndRows({ data, headers }) {
  state.data = data;
  state.headers = headers;
  state.overrides = {};
  if (!state.labelTemplate || state.labelTemplate === DEFAULT_LABEL_TEMPLATE) {
    state.labelTemplate = deriveTemplateFromHeaders(headers);
  }
}

function renderDataControls() {
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.inputMethod);
  });

  els.manualPanel.classList.toggle("hidden", state.inputMethod !== "manual");
  els.pastePanel.classList.toggle("hidden", state.inputMethod !== "paste");
  els.uploadPanel.classList.toggle("hidden", state.inputMethod !== "upload");

  els.manualCount.value = state.manualCount;
  els.pasteHeader.checked = state.firstRowIsHeader;
  els.uploadHeader.checked = state.firstRowIsHeader;
  els.labelTemplate.value = state.labelTemplate;
  els.fontFamily.value = state.style.fontFamily || DEFAULT_STYLE.fontFamily;
  els.fontSize.value = state.style.fontSize;
  els.skipCount.value = state.skipCount;
  state.logoPosition = normalizeLogoPosition(state.logoPosition);
  els.logoPosition.value = state.logoPosition;
  els.logoSize.value = state.logoSize;

  const rows = getDataRows(state);
  if (state.inputMethod === "manual") {
    els.dataSummary.textContent = `${state.manualCount} manual`;
  } else {
    els.dataSummary.textContent = `${rows.length} rows`;
  }

  els.fileName.textContent = state.headers.length ? `${state.data.length} rows loaded` : "Choose CSV";
  els.logoName.textContent = state.logoName || "Add logo or icon";
  els.removeLogo.classList.toggle("hidden", !state.logoDataUrl);
  els.logoControls.classList.toggle("hidden", !state.logoDataUrl);
  els.clearOverrides.classList.toggle("hidden", Object.keys(state.overrides).length === 0);
}

function renderStyleControls() {
  els.alignToggles.forEach((button) => {
    button.classList.toggle("active", button.dataset.align === state.style.alignment);
  });
  els.valignToggles.forEach((button) => {
    button.classList.toggle("active", button.dataset.valign === state.style.verticalAlign);
  });
  els.boldToggle.classList.toggle("active", state.style.isBold);
  els.italicToggle.classList.toggle("active", state.style.isItalic);
  els.upperToggle.classList.toggle("active", state.style.isUpper);
}

function insertFieldIntoActiveEditor(fieldName) {
  const token = `{{${fieldName}}}`;
  const target = document.activeElement === els.labelModalBody ? els.labelModalBody : els.labelTemplate;
  const start = target.selectionStart || 0;
  const end = target.selectionEnd || 0;
  target.value = `${target.value.slice(0, start)}${token}${target.value.slice(end)}`;
  target.focus();
  target.setSelectionRange(start + token.length, start + token.length);

  if (target === els.labelTemplate) {
    pushHistory();
    state.labelTemplate = target.value;
    savePreferences();
    renderPreview();
  }
}

function renderFieldPills() {
  els.fieldPills.innerHTML = "";
  els.mergeSection.classList.toggle("hidden", state.headers.length === 0 || state.inputMethod === "manual");
  if (state.headers.length === 0 || state.inputMethod === "manual") return;

  const fragment = document.createDocumentFragment();
  state.headers.forEach((field) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "field-pill";
    button.textContent = `{{${field}}}`;
    button.addEventListener("click", () => insertFieldIntoActiveEditor(field));
    fragment.appendChild(button);
  });
  els.fieldPills.appendChild(fragment);
}

function renderPreviewHeader() {
  const template = selectedTemplate();
  const totalLabels = getTotalLabels(state);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));

  els.templateButtonLabel.textContent = template.name;
  els.templateMeta.textContent = `${template.description} | ${template.perSheet} per sheet`;
  els.previewTitle.textContent = `${template.name} preview`;
  els.fillCounter.textContent = `${totalLabels} labels | ${totalPages} page${totalPages === 1 ? "" : "s"}`;
  els.workspaceChip.classList.toggle("hidden", !isWorkspaceMode() && !state.workspaceSource);
  if (state.workspaceSource) {
    els.workspaceChip.querySelector("span").textContent = state.workspaceSource;
  }
}

function getPreviewRows() {
  if (state.inputMethod === "manual") return getDataRows(state);
  if (state.data.length) return state.data;
  return sampleRows;
}

function getPreviewState() {
  if (state.inputMethod === "manual" || state.data.length) return state;
  return {
    ...state,
    data: sampleRows,
    headers: ["name", "address", "city_state_zip"],
    labelTemplate: "{{name}}\n{{address}}\n{{city_state_zip}}",
  };
}

function updateZoom() {
  const fitZoom = Math.min(0.9, Math.max(0.35, (els.previewArea.clientWidth - 72) / (LETTER.widthPt)));
  const zoom = els.zoomSelect.value === "fit" ? fitZoom : Number.parseFloat(els.zoomSelect.value);
  state.zoom = Number.isFinite(zoom) ? zoom : fitZoom;
  els.pagesContainer.style.transform = "none";
  els.pagesContainer.style.height = "auto";
  const naturalHeight = els.pagesContainer.scrollHeight;
  els.pagesContainer.style.transform = `scale(${state.zoom})`;
  els.pagesContainer.style.height = `${naturalHeight * state.zoom}px`;
  els.pagesContainer.style.minWidth = `${LETTER.widthPt * state.zoom}px`;
  savePreferences();
}

function renderPreview(options = {}) {
  const template = selectedTemplate();
  const previewState = getPreviewState();
  const rows = getPreviewRows();
  const isGhost = state.inputMethod !== "manual" && state.data.length === 0;
  const totalLabels = isGhost ? Math.min(rows.length, template.perSheet) : getTotalLabels(state);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));
  const pagesToShow = options.allPages ? totalPages : Math.min(totalPages, 8);
  const slots = buildSlots(template);

  els.pagesContainer.innerHTML = "";
  els.pagesContainer.style.height = "auto";

  const fragment = document.createDocumentFragment();

  for (let page = 0; page < pagesToShow; page += 1) {
    const sheet = document.createElement("div");
    sheet.className = "page-sheet";
    sheet.style.width = `${LETTER.widthPt}pt`;
    sheet.style.height = `${LETTER.heightPt}pt`;

    for (const slot of slots) {
      const absoluteIndex = page * template.perSheet + slot.index;
      const label = resolveLabelAt(previewState, absoluteIndex);
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = `label-cell align-${label.style.alignment} valign-${label.style.verticalAlign}`;
      cell.style.left = `${slot.xPt}pt`;
      cell.style.top = `${slot.yPt}pt`;
      cell.style.width = `${slot.wPt}pt`;
      cell.style.height = `${slot.hPt}pt`;
      cell.style.fontSize = `${label.style.fontSize}pt`;
      cell.style.fontFamily = {
        diatype: "Diatype, Arial, Helvetica, sans-serif",
        circular: "Circular, Diatype, Arial, Helvetica, sans-serif",
        arial: "Arial, Helvetica, sans-serif",
        times: "\"Times New Roman\", Times, serif",
        courier: "\"Courier New\", Courier, monospace",
      }[label.style.fontFamily] || "Diatype, Arial, Helvetica, sans-serif";
      cell.style.fontWeight = label.style.isBold ? "700" : "400";
      cell.style.fontStyle = label.style.isItalic ? "italic" : "normal";
      cell.dataset.index = String(absoluteIndex);

      if (isGhost) cell.classList.add("ghost");
      if (label.skipped) cell.classList.add("skipped");
      if (label.custom) cell.classList.add("customized");

      const contentWrap = document.createElement("div");
      contentWrap.className = "label-content";

      const text = document.createElement("span");
      text.className = "label-text";
      text.textContent = label.content;

      if (state.logoDataUrl && !label.skipped) {
        const logoPosition = normalizeLogoPosition(state.logoPosition);
        contentWrap.classList.add(`logo-layout-${logoPosition}`);
        const image = document.createElement("img");
        image.src = state.logoDataUrl;
        image.alt = "";
        const imageSize = Math.min(slot.wPt, slot.hPt) * (state.logoSize / 100);
        image.style.width = `${imageSize}pt`;
        image.style.height = `${imageSize}pt`;
        image.className = `label-logo logo-${logoPosition}`;

        contentWrap.append(image, text);
      } else {
        contentWrap.appendChild(text);
      }

      cell.appendChild(contentWrap);

      if (label.custom) {
        const badge = document.createElement("em");
        badge.textContent = "CUSTOM";
        cell.appendChild(badge);
      }

      cell.addEventListener("click", () => {
        if (isGhost) return;
        openLabelModal(absoluteIndex);
      });

      sheet.appendChild(cell);
    }
    fragment.appendChild(sheet);
  }

  if (totalPages > pagesToShow) {
    const note = document.createElement("p");
    note.className = "preview-note";
    note.textContent = `Previewing first ${pagesToShow} pages. Export will include all ${totalPages} pages.`;
    fragment.appendChild(note);
  }

  els.pagesContainer.appendChild(fragment);
  updateZoom();
}

function renderAll() {
  renderDataControls();
  renderStyleControls();
  renderFieldPills();
  renderPreviewHeader();
  renderPreview();
  updateHistoryButtons();
  if (tutorialIsOpen) {
    requestAnimationFrame(positionTutorial);
  }
  createIcons({ icons });
}

function getTutorialTarget(step) {
  const target = document.querySelector(step.target);
  if (target && !target.classList.contains("hidden")) return target;
  return step.fallbackTarget ? document.querySelector(step.fallbackTarget) : target;
}

function getVisibleRect(element) {
  const rect = element.getBoundingClientRect();
  let top = rect.top;
  let right = rect.right;
  let bottom = rect.bottom;
  let left = rect.left;
  let parent = element.parentElement;

  while (parent && parent !== document.body) {
    const style = getComputedStyle(parent);
    if (/(auto|scroll|hidden|clip)/.test(`${style.overflow}${style.overflowX}${style.overflowY}`)) {
      const parentRect = parent.getBoundingClientRect();
      top = Math.max(top, parentRect.top);
      right = Math.min(right, parentRect.right);
      bottom = Math.min(bottom, parentRect.bottom);
      left = Math.max(left, parentRect.left);
    }
    parent = parent.parentElement;
  }

  return {
    top,
    right,
    bottom,
    left,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top),
  };
}

function markTutorialSeen() {
  try {
    localStorage.setItem(TUTORIAL_KEY, "true");
  } catch {
    // Tutorial replay still works when storage is unavailable.
  }
}

function shouldAutoStartTutorial() {
  try {
    return localStorage.getItem(TUTORIAL_KEY) !== "true";
  } catch {
    return true;
  }
}

function startTutorial(index = 0) {
  tutorialIndex = clampNumber(index, 0, tutorialSteps.length - 1, 0);
  tutorialIsOpen = true;
  els.tutorialOverlay.classList.remove("hidden");
  document.body.classList.add("tutorial-active");
  renderTutorialStep();
}

function closeTutorial(markSeen = true) {
  tutorialIsOpen = false;
  els.tutorialOverlay.classList.add("hidden");
  document.body.classList.remove("tutorial-active");
  if (markSeen) markTutorialSeen();
}

function renderTutorialStep() {
  if (!tutorialIsOpen) return;
  const step = tutorialSteps[tutorialIndex];
  els.tutorialDots.innerHTML = tutorialSteps
    .map((_, index) => `<span class="${index === tutorialIndex ? "active" : ""}" aria-hidden="true"></span>`)
    .join("");
  els.tutorialDots.setAttribute("aria-label", `Tutorial step ${tutorialIndex + 1} of ${tutorialSteps.length}`);
  els.tutorialTitle.textContent = step.title;
  els.tutorialBody.textContent = step.body;
  els.tutorialBack.disabled = tutorialIndex === 0;
  els.tutorialNext.textContent = tutorialIndex === tutorialSteps.length - 1 ? "Done" : "Next";
  positionTutorial();
  els.tutorialNext.focus();
}

function positionTutorial() {
  if (!tutorialIsOpen) return;
  const step = tutorialSteps[tutorialIndex];
  const target = getTutorialTarget(step);
  const viewportPad = 14;

  if (!target) {
    els.tutorialSpotlight.style.display = "none";
    els.tutorialCard.style.left = `${viewportPad}px`;
    els.tutorialCard.style.top = `${viewportPad}px`;
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

  requestAnimationFrame(() => {
    const rect = getVisibleRect(target);
    const pad = 8;
    const top = Math.max(viewportPad, rect.top - pad);
    const left = Math.max(viewportPad, rect.left - pad);
    const width = Math.min(window.innerWidth - left - viewportPad, rect.width + pad * 2);
    const height = Math.min(window.innerHeight - top - viewportPad, rect.height + pad * 2);

    els.tutorialSpotlight.style.display = "block";
    els.tutorialSpotlight.style.left = `${left}px`;
    els.tutorialSpotlight.style.top = `${top}px`;
    els.tutorialSpotlight.style.width = `${Math.max(44, width)}px`;
    els.tutorialSpotlight.style.height = `${Math.max(44, height)}px`;
    els.tutorialSpotlight.style.borderRadius = rect.width < 90 && rect.height < 90 ? "999px" : "18px";

    const cardRect = els.tutorialCard.getBoundingClientRect();
    const spaceBelow = window.innerHeight - (top + height);
    const cardLeft = Math.min(
      window.innerWidth - cardRect.width - viewportPad,
      Math.max(viewportPad, left + Math.min(32, width / 3))
    );
    const cardTop = spaceBelow >= cardRect.height + 28
      ? top + height + 18
      : Math.max(viewportPad, top - cardRect.height - 18);

    els.tutorialCard.style.left = `${Math.max(viewportPad, cardLeft)}px`;
    els.tutorialCard.style.top = `${Math.max(viewportPad, cardTop)}px`;
  });
}

function nextTutorialStep() {
  if (tutorialIndex >= tutorialSteps.length - 1) {
    closeTutorial(true);
    return;
  }
  tutorialIndex += 1;
  renderTutorialStep();
}

function previousTutorialStep() {
  if (tutorialIndex === 0) return;
  tutorialIndex -= 1;
  renderTutorialStep();
}

function openLabelModal(index) {
  state.activeEditIndex = index;
  const label = resolveLabelAt(state, index);
  els.labelModalTitle.textContent = `Edit label ${index + 1}`;
  els.labelModalBody.value = label.content;
  els.resetLabel.classList.toggle("hidden", !state.overrides[index]);
  els.labelModal.classList.remove("hidden");
  els.labelModalBody.focus();
}

function closeLabelModal() {
  state.activeEditIndex = null;
  els.labelModal.classList.add("hidden");
}

function saveLabelOverride() {
  if (state.activeEditIndex === null) return;
  pushHistory();
  const index = state.activeEditIndex;
  state.overrides[index] = {
    content: els.labelModalBody.value,
    style: getStyleForIndex(state, index),
  };
  savePreferences();
  closeLabelModal();
  renderAll();
}

function resetLabelOverride() {
  if (state.activeEditIndex === null) return;
  pushHistory();
  delete state.overrides[state.activeEditIndex];
  savePreferences();
  closeLabelModal();
  renderAll();
}

async function loadCsvFile(file) {
  if (!file) return;
  try {
    showToast("Parsing CSV...");
    const parsed = await parseCsvFile(file, state.firstRowIsHeader);
    pushHistory();
    state.inputMethod = "upload";
    state.workspaceSource = "";
    setHeadersAndRows(parsed);
    savePreferences();
    showToast(`${parsed.data.length} rows loaded from CSV.`, "success");
    renderAll();
  } catch (error) {
    showToast(error.message || "CSV could not be parsed.", "error");
  }
}

function exportProject() {
  const project = {
    version: PROJECT_VERSION,
    exportedAt: new Date().toISOString(),
    templateId: state.templateId,
    inputMethod: state.inputMethod,
    manualCount: state.manualCount,
    firstRowIsHeader: state.firstRowIsHeader,
    data: state.data,
    headers: state.headers,
    labelTemplate: state.labelTemplate,
    overrides: state.overrides,
    style: state.style,
    skipCount: state.skipCount,
    logoDataUrl: state.logoDataUrl,
    logoName: state.logoName,
    logoPosition: state.logoPosition,
    logoSize: state.logoSize,
  };
  const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `labelsprint-project-${state.projectId.slice(0, 8)}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function importProject(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const project = validateImportedProject(JSON.parse(reader.result));
      pushHistory();
      state = {
        ...state,
        templateId: project.templateId || state.templateId,
        inputMethod: project.inputMethod || state.inputMethod,
        manualCount: clampNumber(project.manualCount, 1, 25000, state.manualCount),
        firstRowIsHeader: project.firstRowIsHeader !== false,
        data: Array.isArray(project.data) ? project.data : [],
        headers: Array.isArray(project.headers) ? project.headers : [],
        labelTemplate: String(project.labelTemplate || DEFAULT_LABEL_TEMPLATE),
        overrides: project.overrides && typeof project.overrides === "object" ? project.overrides : {},
        style: { ...DEFAULT_STYLE, ...(project.style || {}) },
        skipCount: clampNumber(project.skipCount, 0, 25000, 0),
        logoDataUrl: project.logoDataUrl || null,
        logoName: project.logoName || "",
        logoPosition: normalizeLogoPosition(project.logoPosition || "above"),
        logoSize: clampNumber(project.logoSize, 5, 100, 30),
        workspaceSource: "",
      };
      savePreferences();
      showToast("Project imported.", "success");
      renderAll();
    } catch (error) {
      showToast(error.message || "Invalid project file.", "error");
    }
  };
  reader.readAsText(file);
}

async function runExport(kind) {
  if (els.downloadMenu) els.downloadMenu.open = false;
  const template = selectedTemplate();
  const errors = validateTemplateGeometry(template);
  if (errors.length) {
    showToast(errors[0], "error");
    return;
  }

  setBusy(true);
  showExportProgress(`Preparing ${kind.toUpperCase()}`, "Building print-ready pages...", 4);

  const callbacks = {
    onProgress: ({ currentPage, totalPages, percent }) => {
      showExportProgress(`Exporting ${kind.toUpperCase()}`, `Page ${currentPage} of ${totalPages}`, percent);
    },
  };

  try {
    const result = kind === "pdf"
      ? await exportPdf(state, template, callbacks)
      : await exportDocx(state, template, callbacks);
    state.sessionLabelsGenerated += result.totalLabels;
    showToast(`${kind.toUpperCase()} ready: ${result.totalLabels} labels across ${result.totalPages} pages.`, "success");
  } catch (error) {
    console.error(error);
    showToast(error.message || `${kind.toUpperCase()} export failed.`, "error");
  } finally {
    hideExportProgress();
    setBusy(false);
  }
}

function printLabels() {
  const template = selectedTemplate();
  const errors = validateTemplateGeometry(template);
  if (errors.length) {
    showToast(errors[0], "error");
    return;
  }

  if (tutorialIsOpen) closeTutorial(false);
  closeTemplateModal();
  closeLabelModal();
  renderPreview({ allPages: true });
  updateZoom();

  requestAnimationFrame(() => {
    window.print();
  });
}

function bindEvents() {
  els.tutorialButton.addEventListener("click", () => startTutorial(0));
  els.tutorialSkip.addEventListener("click", () => closeTutorial(true));
  els.tutorialNext.addEventListener("click", nextTutorialStep);
  els.tutorialBack.addEventListener("click", previousTutorialStep);
  window.addEventListener("scroll", positionTutorial, { passive: true });
  window.addEventListener("resize", positionTutorial);

  els.undoButton.addEventListener("click", undoChange);
  els.redoButton.addEventListener("click", redoChange);

  els.templateButton.addEventListener("click", openTemplateModal);
  els.closeTemplateModal.addEventListener("click", closeTemplateModal);
  els.templateModal.addEventListener("click", (event) => {
    if (event.target === els.templateModal) closeTemplateModal();
  });
  els.templateSearch.addEventListener("input", renderTemplateGrid);

  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => setInputMethod(button.dataset.mode));
  });

  els.manualCount.addEventListener("input", () => {
    pushHistory();
    state.manualCount = clampNumber(els.manualCount.value, 1, 25000, 1);
    savePreferences();
    renderAll();
  });

  [els.pasteHeader, els.uploadHeader].forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      pushHistory();
      state.firstRowIsHeader = checkbox.checked;
      savePreferences();
      renderDataControls();
    });
  });

  els.processPaste.addEventListener("click", () => {
    try {
      const parsed = parsePastedText(els.pasteArea.value, state.firstRowIsHeader);
      pushHistory();
      state.workspaceSource = "";
      setHeadersAndRows(parsed);
      showToast(`${parsed.data.length} rows processed.`, "success");
      renderAll();
    } catch (error) {
      showToast(error.message || "Pasted rows could not be parsed.", "error");
    }
  });

  els.dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    els.dropZone.classList.add("is-dragging");
  });
  els.dropZone.addEventListener("dragleave", () => els.dropZone.classList.remove("is-dragging"));
  els.dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    els.dropZone.classList.remove("is-dragging");
    loadCsvFile(event.dataTransfer.files[0]);
  });
  els.csvInput.addEventListener("change", (event) => loadCsvFile(event.target.files[0]));

  els.labelTemplate.addEventListener("input", () => {
    pushHistory();
    state.labelTemplate = els.labelTemplate.value;
    savePreferences();
    renderPreview();
  });

  els.fontSize.addEventListener("input", () => {
    pushHistory();
    state.style.fontSize = clampNumber(els.fontSize.value, 6, 36, DEFAULT_STYLE.fontSize);
    savePreferences();
    renderAll();
  });

  els.fontFamily.addEventListener("change", () => {
    pushHistory();
    state.style.fontFamily = els.fontFamily.value || DEFAULT_STYLE.fontFamily;
    savePreferences();
    renderAll();
  });

  els.skipCount.addEventListener("input", () => {
    pushHistory();
    state.skipCount = clampNumber(els.skipCount.value, 0, 25000, 0);
    savePreferences();
    renderAll();
  });

  els.alignToggles.forEach((button) => {
    button.addEventListener("click", () => {
      pushHistory();
      state.style.alignment = button.dataset.align;
      savePreferences();
      renderAll();
    });
  });
  els.valignToggles.forEach((button) => {
    button.addEventListener("click", () => {
      pushHistory();
      state.style.verticalAlign = button.dataset.valign;
      savePreferences();
      renderAll();
    });
  });

  els.boldToggle.addEventListener("click", () => {
    pushHistory();
    state.style.isBold = !state.style.isBold;
    savePreferences();
    renderAll();
  });
  els.italicToggle.addEventListener("click", () => {
    pushHistory();
    state.style.isItalic = !state.style.isItalic;
    savePreferences();
    renderAll();
  });
  els.upperToggle.addEventListener("click", () => {
    pushHistory();
    state.style.isUpper = !state.style.isUpper;
    savePreferences();
    renderAll();
  });

  els.logoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      showToast("Use a logo smaller than 2 MB for reliable PDF and DOCX export.", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      pushHistory();
      state.logoDataUrl = reader.result;
      state.logoName = file.name;
      renderAll();
    };
    reader.readAsDataURL(file);
  });

  els.removeLogo.addEventListener("click", () => {
    pushHistory();
    state.logoDataUrl = null;
    state.logoName = "";
    renderAll();
  });
  els.logoPosition.addEventListener("change", () => {
    pushHistory();
    state.logoPosition = normalizeLogoPosition(els.logoPosition.value);
    savePreferences();
    renderAll();
  });
  els.logoSize.addEventListener("input", () => {
    pushHistory();
    state.logoSize = clampNumber(els.logoSize.value, 5, 100, 30);
    savePreferences();
    renderAll();
  });

  els.zoomSelect.addEventListener("change", updateZoom);
  window.addEventListener("resize", updateZoom);

  els.clearOverrides.addEventListener("click", () => {
    pushHistory();
    state.overrides = {};
    savePreferences();
    renderAll();
  });

  els.closeLabelModal.addEventListener("click", closeLabelModal);
  els.cancelLabel.addEventListener("click", closeLabelModal);
  els.saveLabel.addEventListener("click", saveLabelOverride);
  els.resetLabel.addEventListener("click", resetLabelOverride);
  els.labelModal.addEventListener("click", (event) => {
    if (event.target === els.labelModal) closeLabelModal();
  });

  els.projectExport.addEventListener("click", exportProject);
  els.projectImport.addEventListener("change", (event) => importProject(event.target.files[0]));

  els.startOver.addEventListener("click", () => {
    if (!confirm("Reset this project and clear imported rows from memory?")) return;
    pushHistory();
    const keepTemplateId = state.templateId;
    state = {
      ...state,
      projectId: crypto.randomUUID(),
      templateId: keepTemplateId,
      inputMethod: "manual",
      manualCount: 30,
      data: [],
      headers: [],
      labelTemplate: DEFAULT_LABEL_TEMPLATE,
      overrides: {},
      logoDataUrl: null,
      logoName: "",
      logoPosition: "above",
      workspaceSource: "",
      skipCount: 0,
    };
    savePreferences();
    renderAll();
  });

  els.downloadPdf.addEventListener("click", () => runExport("pdf"));
  els.downloadDocx.addEventListener("click", () => runExport("docx"));
  els.printLabels.addEventListener("click", printLabels);
  window.addEventListener("afterprint", () => {
    renderPreview();
    updateZoom();
  });

  window.addEventListener("keydown", (event) => {
    if (tutorialIsOpen) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeTutorial(true);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextTutorialStep();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousTutorialStep();
        return;
      }
    }

    if (event.key === "Escape") {
      closeTemplateModal();
      closeLabelModal();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
      event.preventDefault();
      if (event.shiftKey) {
        redoChange();
      } else {
        undoChange();
      }
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y") {
      event.preventDefault();
      redoChange();
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      runExport("pdf");
    }
  });
}

function initWorkspace() {
  initWorkspaceBridge({
    onRows: ({ values, firstRowIsHeader, source }) => {
      const parsed = rowsFromWorkspace(values, firstRowIsHeader);
      pushHistory();
      state.inputMethod = "upload";
      state.firstRowIsHeader = firstRowIsHeader;
      state.workspaceSource = source;
      setHeadersAndRows(parsed);
      savePreferences();
      showToast(`${parsed.data.length} selected Workspace rows loaded.`, "success");
      renderAll();
    },
    onStatus: (message) => showToast(message, "error"),
  });
}

function init() {
  renderShell();
  cacheElements();
  loadPreferences();
  bindEvents();
  initWorkspace();
  renderAll();
  if (shouldAutoStartTutorial()) {
    window.setTimeout(() => startTutorial(0), 350);
  }
}

init();

````

## src/index.css
``css
@import "tailwindcss";

@font-face {
  font-family: "Diatype";
  src:
    local("Diatype"),
    url("/fonts/diatype/Diatype-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Diatype";
  src:
    local("Diatype Medium"),
    url("/fonts/diatype/Diatype-Medium.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Diatype";
  src:
    local("Diatype Bold"),
    url("/fonts/diatype/Diatype-Bold.woff2") format("woff2");
  font-weight: 700 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Circular";
  src:
    local("Circular"),
    local("Circular Std Book"),
    url("/fonts/circular/Circular-Book.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Circular";
  src:
    local("Circular Medium"),
    local("Circular Std Medium"),
    url("/fonts/circular/Circular-Medium.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Circular";
  src:
    local("Circular Bold"),
    local("Circular Std Bold"),
    url("/fonts/circular/Circular-Bold.woff2") format("woff2");
  font-weight: 700 900;
  font-style: normal;
  font-display: swap;
}

:root {
  color-scheme: light;
  --avery-heritage-blue: #0039A6;
  --avery-azure-blue: #2475E6;
  --avery-heritage-red: #E00034;
  --avery-poppy-red: #FF2807;
  --avery-sky-blue: #C8E5FE;
  --avery-coral: #FFBECD;
  --avery-white: #FFFFFF;
  --avery-light-grey: #F7F7F7;
  --avery-medium-grey: #F1F1F1;
  --avery-navy: #000A55;
  --avery-black: #000000;
  --ink: var(--avery-black);
  --muted: #4F4F4F;
  --subtle: var(--avery-light-grey);
  --panel: var(--avery-white);
  --line: #D7D7D7;
  --blue: var(--avery-heritage-blue);
  --blue-soft: #EAF5FF;
  --accent: var(--avery-heritage-red);
  --accent-soft: #FFF0F4;
  --orange: var(--accent);
  --green: #006B4F;
  --red: var(--avery-heritage-red);
  --font-display: "Diatype", "Arial", "Helvetica Neue", Helvetica, sans-serif;
  --font-body: "Circular", "Diatype", "Arial", "Helvetica Neue", Helvetica, sans-serif;
  --font-label: "Diatype", "Arial", "Helvetica Neue", Helvetica, sans-serif;
  --radius-control: 12px;
  --radius-media: 14px;
  --shadow: none;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
}

body {
  margin: 0;
  background: var(--avery-medium-grey);
  color: var(--ink);
  font-family: var(--font-body);
  letter-spacing: 0;
}

button,
input,
select,
textarea {
  font: inherit;
  letter-spacing: 0;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.hidden {
  display: none !important;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 68px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--line);
}

.brand-mark {
  display: grid;
  grid-template-columns: repeat(2, 10px);
  gap: 3px;
  padding: 8px;
  border-radius: var(--radius-control);
  background: var(--blue);
}

.brand-mark span {
  width: 10px;
  height: 8px;
  border-radius: 2px;
  background: var(--avery-white);
}

.brand-mark span:nth-child(2),
.brand-mark span:nth-child(3) {
  opacity: 0.72;
}

.brand-mark span:nth-child(4) {
  opacity: 0.46;
}

.brand-copy h1,
.brand-copy p {
  margin: 0;
}

.brand-copy h1 {
  font-family: var(--font-display);
  font-size: 20px;
  line-height: 1;
  font-weight: 800;
}

.brand-copy p {
  font-family: var(--font-body);
  margin-top: 3px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
}

.header-spacer {
  flex: 1;
}

.status-chip,
.counter-chip,
.mini-metric {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--subtle);
  color: var(--muted);
  font-size: 12px;
  font-weight: 750;
  white-space: nowrap;
}

.counter-chip {
  border-color: var(--avery-coral);
  background: var(--accent-soft);
  color: var(--avery-black);
}

.status-chip svg,
.toolbar-button svg,
.export-button svg,
.action-button svg,
.icon-toggle svg,
.drop-zone svg {
  width: 16px;
  height: 16px;
  stroke-width: 2.2;
}

.toolbar-button,
.export-button,
.action-button,
.text-button,
.icon-toggle {
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--avery-white);
  color: var(--ink);
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease, transform 140ms ease;
}

.toolbar-button,
.export-button,
.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 8px 14px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
}

.toolbar-button.icon-only {
  width: 38px;
  padding: 8px;
}

.toolbar-button:hover,
.icon-toggle:hover {
  border-color: #BDBDBD;
  background: var(--avery-light-grey);
}

.toolbar-button.primary-soft {
  color: var(--blue);
  background: var(--avery-white);
  border-color: var(--avery-sky-blue);
}

.toolbar-button.danger {
  color: var(--red);
}

.export-button {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--avery-white);
}

.export-button.dark {
  border-color: var(--blue);
  background: var(--blue);
}

.header-export-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.download-menu {
  position: relative;
}

.download-menu summary {
  list-style: none;
  cursor: pointer;
}

.download-menu summary::-webkit-details-marker {
  display: none;
}

.download-options {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 70;
  display: grid;
  min-width: 150px;
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--avery-white);
  overflow: hidden;
}

.download-options button {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: var(--avery-white);
  color: var(--ink);
  padding: 10px 12px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
}

.download-options button:hover,
.download-options button:focus-visible {
  background: var(--blue-soft);
  color: var(--blue);
  outline: none;
}

.download-options svg {
  width: 16px;
  height: 16px;
}

.export-button:hover,
.action-button:hover {
  transform: none;
  filter: brightness(0.97);
}

.export-button.is-busy {
  color: rgba(255, 255, 255, 0.85);
}

.app-grid {
  display: grid;
  grid-template-columns: minmax(320px, 390px) minmax(0, 1fr);
  min-height: calc(100vh - 68px);
}

.control-panel {
  background: var(--panel);
  border-right: 1px solid var(--line);
  overflow-y: auto;
}

.panel-section {
  padding: 18px;
  border-bottom: 1px solid var(--line);
}

.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.step-kicker {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.section-heading p,
.modal-header p,
.preview-kicker {
  font-family: var(--font-display);
  margin: 0 0 4px;
  color: var(--orange);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
}

.step-kicker p {
  margin-bottom: 0;
}

.step-help {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border: 1px solid var(--avery-sky-blue);
  border-radius: 999px;
  background: var(--avery-white);
  color: var(--blue);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 900;
  line-height: 1;
  cursor: help;
}

.step-help::after {
  content: attr(data-help);
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  z-index: 60;
  width: min(260px, calc(100vw - 42px));
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--avery-white);
  color: var(--ink);
  padding: 10px 11px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.35;
  text-transform: none;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-2px);
  transition: opacity 120ms ease, transform 120ms ease;
}

.step-help:hover::after,
.step-help:focus-visible::after {
  opacity: 1;
  transform: translateY(0);
}

.section-heading h2,
.modal-header h2,
.preview-toolbar h2 {
  font-family: var(--font-display);
  margin: 0;
  color: var(--ink);
  font-size: 16px;
  line-height: 1.2;
  font-weight: 850;
}

.segmented-control {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--avery-light-grey);
}

.mode-button {
  min-height: 34px;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
}

.mode-button.active {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: var(--avery-coral);
}

.mode-panel {
  display: grid;
  gap: 10px;
}

.panel-helper {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
}

.field-label {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.input-control {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--avery-white);
  color: var(--ink);
  outline: none;
  padding: 10px 11px;
  font-size: 14px;
  line-height: 1.35;
}

.input-control:focus {
  border-color: var(--blue);
  outline: 3px solid var(--avery-sky-blue);
  outline-offset: 2px;
}

.input-control.compact {
  min-height: 38px;
  padding: 8px 10px;
}

.input-control.tall {
  min-height: 132px;
  resize: vertical;
}

.input-control.editor {
  min-height: 150px;
  resize: vertical;
}

.input-control.search {
  margin-bottom: 14px;
}

.mono {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 13px;
}

.check-row {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}

.check-row input {
  width: 16px;
  height: 16px;
  accent-color: var(--blue);
}

.drop-zone {
  display: grid;
  place-items: center;
  gap: 5px;
  min-height: 112px;
  padding: 18px;
  border: 1.5px dashed #BDBDBD;
  border-radius: 14px;
  background: var(--avery-light-grey);
  color: var(--muted);
  text-align: center;
}

.drop-zone strong {
  font-family: var(--font-display);
  color: var(--ink);
  font-size: 14px;
}

.drop-zone span {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 650;
}

.drop-zone:hover,
.drop-zone.is-dragging {
  border-color: var(--blue);
  background: var(--blue-soft);
}

.compact-drop {
  min-height: 92px;
}

.field-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.field-pill {
  border: 1px solid #CFCFCF;
  border-radius: var(--radius-control);
  background: var(--avery-light-grey);
  color: var(--avery-navy);
  padding: 6px 8px;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 12px;
  font-weight: 800;
}

.field-pill:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}

.style-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.format-section {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.format-section .style-grid {
  margin-top: 0;
}

.sheet-setup-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 12px;
  align-items: end;
}

.button-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 10px;
}

.icon-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 7px 9px;
  font-weight: 850;
}

.icon-toggle.active {
  border-color: var(--blue);
  background: var(--blue);
  color: var(--avery-white);
}

.text-toggle {
  font-size: 12px;
}

.text-button {
  border: 0;
  background: transparent;
  color: var(--blue);
  padding: 2px 0;
  font-size: 12px;
  font-weight: 800;
}

.preview-panel {
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--avery-medium-grey);
}

.preview-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 66px;
  padding: 12px 18px;
  background: var(--avery-white);
  color: var(--ink);
  border-bottom: 1px solid var(--line);
}

.preview-toolbar h2 {
  color: var(--ink);
}

.preview-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.zoom-select {
  min-height: 34px;
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--avery-white);
  color: var(--ink);
  padding: 6px 8px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
}

.sheet-preview {
  flex: 1;
  overflow: auto;
  padding: 36px;
}

#pagesContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  transform-origin: top center;
}

.page-sheet {
  position: relative;
  flex: 0 0 auto;
  overflow: hidden;
  background: var(--avery-white);
  border: 1px solid #D7D7D7;
  border-radius: var(--radius-media);
}

.label-cell {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2pt;
  overflow: hidden;
  border: 0;
  outline: 1px dashed #D7D7D7;
  background: var(--avery-white);
  color: var(--avery-black);
  padding: 5pt;
  text-align: left;
  white-space: pre-wrap;
}

.label-cell,
.label-text {
  font-family: var(--font-label);
}

.label-cell:hover {
  z-index: 2;
  outline: 2px solid var(--accent);
}

.label-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 3pt;
  max-width: 100%;
  max-height: 100%;
  min-width: 0;
}

.label-text {
  position: relative;
  z-index: 1;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
}

.label-cell em {
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 3;
  border-radius: 6px;
  background: var(--avery-coral);
  color: var(--avery-black);
  padding: 1px 4px;
  font-size: 7px;
  font-style: normal;
  font-weight: 900;
}

.label-cell.customized {
  outline: 2px solid var(--accent);
}

.label-cell.skipped {
  background: var(--avery-light-grey);
}

.label-cell.skipped::after {
  content: "SKIPPED";
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #767676;
  font-size: 9pt;
  font-weight: 900;
  transform: rotate(-28deg);
}

.label-cell.ghost {
  opacity: 0.48;
}

.align-left {
  align-items: flex-start;
  text-align: left;
}

.align-center {
  align-items: center;
  text-align: center;
}

.align-right {
  align-items: flex-end;
  text-align: right;
}

.valign-top {
  justify-content: flex-start;
}

.valign-middle {
  justify-content: center;
}

.valign-bottom {
  justify-content: flex-end;
}

.label-logo {
  position: relative;
  z-index: 0;
  object-fit: contain;
  flex: 0 0 auto;
}

.logo-layout-above,
.logo-layout-below {
  align-items: center;
}

.logo-layout-left,
.logo-layout-right {
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.logo-layout-right {
  flex-direction: row-reverse;
}

.logo-layout-below {
  flex-direction: column-reverse;
}

.logo-layout-left .label-text,
.logo-layout-right .label-text {
  flex: 1 1 auto;
}

.logo-layout-watermark {
  display: block;
  position: static;
}

.logo-watermark {
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15;
  pointer-events: none;
}

.preview-note {
  margin: 0;
  padding: 10px 14px;
  border-radius: var(--radius-control);
  background: var(--avery-white);
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 750;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0, 10, 85, 0.58);
}

.modal-card,
.export-card {
  width: min(620px, 100%);
  max-height: min(760px, calc(100vh - 40px));
  overflow: auto;
  border: 1px solid var(--line);
  border-radius: var(--radius-media);
  background: var(--avery-white);
}

.modal-card {
  padding: 18px;
}

.modal-card.wide {
  width: min(940px, 100%);
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 10px;
}

.template-grid.list {
  grid-template-columns: 1fr;
  gap: 8px;
}

.template-section-title {
  grid-column: 1 / -1;
  margin: 2px 0 0;
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.template-section-title.secondary {
  margin-top: 8px;
}

.template-card {
  display: grid;
  gap: 6px;
  min-height: 138px;
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius-media);
  background: var(--avery-white);
  padding: 13px;
  text-align: left;
}

.template-card-main {
  display: grid;
  gap: 6px;
  min-width: 0;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 0 28px 0 0;
  text-align: left;
  font: inherit;
}

button.template-card-main {
  cursor: pointer;
}

.template-card.catalog-only .template-card-main {
  cursor: default;
}

.template-external-link {
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid transparent;
  border-radius: 6px;
  color: var(--muted);
  text-decoration: none;
}

.template-external-link:hover,
.template-external-link:focus-visible {
  border-color: var(--line);
  background: var(--avery-white);
  color: var(--blue);
  outline: none;
}

.template-external-link svg {
  width: 16px;
  height: 16px;
}

.template-grid.list .template-card {
  min-height: 0;
  grid-template-columns: minmax(150px, 0.8fr) minmax(180px, 1fr) minmax(150px, 0.9fr) auto;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
}

.template-grid.list .template-card-main {
  grid-template-columns: minmax(150px, 0.8fr) minmax(180px, 1fr) minmax(150px, 0.9fr) auto;
  align-items: center;
  gap: 12px;
  padding-right: 32px;
}

.template-card:hover,
.template-card.active {
  border-color: var(--blue);
  background: var(--blue-soft);
}

.template-card.active {
  border-color: var(--blue);
}

.template-card.catalog-only {
  border-style: dashed;
  background: var(--avery-light-grey);
  cursor: default;
}

.template-card.catalog-only:hover {
  border-color: var(--line);
  background: var(--avery-light-grey);
}

.template-card.catalog-only em {
  color: var(--avery-black);
  border-color: var(--avery-coral);
  background: #FFF0F4;
}

.template-card strong {
  font-family: var(--font-display);
  color: var(--ink);
  font-size: 15px;
  line-height: 1.2;
}

.template-card span,
.template-card small {
  font-family: var(--font-body);
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.template-card em {
  align-self: end;
  justify-self: start;
  border-radius: 999px;
  background: var(--avery-white);
  border: 1px solid #D7D7D7;
  padding: 4px 7px;
  color: var(--blue);
  font-family: var(--font-display);
  font-size: 11px;
  font-style: normal;
  font-weight: 850;
}

.template-grid.list .template-card em {
  align-self: center;
  justify-self: end;
}

.template-see-all {
  grid-column: 1 / -1;
  justify-self: center;
  margin-top: 8px;
  border: 1px solid var(--blue);
  border-radius: var(--radius-control);
  background: var(--avery-white);
  color: var(--blue);
  padding: 10px 16px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 850;
  cursor: pointer;
}

.template-see-all:hover {
  background: var(--blue);
  color: var(--avery-white);
}

.empty-state {
  margin: 0;
  border: 1px dashed var(--line);
  border-radius: var(--radius-media);
  padding: 16px;
  color: var(--muted);
  background: var(--avery-light-grey);
  font-family: var(--font-body);
  font-weight: 750;
}

.modal-editor {
  min-height: 210px;
}

.modal-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}

.export-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: center;
  width: min(460px, 100%);
  padding: 18px;
}

.export-card h2,
.export-card p {
  margin: 0;
}

.export-card h2 {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 850;
}

.export-card p {
  margin-top: 4px;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
}

.spinner {
  width: 34px;
  height: 34px;
  border: 4px solid var(--avery-sky-blue);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 900ms linear infinite;
}

.progress-track {
  width: 100%;
  height: 8px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: var(--radius-control);
  background: var(--avery-light-grey);
}

.progress-track span {
  display: block;
  width: 4%;
  height: 100%;
  border-radius: inherit;
  background: var(--green);
  transition: width 160ms ease;
}

.toast {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 120;
  max-width: min(420px, calc(100vw - 36px));
  border: 1px solid #D7D7D7;
  border-left: 5px solid var(--accent);
  border-radius: var(--radius-control);
  background: var(--avery-white);
  color: var(--ink);
  padding: 12px 14px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 760;
}

.toast[data-tone="success"] {
  border-left-color: var(--green);
}

.toast[data-tone="error"] {
  border-left-color: var(--red);
}

.site-footer {
  display: flex;
  justify-content: center;
  padding: 14px 20px;
  border-top: 1px solid var(--line);
  background: var(--avery-white);
}

.site-footer a {
  font-family: var(--font-body);
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
  text-decoration: none;
}

.site-footer a:hover {
  color: var(--blue);
  text-decoration: underline;
}

.tutorial-active {
  overflow-x: hidden;
}

.tutorial-overlay {
  position: fixed;
  inset: 0;
  z-index: 130;
  pointer-events: auto;
}

.tutorial-spotlight {
  position: fixed;
  z-index: 131;
  pointer-events: none;
  border: 4px solid var(--avery-sky-blue);
  border-radius: var(--radius-media);
  box-shadow: 0 0 0 9999px rgba(0, 10, 85, 0.66);
  transition: left 180ms ease, top 180ms ease, width 180ms ease, height 180ms ease, border-radius 180ms ease;
}

.tutorial-card {
  position: fixed;
  z-index: 132;
  width: min(380px, calc(100vw - 28px));
  border: 0;
  border-radius: var(--radius-media);
  background: var(--avery-azure-blue);
  color: var(--avery-white);
  padding: 18px;
  pointer-events: auto;
}

.tutorial-card-header,
.tutorial-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tutorial-card-header {
  margin-bottom: 12px;
}

.tutorial-dots {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.tutorial-dots span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.42);
}

.tutorial-dots span.active {
  width: 22px;
  background: var(--avery-white);
}

.tutorial-card .text-button {
  color: var(--avery-white);
}

.tutorial-card h2 {
  margin: 0;
  color: var(--avery-white);
  font-family: var(--font-display);
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
}

.tutorial-card > p {
  margin: 10px 0 18px;
  color: var(--avery-white);
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.45;
  font-weight: 700;
}

.tutorial-actions .toolbar-button,
.tutorial-actions .export-button {
  min-width: 92px;
}

.tutorial-actions .toolbar-button {
  border-color: rgba(255, 255, 255, 0.62);
  background: transparent;
  color: var(--avery-white);
}

.tutorial-actions .toolbar-button:disabled {
  opacity: 0.45;
}

.tutorial-actions .export-button {
  border-color: var(--avery-white);
  background: var(--avery-white);
  color: var(--blue);
}

.howto-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 140;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0, 10, 85, 0.58);
}

.howto-modal {
  width: min(560px, 100%);
  border: 1px solid var(--line);
  border-radius: var(--radius-media);
  background: var(--avery-white);
  color: var(--ink);
  padding: 20px;
  outline: none;
}

.howto-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.howto-modal-header p {
  margin: 0 0 4px;
  color: var(--accent);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 850;
  text-transform: uppercase;
}

.howto-modal-header h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 20px;
  line-height: 1.2;
  font-weight: 850;
}

.howto-modal-description {
  margin: 12px 0 0;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.5;
  font-weight: 650;
}

.howto-modal-steps {
  display: grid;
  gap: 10px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  counter-reset: howto-step;
}

.howto-modal-steps li {
  position: relative;
  min-height: 48px;
  padding: 10px 12px 10px 48px;
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--avery-light-grey);
}

.howto-modal-steps li::before {
  counter-increment: howto-step;
  content: counter(howto-step);
  position: absolute;
  left: 12px;
  top: 10px;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--avery-white);
  font-size: 12px;
  font-weight: 850;
}

.howto-modal-steps strong,
.howto-modal-steps span {
  display: block;
}

.howto-modal-steps strong {
  font-family: var(--font-display);
  font-size: 14px;
  line-height: 1.25;
}

.howto-modal-steps span {
  margin-top: 2px;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.35;
  font-weight: 650;
}

.howto-modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1120px) {
  .app-header {
    flex-wrap: wrap;
  }

  .header-spacer {
    display: none;
  }

  .app-grid {
    grid-template-columns: 1fr;
  }

  .control-panel {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .preview-panel {
    min-height: 720px;
  }
}

@media (max-width: 720px) {
  .app-header {
    align-items: stretch;
  }

  .brand-copy {
    flex: 1 1 calc(100% - 48px);
  }

  .toolbar-button,
  .export-button {
    flex: 1 1 calc(50% - 8px);
  }

  .panel-section,
  .sheet-preview {
    padding: 14px;
  }

  .header-export-group,
  .download-menu,
  .download-menu summary {
    width: 100%;
  }

  .preview-toolbar,
  .preview-actions,
  .modal-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .style-grid,
  .sheet-setup-row {
    grid-template-columns: 1fr;
  }

  .template-grid.list .template-card {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .template-grid.list .template-card em {
    justify-self: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}

@page {
  size: letter;
  margin: 0;
}

@media print {
  html,
  body,
  #app {
    width: 8.5in;
    min-height: 11in;
    margin: 0;
    padding: 0;
    background: var(--avery-white) !important;
  }

  .app-header,
  .control-panel,
  .preview-toolbar,
  .site-footer,
  .modal-backdrop,
  .tutorial-overlay,
  .toast,
  .preview-note {
    display: none !important;
  }

  .app-grid,
  .preview-panel,
  .sheet-preview,
  #pagesContainer {
    display: block !important;
    width: 8.5in !important;
    min-width: 0 !important;
    height: auto !important;
    min-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: visible !important;
    background: var(--avery-white) !important;
    transform: none !important;
  }

  .page-sheet {
    width: 8.5in !important;
    height: 11in !important;
    margin: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    break-after: page;
    page-break-after: always;
  }

  .page-sheet:last-child {
    break-after: auto;
    page-break-after: auto;
  }

  .label-cell {
    outline: 0 !important;
  }

  .label-cell em {
    display: none !important;
  }
}

````

## src/HowToModal.js
``javascript
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const STORAGE_KEY = "labelsprint_howto_seen";

const HOW_TO_STEPS = [
  {
    name: "Choose your input method",
    text: "Upload a CSV, paste data, or enter labels manually",
  },
  {
    name: "Map your columns",
    text: "Tell LabelsPrint which column is the label text (or use auto-detect)",
  },
  {
    name: "Select your label format",
    text: "Search the Avery catalog and choose a calibrated sheet layout",
  },
  {
    name: "Preview your labels",
    text: "Review layout before exporting",
  },
  {
    name: "Export and print",
    text: "Download as PDF or DOCX, then print on your label sheets",
  },
];

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => element.offsetParent !== null);
}

export function HowToModal() {
  const dialogRef = useRef(null);
  const dismissButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        previousFocusRef.current = document.activeElement;
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const focusables = getFocusableElements(dialog);
    (dismissButtonRef.current || focusables[0] || dialog)?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        dismiss();
        return;
      }

      if (event.key !== "Tab") return;

      const currentFocusables = getFocusableElements(dialog);
      if (currentFocusables.length === 0) {
        event.preventDefault();
        dialog?.focus();
        return;
      }

      const first = currentFocusables[0];
      const last = currentFocusables[currentFocusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // If storage is unavailable, still close the modal for this session.
    }
    setIsOpen(false);
    previousFocusRef.current?.focus?.();
  }

  if (!isOpen) return null;

  return React.createElement(
    "div",
    { className: "howto-modal-backdrop" },
    React.createElement(
      "section",
      {
        ref: dialogRef,
        className: "howto-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "howto-modal-title",
        "aria-describedby": "howto-modal-description",
        tabIndex: -1,
      },
      React.createElement(
        "div",
        { className: "howto-modal-header" },
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "Quick Start"),
          React.createElement("h2", { id: "howto-modal-title" }, "Print Avery labels in five steps")
        )
      ),
      React.createElement(
        "p",
        { id: "howto-modal-description", className: "howto-modal-description" },
        "Use LabelsPrint to create labels from CSV data, pasted rows, or manual entry, then export a print-ready PDF or DOCX file."
      ),
      React.createElement(
        "ol",
        { className: "howto-modal-steps" },
        HOW_TO_STEPS.map((step) =>
          React.createElement(
            "li",
            { key: step.name },
            React.createElement("strong", null, step.name),
            React.createElement("span", null, step.text)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "howto-modal-actions" },
        React.createElement(
          "button",
          {
            ref: dismissButtonRef,
            type: "button",
            className: "export-button",
            onClick: dismiss,
          },
          "Got it"
        )
      )
    )
  );
}

export function mountHowToModal(rootId = "howto-modal-root") {
  const rootElement = document.getElementById(rootId);
  if (!rootElement) return;
  createRoot(rootElement).render(React.createElement(HowToModal));
}

````

## workspace-extension/Code.gs
``javascript
const LABELSPRINT_TEMPLATES = {
  '5160': {
    id: '5160',
    name: 'Avery 5160 / 8160',
    columns: 3,
    rows: 10,
    labelsPerSheet: 30,
    labelWidthPt: 189,
    labelHeightPt: 72
  },
  '5161': {
    id: '5161',
    name: 'Avery 5161 / 8161',
    columns: 2,
    rows: 10,
    labelsPerSheet: 20,
    labelWidthPt: 288,
    labelHeightPt: 72
  },
  '5162': {
    id: '5162',
    name: 'Avery 5162 / 8162',
    columns: 2,
    rows: 7,
    labelsPerSheet: 14,
    labelWidthPt: 288,
    labelHeightPt: 96
  },
  '5163': {
    id: '5163',
    name: 'Avery 5163 / 8163',
    columns: 2,
    rows: 5,
    labelsPerSheet: 10,
    labelWidthPt: 288,
    labelHeightPt: 144
  },
  '5164': {
    id: '5164',
    name: 'Avery 5164 / 8164',
    columns: 2,
    rows: 3,
    labelsPerSheet: 6,
    labelWidthPt: 288,
    labelHeightPt: 240
  },
  '5126': {
    id: '5126',
    name: 'Avery 5126 / 8126',
    columns: 1,
    rows: 2,
    labelsPerSheet: 2,
    labelWidthPt: 612,
    labelHeightPt: 396
  },
  '5168': {
    id: '5168',
    name: 'Avery 5168 / 8168',
    columns: 2,
    rows: 2,
    labelsPerSheet: 4,
    labelWidthPt: 252,
    labelHeightPt: 360
  },
  '5167': {
    id: '5167',
    name: 'Avery 5167 / 8167',
    columns: 4,
    rows: 20,
    labelsPerSheet: 80,
    labelWidthPt: 126,
    labelHeightPt: 36
  },
  '5195': {
    id: '5195',
    name: 'Avery 5195 / 8195',
    columns: 4,
    rows: 15,
    labelsPerSheet: 60,
    labelWidthPt: 126,
    labelHeightPt: 48
  },
  '5366': {
    id: '5366',
    name: 'Avery 5366',
    columns: 2,
    rows: 15,
    labelsPerSheet: 30,
    labelWidthPt: 247.5,
    labelHeightPt: 48
  },
  '5371': {
    id: '5371',
    name: 'Avery 5371 / 8371',
    columns: 2,
    rows: 5,
    labelsPerSheet: 10,
    labelWidthPt: 252,
    labelHeightPt: 144
  },
  '5395': {
    id: '5395',
    name: 'Avery 5395',
    columns: 2,
    rows: 4,
    labelsPerSheet: 8,
    labelWidthPt: 243,
    labelHeightPt: 168
  },
  '22806': {
    id: '22806',
    name: 'Avery 22806',
    columns: 3,
    rows: 4,
    labelsPerSheet: 12,
    labelWidthPt: 144,
    labelHeightPt: 144
  }
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('LabelsPrint')
    .addItem('Open mail merge labels', 'showLabelsPrintSidebar')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function showLabelsPrintSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('LabelsPrint')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  SpreadsheetApp.getUi().showSidebar(html);
}

function getSelectedMergeData() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const range = SpreadsheetApp.getActiveRange();
  const source = spreadsheet ? spreadsheet.getName() : 'Google Sheets';

  if (!range) {
    return {
      headers: [],
      rows: [],
      values: [],
      firstRowIsHeader: true,
      source
    };
  }

  const values = range.getDisplayValues()
    .filter((row) => row.some((cell) => String(cell).trim() !== ''));

  if (!values.length) {
    return {
      headers: [],
      rows: [],
      values: [],
      firstRowIsHeader: true,
      source
    };
  }

  const headerRow = values[0];
  const headers = headerRow.map((header, index) => {
    const trimmed = String(header).trim();
    return trimmed || `Column ${index + 1}`;
  });

  return {
    headers,
    rows: values.slice(1),
    values,
    firstRowIsHeader: true,
    source
  };
}

function getLabelsPrintTemplates() {
  return Object.keys(LABELSPRINT_TEMPLATES).map((id) => {
    const template = LABELSPRINT_TEMPLATES[id];
    return {
      id: template.id,
      name: template.name,
      labelsPerSheet: template.labelsPerSheet
    };
  });
}

function getSelectedValues() {
  const payload = getSelectedMergeData();
  return {
    values: payload.values,
    firstRowIsHeader: payload.firstRowIsHeader,
    source: payload.source
  };
}

function createLabelsGoogleDoc(payload) {
  const result = createLabelsDocument_(payload || {});
  return {
    name: result.name,
    url: result.url,
    type: 'google-doc'
  };
}

function createLabelsPdf(payload) {
  const doc = createLabelsDocument_(payload || {});
  const sourceFile = DriveApp.getFileById(doc.id);
  const pdfBlob = sourceFile
    .getAs(MimeType.PDF)
    .setName(`${doc.name}.pdf`);
  const pdfFile = DriveApp.createFile(pdfBlob);

  return {
    name: pdfFile.getName(),
    url: pdfFile.getUrl(),
    type: 'pdf'
  };
}

function createLabelsDocument_(payload) {
  const template = LABELSPRINT_TEMPLATES[payload.templateId] || LABELSPRINT_TEMPLATES['5160'];
  const headers = normalizeHeaders_(payload.headers);
  const rows = normalizeRows_(payload.rows);
  const labelContent = String(payload.labelContent || '').trim() || defaultLabelContent_(headers);
  const name = `LabelsPrint ${template.name} ${Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HHmm')}`;
  const doc = DocumentApp.create(name);
  const body = doc.getBody();

  body.clear();
  body.setMarginTop(36);
  body.setMarginRight(14);
  body.setMarginBottom(36);
  body.setMarginLeft(14);

  appendLabels_(body, {
    template,
    headers,
    rows,
    labelContent,
    formatting: payload.formatting || {}
  });

  doc.saveAndClose();

  return {
    id: doc.getId(),
    name,
    url: doc.getUrl()
  };
}

function appendLabels_(body, options) {
  const labels = options.rows.length
    ? options.rows.map((row) => mergeLabel_(options.labelContent, options.headers, row))
    : [mergeLabel_(options.labelContent, options.headers, [])];
  const perSheet = options.template.labelsPerSheet;

  for (let start = 0; start < labels.length; start += perSheet) {
    if (start > 0) {
      body.appendPageBreak();
    }

    const pageLabels = labels.slice(start, start + perSheet);
    const tableData = [];
    let labelIndex = 0;

    for (let rowIndex = 0; rowIndex < options.template.rows; rowIndex += 1) {
      const row = [];
      for (let colIndex = 0; colIndex < options.template.columns; colIndex += 1) {
        row.push(pageLabels[labelIndex] || '');
        labelIndex += 1;
      }
      tableData.push(row);
    }

    const table = body.appendTable(tableData);
    table.setBorderWidth(0);
    styleLabelsTable_(table, options.template, options.formatting);
  }
}

function styleLabelsTable_(table, template, formatting) {
  const alignment = formatting.align || 'left';
  const paragraphAlignment = {
    left: DocumentApp.HorizontalAlignment.LEFT,
    center: DocumentApp.HorizontalAlignment.CENTER,
    right: DocumentApp.HorizontalAlignment.RIGHT
  }[alignment] || DocumentApp.HorizontalAlignment.LEFT;

  for (let rowIndex = 0; rowIndex < table.getNumRows(); rowIndex += 1) {
    const row = table.getRow(rowIndex);
    row.setMinimumHeight(template.labelHeightPt);

    for (let colIndex = 0; colIndex < row.getNumCells(); colIndex += 1) {
      const cell = row.getCell(colIndex);
      cell.setWidth(template.labelWidthPt);
      cell.setPaddingTop(8);
      cell.setPaddingBottom(6);
      cell.setPaddingLeft(12);
      cell.setPaddingRight(12);
      cell.setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);

      const text = cell.editAsText();
      text.setFontFamily('Diatype');
      text.setFontSize(10);
      text.setBold(Boolean(formatting.bold));
      text.setItalic(Boolean(formatting.italic));
      text.setUnderline(Boolean(formatting.underline));

      for (let paragraphIndex = 0; paragraphIndex < cell.getNumChildren(); paragraphIndex += 1) {
        const child = cell.getChild(paragraphIndex);
        if (child.getType() === DocumentApp.ElementType.PARAGRAPH) {
          child.asParagraph().setAlignment(paragraphAlignment);
        }
      }
    }
  }
}

function mergeLabel_(template, headers, row) {
  return String(template).replace(/<<([^<>]+)>>/g, (match, fieldName) => {
    const normalizedField = normalizeFieldName_(fieldName);
    const index = headers.findIndex((header) => normalizeFieldName_(header) === normalizedField);
    return index >= 0 ? String(row[index] || '') : '';
  });
}

function normalizeHeaders_(headers) {
  return Array.isArray(headers)
    ? headers.map((header, index) => String(header || `Column ${index + 1}`).trim())
    : [];
}

function normalizeRows_(rows) {
  return Array.isArray(rows)
    ? rows.filter((row) => Array.isArray(row) && row.some((cell) => String(cell).trim() !== ''))
    : [];
}

function normalizeFieldName_(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function defaultLabelContent_(headers) {
  if (!headers.length) {
    return '<<Name>>\n<<Street Address 1>>\n<<Street Address 2>>';
  }

  return headers.slice(0, 3).map((header) => `<<${header}>>`).join('\n');
}

````

## workspace-extension/Sidebar.html
``html
<!doctype html>
<html>
  <head>
    <base target="_top">
    <style>
      :root {
        color-scheme: light;
        --heritage-blue: #0039A6;
        --azure-blue: #2475E6;
        --heritage-red: #E00034;
        --sky-blue: #C8E5FE;
        --white: #FFFFFF;
        --light-grey: #F7F7F7;
        --medium-grey: #F1F1F1;
        --navy: #000A55;
        --black: #000000;
        --ink: var(--black);
        --muted: #4F4F4F;
        --line: #D7D7D7;
        --soft: var(--light-grey);
        --brand: var(--heritage-blue);
        --brand-dark: var(--navy);
        --success: #006B4F;
        --danger: var(--heritage-red);
        --font-display: "Diatype", Arial, Helvetica, sans-serif;
        --font-body: "Circular", "Diatype", Arial, Helvetica, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: var(--white);
        color: var(--ink);
        font-family: var(--font-body);
        font-size: 14px;
      }

      .app {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr;
      }

      .brand {
        position: sticky;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px;
        border-bottom: 1px solid var(--line);
        background: var(--white);
      }

      .mark {
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        background: var(--brand);
        color: var(--white);
        font-weight: 800;
        letter-spacing: 0;
        font-family: var(--font-display);
      }

      .brand h1 {
        margin: 0;
        color: var(--brand-dark);
        font-family: var(--font-display);
        font-size: 18px;
        line-height: 1.1;
      }

      .brand p {
        margin: 2px 0 0;
        color: var(--muted);
        font-family: var(--font-body);
        font-size: 12px;
      }

      main {
        padding: 18px 16px 22px;
      }

      section {
        margin: 0 0 22px;
      }

      label,
      .section-title {
        display: block;
        margin: 0 0 8px;
        color: var(--black);
        font-family: var(--font-display);
        font-size: 16px;
        font-weight: 700;
      }

      .field {
        width: 100%;
        min-height: 46px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--white);
        color: var(--ink);
        font: inherit;
      }

      select.field,
      input.field {
        padding: 0 12px;
      }

      textarea.field {
        min-height: 152px;
        padding: 14px;
        resize: vertical;
        line-height: 1.45;
      }

      .helper {
        margin: 7px 0 0;
        color: var(--muted);
        font-family: var(--font-body);
        font-size: 12px;
        line-height: 1.35;
      }

      .status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--soft);
        color: var(--muted);
        font-family: var(--font-display);
        font-size: 12px;
        font-weight: 700;
      }

      .link-button {
        border: 0;
        background: transparent;
        color: var(--brand);
        cursor: pointer;
        font: inherit;
        font-weight: 800;
        padding: 0;
      }

      .toolbar {
        display: flex;
        align-items: center;
        gap: 2px;
        border: 1px solid var(--line);
        border-top: 0;
        border-radius: 0 0 6px 6px;
        padding: 8px;
        background: var(--white);
      }

      .tool {
        width: 32px;
        height: 32px;
        border: 1px solid transparent;
        border-radius: 5px;
        background: var(--white);
        color: var(--muted);
        cursor: pointer;
        font-size: 18px;
        font-weight: 800;
        font-family: var(--font-display);
      }

      .tool.active {
        border-color: var(--azure-blue);
        background: var(--sky-blue);
        color: var(--brand);
      }

      .tool svg {
        width: 19px;
        height: 19px;
        pointer-events: none;
      }

      .actions {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .primary,
      .secondary {
        width: 100%;
        min-height: 44px;
        border-radius: 7px;
        cursor: pointer;
        font: inherit;
        font-weight: 800;
      }

      .primary {
        border: 1px solid var(--brand);
        background: var(--brand);
        color: var(--white);
      }

      .secondary {
        border: 1px solid var(--navy);
        background: var(--navy);
        color: var(--white);
      }

      button:disabled,
      select:disabled,
      textarea:disabled {
        cursor: wait;
        opacity: 0.62;
      }

      .result {
        min-height: 18px;
        margin-top: 10px;
        color: var(--muted);
        font-size: 12px;
        line-height: 1.4;
      }

      .result a {
        color: var(--success);
        font-weight: 800;
      }

      .error {
        color: var(--danger);
        font-weight: 700;
      }

      .editor-wrap .field {
        border-radius: 6px 6px 0 0;
      }
    </style>
  </head>
  <body>
    <div class="app">
      <header class="brand">
        <div class="mark" aria-hidden="true">LP</div>
        <div>
          <h1>LabelsPrint.app</h1>
          <p>Google Sheets mail merge labels</p>
        </div>
      </header>

      <main>
        <section>
          <label for="template">Label template</label>
          <select id="template" class="field">
            <option value="5160">Avery 5160 / 8160</option>
          </select>
          <p id="templateHelper" class="helper">30 labels per sheet, ready for address label mail merge.</p>
        </section>

        <section>
          <div class="status">
            <span id="selectionStatus">Loading selected rows...</span>
            <button id="refresh" type="button" class="link-button">Refresh</button>
          </div>
        </section>

        <section>
          <div class="section-title">Format labels</div>
          <label for="mergeField">Add merge fields</label>
          <select id="mergeField" class="field" disabled>
            <option value="">Select a merge field</option>
          </select>
        </section>

        <section class="editor-wrap">
          <label for="labelContent">Label content</label>
          <textarea id="labelContent" class="field" spellcheck="false">&lt;&lt;Name&gt;&gt;
&lt;&lt;Street Address 1&gt;&gt;
&lt;&lt;Street Address 2&gt;&gt;</textarea>
          <div class="toolbar" aria-label="Formatting toolbar">
            <button class="tool" type="button" data-toggle="bold" title="Bold" aria-label="Bold">B</button>
            <button class="tool" type="button" data-toggle="italic" title="Italic" aria-label="Italic"><em>I</em></button>
            <button class="tool" type="button" data-toggle="underline" title="Underline" aria-label="Underline"><u>U</u></button>
            <button class="tool active" type="button" data-align="left" title="Align left" aria-label="Align left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 10h10M4 14h16M4 18h10"/></svg>
            </button>
            <button class="tool" type="button" data-align="center" title="Align center" aria-label="Align center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M7 10h10M4 14h16M7 18h10"/></svg>
            </button>
            <button class="tool" type="button" data-align="right" title="Align right" aria-label="Align right">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M10 10h10M4 14h16M10 18h10"/></svg>
            </button>
          </div>
          <p class="helper">Use tokens like &lt;&lt;Name&gt;&gt; to merge data from the selected sheet range.</p>
        </section>

        <section>
          <div class="actions">
            <button id="createPdf" type="button" class="primary">Create PDF</button>
            <button id="createDoc" type="button" class="secondary">Create Google Doc</button>
          </div>
          <div id="result" class="result" aria-live="polite"></div>
        </section>
      </main>
    </div>

    <script>
      const state = {
        headers: [],
        rows: [],
        formatting: {
          bold: false,
          italic: false,
          underline: false,
          align: 'left'
        },
        busy: false
      };

      const els = {
        template: document.getElementById('template'),
        templateHelper: document.getElementById('templateHelper'),
        status: document.getElementById('selectionStatus'),
        refresh: document.getElementById('refresh'),
        mergeField: document.getElementById('mergeField'),
        labelContent: document.getElementById('labelContent'),
        createPdf: document.getElementById('createPdf'),
        createDoc: document.getElementById('createDoc'),
        result: document.getElementById('result')
      };

      els.refresh.addEventListener('click', loadSelection);
      els.mergeField.addEventListener('change', insertMergeField);
      els.createPdf.addEventListener('click', () => exportLabels('pdf'));
      els.createDoc.addEventListener('click', () => exportLabels('doc'));

      document.querySelectorAll('[data-toggle]').forEach((button) => {
        button.addEventListener('click', () => {
          const key = button.dataset.toggle;
          state.formatting[key] = !state.formatting[key];
          button.classList.toggle('active', state.formatting[key]);
        });
      });

      document.querySelectorAll('[data-align]').forEach((button) => {
        button.addEventListener('click', () => {
          state.formatting.align = button.dataset.align;
          document.querySelectorAll('[data-align]').forEach((item) => {
            item.classList.toggle('active', item === button);
          });
        });
      });

      loadTemplates();
      loadSelection();

      function loadTemplates() {
        google.script.run
          .withSuccessHandler((templates) => {
            if (!Array.isArray(templates) || !templates.length) return;
            els.template.innerHTML = '';
            templates.forEach((template) => {
              const option = document.createElement('option');
              option.value = template.id;
              option.textContent = template.name;
              option.dataset.perSheet = template.labelsPerSheet;
              els.template.appendChild(option);
            });
            updateTemplateHelper();
          })
          .withFailureHandler(() => {
            updateTemplateHelper();
          })
          .getLabelsPrintTemplates();
      }

      els.template.addEventListener('change', updateTemplateHelper);

      function updateTemplateHelper() {
        const selected = els.template.options[els.template.selectedIndex];
        const perSheet = selected ? selected.dataset.perSheet || '30' : '30';
        els.templateHelper.textContent = `${perSheet} labels per sheet, ready for label mail merge.`;
      }

      function loadSelection() {
        setBusy(true, 'Loading selected rows...');
        google.script.run
          .withSuccessHandler((payload) => {
            state.headers = payload.headers || [];
            state.rows = payload.rows || [];
            renderMergeFields();
            els.status.textContent = state.rows.length
              ? `${state.rows.length} selected rows from ${payload.source || 'Google Sheets'}`
              : 'Select rows with a header row, then refresh';
            els.result.textContent = '';
            setBusy(false);
          })
          .withFailureHandler((error) => {
            showError(error && error.message ? error.message : 'Could not read the selected rows.');
            els.status.textContent = 'Selection unavailable';
            setBusy(false);
          })
          .getSelectedMergeData();
      }

      function renderMergeFields() {
        els.mergeField.innerHTML = '<option value="">Select a merge field</option>';
        state.headers.forEach((header) => {
          const option = document.createElement('option');
          option.value = header;
          option.textContent = header;
          els.mergeField.appendChild(option);
        });
        els.mergeField.disabled = !state.headers.length || state.busy;
      }

      function insertMergeField() {
        const field = els.mergeField.value;
        if (!field) return;

        const token = `<<${field}>>`;
        const start = els.labelContent.selectionStart;
        const end = els.labelContent.selectionEnd;
        const current = els.labelContent.value;
        els.labelContent.value = `${current.slice(0, start)}${token}${current.slice(end)}`;
        els.labelContent.focus();
        els.labelContent.setSelectionRange(start + token.length, start + token.length);
        els.mergeField.value = '';
      }

      function exportLabels(type) {
        if (!state.rows.length) {
          showError('Select at least one data row under a header row before exporting.');
          return;
        }

        const payload = {
          templateId: els.template.value,
          headers: state.headers,
          rows: state.rows,
          labelContent: els.labelContent.value,
          formatting: state.formatting
        };

        setBusy(true, type === 'pdf' ? 'Creating PDF...' : 'Creating Google Doc...');
        els.result.textContent = type === 'pdf'
          ? 'Creating your print-ready PDF in Drive...'
          : 'Creating your Google Doc label sheet...';

        const runner = google.script.run
          .withSuccessHandler((result) => {
            const label = result.type === 'pdf' ? 'Open PDF' : 'Open Google Doc';
            els.result.innerHTML = `<a href="${escapeAttribute(result.url)}" target="_blank" rel="noopener">${label}</a> created: ${escapeHtml(result.name)}`;
            setBusy(false);
          })
          .withFailureHandler((error) => {
            showError(error && error.message ? error.message : 'Export failed. Please try again.');
            setBusy(false);
          });

        if (type === 'pdf') {
          runner.createLabelsPdf(payload);
        } else {
          runner.createLabelsGoogleDoc(payload);
        }
      }

      function setBusy(isBusy, message) {
        state.busy = isBusy;
        [els.template, els.refresh, els.mergeField, els.labelContent, els.createPdf, els.createDoc]
          .forEach((element) => {
            element.disabled = isBusy || (element === els.mergeField && !state.headers.length);
          });

        if (message) {
          els.status.textContent = message;
        }
      }

      function showError(message) {
        els.result.innerHTML = `<span class="error">${escapeHtml(message)}</span>`;
      }

      function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (char) => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        })[char]);
      }

      function escapeAttribute(value) {
        return escapeHtml(value).replace(/`/g, '&#96;');
      }
    </script>
  </body>
</html>

````

## workspace-extension/appsscript.json
``json
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/script.container.ui",
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/drive"
  ]
}

````

## workspace-extension/README.md
``markdown
# Google Workspace Extension

This folder contains a Google Sheets sidebar integration for LabelsPrint mail merge labels.

## Setup

1. Create a Google Apps Script project attached to a Sheet.
2. Copy `Code.gs`, `Sidebar.html`, and `appsscript.json` into the Apps Script project.
3. Reload the Sheet and open `LabelsPrint > Open mail merge labels`.
4. Select a range where the first row contains column headers.
5. Choose the Avery 5160 template, insert merge fields, then create either a PDF or Google Doc for printing.

The sidebar reads only the active selected range using the `spreadsheets.currentonly` scope. It requests Google Docs and Drive access only so it can create the print-ready Google Doc or PDF output in the user's Drive. No API keys are required, and no credentials are embedded in the web app or sidebar.

````
## Latest Update - Built-in Icon Library

Changed files:

- `src/main.js`
  - Added a built-in icon library for the Optional Logo section.
  - Included curated Popular, Holiday, and Events icon groups.
  - Converts selected emoji icons into transparent PNG data URLs so preview, PDF, DOCX, and print use the same logo pipeline.
  - Preserves custom logo upload behavior.
  - Adds selected-icon feedback, undo/redo support, project export/import metadata, and local preference persistence for built-in icon choices.

- `src/index.css`
  - Added flat, brand-aligned icon library styling.
  - Uses borders and accessible focus states without adding shadows.

Verification:

- `node --check src/main.js` passed.
- Production build could not be completed because Vite dependencies were not installed in this workspace. `npm install` was attempted with a project-local cache, but the install timed out before Vite became available.
