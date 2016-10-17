/**
 * Created by yangtingting on 16/10/13.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import { Form, Input } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import Template from '../template/Template';
import Item from '../item/Item';
import config from '../../conf/config';

class Host extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    const hostid = this.props.params.hostid;
    $.get(`${config.backend_url}/group/${hostid}`, (function (d){
      this.setState({hostname: d.host[0]['hostname'], hostid: d.host[0]['hostid'], ip: d.host[0]['ip'], groupname: d.group[0]['name']});
    } ).bind(this));
  }

  render(){
    console.log(this.props)
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return(
      <div>
        <Tabs defaultActiveKey='host'>
          <TabPane tab="Host" key='host'>
            <Form horizontal>
              <FormItem
                {...formItemLayout}
                label="Host name"
              >
                <Input type="text" value={this.state.hostname} />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Ip"
              >
                <Input type="text" value={this.state.ip} />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Group name"
              >
                <Input type="text" value={this.state.groupname} />
              </FormItem>
            </Form>
          </TabPane>
          <TabPane tab="Template" key="template">
            <Template hostid={this.state.hostid}/>
          </TabPane>
          <TabPane tab="Item" key="item">
            <Item hostid={this.state.hostid} push={this.props.history.push}/>
          </TabPane>
        </Tabs>
      </div>


      );}
}

export default Host;