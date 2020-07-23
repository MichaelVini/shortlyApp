import React from 'react';
import logoImg from './assets/logo.svg';
import workingImg from './assets/illustration-working.svg';
import brandImg from './assets/icon-brand-recognition.svg';
import detailedImg from './assets/icon-detailed-records.svg';
import customizableImg from './assets/icon-fully-customizable.svg';
import facebookIcon from './assets/icon-facebook.svg';
import twitterIcon from './assets/icon-twitter.svg';
import pinterestIcon from './assets/icon-pinterest.svg';
import instagramIcon from './assets/icon-instagram.svg';
import './style.css'


function App() {
  return (
    <div className="shortly-container">
      <header className="menu-bg">
        <div className="menu">
          <div className="menu-logo">
            <img src={logoImg} alt="logo" />
          </div>

          <nav className="menu-nav">
            <ul>
              <li><a href="#sobre">Features</a></li>
              <li><a href="#sobre">Pricing</a></li>
              <li><a href="#sobre">Resources</a></li>
            </ul>
          </nav>
        </div>

        <div className="bg-login">
          <a href="">Login</a>
          <button>Sign Up</button>
        </div>
      </header>

      <section className="sobre">
        <div className="sobre-info">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed
          insights on how your links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div className="sobre-img">
          <img src={workingImg} alt="working" />
        </div>
      </section>

      <section className="shorten">
        <div className="shorten-info">
          <input type="text" />
          <button>Shorten It!</button>
        </div>
        <div className="history-shorten">
          <ul>
            <li>
              <p>https://www.frontendmentor.io</p>
              <p>https://rel.ink/k4lkyk</p>
              <button>Copy</button>
            </li>

            <li>
              <p>https://www.frontendmentor.io</p>
              <p>https://rel.ink/k4lkyk</p>
              <button>Copy</button>
            </li>

            <li>
              <p>https://www.frontendmentor.io</p>
              <p>https://rel.ink/k4lkyk</p>
              <button>Copy</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="advanced-statistics">
        <div className="statistics">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with
          our advanced statistics dashboard.
          </p>
        </div>
        <div className="items">
          <ul>
            <li>
              <img src={brandImg} alt="Image Brand Recognition" />
              <h1>Brad Recognition</h1>
              <p>Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.</p>
            </li>

            <li>
              <img src={detailedImg} alt="Image Detailed Records" />
              <h1>Detailed Records</h1>
              <p>Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</p>
            </li>

            <li>
              <img src={customizableImg} alt="Image Fully Customizable" />
              <h1>Fully Customizable</h1>
              <p>Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-boost">
        <h1>Boost your link today</h1>
      </section>
      
      <section className="footer">
        <div className="logo">
          <img src={logoImg}/>
        </div>
        <div className="list-footer">
          <ul>
            <li>
              <h1>Features</h1>
              <a href="">Link Shortening</a>
              <a href="">Braded Links</a>
              <a href="">Analytics</a>
            </li>

            <li>
              <h1>Resources</h1>
              <a href="">Blog</a>
              <a href="">Developers</a>
              <a href="">Support</a>
            </li>

            <li>
              <h1>Company</h1>
              <a href="">About</a>
              <a href="">Our Team</a>
              <a href="">Careers</a>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
            <ul>
              <li><img src={facebookIcon} alt=""/></li>
              <li><img src={twitterIcon} alt=""/></li>
              <li><img src={pinterestIcon} alt=""/></li>
              <li><img src={instagramIcon} alt=""/></li>
            </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
