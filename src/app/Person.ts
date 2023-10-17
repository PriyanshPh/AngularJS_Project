import { movies } from "./movies";

export class Person{
    id(id: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public email:string,
        public mobile:string,
        public gender:string,
        public age:number,
        public name:string,
        public movieName:movies['movieName'],
        public releaseDate:movies['releaseDate'],
        public genres:movies['genres'],
        public runtime_minutes: movies['runtime_minutes']
    ){}
}