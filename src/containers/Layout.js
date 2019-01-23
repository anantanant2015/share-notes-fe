
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const {
  Header, Content, Footer, Sider,
} = Layout;


class CustomLayout extends React.Component {
  render() {
    return(
      <Layout>
        <Sider style={{
          overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
        }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <a href="/"><span className="nav-text">Home</span></a>
            </Menu.Item>
            {
                this.props.isAuthenticated ?

                <Menu.Item key="2" onClick={this.props.logout}>
                    Logout
                </Menu.Item>

                :

                <Menu.Item key="2">
                    <Link to="/login">Login</Link>
                </Menu.Item>
              }
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <h2> Share Notes</h2>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Share Notes Web app.
          </Footer>
        </Layout>
      </Layout>
    ); 
  }
}
  

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));