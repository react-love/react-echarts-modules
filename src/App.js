import React, { Component } from 'react';
import asyncComponent from './AsyncComponent'
import { pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig/options'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "Pie" */'./EchartsDemo/PieReact'))  //饼图组件
const BarReact = asyncComponent(() => import(/* webpackChunkName: "Bar" */'./EchartsDemo/BarReact')) //柱状图组件
const LineReact = asyncComponent(() => import(/* webpackChunkName: "Line" */'./EchartsDemo/LineReact'))  //折线图组件
const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "Scatter" */'./EchartsDemo/ScatterReact'))  //散点图组件
const MapReact = asyncComponent(() => import(/* webpackChunkName: "Map" */'./EchartsDemo/MapReact'))  //地图组件
const RadarReact = asyncComponent(() => import(/* webpackChunkName: "Radar" */'./EchartsDemo/RadarReact')) //雷达图组件
const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "Candlestick" */'./EchartsDemo/CandlestickReact')) //k线图组件

class App extends Component {
  render() {
    return (
      <div>
        <h2>饼图react组件实现</h2>
        <PieReact option={pieOption} />
        <hr/>
  
        <h2>柱状图react组件实现</h2>
        <BarReact option={barOption} />
        <hr/>
        
        <h2>折线图react组件实现</h2>
        <LineReact option={lineOption} />
        <hr/>
  
        <h2>散点图react组件实现</h2>
        <ScatterReact option={scatterOption} />
        <hr/>
  
        <h2>地图react组件实现</h2>
        <MapReact option={mapOption} height="558px" />
        <hr/>
  
        <h2>雷达图react组件实现</h2>
        <RadarReact option={radarOption} />
        <hr/>
  
        <h2>k线图react组件实现</h2>
        <CandlestickReact option={candlestickOption} />
        <hr/>
      </div>
    );
  }
}

export default App;
