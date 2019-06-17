import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import config from '../../config/index.js';

import { Menu, Dropdown, Icon } from 'antd';



class Navbar extends Component {

    static propTypes = {
        style: PropTypes.object,
    }

    

  
    render() {
        const menu1 = (
            <Menu>
              <Menu.Item>
                <a rel="noopener noreferrer" href="# ">
                  Souscription 1 
                </a>
              </Menu.Item>
              <Menu.Item>
                <a rel="noopener noreferrer" href="# ">
                  Souscription 2
                </a>
              </Menu.Item>
              <Menu.Item>
                <a rel="noopener noreferrer" href="# ">
                  Souscription 3
                </a>
              </Menu.Item>
            </Menu>
          );

          const menu2 = (
            <Menu>
              <Menu.Item>
                <a rel="noopener noreferrer" href="# ">
                  Profil
                </a>
              </Menu.Item>
              <Menu.Item>
                <a rel="noopener noreferrer" href="# ">
                  Déconnexion
                </a>
              </Menu.Item>
            </Menu>
          );

        const user = config.user1[0]
        return (
            <div className="navbar-container">
                <div className="navbar-navigation">
                    <p><Icon type="home" style={{ fontSize: '40px'}} /></p>
                    <p><span>Tableau de bord</span></p>
                    <Dropdown overlay={menu1}>
                        <a className="ant-dropdown-link" href="# ">
                        Souscriptions <Icon type="down" className="icon-down" style={{color:'#00a5f2'}}/>
                        </a>
                    </Dropdown>
                </div>
                <div className="navbar-personal-infos">
                
                    <p className={`${user.notifications > 0 ? 'icon-bell' : ''}`} content={user.notifications}>
                        <Icon type="bell" style={{ fontSize: '19px', color:'#00a5f2'}}/>
                    </p>
                    <Dropdown overlay={menu2}>
                        <a className="ant-dropdown-link" href="# ">
                        {user.firstName} {user.lastName} <Icon type="down" className="icon-down" style={{color:'#00a5f2'}}/>
                        </a>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default Navbar;
