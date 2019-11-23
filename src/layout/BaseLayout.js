import { Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import AboutPage from '../pages/AboutPage';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import WelcomeGreeting from '../welcome/Greeting';

function BaseLayout({location}) {
  return (
    <div className="base">
      <Wrapper>
        <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames={'translate-and-fade-animation'}
            >
              <section className="route-section">
                <Switch location={location}>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/me" component={ProfilePage} />
                  <Route path="/welcome" component={WelcomeGreeting} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
.translate-and-fade-animation {
  &-enter {
    transform: translateX(-200px);
    opacity: 0.01;
  }
  &-enter-active {
    transform: translateX(-200px);
    opacity: 0.01;
  }
  &-enter-done {
    transform: translateX(0);
    opacity: 1;
    transition: opacity 300ms ease-in, transform 300ms ease-in-out;
  }

  &-exit {
    transform: translateX(0);
    opacity: 1;
  }
  &-exit-active {
    transform: translateX(300px);
    opacity: 0.01;
    transition: opacity 300ms ease-in, transform 300ms ease-in-out;
  }
}

div.transition-group {
  position: relative;
}
section.route-section {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.anim_mobile_selectors {
  &-enter {
      opacity: 0.01;
  }
  &-enter-active {
      opacity: 0.01;
  }
   &-enter-done {
      opacity:1; 
      transition: opacity 500ms linear;
  }
  &-exit {
      opacity:1;
  }
  &-exit-active {
      opacity: 0.01;
      transition: opacity 500ms linear;
  }
}

`

export default withRouter(BaseLayout);
