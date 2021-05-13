
export const title = "OneJoker";
export const pageContent =
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
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

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        try {
          let app = firebase.app();
        } catch (e) {
          console.error(e);
        }
      });
    </script>
  </body>
</html>
`;

class Builder {
	data: any;
	filters: any;

	constructor(data: any, filters: any) {
		this.data = data;
		this.filters = filters;
	}

    async * pages() {
		yield {
			url: "index.html",
			content: this.data.pageContent,
		};
	}
}

export default async function * render(data: any, filters: any) {
	for await (const page of (new Builder(data, filters)).pages()) {
		yield page;
	}
}
