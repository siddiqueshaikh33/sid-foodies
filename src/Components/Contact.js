

import React from "react";
import "./Contact.css";

const Contact= () =>{
    return(
        <>
        <div className="bag1 justify-content-center align-items-center vh-100">
        <div class=" border border-1 border-dark text-center bg-primary-subtle my-2 mx-5 rounded ">
       <br/> <h4>Foodies Head Office<br/>
        432, Green Avenue,<br/>
        Mumbai,<br/>
        Maharashtra,<br/>
        India,<br/>
        Postal Code: 400001<br/>
        </h4> <br/><br/>
        <h4>Foodies Branch Office<br/>
        123, Main Street,<br/>
        Bangalore,<br/>
        Karnataka,<br/>
        India,<br/>
        Postal Code: 560001<br/>
        </h4> <br/>
       </div>
       <br/>
       <br/>
       <h3  class="text-center border border-2 mx-5 bg-warning-subtle rounded-pill"> Contacts</h3><br/>
       <div class="container">
       <div class="row my-3 mx-3 justify-content-center">
            <div class="col-md-2 my-1 py-2 me-5 border border-1 border-dark bg-danger-subtle text-center  justify-content-center rounded-pill">
            Bangalore : <br/>
            +91 98765 43210<br/>
            </div>
            <div class="col-md-2 my-1 py-2 me-5 border border-1 border-dark bg-success-subtle text-center justify-content-center rounded-pill">
               Kolkata : <br/>
               +91 87654 21098<br/>
                </div>
            <div class="col-md-2 my-1 py-2 me-5 border border-1 border-dark bg-danger-subtle text-center justify-content-center rounded-pill">
                Delhi : <br/>
                +91 74563 80976<br/>
                </div>
            <div class="col-md-2 my-1 py-2 me-5 border border-1 border-dark bg-success-subtle text-center justify-content-center rounded-pill">
            Mumbai : <br/>
            +91 90123 45678<br/>
                </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Contact;