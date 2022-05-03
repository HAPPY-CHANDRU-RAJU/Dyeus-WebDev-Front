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
  </div>
  );
}

export default App;
