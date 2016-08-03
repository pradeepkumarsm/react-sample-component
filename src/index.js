import React, {Component} from 'react';


export default class sampleComponent extends Component{
    render(){
        return (
            <div>
                Sample Component {this.props && this.props.name}
            </div>
        )
    }
}


