import React from "react";
import "../../styles/profilepic.css";


export const Profilepic = () => {

      
        return (
          <div className="">
          
          
                  <div className="col-md-6">
                    <div className="wrapper">
                      <input type="file" className="my_file mt-1">
                      </input>
                    </div>
      
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn btn-primary text-center"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
    
          </div>
		
	);
};

