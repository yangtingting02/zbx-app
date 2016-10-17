/**
 * Created by yangtingting on 16/10/13.
 */

import React, {Component} from 'react';
import $ from 'jquery';
import { Table, Icon, Select, Button, message, notification, Col, Row } from 'antd';
import config from '../../conf/config';
const Option = Select.Option;


class MAddTemplate extends Component{
  constructor(props){
    super(props);
    this.state={
      hosts: [],
      templates: [],
    }
  }

  componentDidMount(){
    $.get(`${config.backend_url}/hosts`, (function (d) {
      this.setState({hosts: d.data});
    }).bind(this));
    $.get(`${config.backend_url}/templates`, (function (d) {
      this.setState({templates: d.data});
    }).bind(this));
  }

  handleSubmit() {
    console.log(this.state.selectedHosts);
    console.log(this.state.selectedTemplates);
    if(!this.state.selectedHosts || !this.state.selectedTemplates) {
      notification['error']({
        message: '还没选呢',
        description: '你是脑子进水了吗',
      })
    } else {
      const templates = this.state.selectedTemplates.map(tmp => {
        return {
          templateid: tmp,
        }
      });
      const hosts = this.state.selectedHosts.map(host => {
        return {
          hostid: host,
        }
      });
      const data = {
        templates,
        hosts,
      };

      $.ajax ({
        url: `${config.backend_url}/template/add`,
        type: "POST",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(resp){
          console.log(resp);
          if(resp.status === 'success'){
            notification['success']({
              message: '添加成功',
              description: '你真的好牛逼啊',
            })
          } else{
            notification['error']({
              message: '添加失败',
              description: '我也不知道为什么',
            })
          }
        }
      });
    }
  }

  render() {
    return (
      <div>
        <br/>
        <Row>
          <Col span="12"><div>
            <h3>选择模板</h3>
            <br/>
            <Select
              multiple
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={(e) => this.setState({selectedTemplates: e})}
            >
              {
                this.state.templates.map((tmp) => {
                  return <Option key={tmp.templateid}>{tmp.template_name}</Option>
                })
              }
            </Select>
          </div>
          </Col>
          <Col span="12">
            <div>
              <h3>选择主机</h3>
              <br/>
              <Select
                multiple
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={(e) => this.setState({selectedHosts: e})}
              >
                {
                  this.state.hosts.map((host) => {
                    return <Option key={host.hostid}>{host.hostname}</Option>
                  })
                }
              </Select>
            </div>
            <br/>
            <br/>
          </Col>
          <Button
            type="primary"
            onClick={this.handleSubmit.bind(this)}
          >
            提交一个试试
          </Button>
        </Row>
      </div>

    )
  }
}

export default MAddTemplate;
