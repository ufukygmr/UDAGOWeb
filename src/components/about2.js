import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class About2 extends React.Component{
  render (){
    return (
        <section id="tmAppFeatures">
            <div class="row">
                <header class="col-12 text-center text-white tm-bg-black-transparent p-5 tm-app-header">
                    <h2 class="text-uppercase mb-3 tm-app-feature-header">App Features</h2>
                    <p class="mb-0 small">Suspendisse finibus tellus eget sem lacinia, vel lacinia libero consequat. Sed imperdiet placerat vehicula.</p>
                </header>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa-air-freshener tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title">Phasellus est lorem</h3>
                            <p class="tm-app-feature-description">Suspendisse finibus tellus eget sem lacinia, vel lacinia libero consequat. Sed imperdiet placerat vehicula. Etiam eu egestas nibh. In turpis ligula.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa-binoculars tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title">Proin scelerisque</h3>
                            <p class="tm-app-feature-description">Etiam fermentum nisi lorem, vel pharetra ipsum egestas non. Proin odio ipsum, vestibulum quis elit quis, vulputate venenatis neque. Nam dignissim libero.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa-campground tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title">Integer tempor</h3>
                            <p class="tm-app-feature-description">Aliquam erat volutpat. Phasellus a odio eget enim luctus vestibulum nec sed tellus. Pellentesque aliquam sem quis lobortis laoreet. Donec egestas.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa-fire tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title">Curabitur dignissim</h3>
                            <p class="tm-app-feature-description">Donec ut odio nec nisl feugiat dictum. Quisque sit amet mattis dolor. Morbi et erat vestibulum, finibus nunc quis, fermentum eros. Cras laoreet eros.</p>
                        </div>
                    </div>
                </div>
            </div>
          
        </section>
    );
  }
}

export default About2;
