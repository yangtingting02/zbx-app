/**
 * Created by yangtingting on 16/10/14.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import { Table, Icon } from 'antd';

import config from '../../conf/config';


class Item extends Component{
  constructor(props){
    super(props);
    this.state={
      items: [],
    }
  }

  componentDidMount(){
    $.get(`${config.backend_url}/items/${this.props.hostid}`, (function (d) {
      this.setState({items: d['items'], f:true});
    }).bind(this));
  }

  render(){
    const hostid = this.props.hostid;
    const push = this.props.push;
    const columns = [
      {
        title: '操作',
        render: (text, record) => {
          return (
            <a onClick={() => {
                push(`/chart/${hostid}/${record.itemid}`)
            }}
            >
            查看<Icon type="area-chart"/>
          </a>
          )
        }
      },
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
      <Table columns={columns} dataSource={this.state.items}/>
    );}
}

export default Item;

