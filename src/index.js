import React, {Component} from 'react';


export default class sampleComponent extends Component{
    render(){
        return (
            <div>
               New Component {this.props && this.props.name}
            </div>
        )
    }
}


