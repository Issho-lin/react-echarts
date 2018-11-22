import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import './index.less';
class Bar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            yData: [5, 20, 36, 10, 10, 20]
        }
    }

    componentDidMount() {
        let myBar = echarts.init(document.getElementById('bar'));
        myBar.setOption({
            title: {
              text: '服饰'
            },
            itemStyle: {
              color: 'skyblue'
            },
            tooltip: {},
            xAxis: {
              data: this.state.xData
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: this.state.yData
            }]
        });
    }

    render() {
        return (
            <div id='bar'>
                
            </div>
        );
    }
    
}

export default Bar;