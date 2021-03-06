import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Switch } from 'antd';
import { setCelsius, setFahrenheit } from '../../redux/actions/app';

import UserControl from '../UserControl/UserControl';

import './Navbar.css';

const { Item } = Menu;

const Navbar = ({ unit, setCelsius, setFahrenheit }) => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
      theme="light"
    >
      <Item key="1" style={{ float: 'left' }}>
        <Link to="/">Home</Link>
      </Item>
      <div className="navbarUserControl">
        <Switch
          checkedChildren="°C"
          unCheckedChildren="°F"
          defaultChecked={unit === 'c'}
          onChange={(event) => {
            return event ? setCelsius() : setFahrenheit();
          }}
        />
        <UserControl />
      </div>
    </Menu>
  );
};

Navbar.propTypes = {
  unit: PropTypes.string.isRequired,
  setCelsius: PropTypes.func.isRequired,
  setFahrenheit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  unit: state.app.unit,
});

const mapDispatchToProps = (dispatch) => ({
  setCelsius: () => dispatch(setCelsius()),
  setFahrenheit: () => dispatch(setFahrenheit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
