export class Votes{
    constructor(
        public id: number,
        public userId: string,
        public artistName: string,
        public state: string,
        public city: string,
    ){}
}