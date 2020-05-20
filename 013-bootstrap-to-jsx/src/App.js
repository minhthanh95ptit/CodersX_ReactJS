import './App.css';
import React, { Component } from 'react';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header';
import Selection from './Component/Selection/Selection';
import Footer from './Component/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Header />

        <div className="container">
          <div className="row">

            <Selection title="For those about to rock..." vitri1 = "col-lg-6 order-lg-2" vitri2="col-lg-6 order-lg-1" img ="img/01.jpg" content="Lorem ipsum dolor sit amet, consectetur adip"/>
            <Selection title="We salute you!" vitri1 = "col-lg-6 order-lg-1" vitri2="col-lg-6 order-lg-2" img ="img/02.jpg" content="Lorem ipsum dolor sit amet"/>
            <Selection title="Let there be rock!" vitri1 = "col-lg-6 order-lg-2" vitri2="col-lg-6 order-lg-1" img ="img/03.jpg" content="Lorem ipsum dolor sit"/>
          
            <Selection title="For those about to "  vitri1 = "col-lg-6 order-lg-2" vitri2="col-lg-6 order-lg-1" img ="img/01.jpg" content="Lorem ipsum"/>
            <Selection title="We salute you!" vitri1 = "col-lg-6 order-lg-1" vitri2="col-lg-6 order-lg-2" img ="img/02.jpg" content="Lorem ipsum dolor sit ."/>
            <Selection title="Let there be rock!" vitri1 = "col-lg-6 order-lg-2" vitri2="col-lg-6 order-lg-1" img ="img/03.jpg" content="Lorem ipsum dolor sit amet, consecteturxercitationem, ea."/>

            <Selection title="For those about to rock..." vitri1 = "col-lg-6 order-lg-2" vitri2="col-lg-6 order-lg-1" img ="img/01.jpg" content="Lorem ipsum dolor caecati."/>
            <Selection title="We salute you!" vitri1 = "col-lg-6 order-lg-1" vitri2="col-lg-6 order-lg-2" img ="img/02.jpg" content="Lorem ipsum dolor sit amet, cet aperiam exercitationem, ea animi blanditiis."/>
            <Selection title="Let there be rock!" vitri1 = "col-lg-6 order-lg-2" vitri2="col-lg-6 order-lg-1" img ="img/03.jpg" content="Lorem ipsum dolor iste esse assumenda amet aperiam exercitationem"/>
          </div>
        </div>
        
        <Footer/>
      </div>
    );
  }
}


export default App;
