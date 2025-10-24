# AI工具导航页面

一个现代化的AI工具集合导航页面，采用纯前端技术实现。

##   功能特点

- 🎯 **13个AI工具分类**：涵盖视频、编程、聊天、写作等各个领域
- 📱 **响应式设计**：支持桌面、平板、手机等多种设备
- ⚡ **快速切换**：点击左侧导航即可切换不同分类
- 🎨 **现代UI**：简洁美观的界面设计
- 🔍 **智能搜索**：支持工具名称和描述搜索
- 💾 **本地存储**：记住用户选择的分类

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 交互逻辑
- **CSS Grid + Flexbox** - 响应式布局
- **无依赖** - 纯原生技术实现

## 项目结构

```
aitools/
├── index.html          # 主页面
├── css/
│   ├── style.css       # 主样式文件
│   └── responsive.css  # 响应式样式
├── js/
│   ├── main.js         # 主要逻辑
│   └── data.js         # 数据文件
└── README.md           # 说明文档
```

## 使用方法

1. 直接在浏览器中打开 `index.html`
2. 点击左侧导航栏切换不同分类
3. 点击工具卡片查看详细信息
4. 使用"查看更多"链接浏览更多工具

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 自定义

### 添加新工具

在 `js/data.js` 文件中找到对应的分类，在 `tools` 数组中添加新工具：

```javascript
{
    name: '工具名称',
    description: '工具描述',
    logo: '🎯',
    url: 'https://example.com'
}
```

### 修改样式

- 主样式：编辑 `css/style.css`
- 响应式：编辑 `css/responsive.css`
- 主题色：修改CSS变量

### 添加新分类

在 `js/data.js` 的 `toolCategories` 数组中添加新分类：

```javascript
{
    id: 'new-category',
    name: '新分类名称',
    icon: '🎯',
    tools: [...]
}
```

## 部署

可以直接部署到任何静态网站托管服务：

- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS
- 腾讯云COS

## 许可证

MIT License
