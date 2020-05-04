/* eslint-disable react/prop-types */
/* Ce composant permet l'affichage des "vignettes" */

import React from "react";

const Vignette = ({ className, text, onClick, onMouseEnter, onMouseLeave }) => {
	return (
		<div className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<span>{text}</span>
		</div>
	);
};

export default Vignette;
