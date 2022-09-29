import { Votes } from './votes';

export class Artist {
    constructor(
        public userID: string,
        public stageName: string,
        public artistBio : string,
        public votes : Array<Votes>
    ) {}
}