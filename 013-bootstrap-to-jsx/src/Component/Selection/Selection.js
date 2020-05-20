import React, { Component } from 'react';


class Selection extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className= {this.props.vitri1}>
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={this.props.img} alt="" />
                    </div>
                    </div>
                    <div className= {this.props.vitri2}>
                    <div className="p-5">
                        <h2 className="display-4">{this.props.title}</h2>
                        <p>{this.props.content}</p>
                    </div>
                    </div>
                </div>
                </div>
          </section>
        );
    }
}

export default Selection;