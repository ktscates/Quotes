export class Quote {
    public showDescription: boolean;

    constructor(public id: number, public quote: string, public author: string, public person: string){
        this.showDescription = false;
    }

}
