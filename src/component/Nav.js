/**
 * Created by yangtingting on 16/10/12.
 */
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;


class Nav extends Component{
  constructor(props){
    super(props);
    this.state={
      current:''
    }
  }

  handleClick(e) {
    this.props.history.push(`${e.key}`);
  }

  render(){
    return(
      <Menu
        onClick={this.handleClick.bind(this)}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/" style={{fontSize: '30px'}}>Z B X</Menu.Item>
        <SubMenu title={<span><Icon type="eye-o" />查看</span>}>
            <Menu.Item key="/hosts">Hosts</Menu.Item>
            <Menu.Item key="/templates">Templates</Menu.Item>
            <Menu.Item key="/items">Items</Menu.Item>
        </SubMenu>
        <SubMenu title={<span><Icon type="setting" />操作</span>}>
          <SubMenu title={<span><Icon type="setting" />模板</span>}>
            <Menu.Item key="/template/madd">批量添加</Menu.Item>
            <Menu.Item key="/template/remove">remove</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    );}
}

export default Nav;