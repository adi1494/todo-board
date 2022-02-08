import React, { useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import DetailsItem from './DetailsItem/DetailsItem';

import { VscBookmark, VscCheck, VscChevronDown, VscChevronUp, VscChromeClose, VscEdit, VscTrash } from "react-icons/vsc";

import './CardModal.css'


const Cardinfo = (props) => {
  // const [inputTitle, setInputTitle] = useState(props.card?.title || '')
  // const [showTitleEdit, setShowTitleEdit] = useState(false)

  // const [inputDesc, setInputDesc] = useState(props.card?.desc || '')
  // const [showDescEdit, setShowDescEdit] = useState(false)

  const [inputText, setInputText] = useState('');

  const [showDetails, setShowDetails] = useState(true)
  const [showTitleEdit, setShowTitleEdit] = useState(false)

  const [showStatusDropdown, setShowStatusDropdowm] = useState(false)

  return (
    <div>
      <Modal onClose={() => {
        props.onClose()
      }}>
        <div className="cardinfo">
          <div className="cardinfo-header">
            <div className='cardinfo-header-issue'>
              <VscBookmark />
              {/* <VscBug />
              <VscCheck /> */}
              <div style={{ marginLeft: '10px' }}>500</div>
            </div>
            <div className='cardinfo-button-container'>
              {/* <button className='cardinfo-header-button' title='Like'><VscThumbsup /></button> */}
              <button
                className='icon-btn'
                title='Delete'
              >
                <VscTrash />
              </button>
              <button
                className='icon-btn'
                title='Close'
                onClick={() => {
                  props.onClose()
                }}
              >
                <VscChromeClose />
              </button>
            </div>
          </div>
          <div className="cardinfo-cols">
            <div className="cardinfo-main-wrapper">
              <div className="cardinfo-tall"></div>
              <div className="cardinfo-main">
                {
                  showTitleEdit ?
                    <form
                      className='cardinfo-main-title-edit'
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (props.editCardTitle) {
                          props.editCardTitle(props.boardId, props.card?.id, inputText);
                        }
                        setInputText('')
                        setShowTitleEdit(false);
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
                      <div className='cardinfo-button-container'>
                        <button
                          className='icon-btn'
                          type='submit'
                        ><VscCheck /></button>
                        <button
                          className='icon-btn'
                          onClick={() => {
                            setShowTitleEdit(false)
                          }}
                        ><VscChromeClose /></button>
                      </div>
                    </form>
                    :
                    <div
                      className="cardinfo-main-title"
                      style={{ backgroundColor: `${props.card?.title ? '' : 'var(--board-bg)'}` }}
                    >
                      {
                        props.card?.title ?
                          <div>{props.card?.title}</div>
                          :
                          <div
                            style={{
                              // fontSize: '20px',
                              fontWeight: '300',
                            }}
                          >Enter Card Title</div>
                      }
                      <div className="cardinfo-button-container">
                        <button
                          className={`icon-btn ${props.card?.title ? 'hidden-btn' : ''}`}
                          title='Edit Title'
                          onClick={() => {
                            setShowTitleEdit(true)
                            setInputText(props.card?.title)
                          }}
                        ><VscEdit /></button>
                      </div>
                    </div>
                }
                <div className="cardinfo-main-desc">
                  <div className="cardinfo-main-desc-title">
                    Description
                  </div>
                  <div>
                    {props.card?.desc || 'none'}
                  </div>
                </div>
              </div>
              <div className="cardinfo-tall"></div>
            </div>
            <div className="cardinfo-side-wrapper">
              <div className="cardinfo-tall"></div>
              <div
                className="cardinfo-side"
              >
                <div className="cardinfo-status">
                  <button>
                    <div>
                      {props.status}
                    </div>
                    {
                      showStatusDropdown ?
                        <VscChevronUp />
                        :
                        <VscChevronDown />
                    }
                  </button>
                </div>
                <div className="cardinfo-side-details">
                  <div
                    className="cardinfo-side-details-heading"
                    onClick={() => {
                      setShowDetails(!showDetails)
                    }}
                  >
                    <div>
                      Details
                    </div>
                    <div>
                      {
                        showDetails ?
                          <VscChevronUp />
                          :
                          <VscChevronDown />
                      }
                    </div>
                  </div>
                  {
                    showDetails ?
                      <div className='cardinfo-side-details-items'>
                        <DetailsItem
                          left='assignee'
                          right={props.card?.assignee}
                        />
                        <DetailsItem
                          left='priority'
                          right={props.card?.priority}
                        />
                        <DetailsItem
                          left='reporter'
                          right={props.card?.reporter}
                        />
                      </div>
                      :
                      <>
                      </>
                  }

                </div>
              </div>
              <div className="cardinfo-tall"></div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default Cardinfo;
