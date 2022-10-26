import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [block, updatedBlock] = useState([]);


    /* Use the map() function to render multiple Blocks! */
    const posts = block.map(((block) => <Block color = {block}></Block>)); // TODO: edit this variable

    const newBlock = (color) => {
        updatedBlock(posts =>[<Block color = {color}></Block>, block])
    }
    return (
        <div>
            <Menu newBlock = {newBlock}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;