export class Api {
    public category: string;
    public name: string;
    public url: string;
    public key: string;

    constructor(category: string, name: string, url: string, key: string) {
        this.category = category;
        this.name = name;
        this.url = url;
        this.key = key;
    }
}