import { Component } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Newheader from '../components/Newheader'


class Faq extends Component {

   state = {
      current: 0
   }

  toggle(index) {
    this.setState({
      current: index
    });
  }

  render() {
    return (
      <Layout title={"FAQ"}>
        {/* <Header /> */}
        <Newheader />
        
        <div>
          <div class="page-content">
            <div class="holder">
              <div class="container">
                <h2 class="h1-style text-center">How can we help you?</h2>
                <div className="faq-body-image" >
                   <img src="https://res.cloudinary.com/easywaya/image/upload/v1585609003/hotnaira_jjzxrj.png" width="100"/>
                </div>
                <p style={{ color: "000" }}>
                  <b>Frequently Asked Questions</b>
                </p>
              
               
                <br />

                <div>
                  <a href="#nogo" onClick={this.toggle.bind(this, 1)}>
                    <div className="faq-toggle-body">Is Uvune an advertising company?</div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 1 ? "open " : ""
                    }`}
                  >
                  Yes, Uvune is an advertising company. However, it also focuses on connecting suppliers to buyers to foster business transactions. 
                  </div>
                </div>

                <a href="#nogo" onClick={this.toggle.bind(this, 2)}>
                  <div className="faq-toggle-body"> Is Uvune just an online company? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 2 ? "open " : ""
                  }`}
                >
                  While we have a registered address and a physical office in accordance with the corporate regulations of Nigeria, the business we conduct is mainly online. This includes running ads for our subscribers, and also connecting merchants and purchasers on our online platform. 
 
                </div>

                <a href="#nogo" onClick={this.toggle.bind(this, 3)}>
                  <div className="faq-toggle-body"> As a supplier, how many products can I advertise? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 3 ? "open " : ""
                  }`}
                >
                 Generally, you are permitted to upload ten (10) pictures of your products free of charge. If you intend to upload more pictures, you are more than welcome to subscribe to any one of our premium packages. 
                </div>

                <a href="#nogo" onClick={this.toggle.bind(this, 4)}>
                  <div className="faq-toggle-body"> How much do I pay for posting on Uvune? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 4 ? "open " : ""
                  }`}
                >
                  Currently, posting on Uvune is totally free. However, once we kick off our various paid packages, you’ll be the first to know. 
                </div>

                <a href="#nogo" onClick={this.toggle.bind(this, 5)}>
                  <div className="faq-toggle-body"> Are companies and suppliers verified before posting on Uvune? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 5 ? "open " : ""
                  }`}
                >
                 As a mark of authenticity, we ensure that companies and suppliers are duly registered and verified on our platform before they post their products. In some instances, however, the profile of some companies that are still undergoing registration might be seen. In such cases, we clearly indicate that such users have not been verified, and strongly discourage transacting with them before their verification. 

                </div>
                <a href="#nogo" onClick={this.toggle.bind(this, 6)}>
                  <div className="faq-toggle-body"> Does Uvune accept payment for supplier's product ?</div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 6 ? "open " : ""
                  }`}
                >
                   No! Uvune does not accept, and will not ask you for payment for a supplier’s products. Uvune is concerned with only bringing suppliers and buyers together for the sake of commerce. The mode and the pattern of payment are strictly up to the two parties involved, and Uvune does not interfere in the matter.  

                </div>
                <a href="#nogo" onClick={this.toggle.bind(this, 7)}>
                  <div className="faq-toggle-body"> Are perishable items also posted for sale on Uvune? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 7 ? "open " : ""
                  }`}
                >
                Yes. suppliers are allowed to post perishable goods. However, certain rules are laid down in our terms and conditions for such products. 
                </div>
                <a href="#nogo" onClick={this.toggle.bind(this, 8)}>
                  <div className="faq-toggle-body">How do we confirm that suppliers have the exact items posted on Uvune? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 8 ? "open " : ""
                  }`}
                >
                 Before suppliers post products on Uvune, our trusted officials visit their place of business for the sake of stock-taking. During the exercise, we find out the products the suppliers sell and ensure that they are merchantable. This is conducted in a friendly atmosphere and eliminates any form of misrepresentation.  If a supplier posts a picture that is significantly different from the picture and records we have of his stock, he is immediately answerable to the Uvune team or runs the risk of having his profile deactivated. 
                </div>
                <a href="#nogo" onClick={this.toggle.bind(this, 9)}>
                  <div className="faq-toggle-body">How does Uvune handle companies or suppliers with similar or the same products? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 9 ? "open " : ""
                  }`}
                >
                Uvune totally welcomes the idea of various suppliers dealing in the same or similar products. It eliminates the concept of monopoly and gives a fair idea about the cost of the products. It allows makes room for comparison of quality and other relevant factors. 
                </div>
                <a href="#nogo" onClick={this.toggle.bind(this, 10)}>
                  <div className="faq-toggle-body">How does Uvune prevent scammers from utilizing users’ data on Uvune? </div>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 10 ? "open " : ""
                  }`}
                >
                We have the latest technological security, data protection, and privacy framework in place to protect your confidential details from prying eyes. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Faq;
