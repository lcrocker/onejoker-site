
type Attributes = Record<string, string>;

class Node {
    public children: Node[] = [];
    public attributes: Attributes = {};
}

export class Text extends Node {
    public content = "";

    constructor(content?: string) {
        super();
        if (undefined !== content) this.content = content;
    }

    toString(): string { return this.content; }
}

export class Element extends Node {
    public name: string;
    public isVoid = false;

    constructor(name: string, v?: boolean, atts?: Attributes) {
        super();
        this.name = name;
        if (undefined !== v) this.isVoid = v;
        if (undefined !== atts) this.attributes = atts;
    }

    toString(): string {
        let rep = `<${this.name}`;
        for (const [ k, v ] of Object.entries(this.attributes)) {
            if (k === v) rep += ` ${k}`;
            else {
                let temp = v.replaceAll("&", "&amp;");
                temp = temp.replaceAll('"', "&quot;");
                rep += ` ${k}="${temp}"`;
            }
        }
        rep += ">";
        if (this.isVoid) return `${rep}\n`;

        for (const c in this.children) {
            rep += c.toString();
        }
        return `${rep}</${this.name}>\n`
    }
}

export class Style extends Element {
    constructor(content: string, atts?: Attributes) {
        super("style", false, atts);
        this.children.push(new Text(content));
    }
}

export class Link extends Element {
    constructor(atts?: Attributes) {
        super("link", true, atts);
    }
}

export class Meta extends Element {
    constructor(atts?: Attributes) {
        super("meta", true, atts);
    }
}

export class Script extends Element {
    constructor(content: string, atts?: Attributes) {
        super("script", false, atts);
        if ("" !== content) this.children.push(new Text(content));
    }
}

export class Base extends Element {
    constructor(atts?: Attributes) {
        super("base", true, atts);
    }
}

export class Head extends Element {
    public title: string;
    public base: string;

    constructor(title: string, base: string) {
        super("head");
        this.title = title;
        this.base = base;
    }

    addLink(atts: Attributes): void {
        this.children.push(new Link(atts));
    }

    addStylesheet(url: string) {
        this.addLink({
            rel: "stylesheet",
            type: "text/css",
            href: url,
        })
    }

    setIcon(url: string) {
        for (const c of this.children) {
            if (! (c instanceof Element)) continue;
            if ("link" !== c.name) continue;
            if ("rel" in c.attributes && "icon" == c.attributes.rel) {
                throw new Error("attempt to set more than one icon");
            }
        }
        this.addLink({
            rel: "icon",
            type: "image/x-icon",
            href: url,
        });
    }

    addMeta(atts: Attributes): void {
        this.children.push(new Meta(atts));
    }

    addScript(content: string, atts?: Attributes): void {
        this.children.push(new Script(content, atts));
    }

    toString(): string {
        let rep = `<title>${this.title}</title>\n<base href="${this.base}">\n`;
        for (const c of this.children) { rep += c.toString(); }
        return rep;
    }
}
