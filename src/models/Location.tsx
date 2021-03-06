import { CategoryType } from "../constants/CategoryTypeEnum";

export class Location {
    constructor(
        public id: number,
        public name: string,
        public address: string,
        public coordinates: string,
        public category: CategoryType
    ){}
}
