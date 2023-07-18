import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (

<div className="footer">


<div className="categories">
<div className="col">
  <div className="row">
    <img
      src="https://img.freepik.com/premium-photo/pair-headphones-purple-pink-background_889227-6440.jpg?w=360"
      alt=""
    />
    
  </div>
  <div className="row">
    <img
      src="https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg"
      alt=""
    />
   
  </div>
</div>
<div className="col">
  <div className="row">
    {" "}
    <img
      src="https://images.pexels.com/photos/9767549/pexels-photo-9767549.jpeg?cs=srgb&dl=pexels-%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BB%D0%B5%D0%BE%D0%BD%D0%B0%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%87-%D0%B2%D0%B0%D1%80%D1%84%D0%BE%D0%BB%D0%BE%D0%BC%D0%B5%D0%B5%D0%B2-9767549.jpg&fm=jpg"
      alt=""
    />
   
  </div>
</div>
<div className="col col-l">
  <div className="row">
    <div className="col">
      <div className="row">
        <img
          src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?cs=srgb&dl=pexels-soulful-pizza-3780681.jpg&fm=jpg"
          alt=""
        />
       
      </div>
    </div>
    <div className="col">
      <div className="row">
        {" "}
        <img
          src="https://t3.ftcdn.net/jpg/00/14/47/84/360_F_14478444_aDcLWSTEgTD2JGtvEB4MW2piQw5bn81E.jpg"
          alt=""
        />
       
      </div>
    </div>
  </div>
  <div className="row">
    <img
      src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdG9yfGVufDB8fDB8fHww&w=1000&q=80"
      alt=""
    />
    
  </div>
</div>
</div>


            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Guwahati, Assam, 781039
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: **********</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: anchalshaurya20@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    <h1>GoShop</h1>
                    © Copyright 2023. All Rights Reserved
                    </span>
                    <img src={Payment} />
                </div>
            </div>
            
        </div>
    );
};

export default Footer;




