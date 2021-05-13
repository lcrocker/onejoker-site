import lume from "https://deno.land/x/lume@v0.19.0/mod.js";

const site = lume({
    cwd: Deno.cwd(),
    src: "source",
    dest: "public",
    location: new URL("https://www.onejoker.org"),
    dev: true,
    prettyUrls: false,
    slugifyUrls: false,
    server: {
        port: 3000,
        page404: "/404.html",
    }
});

site.copy("images");
site.copy("stylesheets");
site.copy("favicon.ico");

export default site;
