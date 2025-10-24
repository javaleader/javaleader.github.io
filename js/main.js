// 全局变量
let currentCategory = 'chat'; // 默认显示AI聊天助手分类
let isLoading = false;

// DOM元素
const navList = document.getElementById('navList');
const categoryTitle = document.getElementById('categoryTitle');
const toolsGrid = document.getElementById('toolsGrid');
const viewMore = document.getElementById('viewMore');
const backToTop = document.getElementById('backToTop');

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    showLoading();
    
    // 模拟加载延迟，提供更好的用户体验
    setTimeout(() => {
        renderNavigation();
        renderTools(currentCategory);
        hideLoading();
    }, 500);
});

// 初始化应用
function initializeApp() {
    // 检查是否有保存的当前分类
    const savedCategory = localStorage.getItem('currentCategory');
    if (savedCategory && toolCategories.find(cat => cat.id === savedCategory)) {
        currentCategory = savedCategory;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 返回顶部按钮
    backToTop.addEventListener('click', scrollToTop);
    
    // 滚动事件监听
    window.addEventListener('scroll', handleScroll);
    
    // 窗口大小改变事件
    window.addEventListener('resize', debounce(handleResize, 250));
}

// 渲染导航栏
function renderNavigation() {
    if (!navList) return;
    
    navList.innerHTML = '';
    
    toolCategories.forEach(category => {
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        
        const navLink = document.createElement('a');
        navLink.className = `nav-link ${category.id === currentCategory ? 'active' : ''}`;
        navLink.href = '#';
        navLink.dataset.category = category.id;
        
        navLink.innerHTML = `
            <span class="nav-icon">${category.icon}</span>
            <span class="nav-text">${category.name}</span>
        `;
        
        // 添加点击事件
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            switchCategory(category.id);
        });
        
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
}

// 切换分类
function switchCategory(categoryId) {
    if (isLoading || categoryId === currentCategory) return;
    
    const category = toolCategories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    currentCategory = categoryId;
    
    // 更新导航状态
    updateNavigationState();
    
    // 更新标题
    categoryTitle.textContent = category.name;
    
    // 更新查看更多链接
    updateViewMoreLink(category);
    
    // 显示加载状态
    showLoading();
    
    // 渲染新分类的工具
    setTimeout(() => {
        renderTools(categoryId);
        hideLoading();
        
        // 保存当前分类到本地存储
        localStorage.setItem('currentCategory', categoryId);
    }, 300);
}

// 更新导航状态
function updateNavigationState() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.dataset.category === currentCategory) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 更新查看更多链接
function updateViewMoreLink(category) {
    if (viewMore) {
        //viewMore.href = `#category-${category.id}`;
        viewMore.href = 'https://app.aibase.com/zh/tools';
        viewMore.textContent = '查看更多>';
    }
}

// 渲染工具卡片
function renderTools(categoryId) {
    if (!toolsGrid) return;
    
    const category = toolCategories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    toolsGrid.innerHTML = '';
    
    // 显示前12个工具
    const toolsToShow = category.tools.slice(0, 12);
    
    toolsToShow.forEach((tool, index) => {
        const toolCard = createToolCard(tool, index);
        toolsGrid.appendChild(toolCard);
    });
    
    // 添加淡入动画
    setTimeout(() => {
        const cards = toolsGrid.querySelectorAll('.tool-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 100);
}

// 创建工具卡片
function createToolCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.3s ease';
    
    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-logo">${tool.logo}</div>
            <h3 class="tool-name">${tool.name}</h3>
        </div>
        <p class="tool-description">${tool.description}</p>
    `;
    
    // 添加点击事件
    card.addEventListener('click', function() {
        handleToolClick(tool);
    });
    
    // 添加键盘支持
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToolClick(tool);
        }
    });
    
    return card;
}

// 处理工具点击
function handleToolClick(tool) {
    // 添加点击效果
    const card = event.currentTarget;
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    // 这里可以添加实际的跳转逻辑
    if (tool.url && tool.url !== '#') {
        window.open(tool.url, '_blank');
    } else {
        // 显示提示信息
        showToolInfo(tool);
    }
}

// 显示工具信息
function showToolInfo(tool) {
    // 简单的提示实现，可以后续扩展为模态框
    const message = `点击了 ${tool.name}：${tool.description}`;
    console.log(message);
    
    // 可以添加更友好的提示方式
    if (navigator.vibrate) {
        navigator.vibrate(50); // 轻微震动反馈
    }
}

// 显示加载状态
function showLoading() {
    isLoading = true;
    if (toolsGrid) {
        toolsGrid.innerHTML = '<div class="loading">正在加载工具...</div>';
    }
}

// 隐藏加载状态
function hideLoading() {
    isLoading = false;
}

// 处理滚动事件
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 显示/隐藏返回顶部按钮
    if (scrollTop > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// 滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 处理窗口大小改变
function handleResize() {
    // 重新计算布局
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：获取当前分类
function getCurrentCategory() {
    return toolCategories.find(cat => cat.id === currentCategory);
}

// 工具函数：搜索工具
function searchTools(query) {
    const results = [];
    toolCategories.forEach(category => {
        category.tools.forEach(tool => {
            if (tool.name.toLowerCase().includes(query.toLowerCase()) ||
                tool.description.toLowerCase().includes(query.toLowerCase())) {
                results.push({ ...tool, category: category.name });
            }
        });
    });
    return results;
}

// 工具函数：获取随机工具
function getRandomTools(count = 6) {
    const allTools = [];
    toolCategories.forEach(category => {
        category.tools.forEach(tool => {
            allTools.push({ ...tool, category: category.name });
        });
    });
    
    const shuffled = allTools.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 导出函数供外部使用
window.AIToolsApp = {
    switchCategory,
    getCurrentCategory,
    searchTools,
    getRandomTools,
    scrollToTop
};
