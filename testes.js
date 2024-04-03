class Tes {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}

class Anak1 extends Tes{
  constructor(id, name, address, age){
    super(id, name, address)
    this.age = age;
  }
}