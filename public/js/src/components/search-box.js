import React, { Component} from 'react'
var $ = require ('jquery')

class SearchBox extends Component{
  constructor(props) {
  	super(props);
  	this.state = {name:'', cate:''};
  }

  render (){
  	var total = this.state.name + " " + this.state.cate;
    return (
    	<form id="form" name = "form" method = 'get'>
    	  <div className="search-fields">
    	    <ul><input type="text" id="name" value={this.state.name} 
    	                                     onChange={this.onInputChange.bind(this, 'name')} /></ul>
    	    <ul><input type="text" id="category" value={this.state.cate} 
    	                                     onChange={this.onInputChange.bind(this, 'cate')} /></ul>
    	    <ul><input type="submit" id="sub" value = "Submit" onClick={this.onClickEvent.bind(this)} /></ul>
    	    {total}
    	  </div>
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
  	var senddata = "dq"
    //senddata = $("#form").serialize();
    console.log(senddata);
    console.log("################");
    $.ajax({  
      url:'/search',  
      data: senddata,  
      method:'GET',  
      dataType:'json',  
      success: function(data, textStatus, jqXHR){
      	console.log("sad")
      }
    }); 
  }
}

export default SearchBox;