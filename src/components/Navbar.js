import React, { Component } from 'react';
import { Menu, Header, Modal, Button } from 'semantic-ui-react';
import '../styling/customize.css';

class Navbar extends Component {
  state = { }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu id='navbar'>
        <Header position='left' id='header' style={{ color: 'brown', fontSize: '2rem', fontFamily: 'Lexend Giga' }}>
          Flashcard Hub
          </Header>
        <Menu.Menu position='right'>
        <Modal id='instructions' basic size='small' trigger={<Button id='info'>How It Works</Button>}>
          <p>Text goes here</p>
        </Modal>
          <Menu.Item style={{ color: 'orange' }}
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            Log In
          </Menu.Item>
          <Menu.Item style={{ color: '#E58869' }}
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;

