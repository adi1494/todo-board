import React, { useState } from 'react';
import './Card.css'
// import {Check, Trash} from 'react-feather';

const Card = (props) => {
	const [showEdit, setShowEdit] = useState(false);
	const [inputText, setInputText] = useState(props.card?.text || '')
	return (
		<div
			className='card-container'
			draggable
			onDragStart={() => {
				props.handleDragStart(props.boardId, props.card?.id)
			}}
			onDragEnd={() => {
				props.handleDragEnd(props.boardId, props.card?.id)
			}}
		>
			{/* {console.log(props)} */}
			{
				showEdit ?
					<form 
						className="card"
						onSubmit={(event) => {
							event.preventDefault();
							if (props.editCard) {
								props.editCard(props.boardId, props.card?.id, inputText);
							}
							setShowEdit(false);
						}}
					>
						<input
							autoFocus
							type="text"
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							placeholder={props.placeholder || 'Enter Card Text'} />
						<div className='card-buttons'>
							<button
								className='button-13'
								type='submit'
							>
								Add
							</button>
							<button
								className='button-13'
								onClick={() => {
									setShowEdit(false)
								}}
							>
								Cancel
							</button>
						</div>
					</form>
					:
					<div className="card">
						<div className={`card-text ${props.card?.completed ? '' : 'completed'}`}>{props.card?.text}</div>
						<div className="card-buttons">
							<button
								className='button-13'
								onClick={() => {
									setShowEdit(true)
									setInputText(props.card?.text)
								}}
							>
								Edit
							</button>
							<button
								className='button-13'
								onClick={() => {
									props.checkTodo(props.card?.id, props.boardId)
								}}
							>
								{props.card?.completed ? 'Check' : 'Uncheck'}
							</button>
							<button
								className='button-13'
								onClick={() => {
									props.removeCard(props.card?.id, props.boardId)
									// console.log(props)
								}}
							>
								{/* <Trash /> */}
								Delete Card
							</button>
						</div>
					</div>
			}
		</div>
	)
};

export default Card;