import React from 'react'
import { Link } from 'react-router-dom'

function Popup() {
  return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Swap book
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Which of the book on offer would you like to swap?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <select class="form-select" multiple aria-label="multiple select example">
                    <option selected>Book 1</option>
                    <option value="1">Book 2</option>
                    <option value="2">Book 3</option>
                    <option value="3">Book 3</option>
                </select>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-success" >

                        <Link to="/Swapmessage">
                        Swap Book 
                        </Link>
                        </button>
              
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup