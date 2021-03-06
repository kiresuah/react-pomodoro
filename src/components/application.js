if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';

import Modal from './modal';
import Clock from './clock';

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    window.localStorage.setItem('visited', true);
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const modal = (
      <Modal
        close={this.hideModal}
        text={'Welcome to React Pomodoro, made for Free Code Camp!'}
      />
    );
    
    return (
      <div>
        {showModal ? modal : ''}
        <div id="app-container" style={showModal ? { opacity: '0.3' } : {}} >
          <Clock start={25} labelCount={12} />
        </div>
        <div id="footer" onClick={() => window.open('https://github.com/kiresuah/react-pomodoro', '_blank')}>
          <img height="55" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
          <span id="info-tab">Application created by Erik Niehaus</span>
        </div>
      </div>
    );
  }
}
