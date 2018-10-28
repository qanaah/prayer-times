import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

class SettingsScreen extends Component {
  callback = key => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane
            tab={
              <span>
                <Icon type="sliders" />
                General
              </span>
            }
            key="1"
          >
            General
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="environment" />
                Location
              </span>
            }
            key="2"
          >
            Location
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="clock-circle" />
                Prayer Times
              </span>
            }
            key="3"
          >
            Prayer Times
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="notification" />
                Notifications
              </span>
            }
            key="4"
          >
            Notifications
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="setting" />
                Advanced
              </span>
            }
            key="5"
          >
            Advanced
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

SettingsScreen.propTypes = {};

export default SettingsScreen;
