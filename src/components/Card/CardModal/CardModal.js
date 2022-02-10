import React, { useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import DetailsItem from './DetailsItem/DetailsItem';
import Subtask from './Subtask/Subtask';

import { VscAdd, VscBookmark, VscCheck, VscChevronDown, VscChevronUp, VscChromeClose, VscEdit, VscTrash } from "react-icons/vsc";

import './CardModal.css'


const CardModal = (props) => {
  // const [inputDesc, setInputDesc] = useState(props.card?.desc || '')

  const [inputText, setInputText] = useState('');

  const [showDetails, setShowDetails] = useState(true);
  const [showTitleEdit, setShowTitleEdit] = useState(false);
  const [showTaskEdit, setShowTaskEdit] = useState(false);
  const [showDescEdit, setShowDescEdit] = useState(false);


  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // const _status = props.boardTitles.filter(board => board.id === props.boardId)[0];
  // console.log(_status);
  // const [status, setStatus] = useState(_status);
  // console.log(status)


  const boardTitles = props.boardTitles;
  // console.log(boardTitles)

  // console.log(boardTitles.filter(board => board.id === props.boardId))
  const _status = boardTitles.filter(board => board.id === props.boardId)[0];
  const [status, setStatus] = useState(_status);

  // console.log(boardTitles.filter(board => board.id !== props.boardId))
  const _remainingBoards = boardTitles.filter(board => board.id !== props.boardId)
  const [remainingBoards, setRemainingBoards] = useState(_remainingBoards);

  const setStatusHandler = (bid) => {
    // console.log(bid)
    const tempStatusBoard = boardTitles.filter(board => board.id === bid)[0];
    const tempRemainingBoards = boardTitles.filter(board => board.id !== bid);

    setStatus(tempStatusBoard);
    setRemainingBoards(tempRemainingBoards);
    setShowStatusDropdown(false)
    props.changeStatus(bid, props.card?.id, props.boardId);
  }

  return (
    <div>
      <Modal onClose={() => {
        props.onClose()
      }}>
        <div className="cardmodal">
          <div className="cardmodal-header">
            <div className='cardmodal-header-issue'>
              <VscBookmark />
              {/* <VscBug />
              <VscCheck /> */}
              <div style={{ marginLeft: '10px' }}>500</div>
            </div>
            <div className='cardmodal-button-container'>
              {/* <button className='cardmodal-header-button' title='Like'><VscThumbsup /></button> */}
              <button
                className='icon-btn'
                title='Delete'
                onClick={() => {
                  props.deleteCard(props.boardId, props.card?.id)
                }}
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
          <div className="cardmodal-cols">
            <div className="cardmodal-main-wrapper">
              <div className="cardmodal-tall"></div>
              <div className="cardmodal-main">
                <div>
                  {
                    showTitleEdit ?
                      <form
                        className='cardmodal-main-title-edit'
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
                        <div className='cardmodal-button-container'>
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
                        className="cardmodal-main-title"
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
                        <div className="cardmodal-button-container">
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

                </div>
                <div className="cardmodal-main-desc">
                  <div className="cardmodal-main-desc-heading">
                    <div>
                      Description
                    </div>
                  </div>
                  {
                    showDescEdit ?
                      <form
                        action=""
                        style={{
                          display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px'
                        }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          props.updateCardDesc(props.boardId, props.card?.id, inputText);
                          setInputText('');
                          setShowDescEdit(false);
                        }}
                      >
                        <textarea
                          rows="7"
                          style={{
                            resize: 'none',
                            width: '100%',
                            padding: '5px',
                          }}
                          placeholder='Enter Description'
                          value={inputText}
                          onChange={(e) => {
                            setInputText(e.target.value);
                          }}
                        >

                        </textarea>
                        <div className="cardmodal-main-desc-buttons">
                          <button
                            className='icon-btn'
                            title='Edit Description'
                            onClick={() => {
                              setInputText('');
                              setShowDescEdit(false);
                            }}
                          >
                            <VscChromeClose />
                          </button>
                          <button
                            className='icon-btn'
                            title='Edit Description'
                            type='submit'
                          >
                            <VscCheck />
                          </button>
                        </div>
                      </form>
                      :
                      <div style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px'
                      }}>
                        {
                          props.card?.desc ?
                            <div className="cardmodal-main-desc-text">
                              {props.card?.desc}
                            </div>
                            :
                            <></>
                        }

                        <div className="cardmodal-main-desc-buttons">
                          <button
                            className='icon-btn'
                            title='Edit Description'
                            onClick={() => {
                              setInputText(props.card?.desc);
                              setShowDescEdit(true);
                            }}
                          >
                            <VscEdit />
                          </button>
                        </div>
                      </div>
                  }
                </div>
                <div className="cardmodal-main-subtask">
                  <div className="cardmodal-main-subtask-heading">
                    <div>
                      Subtasks
                    </div>
                    {
                      showTaskEdit ?
                        <form
                          className='cardmodal-subtask-edit'
                          action=""
                          onSubmit={(e) => {
                            e.preventDefault()
                            props.addSubtask(props.boardId, props.card?.id, inputText)
                            setShowTaskEdit(false)
                            setInputText('')
                          }}
                        >
                          <input
                            autoFocus
                            placeholder='Enter New Subtask'
                            type="text"
                            value={inputText}
                            onChange={(e) => {
                              setInputText(e.target.value)
                            }}
                          />
                          <div className='cardmodal-subtask-edit-buttons'>
                            <button
                              type='submit'
                              className='icon-btn'
                            >
                              <VscCheck />
                            </button>
                            <button
                              className='icon-btn'
                              onClick={() => {
                                setShowTaskEdit(false)
                              }}
                            >
                              <VscChromeClose />
                            </button>
                          </div>
                        </form>
                        :
                        <div className="cardmodal-main-subtask-heading-buttons">
                          <button
                            className='icon-btn'
                            title='Edit Description'
                            onClick={() => {
                              // props.addSubtask(props.boardId, props.card?.id, 'new task')
                              setShowTaskEdit(true)
                              setInputText('')
                            }}
                          >
                            <VscAdd />
                          </button>
                        </div>
                    }

                  </div>
                  <div className="subtasks">
                    {/* {console.log(props.card?.subtasks)} */}
                    {
                      props.card?.subtasks.map(subtask => (
                        <Subtask
                          key={subtask.id}
                          subtask={subtask}

                          boardId={props.boardId}
                          cardId={props.card?.id}

                          updateSubtask={props.updateSubtask}
                          deleteSubtask={props.deleteSubtask}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="cardmodal-tall"></div>
            </div>
            <div className="cardmodal-side-wrapper">
              <div className="cardmodal-tall"></div>
              <div
                className="cardmodal-side"
              >
                <div className="cardmodal-status">
                  <button onClick={() => {
                    setShowStatusDropdown(!showStatusDropdown);
                  }}>
                    <div className='cardmodal-status-title'>
                      {status.title}
                    </div>
                    {
                      showStatusDropdown ?
                        <VscChevronUp />
                        :
                        <VscChevronDown />
                    }
                  </button>
                  {
                    showStatusDropdown ?
                      <div
                        className="cardmodal-status-dropdown"
                      >
                        {
                          remainingBoards.map(item => {
                            return (
                              <div
                                key={item.id}
                                onClick={() => {
                                  setStatusHandler(item.id)
                                }}
                                title={item.title}
                              >
                                {item.title}
                              </div>
                            )
                          })
                        }
                      </div>
                      :
                      <></>
                  }
                </div>
                <div className="cardmodal-side-details">
                  <div
                    className="cardmodal-side-details-heading"
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
                      <div className='cardmodal-side-details-items'>
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
              <div className="cardmodal-tall"></div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default CardModal;
