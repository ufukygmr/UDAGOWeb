import React from 'react';

import Service1 from './service1';
import Header from './header';
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
            <Service1 />
            <Subscribe />
            <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
