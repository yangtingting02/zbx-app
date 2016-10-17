/**
 * Created by yangtingting on 16/10/14.
 */
import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';
import config from '../../conf/config';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      xdata: [],
      ydata: []
    };
    const that = this;
    const { hostid, itemid } = this.props.params;
    setInterval((function () {
      $.get(`${config.backend_url}/host/${hostid}/items/${itemid}`, function (res) {
        const xdata = res.data.map((d) => {
          return new Date(parseInt(d.clock) * 1000).toLocaleTimeString();
        });
        const ydata = res.data.map((d) => {
          return parseFloat(d.value);
        });
        that.setState({xdata: xdata.reverse(), ydata: ydata.reverse()});
      });
    }), 1000)
  }
  getOption(){
    const option = {
      title: {
        text: '监控数据',
      },
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          name: '时间',
          data: this.state.xdata,
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: 'Value',
          max: 2,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name:'value',
          type:'line',
          data:this.state.ydata,
        }
      ]
    };
    return option
  }


  render(){
    console.log(this.state)
    return(
      <div>
        <ReactEcharts ref='echarts_react' option={this.getOption()} />
      </div>
    )
  }
}

export default Chart;

