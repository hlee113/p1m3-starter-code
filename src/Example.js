import React from "react"

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Avocados are a fruit, not a vegetable",
        };
    }
    changeText = () => {
        this.setState({
            text: " Trypophobia is the fear of closely-packed holes.",
        });
    };
    render(){
        return <div>
            <h1>{this.state.text}</h1>
            <button onClick= {this.changeText}>Click!!</button>
        </div>
    }
}