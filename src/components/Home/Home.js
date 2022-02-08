import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import Board from '../Board/Board';
import Addboard from '../Addboard/Addboard';

import './Home.css';
import { DragDropContext } from 'react-beautiful-dnd';


function Home() {
  const [users, setUsers] = useState([
    {
      id: uuid(),
      fname: 'Aditya',
      lname: 'Verma',
      color: 'purple'
    },
    {
      id: uuid(),
      fname: 'Aditya',
      lname: 'Kumar',
      color: 'blue'
    },
    {
      id: uuid(),
      fname: 'Aditya',
      lname: 'Joshi',
      color: 'orange'
    },
    {
      id: uuid(),
      fname: 'Shaswat',
      lname: 'Shrivastava',
      color: 'green'
    },
  ])

  const [boards, setBoards] = useState([
    {
      id: uuid(),
      title: 'Todo',
      hover: false,
      cards: [
        {
          id: uuid(),
          title: 'todo 1',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta nemo quidem illo! Temporibus voluptate nobis ea consectetur vero, sed omnis vitae est, ex dolor, dolore nisi doloribus numquam expedita adipisci ipsa consequatur ad excepturi aliquid saepe error velit maiores explicabo?',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'high',
        },
        {
          id: uuid(),
          title: 'todo 2',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'bug',
          priority: 'high',
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
          title: 'wip 1',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'medium',
        },
        {
          id: uuid(),
          title: 'wip 2',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'bug',
          priority: 'medium',
        },
        {
          id: uuid(),
          title: 'wip 3',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'medium',
        },
        {
          id: uuid(),
          title: 'wip 4',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'bug',
          priority: 'medium',
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
          title: 'blocked 1',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'medium',
        },
        {
          id: uuid(),
          title: 'blocked 2',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'task',
          priority: 'medium',
        },
        {
          id: uuid(),
          title: 'blocked 3',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'medium',
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
          title: 'testing 1',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'low',
        },
        {
          id: uuid(),
          title: '',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'task',
          priority: 'low',
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
          title: 'released 1',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'story',
          priority: 'low',
        },
        {
          id: uuid(),
          title: 'released 2',
          desc: '',
          completed: 'false',
          assignee: users[0],
          reporter: users[1],
          type: 'task',
          priority: 'low',
        },
      ]
    },
  ])

  useEffect(() => {
    const localData = localStorage.getItem('boards');
    if (localData) {
      setBoards(JSON.parse(localData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards])

  const onDragEnd = (result) => {
    // console.log(result);
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      if (source.index === destination.index) return;
      const tempBoards = [...boards];
      const bidx = boards.findIndex(item => item.id === source.droppableId);

      const tempCard = boards[bidx].cards[source.index];
      tempBoards[bidx].cards.splice(source.index, 1);
      tempBoards[bidx].cards.splice(destination.index, 0, tempCard);
      setBoards(tempBoards);
    } else {
      const tempBoards = [...boards];
      const sbidx = boards.findIndex(item => item.id === source.droppableId);
      const dbidx = boards.findIndex(item => item.id === destination.droppableId);

      const tempCard = boards[sbidx].cards[source.index];
      tempBoards[sbidx].cards.splice(source.index, 1);
      tempBoards[dbidx].cards.splice(destination.index, 0, tempCard);
      setBoards(tempBoards);
    }
  }

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

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: uuid(),
        title: title,
        hover: false,
        cards: []
      }
    ])
  }

  const deleteBoard = (boardId) => {
    const tempBoards = boards.filter(board => board.id !== boardId);
    setBoards(tempBoards);
  }

  return (
    <div id="container">
      <div className="tall"></div>
      <div className='home'>
        <div className="home-nav">
          <h2>Todo Board</h2>
        </div>
        <div className="home-boards">
          <DragDropContext
            onDragEnd={onDragEnd}
          >
            <div className="boards">
              {
                boards.map((board) => (
                  <Board
                    key={board.id}
                    board={board}

                    addCard={addCard}
                    editCardTitle={editCardTitle}
                    updateCardDesc={updateCardDesc}
                    deleteCard={deleteCard}
                    deleteBoard={deleteBoard}
                  />
                ))
              }
              <Addboard
                placeholder='Enter Board Title'
                onSubmit={(value) => addBoard(value)}
              ></Addboard>
            </div>
          </DragDropContext>
        </div>
        {/* {console.log(boards)} */}
      </div>
      <div className="tall"></div>
    </div>

  )
}

export default Home;
