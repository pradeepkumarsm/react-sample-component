import React, {Component} from 'react';


export default class sampleComponent extends Component{
    render(){
        return (
            <div>
               New Component on Master Feature Update{this.props && this.props.name}

                master change
                New master change
                master changes again
            </div>
        )
    }
}


