
// import minimist from "https://deno.land/x/deno_minimist@v1.0.2/mod.ts";
// import { BufReader } from "https://deno.land/std/io/bufio.ts";

import { OJPageBuilder } from "./ojpage.ts";

class Builder extends OJPageBuilder {
    content(): string {
        return `<p>Software for poker and other card games.</p>\n`;
    }
}

(new Builder({ title: "OneJoker", url: "index.html" })).build("./public")
	.then(() => {
		console.info("Done.");
	}).catch((e) => {
		console.error(e);
	});
