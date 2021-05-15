
export class HtmlAttribute {
    public key: string;
    public value: string;

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }

    toString(): string {
        if (this.key === this.value) return `${this.key}`;

        temp = this.value.replaceAll("&", "&amp;");
        temp = temp.replaceAll('"', "&quot;");
        return `${this.key}="${temp}"`;
    }
}

export class HtmlTag {
    public name: string;
    public attributes: HtmlAttribute[] = [];
    public content: string;

    constructor(name: string) {
        this.name = name;
    }

    toString(): string {
    }
}

export class HtmlHead {
    public title: string;

    constructor(title: string) {
        this.title = title;
    }
}

