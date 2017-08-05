import React, { Component } from 'react';
import { pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig/options'
import PieReact from './EchartsDemo/PieReact' //饼图组件
import BarReact from './EchartsDemo/BarReact' //柱状图组件
import LineReact from './EchartsDemo/LineReact' //折线图组件
import ScatterReact from './EchartsDemo/ScatterReact' //散点图组件
import MapReact from './EchartsDemo/MapReact' //地图组件
import RadarReact from './EchartsDemo/RadarReact' //雷达图组件
import CandlestickReact from './EchartsDemo/CandlestickReact' //k线图组件

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
