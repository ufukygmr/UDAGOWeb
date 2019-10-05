import React from 'react';

import Header from './header';
import Subscribe from './subscribe';
import Footer from './footer';
// import MainStore from './components/store';
import {observer} from 'mobx-react';
import About1 from './about1';
import About2 from './about2';

@observer
class AboutPage extends React.Component{
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
            <About1 />
            <About2 />
            <Subscribe />
            <Footer />
        </div>
      </div>
    );
  }
}

export default AboutPage;
