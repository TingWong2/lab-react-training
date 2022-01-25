import React from "react";

const IdCard = (props) => {
	console.log(props);
	return (
		<div className="card">
			<div className="avatar">
				<img src={props.picture} alt={props.name} />
			</div>

			<div className="info"></div>
				
				<p>lastName: {props.lastName}</p>
				<p>firstName: {props.firstName}</p>
				<p>gender: {props.gender}</p>
				<p>height: {props.height}</p>
				<p>birth: {props.birth.toDateString()}</p>

		</div>
	);
};

export default IdCard;