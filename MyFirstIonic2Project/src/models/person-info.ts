/**
 * PersonInfo
 */
export class PersonInfo {
    public name: string;
    public age: number;
    public city: string;
    public score: number;
    constructor(name: string, age: number, city: string, score: number = 60) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.score = score;
    }
}