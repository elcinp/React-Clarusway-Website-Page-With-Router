import React from "react";

const Home = () => {
  return (
    <div>
      {/* Main */}
      <main class="main-image">
        <div>
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            optio, expedita facere placeat. Natus autem neque soluta voluptatum.
          </p>
        </div>
      </main>

      {/* Subscribe */}

      <div class="main-subscribe">
        <h3>Subscribe To Our Newsletter</h3>
        <div>
          <input type="email" id="email" placeholder="Enter Email..." />
          <button type="submit" id="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>

      {/*Html,Css,Graphic Design  */}
      
      <section class="main-bottom">
        <div>
            <img src="./img/logo_html.png" alt="html"/>
            <h3>Html5 Markup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, est.</p>
        </div>
        <div>
            <img src="./img/logo_css.png" alt="css"/>
            <h3>Html5 Markup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, est.</p>
        </div>
        <div>
            <img src="./img/logo_brush.png" alt="brush"/>
            <h3>Html5 Markup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, est.</p>
        </div>
    </section>
    </div>
  );
};

export default Home;
