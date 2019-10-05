import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class Subscribe extends React.Component{
  render (){
    return (
      <section class="row" id="tmCallToAction">
        <div class="col-12 tm-call-to-action-col">
          <img src={require("./../assets/img/call-to-action.jpg")} alt="Image" class="img-fluid tm-call-to-action-image" />
          <div class="tm-bg-white tm-call-to-action-text">
            <h2 class="tm-call-to-action-title">Images by Unsplash</h2>
            <p class="tm-call-to-action-description">
              You may browse <a rel="nofollow" href="#">Too CSS</a> website for the collection of CSS templates for your projects. Aliquam erat volutpat. Nulla eros est,
              imperdiet vel feugiat non, ullamcorper mattis nulla.
            </p>
            <form action="https://getform.io/f/92e2dfea-3bfa-4370-b9af-801464ead4e5" method="POST" class="tm-call-to-action-form">                
              <input name="email" type="email" class="tm-email-input" id="email" placeholder="Email" />
              <button type="submit" class="btn btn-secondary">Get Updates</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;
