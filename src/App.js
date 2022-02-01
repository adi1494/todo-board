import React, { useState } from 'react';
import uuid from 'react-uuid';


import Board from './components/Board/Board';
import Addboard from './components/Addboard/Addboard';


import './App.css';


function App() {
  const [boards, setBoards] = useState([
    {
      id: uuid(),
      title: 'To Do',
      hover: false,
      cards: [
        {
          id: uuid(),
          text: 'todo 1',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'todo 2',
          completed: 'false',
        },
      ]
    },
    {
      id: uuid(),
      title: 'WIP',
      hover: false,
      cards: [
        {
          id: uuid(),
          text: 'wip 1',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'wip 2',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'wip 3',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'wip 4',
          completed: 'false',
        },
      ]
    },
    {
      id: uuid(),
      title: 'Blocked',
      hover: false,
      cards: [
        {
          id: uuid(),
          text: 'blocked 1',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'blocked 2',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'blocked 3',
          completed: 'false',
        },
      ]
    },
    {
      id: uuid(),
      title: 'Testing',
      hover: false,
      cards: [
        {
          id: uuid(),
          text: 'testing 1',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'testing 2',
          completed: 'false',
        },
      ]
    },
    {
      id: uuid(),
      title: 'Released',
      hover: false,
      cards: [
        {
          id: uuid(),
          text: 'released 1',
          completed: 'false',
        },
        {
          id: uuid(),
          text: 'released 2',
          completed: 'false',
        },
      ]
    },

  ])
  
  const [draggedCard, setDraggedCard] = useState({
    bid:'',
    cid:''
  });

  const [targetBoard, setTargetBoard] = useState({
    bid: ''
  });

  const addCard = (text, bid) => {
    const card = {
      id: uuid(),
      text,
      completed: 'false',
    };
    const index = boards.findIndex(board => board.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  }

  const editCard = (bid, cid, text) => {
    let bidx = boards.findIndex(board=>board.id===bid);
    let cidx = boards[bidx].cards.findIndex(card=>card.id===cid);

    const tempBoards = [...boards];
    const tempCard = tempBoards[bidx].cards[cidx];
    tempCard.text = text;
    tempBoards[bidx].cards.splice(cidx, 1, tempCard);
    setBoards(tempBoards);
  }

  const removeCard = (cid, bid) => {
    const bIdx = boards.findIndex(board => board.id === bid);
    if (bIdx < 0) return;
    const cIdx = boards[bIdx].cards.findIndex(card => card.id === cid)
    if (cIdx < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIdx].cards.splice(cIdx, 1);
    setBoards(tempBoards);
  }

  const checkTodo = (cid, bid) => {
    const bIdx = boards.findIndex(board => board.id === bid);
    if (bIdx < 0) return;
    const cIdx = boards[bIdx].cards.findIndex(card => card.id === cid)
    if (cIdx < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIdx].cards[cIdx].completed = !tempBoards[bIdx].cards[cIdx].completed;
    setBoards(tempBoards);
  }

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: uuid(),
        title,
        hover: false,
        cards: []
      }
    ])
  }

  const removeBoard = (boardId) => {
    const tempBoards = boards.filter(board => board.id !== boardId);
    setBoards(tempBoards);
  }

  const handleDragStart = (bid, cid) => {
    setDraggedCard({
      bid,
      cid
    })
  }

  const handleDragEnd = (bid, cid) => {
    let bidx = boards.findIndex(board=>board.id===bid);
    let cidx = boards[bidx].cards.findIndex(card=>card.id===cid);

    let tbidx = boards.findIndex(board=>board.id===targetBoard);

    // console.log(bidx, cidx, tbidx);
    if (bidx===tbidx) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[bidx].cards[cidx];

    tempBoards[bidx].cards.splice(cidx, 1);
    tempBoards[tbidx].cards.push(tempCard);
    setBoards(tempBoards);
    // boards[bidx].hover = false;
  }

  const handleDragOver = (bid) => {
    setTargetBoard(bid);
    let bidx = boards.findIndex(board=>board.id===bid);
    if (bid !== draggedCard.bid) boards[bidx].hover = true;
  }
  
  const handleDragLeave = (bid) => {
    setTargetBoard(bid);
    let bidx = boards.findIndex(board=>board.id===bid);
    boards[bidx].hover = false;
    // console.log(targetBoard);
  }

  return (
    // <Oldapp></Oldapp>
    <div className="megacontainer">
      <div className='app'>
        <div className="app-nav">
          <h2>Todo Board</h2>
        </div>
        <div className="app-container">
          <div className="app-board">
            {
              boards.map((board) => (
                <Board
                  key={board.id}
                  board={board}
                  
                  addCard={addCard}
                  editCard={editCard}
                  removeCard={removeCard}
                  checkTodo={checkTodo}
                  removeBoard={removeBoard}

                  handleDragStart={handleDragStart}
                  handleDragEnd={handleDragEnd}
                  handleDragOver={handleDragOver}
                  handleDragLeave={handleDragLeave}
                />
              ))
            }
            <Addboard
              placeholder='Enter Board Title'
              onSubmit={(value) => addBoard(value)}
            ></Addboard>
          </div>
        </div>
        {/* {console.log(boards)} */}
      </div>
    </div>

  )
}

export default App;
