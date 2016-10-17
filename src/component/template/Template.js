/**
 * Created by yangtingting on 16/10/13.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import { Table, Card } from 'antd';
import config from '../../conf/config';


class Template extends Component{
  constructor(props){
    super(props);
    this.state={
      f:false,
      templates: [],
    }
  }


  render(){
    if(!this.state.f){
      $.get(`${config.backend_url}/templates/${this.props.hostid}`, (function (d) {
        this.setState({templates: d['linked-template'], f:true});
        console.log(this.state.templates);
      }).bind(this));
    }

    const columns = [{
      title: 'Linked_template',
      dataIndex: 'template_name',
    }];

    return(
      <Table columns={columns} dataSource={this.state.templates}/>
    );}
}

export default Template;

