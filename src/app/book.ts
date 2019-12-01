export class Book {
    id: number;
    title: string;
    insertYmd: string;
    updateYmd: string;

    constructor( id:number, title:string ){
        this.id = id;
        this.title = title;
    }
}
