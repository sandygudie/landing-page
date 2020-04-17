import React from 'react';
import image2 from './images/profile.jpg'
import image3 from './images/peoples.jpg'
import image4 from './images/create.png'
import image5 from './images/connect.jpg'
import image6 from './images/wallet.PNG'
import image7 from './images/vendor.PNG'
import image8 from './images/facebook.png'
import image9 from './images/twitter.png'
import './App.css';

function App() {
  return (

    <div className="App">

      <div class="columns topheader">
        <div class="column is-half header">

          <h1 className="share-h1">Share Creativity</h1>
          <p >turning idea into value...</p>

        </div>
        <div class="column">
          <div className='imgprofile'>
            <img className='img1' src={image2} alt="screenshot" /></div>

        </div>

      </div>


      <div className="columns two">
        <div className="column is-half blue">
          <div className="word">
            <h1 className="create">Creativity Alive? </h1>
            <h1 className="work"> Do some great work and share with people</h1>
          </div>
        </div>
        <div className="column btn">
          <button className="sbtn"> SIGN UP TO CONNECT</button>
    
        </div>

      </div>

      <div className="columns three">
        <img className='img3' src={image3} alt="screenshot" />
      </div>


      <div class="columns four">

        <div class="column is-one-third">

          <img className='img4' src={image4} alt="screenshot" />
          <h1 className="value"> Create</h1>
          <p>Everyone Can Create</p>
        </div>

        <div class="column">

          <img className='img4' src={image5} alt="screenshot" />
          <h1 className="value"> Social</h1>
          <p >Let the world see you! Go where you are valued</p>
        </div>

        <div class="column">

          <img className='img4' src={image6} alt="screenshot" />
          <h1 className="value">Value</h1>
          <p >Earn value, Earn support</p>

        </div>
      </div>

      <div class="columns vendor">
        <div class="column is-half vendors ">
      <div  className="vendiv">
          <h1 className="ven"> Check Available Vendors</h1>
          </div>
        </div>
        <div class="column">
          <div className='imgpro'>
            <img className='img7' src={image7} alt="screenshot" /></div>

        </div>

      </div>


 <footer>
        <div className=" social">
            <div className="footerp">
                <p>&copy; NairaHot 2020 </p>
           
            </div>
                
                <div className="footerimg"> 
                <a href="login.html">
                  <img src={image8} alt="twitter"/>
                  </a>
                    <a href="https://www.twitter.com">
                      <img src={image9} alt="facebook"/>
                      </a>
                    
                </div>
               
        
            
        </div>
    </footer>

{/* <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>&copy; NairaHot 2020</strong>  </p>
       {/* <div className="footerimg">  
            <img  className="imgfb" src={image8} alt="twitter"/>
              <img className="imgfb" src={image9} alt="facebook"/>
              {/* </div> 
   </div> 
</footer> */}

    </div>
  );
}

export default App;
