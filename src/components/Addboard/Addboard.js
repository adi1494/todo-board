import React, { useState } from 'react';
// import { Plus, X } from 'react-feather';

import './Addboard.css'

const Addboard = (props) => {
  const [showAddboard, setShowAddboard] = useState(false);
  const [inputText, setinputText] = useState('');
  return (
    <div className={`addboard ${showAddboard?'fullsize':''}`}>
      {
        showAddboard ?
          <form 
            className='addboard-edit'
            onSubmit={(event) => {
              event.preventDefault();
              if (props.onSubmit) {
                props.onSubmit(inputText);
              }
              setinputText('');
              setShowAddboard(false);
            }}
          >
            <input
              autoFocus
              type="text"
              value={inputText}
              onChange={(e) => setinputText(e.target.value)}
              placeholder={props.placeholder || 'Enter Board Title'}
            />
            <div className='addboard-footer'>
              <button 
                className='button-13'
                type='submit'>
                  {/* <Plus /> */}
                  Add
              </button>
              <button 
                className='button-13'
                onClick={() => setShowAddboard(false)}>
                  {/* <X /> */}
                  Cancel
              </button>
            </div>
          </form>
          :
          <button 
            onClick={() => setShowAddboard(true)}>
            {/* <Plus/> */}
            Add Board
          </button>
      }
    </div>
  )
};

export default Addboard;
