import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/style.scss';

import { createStore } from 'redux';

const initalState = {
    count: 0
}

const store = createStore((state = initalState, action) => {
    switch (action.type) {
        case "INCRIMENT":
            return {
                count: state.count + 1
            }

        case "DECREMENT":
            return {
                count: state.count - 1
            }

        case "RESET":
            return {
                count: 0
            }

            default:
              return state

    }
})

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({

    type: "INCRIMENT"
})

store.dispatch({

    type: "DECREMENT"
})

store.dispatch({

    type: "INCRIMENT"
})

store.dispatch({

    type: "INCRIMENT"
})

store.dispatch({

    type: "INCRIMENT"
})

store.dispatch({

    type: "INCRIMENT"
})

store.dispatch({

    type: "RESET"
})



const temp = <div>
    <button className="btn btn-success">Hi</button>
</div>

ReactDOM.render(temp, document.getElementById('root'));