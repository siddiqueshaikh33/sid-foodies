import React from 'react';
import ca1 from '../Images/ca1.jpg'
import ca2 from '../Images/ca2.jpg'
import ca3 from '../Images/ca3.jpg'
import './Home.css'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return(
           
                <div className="fullpg vh-100" style={{ backgroundColor: "#f4f4f4" }}>
                <div>
                    
                <div className='d-flex justify-content-center mt-2'>
                   <Carousel className='caros'>
                       <Carousel.Item className='car1 text-center'>
                         <img src={ca1} alt='' className='imgcar'></img>
                        <br/><br/><br/>
                        <Carousel.Caption className='car1 text-center'>
                         <h5>The north indian Thali</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
            <img src={ca2} alt='' className='imgcar'></img>
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>Yummy Gheeroast</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
            <img src={ca3} alt='' className='imgcar'></img>
              <br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>Butter Masala Dosa</h5>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
                </div>
                <hr/>
<div> <h2 class="txt1 text-center"> Some Top Picks in Mangalore!!</h2><br/></div>
                <div style={{backgroundColor:"#f4f4f4"}}>
                <div class="container" >
    <div class="row mt-3 px-2">
    <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://th.bing.com/th/id/ALs4eR62d8TAPTQ480x360?&rs=1&pid=ImgDet" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>The Ocean Pearl</h4><br/></div>
                    <p calss="card-content">The Ocean Pearl hotel at Mangalore combines classic luxury, modern indulgences and exquisite comfort set in a spectacular backdrop that includes a unique combination of breath-taking views combined with plush spaces and facilities, excellent service and a promise of enjoying Mangalore like never before....</p>
                    <button class="btn btn-outline-success btn-sm" > Explore Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/141385969.jpg?k=8a8b77c5b1e350c4710ba97efd353b8cfdd16ff13166d5a5cd38535aac3db666&o=" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Deepa Comforts</h4><br/></div>
                    <p calss="card-content">The  Mangalore presents an environment of an oasis of serenity, where each individual is given service with unobtrusive consideration and care. The commitment to impeccable service expresses itself in the meticulous attention to detail in the co-ordination of everything from business appointments to travel arrangements... </p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-danger-subtle">
            <img src="https://th.bing.com/th/id/OIP.WzzlgXMLjCn2exCpkaZnIwAAAA?pid=ImgDet&w=275&h=275&rs=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"><h4>Shankar Bhavana</h4><br/></div>
                    <p calss="card-content">Shankar Bhavan By Vinayak Hotels is a 3-star property located in Brahmapur. Featuring a restaurant, the 3-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The property provides room service, a 24-hour front desk and organizing tours...</p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<br/>
<div>
    <h4 class="txt1 px-5">Some more picks for you...</h4>
</div>
<div><div class="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#test">Explore now</button>
        <div class="collapse " id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae, vitae tempora libero ipsa recusandae,
            laboriosam illo blanditiis doloribus esse iusto suscipit iure delectus accusamus, nulla voluptate est sed
            cum!
        </div>
    </div>
    </div>
    <script src="js/bootstrap.bundle.js"></script>
</div>
          
    );
}
export default Home;