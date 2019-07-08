import React, { Component, createContext } from 'react';
import instance from './config/axios';

const Context = createContext();


export class Provider extends Component {
    state = {
        recipes: [],
        heading: 'Featured Recipes'
    }
    componentDidMount(){
       instance.get('recipe')
       .then(res => {
           this.setState({recipes: res.data.data})
        })
       .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;