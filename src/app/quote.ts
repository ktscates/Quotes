export class Quote {
    public showDescription: boolean;
    public likes: number;
    public unlikes: number;

    constructor(public id: number, public quoted: string, public author: string, public person: string, public quoteDate: Date){
        this.showDescription = false;
        this.likes=0;
        this.unlikes=0;
    }

}
