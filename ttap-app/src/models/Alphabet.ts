export class Alphabet {
  name: string;
  type: string;
  pronounce: string;

  consonants: Array<Array<{alphabet: Alphabet}>>;

  constructor(public in_name:string, public in_type:string, public in_pronounce:string){
    this.name = in_name;
    this.type = in_type;
    this.pronounce = in_pronounce;
  }
}
