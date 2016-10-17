/**
 * Created by yangtingting on 16/10/12.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import {Table, Icon} from 'antd';
import config from '../../conf/config';

class Templates extends Component{
  constructor(props){
    super(props);
    this.state={
      templates: null
    }
  }

  componentDidMount(){
    $.get(`${config.backend_url}/templates`, (function (d) {
      this.setState({templates: d.data});
    }).bind(this));
  }

  render(){
    const columns=[
      {
        title:'TemplateId',
        dataIndex:'templateid'
      },
      {
        title:'TemplateName',
        dataIndex:'template_name'
      }];

    return(
      <div>
        <h1>模板列表</h1>
        {
          this.state.templates? <Table columns={columns} dataSource={this.state.templates}/> : <Icon type="loading" />
        }
      </div>
    );}
}

export default Templates;


