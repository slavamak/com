import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import site from "../data/site.json" with { type: "json" };

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{site.title}</title>
        <link rel="stylesheet" href={asset("/styles.css")} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://mastodon.social/@slavamak" />
      </head>

      <body>
        <Component />
      </body>
    </html>
  );
}
