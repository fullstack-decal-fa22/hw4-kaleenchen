import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <Color color = "yellow" handleClick ={props.newBlock}></Color>
        <Color color = "pink" handleClick ={props.newBlock}></Color>
        <Color color = "blue" handleClick ={props.newBlock}></Color>
        <Color color = "purple" handleClick ={props.newBlock}></Color>
          
      </div>
    );
}

export default Menu;