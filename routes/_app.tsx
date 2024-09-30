import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OneJoker Project</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&display=swap" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="icon" href="/img/oj-icon-32.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/img/oj-icon-path-min.svg" type="image/svg+xml" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
