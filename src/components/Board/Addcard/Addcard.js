import React, { useState } from 'react';
import { VscAdd, VscChromeClose } from 'react-icons/vsc';

import './Addcard.css'

const Addcard = (props) => {
  const [showAddcardEdit, setShowAddcardEdit] = useState(false);
  const [inputText, setInputText] = useState('');
  return (
    <div className='addcard'>
      {
        showAddcardEdit ?
          <form
            className='addcard-edit'
            onSubmit={(e) => {
              e.preventDefault();
              if (props.addCard) {
                props.addCard(inputText);
              }
              setInputText('')
              setShowAddcardEdit(false);
            }}
          >
            <input
              autoFocus
              type="text"
              placeholder='Enter Card Title'
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <div className="addcard-edit-footer">
              <button
                type='submit'
                className='icon-btn'
              >
                <VscAdd />
              </button>
              <button
                className='icon-btn'
                onClick={() => {
                  setShowAddcardEdit(false)
                }}
              >
                <VscChromeClose />
              </button>
            </div>
          </form>
          :
          <div className='addcard-plus'>
            <button
              onClick={() => {
                setShowAddcardEdit(true);
              }}
              className='icon-btn'
            >
              <VscAdd />
            </button>
          </div>
      }
    </div>
  );
};

export default Addcard;
