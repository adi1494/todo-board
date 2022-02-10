import React, { useState } from 'react';
import { VscCheck, VscChromeClose, VscEdit, VscTrash } from 'react-icons/vsc';

import './Subtask.css'

const Subtask = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState('')
  const [inputDesc, setInputDesc] = useState('')
  return (
    <div >
      {
        showEdit ?
          <div className='subtask'>
            <form
              className='subtask-heading'
              onSubmit={(e) => {
                e.preventDefault()
                // call function to add changes to the boards data
                props.updateSubtask(props.boardId, props.cardId, props.subtask?.id, inputTitle, inputDesc);
                setInputTitle('')
                setInputDesc('')
                setShowEdit(false)
              }}
            >
              <input
                autoFocus
                type="text"
                placeholder='Enter Subtask Title'
                value={inputTitle}
                onChange={(e) => {
                  setInputTitle(e.target.value);
                }}
              />
              <div className="subtask-heading-buttons">
                <button
                  className='icon-btn subtask-btn'
                  type='submit'
                  title='Confirm'
                >
                  <VscCheck />
                </button>
                <button
                  className='icon-btn subtask-btn'
                  title='Cancel'
                  onClick={() => {
                    setShowEdit(false)
                  }}
                >
                  <VscChromeClose />
                </button>
              </div>
            </form>
            
            <textarea
              placeholder='Enter Subtask Description'
              value={inputDesc}
              onChange={(e) => {
                setInputDesc(e.target.value);
              }}
              rows="7"
            >
            </textarea>
          </div >
          :
          <div className='subtask'>
            <div className="subtask-heading">
              <div className="subtask-title">
                {props.subtask?.title}
              </div>
              <div className="subtask-heading-buttons">
                <button
                  className='icon-btn subtask-btn'
                  title='Delete Subtask'
                  onClick={() => {
                    props.deleteSubtask(props.boardId, props.cardId, props.subtask?.id)
                  }}
                >
                  <VscTrash />
                </button>
                <button
                  className='icon-btn subtask-btn'
                  title='Edit Subtask'
                  onClick={() => {
                    setShowEdit(true)
                    setInputTitle(props.subtask?.title)
                    setInputDesc(props.subtask?.desc)
                  }}
                >
                  <VscEdit />
                </button>
              </div>
            </div>
            <div className="subtask-desc">
              {props.subtask?.desc}
            </div>
          </div>
      }

    </div>
  );
};

export default Subtask;
