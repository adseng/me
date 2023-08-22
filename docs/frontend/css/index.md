# css 基础

## 布局
以下是几种常见的 CSS 布局方式，并附带示例：

1. 流动布局 (Flow Layout)：
   流动布局是默认的布局方式，元素按照其在 HTML 中出现的顺序从左到右、从上到下流动。使用流动布局时，不需要添加特定的 CSS 属性或样式。

   示例：

   ```html
   <div>
     <p>这是第一个段落。</p>
     <p>这是第二个段落。</p>
     <p>这是第三个段落。</p>
   </div>
   ```

   在上述示例中，段落元素将按照它们在 HTML 中的出现顺序自动流动。

1. 浮动布局 (Float Layout)：
   浮动布局通过设置元素的浮动属性，使其脱离正常的文档流，并允许其他元素环绕其周围。浮动布局常用于实现多列布局等效果。

   示例：

   ```html
   <style>
     .column {
       float: left;
       width: 33.33%;
     }
   </style>

   <div class="column">这是第一列。</div>
   <div class="column">这是第二列。</div>
   <div class="column">这是第三列。</div>
   ```

   在上述示例中，三个 `div` 元素通过设置浮动属性，实现了等宽的三列布局。

1. 弹性盒子布局 (Flexbox Layout)：
   弹性盒子布局通过设置容器的 `display: flex` 属性，将其内部的子元素排列为水平或垂直方向上的线性布局。弹性盒子布局适用于构建灵活且自适应的布局。

   示例：

   ```html
   <style>
     .container {
       display: flex;
     }

     .item {
       flex: 1;
     }
   </style>

   <div class="container">
     <div class="item">项目 1</div>
     <div class="item">项目 2</div>
     <div class="item">项目 3</div>
   </div>
   ```

   在上述示例中，三个 `.item` 元素通过弹性盒子布局进行水平排列，并平均分配可用空间。

1. 网格布局 (Grid Layout)：
   网格布局通过定义容器的行和列，将其内部的子元素按照网格的方式进行排列。网格布局提供了更高级的布局控制，适用于构建复杂的网格结构。

   示例：

   ```html
   <style>
     .container {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       grid-gap: 10px;
     }
   </style>

   <div class="container">
     <div>项目 1</div>
     <div>项目 2</div>
     <div>项目 3</div>
     <div>项目 4</div>
     <div>项目 5</div>
     <div>项目 6</div>
   </div>
   ```

   在上述示例中，六个 `div` 元素通过网格布局进行排列，每行显示三个项目，并设置了项目之间的间距。

这些是一些常见的 CSS 布局方式的示例，它们可以帮助你实现各种不同的页面布局效果。根据你的具体需求，选择适合的布局方式，并根据需要进行自定义和调整。



## 文字 
### 排列


```css

writing-mode: vertical-rl; /* 设置文字竖排 */
text-orientation: mixed; /* 兼容不同浏览器的竖排效果 */

```