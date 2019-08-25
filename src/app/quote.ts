export class Quote {
    public showDescription: boolean;

    constructor(public id: number, public quoted: string, public author: string, public person: string,){
        this.showDescription = false;
    }

}
