
import React from "react";
import "./About.css";

const About = () =>{
    return(
        <div className="back1 vh-100">
        <h1 class="text-center">About Us:</h1><br/>
        <div className="justify-content-center">
        <div class="container-md border border-3 border-dark bg-warning-subtle mt-3 px-3 py-3" >
           <h4 id="para1"> Foodies is your go-to food ordering app, making it easy to explore and enjoy delicious cuisine.<br/>
We offer a wide selection of restaurants and cuisines to cater to various tastes and preferences.
Personalized recommendations are provided based on your past orders and preferences, ensuring you discover new and delightful dishes.
Enjoy a seamless ordering experience with user-friendly features and intuitive navigation. <br/><br/>
<img src="https://th.bing.com/th/id/OIP.zsYd5p5bW_RXuZh66GZFEwAAAA?pid=ImgDet&rs=1" alt=" " className="log1"></img><br/><br/>
Discover top-rated restaurants, popular food trends, and hidden gems in your area through our comprehensive restaurant guide.<br/>
Join our community of food enthusiasts, where you can share reviews, recommendations, and connect with fellow foodies who share your passion for great food.<br/>
          </h4>
        </div>
            
        </div>
        </div>
);
}
export default About;