import OrderBy from './OrderBy';

class CharacterCollection extends OrderBy {
  public collection: string;

  constructor(data: string) {
    super();
    this.collection = data;
  }

  ascending(): void{
    this.collection = this.collection.split('').sort().join('');
  }

  descending(): void{
    this.collection = this.collection.split('').sort((a, b) => a > b ? -1 : 1).join('');
  } 

}

export default CharacterCollection;
