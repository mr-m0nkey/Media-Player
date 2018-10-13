import React, {Component, Fragment} from 'react';
import './list.css';
export default class List extends Component{  
    constructor(){
    super();
    this.state ={
        id:""
    }
  }

  updateId(e){
    this.props.updateIndex(e.target.attributes.getNamedItem('vidIndex').value);
    e.preventDefaults;
  }
  render(){
    return(
      <Fragment>
          <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Songs</a>
        </nav>
        <div className="list_container">
            <div className="list_child list">
                <ul class="list-group">
                    {
                        this.props.videos.map((item,index)=>{
                            return(
                                <li className="list-group-item">
                                    <a href="#" 
                                    vidid={item.snippet.resourceId.videoId}
                                    vidIndex={index}
                                    onClick={this.updateId.bind(this)}
                                    >{(index + 1)+")" + " " + item.snippet.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </Fragment>
    )
}
}