### react15.6.1实现echarts模块化加载

**我们真的需要react-echarts插件吗？**

## NO

**在这里，我使用echarts提供的模块化加载方式，实现了几个react-echarts图表组件：[react-echarts图表在线渲染查看][1]**

#### 插件版本号

```json
  "echarts": "^3.6.2",
  "react": "^15.6.1",
  "react-dom": "^15.6.1"
```

#### 实现了哪些图表组件

1、饼图

2、柱状图

3、折线图

4、散点图

5、地图

6、雷达图

7、k线图

#### 打包成静态文件的大小

js：944 kb

css：92 字节

#### github page 开启gzip测试

js：357 kb

css：277 B


#### 我们不总是需要插件

实现这些echarts-react组件的目的，是告诉大家，react可以不需要引入第三方插件，使用echarts，不要惧怕react组件！

看过很多人说react难写，因为他们习惯了在jQuery开发模式下导入echarts、swiper、d3等插件。而突然切换到react中，就产生了不知所措的感觉。
如何在react中导入第三方插件，成为了他们心中的痛点，所以一些人就认为需要别人封装好的echarts-react插件或者其他react插件，才能使用，这种想法是错的。


#### echarts体积太大，使用模块化加载

以柱状图为例子，我们根据需要渲染的插件采取模块导入，不渲染的组件不导入，最大程度减小js大小。

```javascript
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
```


[1]: https://hyy1115.github.io/react-echarts-modules/index.html