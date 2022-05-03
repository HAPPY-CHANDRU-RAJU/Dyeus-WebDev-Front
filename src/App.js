import menu from './img/menu.png';
import cart from './img/shopping-cart.png';
import bell from './img/bell.png';

import aboutimg1 from './img/liq.png';
import aboutimg2 from './img/gil.png';
import aboutimg3 from './img/phone-call.png';

import pic1 from './img/Rectangle-194.png';
import pic2 from './img/Rectangle-197.png';
import pic3 from './img/Rectangle-198.png';
import pic4 from './img/Rectangle-193.png';

import box from './img/Untitled-23.png';
import fb from './img/facebook.png';
import tw from './img/twitter.png';
import './index.css';

function App() {
  return (
  <div>
    <nav className="navbar navbar-fixed-top nav-fix">
      <div className="left menubar">
          <img src={menu} alt="menu" />
      </div>
      <div className="right menubar menu-options">
          <img src={cart} alt="cart" />
          <img src={bell} alt="bell" />
      </div>
    </nav>

    <div className="about div-pad" >
      <h3 className="center">About Diana</h3>
      <h5 className="sub-heading">A platform that looks out for you</h5>
      <p className="para">Diana empowers you to understand how your body works so you can look and feel your best. </p>
      <hr/>
      <h4 className="heading">Our Philosophy</h4>
      <p className="sub">Sustainable wellness is a big-picture, inside out approach</p>
      <p className="content">Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. <br/><br/>That’s why we’ve created an integrated ecosystem of: </p>
      <div className="center highlights">
          <img src={aboutimg1} alt="img1"/>
          <p>Consciously formulated products that deliver feel-good results fast  </p>
          <img src={aboutimg2} alt="img2"/>
          <p>In-app mood and seriod tracking options that help you cultivate a deeper connection with your mind and body  </p>
          <img src={aboutimg3} alt="img3" />
          <p>In-app consultation portals that connect you with compassionate wellness experts </p>
          <br/><br/>
          <p>Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</p>
      </div>
    </div>

    <div className="bg-red div-pad">
      <h4 className="heading left">What makes us different?</h4><br/>
      <p className="text-left sub ">Reimagining and rewiring self-care</p>
      <div className="content2">
      You care about conscious consumption, and so do we. <br/><br/>When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best <br/><br/>We collaborate with researchers and doctors to
          <ul>
              <li>Help you get granular about your health and self-care with personalized insights, and</li><br/>
              <li>Equip you with simple, sustainable products that get the job done</li>
          </ul><br/>
      No to-the-moon-and-back claims in this neck of the woods.<br/><br/>
      We’re just solving real problems for real people here. 
      </div>
    </div>

    <div className="bg-blue div-pad">
      <h4 className="text-left heading">Liberate your everyday wellness </h4>
      <p className="text-left sub text-black">Shop our self-care products</p>
      <p className="content2 text-black">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.  </p>
    </div>
    <div className="bg-flower div-pad div-fix">
      <button className="bnt bnt-red">Upgrade your self-care</button>
      <p className="alert-t">#NoNasties, we promise!</p>
    </div>

    <div className="bg-white div-pad">
      <p className="text-left sub text-black"> Track your mood</p>
      <p className="content2 text-black">All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. </p>
      <button className="bnt bnt-blue font18">Track you mood on the app</button>
      <div className="row flex">
          <div className="img-fix" >
              <img src={pic1} alt="image1" />
          </div>
          <div>
              <img src={pic2} alt="image2"/>
          </div>
      </div>
      <div className="row flex" >
          <div className="img-fix"  >
              <img src={pic3} alt="image3" />
          </div>
          <div >
              <img src={pic4} alt="image4" />
          </div>
      </div>
    </div>

    <div className="bg-redish div-pad">
      <p className="text-left sub text-black"> Track your period</p>
      <p className="content2 text-black">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. </p>
      <button className="bnt bnt-red font17">Track you period on the app</button>
    </div>
    <div className="bg-calendar div-pad"></div>

    <div className="bg-gray div-pad">
        <p className="text-left sub text-black"> Consult with wellness experts</p>
        <p className="content2 font15 text-black">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.  </p>
        <button className="bnt bnt-blue ">Get a consultation</button>
    </div>
    <div className="bg-doctor div-pad"></div>

    <div className="bg-redd div-pad ">
      <p className="text-left sub text-white font28"> Get your personalized period box</p>
      <img src={box} className="size-fix" />
      <p className="content2 text-white">Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.  </p>
      <button className="btn btn-black">
        <p className="btn-text">Create your box on the app<i className="fa fa-chevron-right btn-icon" ></i></p>
      </button>
    </div>

    <div className="bg-whitee div-pad">
      <p className="text-left sub text-white font31 text-black"> With Diana, you’re in control of your health, your every day, and your story.</p>
    </div>

    <div className="bg-black div-pad">
        <div className="right">
            <img src={fb} alt="facebook" className="footer-icon" />
            <img src={tw} alt="twitter" className="footer-icon" />
        </div>
        <div className="mar30">
            <ul className="lists">
                <li>Products <i className="fa fa-chevron-right btn-icon" ></i></li>
                <li>Our Science <i className="fa fa-chevron-right btn-icon" ></i></li>
                <li>Vision  Mission <i className="fa fa-chevron-right btn-icon" ></i></li>
                <li>About Us<i className="fa fa-chevron-right btn-icon" ></i></li>
            </ul>
        </div>
        <hr className="white-hr"/>
        <div className="form">
            <span>Subscribe to our Newsletter</span>
            <div>
                <input name="email"  placeholder="Enter your email..." className="form-input"/>
                <button type="submit" className="form-btn"><i className="fa fa-envelope"></i> activate</button>
            </div>
        </div>
    </div>

  </div>
  );
}

export default App;
