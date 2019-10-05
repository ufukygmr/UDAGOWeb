import React from 'react';


import Header from './header';
import Subscribe from './subscribe';
import Footer from './footer';
// import MainStore from './components/store';
import {observer} from 'mobx-react';
import Reference from './reference';

@observer
class ReferencePage extends React.Component{
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
            <Reference />
            <Subscribe />
            <Footer />
        </div>
      </div>
    );
  }
}

export default ReferencePage;
