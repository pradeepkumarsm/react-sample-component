import React,{Component} from 'react';
import Src from './src';
import ReactDOM from 'react-dom';

class SampleComponent extends Component{
    render(){
        return (
            <div>
                <Src />
                Sample Component By Pradeep- Feature branch - Rebase Branch
            </div>
        )
    }
}



ReactDOM.render(<SampleComponent/>, document.getElementById("content"));

