import React from 'react';
import './Board.css'
import Card from '../Card/Card';
import Addcard from '../Addcard/Addcard';
// import { Trash } from 'react-feather';

const Board = (props) => {
  return (
    <div
      className='board'
      onDragOver={()=>{
        props.handleDragOver(props.board?.id)
      }}
      onDragLeave={()=>{
        props.handleDragLeave(props.board?.id)
      }}
    >
      {/* {console.log(props)} */}
      <div className="board-heading">
        <p className="board-title">{props.board?.title}</p>
        <button
          className='button-13'
          onClick={() => {
          props.removeBoard(props.board?.id)
          // console.log(props)
        }}>
          {/* <Trash /> */}
          Delete Board
        </button>
      </div>
      <div className={`cards-container ${props.board?.hover?'drag-over':''}`}>
        {
          props.board?.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              boardId={props.board?.id}

              editCard={props.editCard}
              removeCard={props.removeCard}
              checkTodo={props.checkTodo}

              handleDragStart={props.handleDragStart}
              handleDragEnd={props.handleDragEnd}
            />
          ))
        }
        <Addcard
          addCard={(value) => props.addCard(value, props.board?.id)}
        ></Addcard>
      </div>
    </div>
  )
}


export default Board;
