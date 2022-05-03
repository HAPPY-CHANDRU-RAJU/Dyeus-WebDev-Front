import './index.css';

function App() {
  return (
  <div>
    <nav class="navbar navbar-fixed-top nav-fix">
      <div class="left menubar">
          <img src="img/menu.png" />
      </div>
      <div class="right menubar menu-options">
          <img src="img/shopping-cart.png" />
          <img src="img/bell.png" />
      </div>
    </nav>

    <div class="about div-pad" >
      <h3 class="center">About Diana</h3>
      <h5 class="sub-heading">A platform that looks out for you</h5>
      <p class="para">Diana empowers you to understand how your body works so you can look and feel your best. </p>
      <hr/>
      <h4 class="heading">Our Philosophy</h4>
      <p class="sub">Sustainable wellness is a big-picture, inside out approach</p>
      <p class="content">Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. <br/><br/>That’s why we’ve created an integrated ecosystem of: </p>
      <div class="center highlights">
          <img src="img/liq.png" />
          <p>Consciously formulated products that deliver feel-good results fast  </p>
          <img src="img/gil.png" />
          <p>In-app mood and seriod tracking options that help you cultivate a deeper connection with your mind and body  </p>
          <img src="img/phone-call.png" />
          <p>In-app consultation portals that connect you with compassionate wellness experts </p>
          <br/><br/>
          <p>Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</p>
      </div>
    </div>

    <div class="bg-red div-pad">
      <h4 class="heading left">What makes us different?</h4><br/>
      <p class="text-left sub ">Reimagining and rewiring self-care</p>
      <div class="content2">
      You care about conscious consumption, and so do we. <br/><br/>When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best <br/><br/>We collaborate with researchers and doctors to
          <ul>
              <li>Help you get granular about your health and self-care with personalized insights, and</li><br/>
              <li>Equip you with simple, sustainable products that get the job done</li>
          </ul><br/>
      No to-the-moon-and-back claims in this neck of the woods.<br/><br/>
      We’re just solving real problems for real people here. 
      </div>
    </div>

    <div class="bg-blue div-pad">
      <h4 class="text-left heading">Liberate your everyday wellness </h4>
      <p class="text-left sub text-black">Shop our self-care products</p>
      <p class="content2 text-black">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.  </p>
    </div>
    <div class="bg-flower div-pad div-fix">
      <button class="bnt bnt-red">Upgrade your self-care</button>
      <p class="alert-t">#NoNasties, we promise!</p>
    </div>

    <div class="bg-white div-pad">
      <p class="text-left sub text-black"> Track your mood</p>
      <p class="content2 text-black">All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. </p>
      <button class="bnt bnt-blue font18">Track you mood on the app</button>
      <div class="row" style="display: flex;">
          <div class="img-fix" >
              <img src="img/Rectangle 194.png" />
          </div>
          <div>
              <img src="img/Rectangle 197.png" />
          </div>
      </div>
      <div class="row" style="display: flex;">
          <div class="img-fix"  >
              <img src="img/Rectangle 198.png" />
          </div>
          <div >
              <img src="img/Rectangle 193.png" />
          </div>
      </div>
    </div>

    <div class="bg-redish div-pad">
      <p class="text-left sub text-black"> Track your period</p>
      <p class="content2 text-black">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. </p>
      <button class="bnt bnt-red font17">Track you period on the app</button>
    </div>
    <div class="bg-calendar div-pad"></div>

    <div class="bg-gray div-pad">
        <p class="text-left sub text-black"> Consult with wellness experts</p>
        <p class="content2 font15 text-black">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.  </p>
        <button class="bnt bnt-blue ">Get a consultation</button>
    </div>
    <div class="bg-doctor div-pad"></div>

    <div class="bg-redd div-pad ">
      <p class="text-left sub text-white font28"> Get your personalized period box</p>
      <img src="img/Untitled-23.png" class="size-fix" />
      <p class="content2 text-white">Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.  </p>
      <button class="btn btn-black">
        <p class="btn-text">Create your box on the app<i class="fa fa-chevron-right btn-icon" ></i></p>
      </button>
    </div>

    
  </div>
  );
}

export default App;
