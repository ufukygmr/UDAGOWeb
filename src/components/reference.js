import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class Reference extends React.Component{
  render (){
    return (
        <div>
            <section class="row" id="tmServices">
                <div class="col-12">
                    <div class="parallax-window tm-services-parallax-header tm-testimonials-parallax-header"
                        data-parallax="scroll"
                        data-z-index="101"
                        data-image-src="img/ice-mountain.jpg">

                        <div class="tm-bg-black-transparent text-center tm-services-header tm-testimonials-header">
                            <h2 class="text-uppercase tm-services-page-title tm-testimonials-page-title">Testimonials</h2>
                            <p class="tm-services-description mb-0 small">
                                Parallax movement background page ice mountain for testimonials.   
                            </p>
                        </div>
                    </div>
                </div>   
                </section>

                <section class="row tm-testimonials-section">
                    <div class="col-12 tm-carousel">              
                        <div class="tm-bg-black-transparent tm-testimonial-box text-center">                    
                        <div class="tm-person-img-container">
                            <img src="img/person-1.png" alt="Image" class="img-fluid mx-auto"/>
                        </div>              
                        <h3 class="tm-about-name tm-uppercase">Praesent ornare</h3>
                        <p class="tm-about-description">
                            Vestibulum semper dolor sed elit mattis placerat cursus sed ac urna. Mauris eget suscipit purus, id ullamcorper mi. Mauris eu velit semper turpis semper.
                        </p>
                        </div>

                        <div class="tm-bg-black-transparent tm-testimonial-box text-center">
                        <div class="tm-person-img-container">
                            <img src="img/person-2.png" alt="Image" class="img-fluid mx-auto"/>
                        </div>              
                        <h3 class="tm-about-name tm-uppercase">Maecenas Pretium</h3>
                        <p class="tm-about-description">
                            Fusce pellenteqeue nunc sed orci mattis mattis. Etiam porttitor bibendum ligula eu saggittis. Duis lacus mi, tincidunt ut massa elementum, volutpat.
                        </p>
                        </div>

                        <div class="tm-bg-black-transparent tm-testimonial-box text-center">
                        <div class="tm-person-img-container">
                            <img src="img/person-3.png" alt="Image" class="img-fluid mx-auto"/>
                        </div>              
                        <h3 class="tm-about-name tm-uppercase">Nulla Quis Magna</h3>
                        <p class="tm-about-description">
                            Donec id ante nulla. Quisque vestibulum dapibus neque. Nam ex massa, fringilla ac tortor a, porta quismod mi. Maecenas gravida maximus ultrices.
                        </p>
                        </div>

                        <div class="tm-bg-black-transparent tm-testimonial-box text-center">
                        <div class="tm-person-img-container">
                            <img src="img/person-1.png" alt="Image" class="img-fluid mx-auto"/>
                        </div>              
                        <h3 class="tm-about-name tm-uppercase">Praesent ornare</h3>
                        <p class="tm-about-description">
                            Vestibulum semper dolor sed elit placerat cursus sed ac urna. Mauris eget suscipit purus, id ullamcorper mi. Mauris eu velit semper turpis semper.
                        </p>
                        </div>    
                        <div class="tm-bg-black-transparent tm-testimonial-box text-center">
                        <div class="tm-person-img-container">
                            <img src="img/person-2.png" alt="Image" class="img-fluid mx-auto"/>
                        </div>              
                        <h3 class="tm-about-name tm-uppercase">Maecenas Pretium</h3>
                        <p class="tm-about-description">
                            Fusce pellenteqeue nunc sed orci mattis mattis. Etiam porttitor bibendum ligula eu saggittis. Duis lacus mi, tincidunt ut massa elementum, volutpat.
                        </p>
                        </div>

                        <div class="tm-bg-black-transparent tm-testimonial-box text-center">
                        <div class="tm-person-img-container">
                            <img src="img/person-3.png" alt="Image" class="img-fluid mx-auto"/>
                        </div>              
                        <h3 class="tm-about-name tm-uppercase">Nulla Quis Magna</h3>
                        <p class="tm-about-description">
                            Donec id ante nulla. Quisque vestibulum dapibus neque. Nam ex massa, fringilla ac tortor a, porta quismod mi. Maecenas gravida maximus ultrices.
                        </p>
                        </div>          
                </div>
                </section>
        </div>
    );
  }
}

export default Reference;
