import React from 'react';

// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class Footer extends React.Component{
  render (){
    return (
      <footer class="row">
        <p class="col-12 text-white text-center tm-copyright-text">
          Copyright &copy; 2020 App Landing Page. 
          Designed by <a href="#" class="tm-copyright-link">TemplateMo</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
