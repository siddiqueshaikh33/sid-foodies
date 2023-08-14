
import React from "react";
//import { Image } from "react-bootstrap";
import "./About.css";

const Menu = () =>{
    return(
        <><div className="back2 vh-100">
        <h1 class="text-center">Top Dishes on the list...</h1><br/>

        <div class="container">
    <div class="row mt-3 px-2">
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://th.bing.com/th/id/OIP.J1z1rfZEnkmSNj4XYCcX1QHaEK?pid=ImgDet&rs=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Paneer Gheeroast</h4></div>
                    <p calss="card-content">₹210 </p>
                    <button class="btn btn-outline-success btn-sm"> Order Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-warning-subtle">
            <img src="https://i1.wp.com/cookingfromheart.com/wp-content/uploads/2017/07/Mushroom-Manchurian-7.jpg?resize=1024%2C683&ssl=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Mushroom Manchurian </h4></div>
                    <p calss="card-content"><br/> ₹190 </p>
                    <button class="btn btn-outline-success btn-sm"> Order Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-danger-subtle">
            <img src="https://th.bing.com/th/id/OIP.Idsom9sMhdi8nlWOud_qkAAAAA?pid=ImgDet&w=474&h=355&rs=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Sev Puri</h4></div>
                    <p calss="card-content"> <br/>₹60</p>
                    <button class="btn btn-outline-success btn-sm"> Order Now </button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3 px-2">
        <div class="col-md-4">
            <div class="card bg-sucess-subtle">
                <img src="https://i.pinimg.com/originals/53/2c/bd/532cbda4a0c6ed0adf00b66df50b15ea.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Gobi Tikka </h4></div>
                    <p calss="card-content"> <br/>₹170 </p>
                    <button class="btn btn-outline-success btn-sm"> Order Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://1.bp.blogspot.com/-wOk65sO6K7U/Xyh5G6U_5gI/AAAAAAAABPs/r-Z8s-_8HrUQa3-bV2yrDAQ6mLZH4GZswCNcBGAsYHQ/s2048/DSC_8030%2Bcopy.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Paneer Tikka </h4></div>
                    <p calss="card-content"> <br/>₹220</p>
                    <button class="btn btn-outline-success btn-sm"> Order Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-dark-subtle">
            <img src="https://th.bing.com/th/id/OIP.6Nx_C1m4YCujBiHe48YpHAHaE8?pid=ImgDet&w=1200&h=800&rs=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Masala Dosa</h4></div>
                    <p calss="card-content"><br/> ₹110</p>
                    <button class="btn btn-outline-success btn-sm"> Order Now </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </>
);
}
export default Menu;