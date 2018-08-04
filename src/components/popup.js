import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm(`Are you sure you don't want to see ${props.artist}?`)
  }

  let preventSubmit = (click) => {
    click.preventDefault();
  };

  return(
    <div className = "main">
	    <div onClick={handleExit}>
      <button id = "x">X</button>
	    </div>
	    <h1>You have won tickets to see {props.artist}!</h1>
	     <h3>Please enter your email so we can send you the tickets</h3>

	    <div onClick = {preventSubmit}>
  	    <form>
  	     <label htmlFor="email">Email</label>
  	     <input type="text" id="email" name="email"></input>
  	     <input type = 'submit'></input>
  	    </form>
	    </div>
	  </div>
	);
};

export default Popup;
