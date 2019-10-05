import React from 'react';

import TmHome from './tmHome';
import Header from './header';
import TmFeatures from './tmFeatures';
import Subscribe from './subscribe';
import Footer from './footer';
// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render (){
    return (
      <div class="parallax-window" data-parallax="scroll">
        <div class="container-fluid">
            <Header />
            <TmHome />
            <TmFeatures />
            <Subscribe />
            <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
