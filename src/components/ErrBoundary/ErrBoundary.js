import React, { Component } from "react";

class ErrBoundary extends Component{
    state = {
        isErr: false,
        errMsg: ''
    }

    componentErrCatch = (err, info) => {
        this.setState({ isErr: true, errMsg: "Something's wrong..." });
    }

    render(){
        if(this.state.isErr)
            return <h1>{this.state.errMsg}</h1>;
        else
            return this.props.children;
    }
}

export default ErrBoundary;