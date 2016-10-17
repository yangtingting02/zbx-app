/**
 * Created by yangtingting on 16/10/12.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import {Table, Icon} from 'antd';
import config from '../../conf/config';

class Items extends Component{
  constructor(props){
    super(props);
    this.state={
      items: null
    }
  }

  componentDidMount(){
    $.get(`${config.backend_url}/items`, (function (d) {
      this.setState({items: d.items});
    }).bind(this));
  }

  render(){
    const columns=[
      {
        title: 'ItemId',
        dataIndex: 'itemid'
      },
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Key',
        dataIndex: 'key'
      },
      {
        title: 'Interval',
        dataIndex: 'delay'
      },
      {
        title: 'History',
        dataIndex: 'history'
      },
      {
        title: 'Trends',
        dataIndex: 'trends'
      }];
    return(
      <div>
        <h1>Item列表</h1>
        {
          this.state.items? <Table columns={columns} dataSource={this.state.items}/> : <Icon type="loading" />
        }
      </div>
    );}
}

export default Items;