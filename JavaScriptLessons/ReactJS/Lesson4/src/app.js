const root = document.querySelector("#root");

let number = 0;

const oneMinusItem = () =>{
  if(number > 0){
    number --;
    renderApp();
  }
}

const onePlusItem = () =>{
    number ++;
    renderApp();
}


var renderApp = () =>{

var template = 
(<div>
   <h1>Number:{number} </h1> 
   <button style={{
       "background-color": "red",
       "color": "white",
       "border":"none",
       "font-size":"20px",
       "margin-right":"10px"
   }}  onClick= {oneMinusItem} >-1</button>
   <button style={{
       "background-color": "green",
       "color": "white",
       "border":"none",
       "font-size":"20px"
   }} onClick= {onePlusItem} >+1</button>
</div>);
    
ReactDOM.render(template, root);

}

// renderApp();


var counter = () =>{
    var infoTime = (
        <div>
            <h2>Time is:{new Date().toLocaleTimeString()}</h2>
        </div>
    );
ReactDOM.render(infoTime, root);

}

setInterval(counter, 1000);


