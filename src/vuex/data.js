/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const base = {
  title: 'Shaoye 的简历',
  name: '邵叶',
  shortDescription: '大二学生，Web工程师进阶中...',
  description: '高中接触 Web 开发和设计，上了大学正式学习前端、PHP、Node.js，大一开始在校不间断负责多个公众号、小程序的开发。',
  infomations: [{
    icon: '../static/svgs/info/birthday.svg',
    key: '生日',
    value: '1996.11.11'
  }, {
    icon: '../static/svgs/info/education.svg',
    key: '教育经历',
    value: '南京邮电大学 · 计算机科学与技术'
  }, {
    icon: '../static/svgs/info/nowCity.svg',
    key: '居住地',
    value: '江苏 · 南京'
  }, {
    icon: '../static/svgs/info/email.svg',
    key: '邮箱',
    value: 'shaoye1124@gmail.com'
  }, {
    icon: '../static/svgs/info/phone.svg',
    key: '手机号',
    value: '+86 15380868406'
  }],
  skills: [{
    value: 'HTML',
    logo: '../static/images/logos/html.png'
  }, {
    value: 'CSS',
    logo: '../static/images/logos/css.png'
  }, {
    value: 'JavaScript',
    logo: '../static/images/logos/javascript.png',
    style: {
      background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
      'border-color': '#ffeb0e'
    }
  }, {
    value: 'Node.js',
    logo: '../static/images/logos/nodejs.png',
    style: {
      background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
      'border-color': '#8ccf00'
    }
  }, {
    value: 'PHP',
    logo: '../static/images/logos/php.png',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      'border-color': '#8093d1'
    }
  }, {
    value: 'Python',
    logo: '../static/images/logos/python.png'
  }, {
    value: 'Photoshop',
    logo: '../static/images/logos/photoshop.png',
    style: {
      background: '#001d26',
      border: '5px solid #00c8ff'
    }
  }, {
    value: 'Sketch',
    logo: '../static/images/logos/sketch.png',
    style: {
      background: 'linear-gradient(to bottom, #1d0f4f , #130a33)',
      'border-color': '#1d0f4f'
    }
  }],
  projects: [{
    image: '../static/images/projects/sastindex.png',
    desc: '南京邮电大学大学生科学技术协会主页。前端使用 JavaScript 开发，后端使用 PHP 和 MySQL 搭建。',
    url: 'http://sast.njupt.edu.cn/',
    qrcode: '../static/images/projects/sastindex.png'
  }, {
    image: '../static/images/projects/wechat.png',
    desc: '这是南京邮电大学微信小程序，集教务信息，成绩查询，跑操查询，课表查询，饭卡查询功能于一身。',
    url: 'https://mp.weixin.qq.com',
    qrcode: '../static/images/projects/wechat.png'
  }, {
    image: '../static/images/projects/spider.png',
    desc: '使用Pyhton开发的分布式爬虫管理系统，可对爬虫进行分布式管理与监控。',
    url: 'https://github.com/shaoye/distributed_crawler',
    qrcode: '../static/images/projects/spider.png'
  }],
  projectRefer: '在我的 Github 查看更多项目'
}

const en = {
  title: `Shaoye's resume`,
  name: 'Ye Shao',
  shortDescription: 'A student, web developer...',
  description: `I started learning front-end development and participating in development and maintenance of a number of WeChat public accounts in school when I was a freshman at university. At the same time, I began to follow the open source community and the front-end ecosystem closely.`,
  infomations: [{
    icon: '../static/svgs/info/birthday.svg',
    key: 'Birthday',
    value: '1996.11.11'
  }, {
    icon: '../static/svgs/info/education.svg',
    key: 'Education',
    value: 'NJUPT · Computer Science'
  }, {
    icon: '../static/svgs/info/nowCity.svg',
    key: 'Live in',
    value: 'Nanjing, Jiangsu, RPC'
  }, {
    icon: '../static/svgs/info/email.svg',
    key: 'Email',
    value: 'shaoye1124@gmail.com'
  }, {
    icon: '../static/svgs/info/phone.svg',
    key: 'Phone Number',
    value: '+86 15380869406'
  }],
  projects: [{
    image: '../static/images/projects/sastindex.png',
    desc: '南京邮电大学大学生科学技术协会主页。前端使用 JavaScript 开发，后端使用 PHP 和 MySQL 搭建。',
    url: 'http://sast.njupt.edu.cn/',
    qrcode: '../static/images/projects/sastindex.png'
  }, {
    image: '../static/images/projects/wechat.png',
    desc: '这是南京邮电大学微信小程序，集教务信息，成绩查询，跑操查询，课表查询，饭卡查询功能于一身。',
    url: 'https://mp.weixin.qq.com',
    qrcode: '../static/images/projects/wechat.png'
  }, {
    image: '../static/images/projects/spider.png',
    desc: '使用Pyhton开发的分布式爬虫管理系统，可对爬虫进行分布式管理与监控。',
    url: 'https://github.com/shaoye/distributed_crawler',
    qrcode: '../static/images/projects/spider.png'
  }],
  projectRefer: 'See morinse projects in my Github'
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: Object.assign({}, base, en),
    route: routeMap.map(v => v.en)
  }
}
