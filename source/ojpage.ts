
import { Head } from "./html.ts";

export interface JsonMap { [x: string]: string | number | boolean | null | JsonArray | JsonMap }
export type JsonArray = Array<string | number | boolean | null | JsonArray | JsonMap>;
export type Jsonable = JsonMap | JsonArray | string | number | boolean;

const BASE = "https://www.onejoker.org/";

export type PageData = {
    title: string;
    url: string;
    [x: string]: Jsonable;
}

export class OJPageBuilder {
    public data: PageData;

	constructor(data: PageData) {
		this.data = data;
    }

	head(): string {
        const head = new Head(this.data.title, BASE);

        head.addMeta({ charset: "utf-8" });
        head.addMeta({ name: "viewport", content: "width=device-width, initial-scale=1" });

        head.addStylesheet("/stylesheets/min.css");
        head.addStylesheet("https://fonts.googleapis.com/css?family=Petrona");
        head.addLink({ rel: "canonical", href: `${BASE}${this.data.url}` });
        head.setIcon("/images/oj-icon.ico");

        head.addScript("", { src: "/__/firebase/8.4.3/firebase-app.js" });
        head.addScript("", { src: "/__/firebase/init.js?useEmulator=true" });

        return head.toString();
	}

	body(): string {
		return `<div id="header">
<h1><img src="/images/ojlogo-280.png"></h1>
</div>
<div id="content">${this.content()}</div>
<div id="footer">
</div>`;
	}

	content(): string {
		return `<p>PAGE CONTENT</p>`;
	}

	html(): string {
		return `<!DOCTYPE html>
<html>
<head>${this.head()}</head>
<body>${this.body()}</body>
</html>
`;
	}

	build(dest: string): Promise<void> {
        return Deno.writeTextFile(`${dest}/${this.data.url}`, this.html());
    }
}
