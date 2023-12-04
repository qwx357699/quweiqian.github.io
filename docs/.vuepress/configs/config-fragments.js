module.exports = {
  "/fragments/": [
    {
      title: '3天笔面试集训',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2,    // 可选的, 默认值是 1
      children: [
        "interview-camp/1",
        "interview-camp/2",
        "interview-camp/3",
      ]
    },
    {
      title: '9j网络',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2,    // 可选的, 默认值是 1
      children: [
        '9j/1为什么学网络',
        '9j/2网络传输过程',
        '9j/3内网IP和外网IP',
        '9j/7或运算和与运算',
        '9j/8子网掩码',
        '9j/9物理层',
        '9j/10数据链路层',
        '9j/11网络层',
        '9j/12IP数据报'
      ]
    },
    {
      title: 'Beta',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2,    // 可选的, 默认值是 1
      children: [
        "beta/config",
        "beta/corepack",
        "beta/yarn",
        "beta/架构课程"
      ]
    },
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]
}