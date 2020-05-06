/* eslint-disable react/prop-types */
/* Ce composant permet l'affichage des "buttons" */

import React from "react";

const Button = ({ className, text, onClick, onMouseEnter, onMouseLeave }) => {
	return (
		<div className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<span>{text}</span>
		</div>
	);
};

export default Button;
