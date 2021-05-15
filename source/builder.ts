
// import minimist from "https://deno.land/x/deno_minimist@v1.0.2/mod.ts";
// import { BufReader } from "https://deno.land/std/io/bufio.ts";

import { HtmlHead } from "./source/html.ts";

class Builder {
	async run(): Promise<void> {
        await Deno.writeTextFile("./public/index.html", `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>OneJoker</title>
    <link rel="canonical" href="https://www.onejoker.org" />

    <link href='https://fonts.googleapis.com/css?family=Petrona' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/stylesheets/min.css">
    <link rel="icon" type="image/x-icon" href="/images/oj-icon.ico">

    <script defer src="/__/firebase/8.4.3/firebase-app.js"></script>
    <script defer src="/__/firebase/init.js?useEmulator=false"></script>
  </head>
  <body>
    <div id="message">
      <h1><img src="/images/ojlogo-280.png"></h1>
      <p>Software for poker and other card games.</p>
    </div>
  </body>
</html>
`);
	}
}

(new Builder()).run()
	.then(() => {
		console.info("Done.");
	}).catch((e) => {
		console.error(e);
	});

