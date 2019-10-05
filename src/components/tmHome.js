import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class TmHome extends React.Component{
  render (){
    return (
      <section class="row" id="tmHome">
        <div class="col-12 tm-home-container">
          <div class="text-white tm-home-left">
            <p class="text-uppercase tm-slogan">İşİmİz bu, </p>
            <hr class="tm-home-hr" />
            <h2 class="tm-home-title">İşletmeniz için <br/><span style = {{fontSize: '10px;'}}>yazılımsal çözümler geliştiriyoruz</span></h2>
            <p class="tm-home-text">
              Parallo is a landing page template based on Bootstrap v4.3.1 framework. Please tell your friends about TemplateMo. Thank you.
            </p>
            <a href="/about" class="btn btn-primary">Learn More</a>
          </div>
          <div class="tm-home-right" style ={{width: "700px", height: "500px"}} class = "banner-image">
          </div>
        </div>
      </section>
    );
  }
}

export default TmHome;
