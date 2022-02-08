import React from 'react';

import Card from '../Card/Card';
import Addcard from './Addcard/Addcard';

import './Board.css'
import { VscTrash } from 'react-icons/vsc';
import { Droppable } from 'react-beautiful-dnd';


const Board = (props) => {
  return (
    <div
      className='board'
    >
      {/* {console.log(props)} */}
      <div className="board-heading">
        <div className="board-title">
          <div>
            {props.board?.title}
          </div>
          <div>
            {props.board?.cards?.length || 0} {props.board?.cards?.length === 1 ? 'issue' : 'issues'}
          </div>
        </div>
        <div className="board-heading-buttons">
          <button
            className='icon-btn hidden-btn'
            title='Delete Board'
            onClick={() => {
              if (props.deleteBoard) {
                props.deleteBoard(props.board?.id);
              }
            }}
          >
            <VscTrash />
          </button>
          {/* <button
            className='icon-btn'
            title='Add Card'
          >
            <VscAdd />
          </button> */}
        </div>
      </div>
      <Droppable
        droppableId={props.board?.id}
      >
        {
          (provided) => (
            <div
              className='cards-container'
              ref={(provided.innerRef)}
              {...provided.droppableProps}
            >
              {
                props.board?.cards.map((card, index) => (
                  <Card
                    index={index}
                    key={card.id}
                    card={card}
                    boardId={props.board?.id}
                    boardTitle={props.board?.title}

                    editCardTitle={props.editCardTitle}
                    updateCardDesc={props.updateCardDesc}
                    deleteCard={props.deleteCard}
                  />
                ))
              }
              {provided.placeholder}
              <Addcard
                addCard={(value) => props.addCard(props.board?.id, value)}
              ></Addcard>
            </div>
          )
        }
      </Droppable>
    </div>
  )
}


export default Board;
