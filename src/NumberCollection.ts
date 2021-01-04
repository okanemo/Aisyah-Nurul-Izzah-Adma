import OrderBy from './OrderBy';

class NumberCollection extends OrderBy {
  public collection: number[];
  public length: number;

  constructor(data: number[]) {
    super();
    this.collection = data;
    this.length = data.length;
  }

  ascending(): void {
    this.collection = this.collection.sort((a, b) => a - b);
  }

  descending(): void {
    this.collection = this.collection.sort((a, b) => b - a);
  }

}

export default NumberCollection;
