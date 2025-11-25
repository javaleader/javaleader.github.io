// AI工具分类数据
const toolCategories = [
    {
        id: 'myuse',
        name: '常用推荐',
        icon: '🎥',
        tools: [
            {
                name: '通义千问',
                description: 'https://www.tongyi.com/',
                logo: '👤',
                url: 'https://www.tongyi.com/'
            },
            {
                name: '豆包',
                description: 'https://www.doubao.com/chat/',
                logo: '👤',
                url: 'https://www.doubao.com/chat/'
            },
            {
                name: '百度修图',
                description: 'https://image.baidu.com',
                logo: '👤',
                url: 'https://image.baidu.com/search/index?showMask=1&fr=csaitab&tn=baiduimage&toolType=3&word=bdaitpzs%E7%99%BE%E5%BA%A6AI%E5%9B%BE%E7%89%87%E5%8A%A9%E6%89%8Bbdaitpzs'
            },
            {
                name: 'Vercel',
                description: 'https://vercel.com/',
                logo: '👤',
                url: 'https://vercel.com/'
            },
            {
                name: '查询天气',
                description: 'https://weather-app-nine-iota-93.vercel.app/',
                logo: '👤',
                url: 'https://weather-app-nine-iota-93.vercel.app/'
            },
            {
                name: '阿里百炼',
                description: 'https://bailian.console.aliyun.com/',
                logo: '👤',
                url: 'https://bailian.console.aliyun.com/'
            },
            {
                name: 'AIBASE',
                description: 'https://www.aibase.com/zh',
                logo: '👤',
                url: 'https://www.aibase.com/zh'
            },
            {
                name: 'Github',
                description: 'http://gitgub.com/',
                logo: '👤',
                url: 'http://gitgub.com/'
            },
            {
                name: 'rewardscore',
                description: '古诗词学习与积分兑换系统',
                logo: '🤗',
                url: 'https://weidoutao.github.io/rewardscore/'
            }
        ]
    },
    {
        id: 'video',
        name: 'AI视频工具',
        icon: '🎥',
        tools: [
            {
                name: 'Runway ML',
                description: '专业的AI视频编辑和生成平台，支持视频剪辑、特效制作',
                logo: '🎬',
                url: '#'
            },
            {
                name: 'Synthesia',
                description: 'AI视频制作平台，可以创建虚拟主播视频',
                logo: '🎭',
                url: '#'
            },
            {
                name: 'D-ID',
                description: 'AI人脸动画技术，让静态照片动起来',
                logo: '👤',
                url: '#'
            },
            {
                name: 'Lumen5',
                description: 'AI视频制作工具，将文本转换为视频内容',
                logo: '📹',
                url: '#'
            },
            {
                name: 'Pictory',
                description: 'AI视频编辑平台，自动生成视频内容',
                logo: '🎞️',
                url: '#'
            },
            {
                name: 'InVideo',
                description: '在线视频制作工具，支持AI模板和自动编辑',
                logo: '🎪',
                url: '#'
            },
            {
                name: 'FlexClip',
                description: 'AI驱动的视频制作平台，简单易用',
                logo: '🎨',
                url: '#'
            },
            {
                name: 'Kapwing',
                description: '在线视频编辑工具，支持AI功能',
                logo: '🎯',
                url: '#'
            },
            {
                name: 'Animoto',
                description: 'AI视频制作平台，快速创建专业视频',
                logo: '🎪',
                url: '#'
            },
            {
                name: 'Biteable',
                description: 'AI视频制作工具，适合营销和社交媒体',
                logo: '🎬',
                url: '#'
            },
            {
                name: 'Renderforest',
                description: 'AI视频和动画制作平台',
                logo: '🌲',
                url: '#'
            },
            {
                name: 'Wideo',
                description: '在线视频制作工具，支持AI模板',
                logo: '🎥',
                url: '#'
            }
        ]
    },
    {
        id: 'programming',
        name: 'AI编程工具',
        icon: '🔧',
        tools: [
            {
                name: 'GitHub Copilot',
                description: 'AI编程助手，提供智能代码建议和自动补全',
                logo: '🤖',
                url: '#'
            },
            {
                name: 'Tabnine',
                description: 'AI代码补全工具，支持多种编程语言',
                logo: '⚡',
                url: '#'
            },
            {
                name: 'CodeT5',
                description: '基于T5的代码生成和理解模型',
                logo: '🔢',
                url: '#'
            },
            {
                name: 'DeepCode',
                description: 'AI代码审查工具，发现潜在问题',
                logo: '🔍',
                url: '#'
            },
            {
                name: 'Kite',
                description: 'AI编程助手，提供智能代码补全',
                logo: '🪁',
                url: '#'
            },
            {
                name: 'IntelliCode',
                description: '微软的AI编程助手，集成在VS Code中',
                logo: '💡',
                url: '#'
            },
            {
                name: 'CodeWhisperer',
                description: '亚马逊的AI代码生成工具',
                logo: '👂',
                url: '#'
            },
            {
                name: 'Replit Ghostwriter',
                description: '在线IDE中的AI编程助手',
                logo: '👻',
                url: '#'
            },
            {
                name: 'Codeium',
                description: '免费的AI代码补全和生成工具',
                logo: '⚛️',
                url: '#'
            },
            {
                name: 'Sourcegraph Cody',
                description: 'AI代码搜索和理解工具',
                logo: '🔎',
                url: '#'
            },
            {
                name: 'Codium',
                description: 'AI代码审查和测试生成工具',
                logo: '🧪',
                url: '#'
            },
            {
                name: 'Windsurf',
                description: 'AI驱动的代码编辑器',
                logo: '🏄',
                url: '#'
            }
        ]
    },
    {
        id: 'chat',
        name: 'AI聊天助手',
        icon: '💬',
        tools: [
            {
                name: '百度AI伙伴',
                description: '百度AI搜索是百度推出的智能助手，提供对话和搜索服务',
                logo: '💡',
                url: '#'
            },
            {
                name: '文心一言',
                description: '文心一言是百度研发的大语言模型，支持多轮对话',
                logo: '🧠',
                url: '#'
            },
            {
                name: '百度AI助手',
                description: '百度AI搜索是一款集成了多种AI功能的智能助手',
                logo: '🔍',
                url: '#'
            },
            {
                name: '超级助理',
                description: '超级助理基于文心大模型，提供智能对话服务',
                logo: '⭐',
                url: '#'
            },
            {
                name: 'DeepSeek',
                description: '深度求索开发的AI助手，支持代码和对话',
                logo: '🐋',
                url: '#'
            },
            {
                name: '腾讯元宝',
                description: '腾讯元宝是基于腾讯混元大模型的AI助手',
                logo: '💰',
                url: '#'
            },
            {
                name: '360智脑',
                description: '360智脑是一款人工智能助手，提供智能问答',
                logo: '🧠',
                url: '#'
            },
            {
                name: '通义星尘',
                description: '通义星尘是基于通义千问的AI对话助手',
                logo: '✨',
                url: '#'
            },
            {
                name: '钉钉·个人版',
                description: '钉钉个人版集成了AI助手功能',
                logo: '📌',
                url: '#'
            },
            {
                name: 'Gemini',
                description: 'Gemini 2.5 是 Google 开发的多模态AI助手',
                logo: '⭐',
                url: '#'
            },
            {
                name: 'Meta AI助手',
                description: 'Meta AI基于Meta最新的语言模型技术',
                logo: '🔵',
                url: '#'
            },
            {
                name: 'Wanderboat',
                description: 'Wanderboat AI是一款专注于旅行规划的AI助手',
                logo: '🚤',
                url: '#'
            }
        ]
    },
    {
        id: 'writing',
        name: 'AI写作工具',
        icon: '✍️',
        tools: [
            {
                name: '百度作家平台',
                description: '百度作家平台是一站式AI写作工具',
                logo: '📝',
                url: '#'
            },
            {
                name: '文涌Effidit',
                description: 'Effidit是腾讯AI Lab开发的智能写作助手',
                logo: '🌊',
                url: '#'
            },
            {
                name: '悉语',
                description: '该产品为淘宝的登录用户提供AI写作服务',
                logo: '🛒',
                url: '#'
            },
            {
                name: 'Grammarly',
                description: 'Grammarly是一款AI语法检查和写作改进工具',
                logo: '✅',
                url: '#'
            },
            {
                name: 'QuillBot',
                description: 'QuillBot是一个基于AI的写作和改写工具',
                logo: '🤖',
                url: '#'
            },
            {
                name: '有道写作',
                description: '有道写作是网易有道推出的AI写作助手',
                logo: '📚',
                url: '#'
            },
            {
                name: '有道翻译·AI写作',
                description: '有道翻译AI写作是有道推出的智能写作工具',
                logo: '🌐',
                url: '#'
            },
            {
                name: 'WriteWise',
                description: 'WriteWise是一款专注于学术写作的AI工具',
                logo: '🎓',
                url: '#'
            },
            {
                name: 'FlowUs AI',
                description: 'FlowUs息流是新一代AI协作平台',
                logo: '🌊',
                url: '#'
            },
            {
                name: '稿定AI文案',
                description: '稿定设计是一款专注于AI文案创作的平台',
                logo: '📄',
                url: '#'
            },
            {
                name: 'Smodin AI',
                description: 'Smodin的AI研究论文写作助手',
                logo: '📊',
                url: '#'
            },
            {
                name: 'ProWritingAid',
                description: 'ProWritingAid是一款专业的AI写作分析工具',
                logo: '✏️',
                url: '#'
            }
        ]
    },
    {
        id: 'learning',
        name: 'AI学习网站',
        icon: '📚',
        tools: [
            {
                name: 'Coursera AI',
                description: 'Coursera平台上的AI和机器学习课程',
                logo: '🎓',
                url: '#'
            },
            {
                name: 'edX AI',
                description: 'edX平台提供的AI相关在线课程',
                logo: '📖',
                url: '#'
            },
            {
                name: 'Udacity AI',
                description: 'Udacity的AI纳米学位课程',
                logo: '🚀',
                url: '#'
            },
            {
                name: 'Fast.ai',
                description: '实用的深度学习课程平台',
                logo: '⚡',
                url: '#'
            },
            {
                name: 'Andrew Ng AI',
                description: '吴恩达的AI课程和专项课程',
                logo: '👨‍🏫',
                url: '#'
            },
            {
                name: 'MIT AI',
                description: 'MIT的AI和机器学习课程',
                logo: '🎓',
                url: '#'
            },
            {
                name: 'Stanford AI',
                description: '斯坦福大学的AI课程资源',
                logo: '🌲',
                url: '#'
            },
            {
                name: 'Deep Learning AI',
                description: '深度学习专项课程平台',
                logo: '🧠',
                url: '#'
            },
            {
                name: 'AI Hub',
                description: 'Google的AI学习资源中心',
                logo: '🔍',
                url: '#'
            },
            {
                name: 'Papers With Code',
                description: 'AI论文和代码实现的学习平台',
                logo: '📄',
                url: '#'
            },
            {
                name: 'Kaggle Learn',
                description: 'Kaggle的数据科学和AI学习平台',
                logo: '🏆',
                url: '#'
            },
            {
                name: 'AI4ALL',
                description: 'AI教育和普及的非营利组织',
                logo: '🌍',
                url: '#'
            }
        ]
    },
    {
        id: 'image',
        name: 'AI图像工具',
        icon: '🖼️',
        tools: [
            {
                name: 'Midjourney',
                description: '最受欢迎的AI图像生成工具',
                logo: '🎨',
                url: '#'
            },
            {
                name: 'DALL-E 3',
                description: 'OpenAI开发的AI图像生成模型',
                logo: '🎭',
                url: '#'
            },
            {
                name: 'Stable Diffusion',
                description: '开源的AI图像生成模型',
                logo: '🌊',
                url: '#'
            },
            {
                name: 'Adobe Firefly',
                description: 'Adobe的AI创意工具套件',
                logo: '🔥',
                url: '#'
            },
            {
                name: 'Canva AI',
                description: 'Canva的AI设计工具',
                logo: '🎨',
                url: '#'
            },
            {
                name: 'Figma AI',
                description: 'Figma的AI设计助手',
                logo: '🔧',
                url: '#'
            },
            {
                name: 'Remove.bg',
                description: 'AI背景移除工具',
                logo: '✂️',
                url: '#'
            },
            {
                name: 'Upscale.media',
                description: 'AI图像放大和增强工具',
                logo: '🔍',
                url: '#'
            },
            {
                name: 'Artbreeder',
                description: 'AI艺术创作和混合平台',
                logo: '🎭',
                url: '#'
            },
            {
                name: 'Runway ML',
                description: 'AI视频和图像编辑工具',
                logo: '🎬',
                url: '#'
            },
            {
                name: 'Lensa AI',
                description: 'AI人像和艺术风格转换',
                logo: '📸',
                url: '#'
            },
            {
                name: 'DreamStudio',
                description: 'Stability AI的图像生成平台',
                logo: '💭',
                url: '#'
            }
        ]
    },
    {
        id: 'training',
        name: 'AI训练模型',
        icon: '📊',
        tools: [
            {
                name: 'Hugging Face',
                description: '最大的AI模型和数据集平台',
                logo: '🤗',
                url: '#'
            },
            {
                name: 'TensorFlow',
                description: 'Google的机器学习框架',
                logo: '🔢',
                url: '#'
            },
            {
                name: 'PyTorch',
                description: 'Facebook的深度学习框架',
                logo: '🔥',
                url: '#'
            },
            {
                name: 'OpenAI API',
                description: 'OpenAI的模型API服务',
                logo: '🤖',
                url: '#'
            },
            {
                name: 'Anthropic Claude',
                description: 'Anthropic的AI模型API',
                logo: '🧠',
                url: '#'
            },
            {
                name: 'Google AI Platform',
                description: 'Google的AI和ML平台',
                logo: '🔍',
                url: '#'
            },
            {
                name: 'Azure AI',
                description: '微软的AI服务平台',
                logo: '☁️',
                url: '#'
            },
            {
                name: 'AWS AI Services',
                description: '亚马逊的AI和ML服务',
                logo: '🌐',
                url: '#'
            },
            {
                name: 'Weights & Biases',
                description: 'ML实验跟踪和模型管理平台',
                logo: '📈',
                url: '#'
            },
            {
                name: 'MLflow',
                description: '开源的ML生命周期管理平台',
                logo: '🔄',
                url: '#'
            },
            {
                name: 'Neptune',
                description: 'ML实验跟踪和模型注册平台',
                logo: '🌊',
                url: '#'
            },
            {
                name: 'Comet ML',
                description: 'ML实验管理和协作平台',
                logo: '☄️',
                url: '#'
            }
        ]
    },
    {
        id: 'search',
        name: 'AI搜索引擎',
        icon: '🔍',
        tools: [
            {
                name: 'Perplexity AI',
                description: 'AI驱动的搜索引擎，提供智能问答',
                logo: '🤔',
                url: '#'
            },
            {
                name: 'You.com',
                description: 'AI搜索引擎，整合多种AI工具',
                logo: '👤',
                url: '#'
            },
            {
                name: 'Bing Chat',
                description: '微软的AI搜索引擎',
                logo: '🔍',
                url: '#'
            },
            {
                name: 'Google Bard',
                description: 'Google的AI对话搜索引擎',
                logo: '🎭',
                url: '#'
            },
            {
                name: 'Neeva',
                description: '注重隐私的AI搜索引擎',
                logo: '🔒',
                url: '#'
            },
            {
                name: 'Brave Search',
                description: '独立的AI搜索引擎',
                logo: '🦁',
                url: '#'
            },
            {
                name: 'DuckDuckGo AI',
                description: 'DuckDuckGo的AI搜索功能',
                logo: '🦆',
                url: '#'
            },
            {
                name: 'Kagi',
                description: '付费的AI搜索引擎',
                logo: '🔑',
                url: '#'
            },
            {
                name: 'Elicit',
                description: 'AI学术搜索引擎',
                logo: '🎓',
                url: '#'
            },
            {
                name: 'Consensus',
                description: '基于研究的AI搜索引擎',
                logo: '📊',
                url: '#'
            },
            {
                name: 'Semantic Scholar',
                description: 'AI驱动的学术搜索引擎',
                logo: '📚',
                url: '#'
            },
            {
                name: 'Wolfram Alpha',
                description: '计算知识引擎',
                logo: '🐺',
                url: '#'
            }
        ]
    },
    {
        id: 'platform',
        name: 'AI开发平台',
        icon: '💻',
        tools: [
            {
                name: 'OpenAI Platform',
                description: 'OpenAI的开发者平台和API',
                logo: '🤖',
                url: '#'
            },
            {
                name: 'Anthropic Console',
                description: 'Anthropic的开发者控制台',
                logo: '🧠',
                url: '#'
            },
            {
                name: 'Google AI Studio',
                description: 'Google的AI开发工具',
                logo: '🎨',
                url: '#'
            },
            {
                name: 'Azure OpenAI',
                description: '微软的OpenAI服务',
                logo: '☁️',
                url: '#'
            },
            {
                name: 'AWS Bedrock',
                description: '亚马逊的AI模型服务',
                logo: '🛏️',
                url: '#'
            },
            {
                name: 'Replicate',
                description: 'AI模型部署和运行平台',
                logo: '🔄',
                url: '#'
            },
            {
                name: 'Hugging Face Spaces',
                description: 'AI应用部署和分享平台',
                logo: '🤗',
                url: '#'
            },
            {
                name: 'Gradio',
                description: '快速构建AI应用界面的工具',
                logo: '📊',
                url: '#'
            },
            {
                name: 'Streamlit',
                description: 'Python的AI应用开发框架',
                logo: '🌊',
                url: '#'
            },
            {
                name: 'LangChain',
                description: '构建AI应用的开发框架',
                logo: '🔗',
                url: '#'
            },
            {
                name: 'LlamaIndex',
                description: '构建LLM应用的框架',
                logo: '🦙',
                url: '#'
            },
            {
                name: 'CrewAI',
                description: '多AI代理协作框架',
                logo: '👥',
                url: '#'
            }
        ]
    },
    {
        id: 'audio',
        name: 'AI音频工具',
        icon: '🎧',
        tools: [
            {
                name: 'Murf AI',
                description: 'AI语音合成和配音工具',
                logo: '🎤',
                url: '#'
            },
            {
                name: 'ElevenLabs',
                description: '高质量的AI语音合成平台',
                logo: '🔊',
                url: '#'
            },
            {
                name: 'Descript',
                description: 'AI音频和视频编辑工具',
                logo: '📝',
                url: '#'
            },
            {
                name: 'Rev AI',
                description: 'AI语音转文字和字幕服务',
                logo: '📄',
                url: '#'
            },
            {
                name: 'Otter.ai',
                description: 'AI会议记录和转录工具',
                logo: '🦦',
                url: '#'
            },
            {
                name: 'Lovo AI',
                description: 'AI语音合成和配音平台',
                logo: '💝',
                url: '#'
            },
            {
                name: 'Speechify',
                description: 'AI文本转语音工具',
                logo: '🗣️',
                url: '#'
            },
            {
                name: 'Podcastle',
                description: 'AI播客制作工具',
                logo: '🏰',
                url: '#'
            },
            {
                name: 'Synthesys',
                description: 'AI视频和语音合成平台',
                logo: '🎭',
                url: '#'
            },
            {
                name: 'Resemble AI',
                description: 'AI语音克隆和合成工具',
                logo: '🎪',
                url: '#'
            },
            {
                name: 'AIVA',
                description: 'AI音乐创作工具',
                logo: '🎵',
                url: '#'
            },
            {
                name: 'Amper Music',
                description: 'AI音乐制作平台',
                logo: '🎶',
                url: '#'
            }
        ]
    },
    {
        id: 'design',
        name: 'AI设计工具',
        icon: '📐',
        tools: [
            {
                name: 'Figma AI',
                description: 'Figma的AI设计助手和插件',
                logo: '🔧',
                url: '#'
            },
            {
                name: 'Adobe Sensei',
                description: 'Adobe的AI创意工具套件',
                logo: '🎨',
                url: '#'
            },
            {
                name: 'Canva AI',
                description: 'Canva的AI设计工具和模板',
                logo: '🎨',
                url: '#'
            },
            {
                name: 'Sketch AI',
                description: 'Sketch的AI设计功能',
                logo: '✏️',
                url: '#'
            },
            {
                name: 'Framer AI',
                description: 'Framer的AI网站设计工具',
                logo: '🖼️',
                url: '#'
            },
            {
                name: 'Webflow AI',
                description: 'Webflow的AI网站构建工具',
                logo: '🌐',
                url: '#'
            },
            {
                name: 'Uizard',
                description: 'AI UI/UX设计工具',
                logo: '🎯',
                url: '#'
            },
            {
                name: 'Galileo AI',
                description: 'AI UI设计生成工具',
                logo: '🔭',
                url: '#'
            },
            {
                name: 'Mockup AI',
                description: 'AI产品原型和模型工具',
                logo: '📱',
                url: '#'
            },
            {
                name: 'Brandmark AI',
                description: 'AI品牌设计和Logo生成',
                logo: '🏷️',
                url: '#'
            },
            {
                name: 'Looka',
                description: 'AI Logo设计和品牌工具',
                logo: '👁️',
                url: '#'
            },
            {
                name: 'Designs.ai',
                description: 'AI设计自动化平台',
                logo: '🤖',
                url: '#'
            }
        ]
    },
    {
        id: 'evaluation',
        name: 'AI模型评测',
        icon: '🏆',
        tools: [
            {
                name: 'LMSYS Chatbot Arena',
                description: 'AI模型对战和评测平台',
                logo: '⚔️',
                url: '#'
            },
            {
                name: 'Hugging Face Leaderboard',
                description: 'Hugging Face的模型排行榜',
                logo: '🤗',
                url: '#'
            },
            {
                name: 'OpenAI Evals',
                description: 'OpenAI的模型评估框架',
                logo: '📊',
                url: '#'
            },
            {
                name: 'Anthropic Red Team',
                description: 'Anthropic的AI安全评估工具',
                logo: '🔴',
                url: '#'
            },
            {
                name: 'MLPerf',
                description: '机器学习性能基准测试',
                logo: '📈',
                url: '#'
            },
            {
                name: 'GLUE Benchmark',
                description: '自然语言理解基准测试',
                logo: '🧩',
                url: '#'
            },
            {
                name: 'SuperGLUE',
                description: '更难的NLP基准测试',
                logo: '🦸',
                url: '#'
            },
            {
                name: 'HELM',
                description: '语言模型整体评估框架',
                logo: '🎯',
                url: '#'
            },
            {
                name: 'Big-Bench',
                description: '大规模语言模型基准测试',
                logo: '📏',
                url: '#'
            },
            {
                name: 'MMLU',
                description: '多任务语言理解评估',
                logo: '🎓',
                url: '#'
            },
            {
                name: 'HellaSwag',
                description: '常识推理基准测试',
                logo: '🧠',
                url: '#'
            },
            {
                name: 'TruthfulQA',
                description: 'AI模型真实性评估',
                logo: '✅',
                url: '#'
            }
        ]
    },
    {
        id: 'prompts',
        name: 'AI提示指令',
        icon: '📜',
        tools: [
            {
                name: 'PromptBase',
                description: 'AI提示词交易和分享平台',
                logo: '💼',
                url: '#'
            },
            {
                name: 'PromptPerfect',
                description: 'AI提示词优化工具',
                logo: '✨',
                url: '#'
            },
            {
                name: 'PromptLayer',
                description: '提示词管理和分析平台',
                logo: '📊',
                url: '#'
            },
            {
                name: 'PromptHero',
                description: 'AI艺术提示词分享社区',
                logo: '🦸',
                url: '#'
            },
            {
                name: 'FlowGPT',
                description: 'AI提示词分享和发现平台',
                logo: '🌊',
                url: '#'
            },
            {
                name: 'Prompt Engineering Guide',
                description: '提示词工程学习资源',
                logo: '📚',
                url: '#'
            },
            {
                name: 'Learn Prompting',
                description: '提示词工程课程和教程',
                logo: '🎓',
                url: '#'
            },
            {
                name: 'Prompt Engineering Institute',
                description: '提示词工程研究机构',
                logo: '🏛️',
                url: '#'
            },
            {
                name: 'AI Prompt Generator',
                description: 'AI提示词生成工具',
                logo: '🤖',
                url: '#'
            },
            {
                name: 'PromptChainer',
                description: '提示词链式组合工具',
                logo: '🔗',
                url: '#'
            },
            {
                name: 'PromptVine',
                description: '提示词社区和协作平台',
                logo: '🍇',
                url: '#'
            },
            {
                name: 'PromptCraft',
                description: '提示词制作和优化工具',
                logo: '🛠️',
                url: '#'
            }
        ]
    }
];
