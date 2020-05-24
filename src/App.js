import React, { Component } from 'react';

import image2 from './images/profile.jpg'
import image3 from './images/peoples.jpg'
import image4 from './images/create.png'
import image5 from './images/connect.jpg'
import image6 from './images/wallet.PNG'
import image7 from './images/vendor.PNG'
import image8 from './images/facebook.png'
import image9 from './images/twitter.png'
import PaystackButton from 'react-paystack';
import './App.css';


  
class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
    key: "pk_test_1007e9b8ddb07fc05a17864b53865c135a948fbe", //PAYSTACK PUBLIC KEY
    email: "judgechuks@gmail.com",  // customer email
    amount: 10000, //equals NGN100,
    domain: 'http://localhost:4000/api', 
  }

}

componentDidMount() {
      
    // const script = document.createElement("script");
    // script.src = "https://js.paystack.co/v1/inline.js";
    // script.async = true;
    // document.body.appendChild(script);

      // document.body.appendChild(script);
}




  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  sendDATA=(e)=>{
    e.preventDefault();
    // const email = Math.floor(Math.random()*90000) + 10000 + req.body.email + Math.floor(Math.random()*90000)
    // const fullname = req.body.fullname
    // const username  = req.body.username
    // const amount  = req.body.amount + 00
    // const id  = req.body.user_id
    const data = {
      email:this.email.value,
      fullname:this.fullname.value,
      username:"mom@gmail.com",
      amount:this.amount.value,
      id :"95383068390636jkngdibnso",
    }
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(data),
    };
  console.log("requestOptions----------------------------->",requestOptions)
        fetch(this.state.domain+"/texting", requestOptions)
        .then(res => res.json())
          .then((res)=>{
        console.log("res", res)
        if(res.status === "true"){
          this.setState({
            loading:false
          })
          // console.log("res   --------------------->true", res)
          this.props.history.replace('/login');

        }else{
          //  console.log("res   --------------------->false", res)
          
          this.setState({
            loading:false,
            messageError:"Reset password",
            messageif:true
          })
        }
    }).catch( (error) => {
      //  console.log("errro", error);
      //  console.log("error load", error )
    });
  }


  render(){
     console.log("log email random  -------->",Math.floor(Math.random()*90000) + 10000 +"judgegmail.com" + Math.floor(Math.random()*90000) )
  return (

    <div className="App">
    
    <div class="columns topheader">
        <div class="column is-half header">

          <h1 className="share-h1">Share Creativity</h1>
          <p >turning idea into value...</p>

        </div>
        <div class="column">
        <div>

        <form id="paymentForm"  onSubmit={this.sendDATA}>
            <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label setting-profile-input-lable"  >Fullname</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="text" placeholder="Recipient fullname" required  ref={input =>this.fullname = input} />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label setting-profile-input-lable"  >Email</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="email" placeholder="Recipient email" required  ref={input =>this.email = input} />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label setting-profile-input-lable"  >Amount</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="text" placeholder="Amount" required  ref={input =>this.amount = input} />
                      </p>
                    </div>
                  </div>
                </div>
                
            {/* <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email-address" required />
              <br/>
            </div>  
            <div class="form-group">
              <label for="amount">Amount</label>
              <input type="tel" id="amount" required />
              <br/>
            </div>  
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" />
              <br/>
            </div>  
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" />
              <br/>
            </div>   */}
            <div class="form-submit">
              <button type="submit"> Pay </button> 
            </div>
          </form>
            <p>
              {/* <PaystackButton
                text="Make Payment"
                className="payButton"
                callback={this.callback}
                close={this.close}
                disabled={true}
                embed={true}
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                paystackkey={this.state.key}
                tag="button"
              /> */}
            </p>
          </div>
          {/* <div className='imgprofile'>
            <img className='img1' src={image2} alt="screenshot" />
            </div> */}

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



    </div>
  );

  }
}

export default App;
