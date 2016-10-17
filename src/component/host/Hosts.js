/**
 * Created by yangtingting on 16/10/12.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import {Table, Icon} from 'antd';
import config from '../../conf/config';


class Hosts extends Component{
  constructor(props){
    super(props);
    this.state={
      hosts: null
    }
  }

  componentDidMount(){
      $.get(`${config.backend_url}/hosts`, (function (d) {
        this.setState({hosts: d.data, f:true});
      }).bind(this));
  }

  render(){
    const columns = [{
      title: 'Hostid',
      dataIndex: 'hostid',
      render: (text, record, index) => {
        console.log(text, record, index);
        return <a onClick={() => this.props.history.push(`/hosts/${text}`)}>{text}</a>
      }
      },
     {
      title: 'Hostname',
      dataIndex: 'hostname',
    }, {
      title: 'IP',
      dataIndex: 'ip',
    }];

    return(
      <div>
        <h1>主机列表</h1>
        {
          this.state.hosts? <Table columns={columns} dataSource={this.state.hosts}/> : <Icon type="loading" />
        }
      </div>
    );}
}

export default Hosts;
