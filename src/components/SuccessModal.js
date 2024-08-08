import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SuccessModal = ({ successText, handleClick }) => {
	return (
		<div className='custom-modal'>
			<div className='succes succes-animation icon-top'>
				<i>
					<FaCheck />
				</i>
			</div>
			<div className='succes border-bottom'></div>
			<div className='content'>
				<p className='type'>{successText}</p>
				<button className='successmodal-button' onClick={handleClick}>
					Okay
				</button>
			</div>
		</div>
	);
};

export default SuccessModal;
