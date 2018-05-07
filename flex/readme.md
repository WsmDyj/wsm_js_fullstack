# flex 布局
  任何一个容器都可以指定为flex布局  display:flex;
  
  行内元素也可以使用flex布局 display: inline-flex
  * 设为flex布局以后，子元素的float、clear、vertical-align 属性就失效

## 容器的属性
* flex-direction: 决定主轴的方向 row|row-reverse|column|column-reverse |水平向右|水平向左|竖直向下|竖直向上
* flex-wrap  项目排在一条线上 nowrap|wrap|wrap-reverse 不换行|换行
* flex-flow  前两个的合并
* justify-content 主轴的对齐方式 center|space-between|space-around 居中|两端对齐，项目之间都相等|每个项目两侧的间隔相等
* align-items 在交叉轴上对齐 flex-start|flex-end|center|stretch 
* align-content 多跟轴线的对齐方式

## 项目的属性
* order
* flex-grow 
* flex-basis
* flex-basis
* flex 为1，占据剩余的空间
* align-self