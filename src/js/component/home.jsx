import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div className="container d-flex justify-content-evenly my-5 bg-dark justify-content-center" style= {{height:"200px"}}>
			<div className="numbers calendar">
				<i className="far fa-clock text-white"></i>
			</div>
			<div className="numbers four text-white">{props.four % 10}</div>
			<div className="numbers three text-white">{props.three % 10}</div>
			<div className="numbers two text-white">{props.two % 10}</div>
			<div className="numbers one text-white">{props.one % 10}</div>
		</div>
	);
};

export default Home;
