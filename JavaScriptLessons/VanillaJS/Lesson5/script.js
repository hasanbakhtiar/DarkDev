// Döngülər / Loops



// var infoNumb = 100;

// while(infoNumb >= 1 ){ //true
//     document.write(infoNumb + "<br>");
//     infoNumb--;
// }



// while(say <= 60 && say < 110){

// if(say < 50){
//         document.write(say  + "<br>"); //false
//         say++;

// }else if(say >= 50){
//     document.write(say  +"<br>"); //true
//     say++;
// }else{
//        document.write(null) ;
// }

// }



// var count = 1;
// do{
//     document.write(count + "<br>");
//     count++;
// }while(count < 100);



// 1.2.for 
// 1-ci Parametr dəyişkənin daxil edilməsi
// 2-ci Parametr şərtin daxil edilməsi
// 3-cü Parametr artırmanın və azaltmanın daxil edilməsi

//     for(1-ci Parametr, 2-ci Parametr, 3-cü Parametr){
//       .......
//     }
// for(var say = 1; say <= 10; say++){
//         document.write(say + "<br>");
// }


// for(let count = 1; count < 100;  count++){
//   document.write(count+"<br>")
// }




// 1.3.for in
// var misal = ["JS" , "PHP", "C"];
// var netice;
// for(netice in misal){
//   document.write(misal[netice]);
// }
// var misal = ["JS", " PHP", " C"];

//  var netice;
//  for(netice in misal){
//          document.write(misal[netice]);
//  }

// var infoArray = ["Python ", "GoLang ", "Java "];

// for(result in infoArray){
//     document.write(infoArray[result]);
// }


// 1.4. break və continue ifadəsi

// for (var index = 1; index < 10; index++) {

//         if(index == 5){
//                 break;
//         }
//         document.write(index + "<br>");
       
        
// }
// var i = 1;
// while(i<10){
//         if (i == 5) {
//                 break;
                
//         }
//         document.write(i+ "<br>");
//         i++;
// }


// for (var index = 1; index <= 10; index++) {
        

//         if (index==4) {
//                 continue;
//         }

//         document.write(index + "<br>");
        
// }
// var i = 1;

// while (i<10) {
//         if (i == 4) {
//                 i++;
//                 continue;
//         }
//         document.write(i + "<br>");
//         i++;
       
      
// }