import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class About1 extends React.Component{
  render (){
    return (
        <section class="row" id="tmAbout">
            <header class="col-12 tm-about-header">
                <h2 class="text-uppercase text-center text-dark tm-about-page-title">About this app</h2>
                <hr class="tm-about-title-hr"/>
            </header>
            <div class="col-lg-4">
                <div class="tm-bg-black-transparent tm-about-box">
                    <div class="tm-about-number-container">0.1</div>              
                    <h3 class="tm-about-name">Best Quality</h3>
                    <p class="tm-about-description">
                    Integer dapibus aliquam accumsan. Nam diam elit, mollis quis elit sed, hendrerit dapibus eros. Cras auctor laoreet tortor eget. BG #0F1D20
                    </p>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="tm-bg-black-transparent tm-about-box">
                    <div class="tm-about-number-container">0.2</div>              
                    <h3 class="tm-about-name">Satisfaction</h3>
                    <p class="tm-about-description">
                    Parallo is a HTML landing page template based on Bootstrap v4.3.1 framework. Please tell your friends about TemplateMo.
                    </p>
                    <a href="#tmFeatures" class="btn btn-tertiary tm-btn-app-feature">More</a>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="tm-bg-black-transparent tm-about-box">
                    <div class="tm-about-number-container">0.3</div>              
                    <h3 class="tm-about-name">High Return</h3>
                    <p class="tm-about-description">
                    You are allowed to use this for commercial purpose or personal site.
                    </p>
                    <p class="tm-about-description">
                    You are NOT allowed to redistribute this template on any download site or template collection sites.
                    </p>
                    <a href="#tmFeatures" class="btn btn-secondary tm-btn-app-feature">Details</a>
                </div>
            </div>
        </section>
    );
  }
}

export default About1;
