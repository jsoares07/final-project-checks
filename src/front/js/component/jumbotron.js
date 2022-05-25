import React from "react";

const Jumbotron = () => {
	return (
		<div className="container center">
		<div className="jumbotron jumbotron-fluid p-5 ">
			<h1 className="display-1 justify-content-center">BookCrossing</h1>
			<p className="lead fs-4">
				
<div class="input-group rounded center">
  <input type="search" class="form-control rounded" placeholder="Search for a book nearby you" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
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
