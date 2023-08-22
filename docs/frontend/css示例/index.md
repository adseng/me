# css示例

## 拟态盒子按钮

shadow
```css

background: linear-gradient(135deg, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%), #EBECF0;  
background-blend-mode: soft-light, normal;  
box-shadow: 30px 30px 60px 0 #A6ABBD, -30px -30px 60px 0px #FAFBFF;  
  
&:hover {  
  
  background: linear-gradient(318deg, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%), #EBECF0;  
  background-blend-mode: soft-light, normal;  
  box-shadow: 5px 5px 10px 0 #A6ABBD inset, -5px -5px 10px 0px #FAFBFF inset;  
}
```

## 玻璃盒子

```css

background: rgba(255, 255, 255, 0.375);  
box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);

```