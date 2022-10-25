import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <Color color = "yellow" handleClick ={props.handle}></Color>
        <Color color = "pink" handleClick ={props.handle}></Color>
        <Color color = "blue" handleClick ={props.handle}></Color>
        <Color color = "purple" handleClick ={props.handle}></Color>
          
      </div>
    );
}

export default Menu;