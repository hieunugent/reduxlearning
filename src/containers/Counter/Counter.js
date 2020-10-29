import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from  "../../store/action";
class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub5Counter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}> Store Result</button>
                <ul>
                {this.props.storeResults.map(strResult => (

                <li onClick={()=> this.props.onDeleteResult(strResult.id)} key={strResult.id}> {strResult.value}</li>

                ))}
                   
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.results
    };
}

const mapDispatchToProps= dispatch => {
    return {
      onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
      onAdd5Counter: () => dispatch({ type: actionTypes.ADD5, value: 5 }),
      onSub5Counter: () => dispatch({ type: actionTypes.SUB5, value: 5 }),
      onStoreResult: () => dispatch({ type: actionTypes.STORERESULT }),
      onDeleteResult: (id) =>
        dispatch({ type: actionTypes.DELETERESULT, resultEID: id }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);