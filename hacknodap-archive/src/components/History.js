import React from 'react'
import './History.scss';

const History = ({location, date, title}) => {
	return(
		<div className={`history-container ${location}`}>
			<div className="history-head">
					<div className="date">{date}</div>
					<div className="title">{title}</div>
			</div>
			<div className="history-body">
				<div className="picture-1"></div>
			</div>
		</div>
	);
}

export default History;