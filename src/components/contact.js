import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render (){
        return (
            <div>
                <section class="row" id="tmServices">
                    <div class="col-12">
                        <div class="parallax-window tm-services-parallax-header tm-testimonials-parallax-header"
                            data-parallax="scroll"
                            data-z-index="101"
                            data-image-src="img/people.jpg">

                            <div class="tm-bg-black-transparent text-center tm-services-header tm-testimonials-header">
                                <h2 class="text-uppercase tm-services-page-title tm-testimonials-page-title">Contact</h2>
                                <p class="tm-services-description mb-0 small">
                                    Parallax movement background page "people" for contact page
                                </p>
                            </div>
                        </div>
                    </div>   
                    </section>

                    <section class="row tm-contact-row">
                        <div class="col-lg-6 tm-contact-col-left">
                            <form action="https://getform.io/f/e94edd0f-1629-42ee-800e-07d34596651e" method="POST" id="tmContactForm" class="tm-bg-black-transparent tm-contact-form">
                            <div class="form-group">
                                <input type="text" id="contact_name" name="contact_name" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Name" required="" />
                            </div>
                            <div class="form-group">
                                <input type="email" id="contact_email" name="contact_email" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Email" required="" />
                            </div>
                            <div class="form-group">
                                <textarea rows="6" id="contact_message" name="contact_message" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Message" required=""></textarea>
                            </div>
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary tm-btn-submit rounded-0">
                                Submit
                                </button>
                            </div>
                            </form>
                        </div>
                        <div class="col-lg-6 tm-contact-col-right">
                            <div class="tm-bg-black-transparent tm-contact-text">
                                        
                                <i class="mx-auto mb-5 fas fa-3x fa-address-card tm-app-feature-icon"></i>
                                
                                <h3 class="tm-service-tab-title">Maecenas in aliquam lorem</h3>
                                <p class="tm-service-tab-p">
                                    Proin rutrum massa quis erat mollis iaculis. Vestibulum
                                    a risus ex. Nunc rhoncus, justo at blandit cursus, orci
                                    erat molestie felis, id ullamcorper mauris felis eu eros.
                                </p>                            
                                <p class="mb-0">
                                    Donec turpis augue, mollis eu erat in, posuere congue 
                                    sapien.  Maecenas facilisis dui sit amet ornare aliquam.
                                    Paesent malesuada mi a est pulvinar.
                                </p>
                            </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Contact;
