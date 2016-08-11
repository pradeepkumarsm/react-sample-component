import React, {Component} from 'react';


export default class sampleComponent extends Component{
    render(){
        return (
            <div>
               New Component by pradeep {this.props && this.props.name}
            </div>
        )
    }
}


