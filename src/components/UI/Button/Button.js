import React from "react";
import './Button.css';

const Button = props => (
	<button
		onClick={props.clicked}
		className={['Button', props.type].join(' ')}
	>
		{props.children}
	</button>
);



export default Button;