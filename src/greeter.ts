interface Person {
    name: string;
}

class Men implements Person {
    public name:string;
    constructor(name:string) {
      this.name = 'Mr ' + name;
    }
}


function greeter(person: string) {
    let user = new Men("Jack");
    return "Hello, " + user.name;
}

export default greeter;