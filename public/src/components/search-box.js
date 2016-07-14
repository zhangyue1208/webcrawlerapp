import React, { Component} from 'react';
import $ from 'jquery';
//var $ = require ('jquery')

class SearchBox extends Component{
  constructor(props) {
  	super(props);
  	this.state = {name:'', cate:''};
  }

  render (){
  	var total = this.state.name + " " + this.state.cate;

    return (
    	<form id="form" name = "form" method = 'get'>
    	    <div>
    	    	<input type="text" name="name" value={this.state.name} 
    	                                       onChange={this.onInputChange.bind(this, 'name')} />
    	    </div>
          <div>
    	      <input type="text" name="category" value={this.state.cate} 
    	                                     onChange={this.onInputChange.bind(this, 'cate')} />
          </div>
    	    <input type="submit" value = "Submit" onClick={this.onClickEvent.bind(this)} />
    	    {total}
    	</form>
    );
  }

  onInputChange(attr, e) {
    var change = {};
    change[attr] = e.target.value;
    this.setState(change);
  }

  onClickEvent(event) {
  	event.preventDefault();
    var senddata = $("#form").serialize();
    console.log(senddata);

    $.ajax({  
      url:'/search',  
      data: senddata,  
      type:'GET',  
      dataType:'json',  
      success: function(data, textStatus, jqXHR){
      	console.log(data)
      }
    }); 
  }
}

export default SearchBox;