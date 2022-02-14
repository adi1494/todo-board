import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import Board from '../Board/Board';
import Addboard from '../Addboard/Addboard';

import './Home.css';
// import { DragDropContext } from 'react-beautiful-dnd';

import { userData, boardData } from './data'


function Home() {
  const [users, setUsers] = useState(userData);

  const [boards, setBoards] = useState(JSON.parse(localStorage.getItem('boards')) || boardData);

  // const titles = boards.map(board => board.title)
  const titles = boards.map((board) => (
    {
      id: board.id,
      title: board.title,
    }
  ))
  // console.log(titles)
  const [boardTitles, setBoardTitles] = useState(titles)

  useEffect(() => {
    const localData = localStorage.getItem('boards');
    if (localData) {
      setBoards(JSON.parse(localData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards])

  const addCard = (bid, title) => {
    const card = {
      id: uuid(),
      title,
      desc: '',
      completed: 'false',
      assignee: users[1],
      reporter: users[2],
      type: 'task',
      priority: 'low',
      subtasks: [

      ],
    };
    const index = boards.findIndex(board => board.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  }

  const editCardTitle = (bid, cid, title) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);

    const tempBoards = [...boards];
    const tempCard = tempBoards[bidx].cards[cidx];
    tempCard.title = title;
    tempBoards[bidx].cards.splice(cidx, 1, tempCard);
    setBoards(tempBoards);
  }

  const updateCardDesc = (bid, cid, desc) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);

    const tempBoards = [...boards];
    const tempCard = tempBoards[bidx].cards[cidx];
    tempCard.desc = desc;
    tempBoards[bidx].cards.splice(cidx, 1, tempCard);
    setBoards(tempBoards);
  }

  const deleteCard = (bid, cid) => {
    const bIdx = boards.findIndex(board => board.id === bid);
    if (bIdx < 0) return;
    const cIdx = boards[bIdx].cards.findIndex(card => card.id === cid)
    if (cIdx < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIdx].cards.splice(cIdx, 1);
    setBoards(tempBoards);
  }

  const changeStatus = (tbid, cid, bid) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);

    let tbidx = boards.findIndex(board => board.id === tbid);

    const tempBoards = [...boards];
    const tempCard = tempBoards[bidx].cards[cidx];

    tempBoards[bidx].cards.splice(cidx, 1);
    tempBoards[tbidx].cards.push(tempCard);
    setBoards(tempBoards);
  }

  const addSubtask = (bid, cid, inputTitle, inputDesc) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);

    const subtask = {
      id: uuid(),
      title: inputTitle,
      desc: inputDesc,
    }

    const tempBoards = [...boards];
    tempBoards[bidx].cards[cidx].subtasks.push(subtask);
    setBoards(tempBoards);
  }

  const updateSubtask = (bid, cid, sid, inputTitle, inputDesc) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);
    let sidx = boards[bidx].cards[cidx].subtasks.findIndex(subtask => subtask.id === sid);

    const tempBoards = [...boards];
    const tempSubtask = tempBoards[bidx].cards[cidx].subtasks[sidx];
    tempSubtask.title = inputTitle;
    tempSubtask.desc = inputDesc;
    tempBoards[bidx].cards[cidx].subtasks.splice(sidx, 1, tempSubtask);
    setBoards(tempBoards);
  }

  const deleteSubtask = (bid, cid, sid) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);
    let sidx = boards[bidx].cards[cidx].subtasks.findIndex(subtask => subtask.id === sid);

    const tempBoards = [...boards];
    tempBoards[bidx].cards[cidx].subtasks.splice(sidx, 1);
    setBoards(tempBoards);
  }

  const addBoard = (title) => {
    const id = uuid();
    setBoards([
      ...boards,
      {
        id: id,
        title: title,
        hover: false,
        cards: []
      }
    ])
    setBoardTitles([
      ...boardTitles,
      {
        id: id,
        title: title,
      }
    ])
  }

  const deleteBoard = (boardId) => {
    const tempBoards = boards.filter(board => board.id !== boardId);
    setBoards(tempBoards);
    const tempBoardTitles = boardTitles.filter(board => board.id !== boardId);
    setBoardTitles(tempBoardTitles);
  }

  const handleDragStart = (bid, cid) => {
    setDraggedCard({
      bid,
      cid
    })
  }

  const [draggedCard, setDraggedCard] = useState({
    bid: '',
    cid: ''
  });

  const [targetBoard, setTargetBoard] = useState({
    bid: ''
  });

  const handleDragEnd = (bid, cid) => {
    let bidx = boards.findIndex(board => board.id === bid);
    let cidx = boards[bidx].cards.findIndex(card => card.id === cid);

    let tbidx = boards.findIndex(board => board.id === targetBoard);

    // console.log(bidx, cidx, tbidx);
    if (bidx === tbidx) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[bidx].cards[cidx];

    tempBoards[bidx].cards.splice(cidx, 1);
    tempBoards[tbidx].cards.push(tempCard);
    setBoards(tempBoards);
    // boards[bidx].hover = false;
  }

  const handleDragOver = (bid) => {
    setTargetBoard(bid);
    let bidx = boards.findIndex(board => board.id === bid);
    if (bid !== draggedCard.bid) boards[bidx].hover = true;
  }

  const handleDragLeave = (bid) => {
    setTargetBoard(bid);
    let bidx = boards.findIndex(board => board.id === bid);
    boards[bidx].hover = false;
    // console.log(targetBoard);
  }

  return (
    <div id="container">
      <div className="tall"></div>
      <div className='home'>
        <div className="home-nav">
          <h2>Todo Board</h2>
        </div>
        <div className="home-boards">
          {/* <DragDropContext
            onDragEnd={onDragEnd}
          > */}
          <div className="boards">
            {
              boards.map((board) => (
                <Board
                  key={board.id}
                  board={board}
                  boardTitles={boardTitles}

                  addCard={addCard}
                  editCardTitle={editCardTitle}
                  updateCardDesc={updateCardDesc}
                  deleteCard={deleteCard}
                  deleteBoard={deleteBoard}
                  changeStatus={changeStatus}

                  addSubtask={addSubtask}
                  updateSubtask={updateSubtask}
                  deleteSubtask={deleteSubtask}

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
          {/* </DragDropContext> */}
        </div>
        {/* {console.log(boards)} */}
      </div>
      <div className="tall"></div>
    </div>

  )
}

export default Home;
