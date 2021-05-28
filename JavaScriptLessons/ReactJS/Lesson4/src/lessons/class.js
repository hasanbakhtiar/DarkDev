// ES5
// function infoFunc() {
//     document.write("hello");
// }

// const infoData = new infoFunc();

// console.log(infoData);

// ES6
// const infoFunc = () => {
//     document.write("hello");
// }

// const infoData = new infoFunc();

// console.log(infoData);

// class infoClass {
//   constructor(){
//       console.log("constructor worikng");
//   }

//   elosetinfo(){
//       console.log("eloset isliyir obshnoyda");
//   }

//   mehmmed(){
//       console.log("mehmmed");
//   }
// }

// const infoData = new infoClass();

// console.log(infoData.mehmmed);
// console.log(infoData.elosetinfo);



class infoClass{
    constructor(name,year){
        this.addName = name; 
        this.addYear = year; 
        
    }

    calculateAge(){
        return `I'm ${new Date().getFullYear() - this.addYear}`;
    }

    sayHi(){
            return `My name is ${this.addName}`;
    }
}


class infoBase extends infoClass{

    constructor(name, year, subject){
        super(name,year);
        this.addSubject = subject; 

            
    }
  learn(){
      return `I learn ${this.addSubject}`;
  }
}
const infoData = new  infoBase("Aygun", 2000, "Math");
console.log(infoData.sayHi());
console.log(infoData.calculateAge());
console.log(infoData.learn());