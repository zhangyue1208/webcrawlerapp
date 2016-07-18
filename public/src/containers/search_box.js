import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApp } from '../actions/index';
import $ from 'jquery';

export default class SearchBox extends Component{
  constructor(props) {
  	super(props);

  	this.state = {name:'', cate:'', apps:props.apps};
  }
  

  onInputChange(attr, e) {
    var change = {};
    change[attr] = e.target.value;
    this.setState(change);
  }
  

  onClickEvent(event) {
    event.preventDefault();
    var senddata = $("#form").serialize();
    this.props.fetchApp(senddata);

    $.ajax({  
      url:'/search',  
      data: senddata,  
      type:'GET',  
      dataType:'json',  
      success: function(data, textStatus, jqXHR){
        this.setState({apps:data});
      }.bind(this)
    }); 
  }


  render (){
    return (
    	<form id="form" name = "form" method = 'get'>
    	    <div>
    	    	<input 
              type="text" 
              name="name"
              value={this.state.name} 
    	        onChange={this.onInputChange.bind(this, 'name')} />
    	    </div>
          <div>
    	      <input type="text" name="category" value={this.state.cate} 
    	                                     onChange={this.onInputChange.bind(this, 'cate')} />
          </div>
    	    <input className="btn btn-secondary" type="submit" value = "Submit" 
                                           onClick={this.onClickEvent.bind(this)} />
    	</form>
    );
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({ fetchApp }, dispatch);
}

export default connect(null, mapDispatchProps)(SearchBox);

