import React, { Component } from "react";
import "./Dialog.css";
export class Dialog extends Component {
    constructor(props) {
        super(props);
        this.$dialog =  React.createRef();
        this.$header = React.createRef();  
    }

    componentDidMount(){
        this.$dialog =  this.$dialog.current;
        this.$header = this.$header.current;
        console.log(this.$dialog,this.$header);
    }

    render(){
        return <div ref={this.$dialog} className="win98">
        <div className="resizable window">
        <div id="header" ref={this.$header} className="header">
            app
      <div className="buttons">
                <button>_</button>
                <button>◽</button>
                <button>X</button>
            </div>
        </div>
        <div className="content">
            {this.props.children}
        </div>
    </div>
    </div>
    }

}