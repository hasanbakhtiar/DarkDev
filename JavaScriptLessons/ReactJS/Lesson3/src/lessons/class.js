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

class infoClass {
  constructor(){
      console.log("constructor worikng");
  }

  elosetinfo(){
      console.log("eloset isliyir obshnoyda");
  }

  mehmmed(){
      console.log("mehmmed");
  }
}

const infoData = new infoClass();

console.log(infoData.mehmmed);
console.log(infoData.elosetinfo);