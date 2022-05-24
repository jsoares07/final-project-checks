import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	const { title, imageUrl, description, buttonLabel } = props;

	return (
		<div className="card my-4 gap-1" style={{ width: "18rem" }}>
			<img src={imageUrl} />
			<div className="card-body mt-2 mb-4">
				<h3 className="card-title text-center fw-bolder">{title}</h3>
				<p
					className="card-text text-center"
					style={{ fontSize: "large" }}>
					{description}
				</p>
			</div>
			<div className="bg-light py-3 text-center">
				<a href="#" className="btn btn-primary ">
					{buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
};

export default Card;
