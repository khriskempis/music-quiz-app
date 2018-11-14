import React, { Component } from 'react';
import Hero from './hero';
import Navigation from '../../components/navigation';
import Details from './details';
import Features from './features';
import Footer from '../../components/footer';
import RegisterForm from '../../components/registerForm';



import './landing.css';

class Landing extends Component {
  render() {
    return (

      <div className="landing-page">        
          <Navigation />
          <main>
            <Hero />

          <section>
            <Details />
          </section>

          <section>
            <Features />
          </section>

          <section>
            <RegisterForm />
          </section>


          <Footer />
          </main>

      </div>
    );
  }
}

export default Landing;