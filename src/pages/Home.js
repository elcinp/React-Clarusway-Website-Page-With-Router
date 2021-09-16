import React from "react";
import html from '../assets/img/logo_html.png'
import css from '../assets/img/logo_css.png'
import brush from '../assets/img/logo_brush.png'

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
            <img src={html} alt="html"/>
            <h3>Html5 Markup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, est.</p>
        </div>
        <div>
            <img src={css} alt="css"/>
            <h3>CSS3 Styling</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, est.</p>
        </div>
        <div>
            <img src={brush} alt="brush"/>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, est.</p>
        </div>
    </section>
    </div>
  );
};

export default Home;
