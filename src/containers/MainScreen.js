import React, { Component } from 'react';
import { Layout, Icon, Row, Col  } from 'antd';

import '../App.css';

const {Content} = Layout;

class MainScreen extends Component {
  render() {
    return (
      <div>
        <Layout style={styles.center}>
          <Content>
            <Row type="flex" align="middle" justify="center">
              <div style={{fontSize:'xx-large'}}>18</div>
              <div>
                <div>Safar</div>
                <div>1440 H</div>
              </div>
            </Row>
          </Content>
          <Layout>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="bell" theme="twoTone" twoToneColor="#bbbbbb"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="bell" theme="twoTone" twoToneColor="#52c41a"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="bell" theme="outlined" /></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="bell" theme="filled" /></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="smile" theme="twoTone" twoToneColor="#52c41a"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="meh" theme="twoTone" twoToneColor="#eb2f96"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="smile" theme="twoTone" twoToneColor="#52c41a"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="bell" theme="outlined" /></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
            <Row>
              <Col span={10}>Subuh</Col>
              <Col span={4}><Icon type="close-circle" theme="outlined" twoToneColor="#eb2f96"/></Col>
              <Col span={10}>4:18 am</Col>
            </Row>
          </Layout>
          <Content>
              
              <div><Icon type="setting" theme="filled" style={{marginRight:'5pt'}}/>Tanggerang</div>

          </Content>
        </Layout>
      </div>
    );
  }
}

export default MainScreen;


let styles = {
  center: {
    textAlign: 'center',
  },
};