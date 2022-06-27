import React from "react";
import "../../styles/jumbotron.css";
import background from "../../img/jumbotronlength.jpg"

const Jumbotron = () => {
	return (
		<div className="container center">
		<div className="jumbotron jumbotron-fluid p-5" style={{backgroundImage: `url(${background})`}}>
			<h1 className="display-1 justify-content-center">Crossbook</h1>
			<p className="lead fs-4">
				
<div className="input-group rounded center">
  <input type="search" className="form-control rounded" placeholder="Search for a book nearby you" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span>
</div>
			</p>
			<div className="my-5">
				{/* <a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a> */}

			</div>
		</div>
		</div>
		
	);
};

export default Jumbotron;
