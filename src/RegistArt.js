import React from 'react';
import { Link } from 'react-router-dom';

export default class RegistArt extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      techInfo:"",
      description:"",
      keyWords:[],
      price:0,
      url:""
    }
  }

  render(){
    return (
      <div className="container-fluid">
        <center><h2>Register Art Piece</h2></center>
        <div className="row">
          <div className="col-md-6 col-md-push-3">
            <div className="well">
              <div className="form-group">
                <label className="control-label col-md-1">Name</label>
                <div className="col-md-11">
                  <input className="form-control"onChange={this.changeArtName} value={this.state.name}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-3">Technical information</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-3">Description</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>


            </div>

          </div>

        </div>

      </div>
    )
  }
}
