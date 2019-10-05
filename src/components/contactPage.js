import React from 'react';

import Header from './header';
import Contact from './contact'
import Subscribe from './subscribe';
import Footer from './footer';
// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class ContactPage extends React.Component{
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
            <Contact />
            <Subscribe />
            <Footer />
        </div>
      </div>
    );
  }
}

export default ContactPage;
