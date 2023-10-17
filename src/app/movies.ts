export class movies{
    id(id: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public movieName:string,
        public releaseDate:string,
        public genres:string,
        public runtime_minutes:number
    ){}
}