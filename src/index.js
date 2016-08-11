import React, {Component} from 'react';


export default class sampleComponent extends Component{
    render(){
        return (
            <div>
               New Component on Master Feature Update{this.props && this.props.name}
            </div>
        )
    }
}


