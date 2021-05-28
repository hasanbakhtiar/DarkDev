const root = document.querySelector("#root");


const myData = {
    name: '1984',
    author:'George Orwell',
    page:200
}


class Booklist extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <List />
            </div>
        );
    }
}


class List extends React.Component{
    render(){
        return(
          <ul>
                <Item />
          </ul>
        );
    }
}


class Item extends React.Component{
    render(){
        return(
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vero?</li>
        );
    }
}


class Main extends React.Component{
    render(){
        return(
         <div>
             <Booklist title={myData.author}/>
         </div>
        );
    }
}


ReactDOM.render(<Main />, root);