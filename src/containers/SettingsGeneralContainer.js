import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const styles = {
  container: {
    padding: '8px'
  }
};

class SettingsGeneralContainer extends Component {
  render() {
    return (
      <div style={styles.container}>
        <p>
          <Checkbox>Display next prayer in menu bar</Checkbox>
        </p>
        <p>
          <Checkbox>Display icon in menu bar</Checkbox>
        </p>
        <hr />
        <p>
          <Checkbox>Start prayer times at login</Checkbox>
        </p>
      </div>
    );
  }
}

SettingsGeneralContainer.propTypes = {};

export default SettingsGeneralContainer;
