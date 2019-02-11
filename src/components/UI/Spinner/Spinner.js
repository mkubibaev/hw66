import React from 'react';
import './Spinner.css';

const Spinner = ({show}) => {
	if (show) {
		return <div className="Spinner">Loading...</div>
	}

	return null;
};

export default Spinner;