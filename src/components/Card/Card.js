import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ParsedQuery from 'query-string';

import CardModal from './CardModal/CardModal';

import { BsBookmarkFill, BsCheckSquareFill, BsChevronCompactDown, BsChevronCompactUp, BsCircleFill, BsDashLg } from "react-icons/bs";
import './Card.css'
// import { Draggable } from 'react-beautiful-dnd';

const Card = (props) => {
	const { search } = useLocation()
	const qs = ParsedQuery.parse(search)
	// console.log(qs.cardId===props.card?.id)

	const [showModal, setShowModal] = useState(qs.cardId === props.card?.id);

	let navigate = useNavigate()
	const routeChange = (remainingPath) => {
		let path = `/home${remainingPath}`;
		navigate(path);
		// console.log(search)
	}

	// const getItemStyle = (isDragging, draggableStyle) => ({
	// 	pointerEvents: "auto",
	// 	cursor: isDragging ? '' : 'pointer',
	// 	...draggableStyle
	// });

	return (
		<div>
			<div className='card-container'>
				{
					showModal &&
					<CardModal
						onClose={() => {
							setShowModal(false)
							routeChange('')
						}}

						card={props.card}
						boardId={props.boardId}
						boardTitles={props.boardTitles}

						editCardTitle={props.editCardTitle}
						updateCardDesc={props.updateCardDesc}
						deleteCard={props.deleteCard}
						changeStatus={props.changeStatus}

						addSubtask={props.addSubtask}
						updateSubtask={props.updateSubtask}
						deleteSubtask={props.deleteSubtask}
					/>
				}
				{/* <Draggable
					draggableId={props.card?.id}
					index={props.index}
				>
					{(provided, snapshot) => ( */}
				<div
					className="card"
					draggable
					onClick={() => {
						routeChange(`?cardId=${props.card?.id}`)
						setShowModal(true)
					}}
					onDragStart={() => {
						props.handleDragStart(props.boardId, props.card?.id)
					}}
					onDragEnd={() => {
						props.handleDragEnd(props.boardId, props.card?.id)
					}}
				// ref={provided.innerRef}
				// {...provided.draggableProps}
				// {...provided.dragHandleProps}
				// style={getItemStyle(
				// 	snapshot.isDragging,
				// 	provided.draggableProps.style
				// )}
				>
					<div>{props.card?.title || '----'}</div>
					<div className="card-footer">
						<div className="card-footer-left">
							<div className="card-type">
								{
									props.card.type === 'story' ?
										<div className="card-icon">
											<BsBookmarkFill color='green' />
										</div>
										:
										props.card?.type === 'task' ?
											<div className="card-icon">
												<BsCheckSquareFill color='blue' />
											</div>
											:
											props.card?.type === 'bug' ?
												<div className="card-icon">
													<BsCircleFill color='red' />
												</div>
												:
												<></>
								}
							</div>
							<span className="card-number">
								500
							</span>
						</div>
						<div className="card-footer-right">
							<div className="card-priority">
								{
									props.card.priority === 'low' ?
										<div className="card-icon">
											<BsChevronCompactDown color='green' />
										</div>
										:
										props.card?.priority === 'medium' ?
											<div className="card-icon">
												<BsDashLg color='orange' />
											</div>
											:
											props.card?.priority === 'high' ?
												<div className="card-icon">
													<BsChevronCompactUp color='red' />
												</div>
												:
												<></>
								}
							</div>
							<div
								className='user-icon'
								style={{ backgroundColor: `${props.card?.assignee.color}` }}
							>
								{props.card?.assignee.fname[0] + props.card?.assignee.lname[0]}
							</div>
						</div>
					</div>
				</div>
				{/* )}
				</Draggable> */}
			</div>
		</div>
	)
};

export default Card;