export class Quote {
    public showDescription: boolean;

    constructor(public id: number, public quoted: string, public author: string, public person: string, public quoteDate: Date){
        this.showDescription = false;
    }

}
