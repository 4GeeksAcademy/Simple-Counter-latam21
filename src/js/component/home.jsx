import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div className="Container d-flex justify-content-evenly my-5 bg-dark">
			<div className="calendar">
				<i className="far fa-clock text-white"></i>
			</div>
			<div className="four text-white">{props.four % 10}</div>
			<div className="three text-white">{props.three % 10}</div>
			<div className="two text-white">{props.two % 10}</div>
			<div className="one text-white">{props.one % 10}</div>
		</div>
	);
};

export default Home;
