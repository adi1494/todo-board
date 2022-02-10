import uuid from 'react-uuid';

export const userData = [
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
]

export const boardData = [
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
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'high',
        subtasks: [
          {
            id: uuid(),
            title: 'todo subtask 1',
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nulla doloribus sunt perferendis aliquam tenetur maxime exercitationem pariatur suscipit quia.`,
          },
          {
            id: uuid(),
            title: 'todo subtask 2',
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nulla doloribus sunt perferendis aliquam tenetur maxime exercitationem pariatur suscipit quia.`,
          },
        ],
      },
      {
        id: uuid(),
        title: 'todo 2',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'bug',
        priority: 'high',
        subtasks: [

        ],
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
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'medium',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: 'wip 2',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'bug',
        priority: 'medium',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: 'wip 3',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'medium',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: 'wip 4',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'bug',
        priority: 'medium',
        subtasks: [

        ],
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
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'medium',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: 'blocked 2',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'task',
        priority: 'medium',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: 'blocked 3',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'medium',
        subtasks: [

        ],
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
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'low',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: '',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'task',
        priority: 'low',
        subtasks: [

        ],
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
        assignee: userData[0],
        reporter: userData[1],
        type: 'story',
        priority: 'low',
        subtasks: [

        ],
      },
      {
        id: uuid(),
        title: 'released 2',
        desc: '',
        completed: 'false',
        assignee: userData[0],
        reporter: userData[1],
        type: 'task',
        priority: 'low',
        subtasks: [

        ],
      },
    ]
  },
]