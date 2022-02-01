import React, {useState} from 'react';
// import { Plus, X } from 'react-feather';
import './Addcard.css';

import {} from 'react-feather'

const Addcard = (props) => {
	const [showAddcard, setShowAddcard] = useState(false);
	const [inputText, setInputText] = useState('');
	return (
		<div className='addcard'>
			{
				showAddcard ? 
				<form 
					className='addcard-edit'
					onSubmit={(event) => {
						event.preventDefault();
						if (props.addCard) {
							props.addCard(inputText);
						}
						setInputText('');
						setShowAddcard(false);
					}}
				>
					<input
						autoFocus
						type="text"
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						placeholder={props.placeholder || 'Enter Card Text'} />
					<div className='addcard-footer'>
						<button 
							className='button-13'
							type='submit'>
							{/* <Plus /> */}
							Add
						</button>
						<button 
							className='button-13'
							onClick={() => setShowAddcard(false)}>
							{/* <X /> */}
							Cancel
						</button>
					</div>
				</form>
				:
				<button 
					onClick={() => setShowAddcard(true)}>
					{/* <Plus/> */}
					Add Card
				</button>
		}
		</div>
	)
};

export default Addcard;
