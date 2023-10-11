module.exports = {
  title: 'html5详细版',   // 必要的
  collapsable: true, // 可选的, 默认值是 true,
  sidebarDepth: 2,    // 可选的, 默认值是 1
  children: [
    "html5/1",
    {
      title: 'svg详细版',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2,    // 可选的, 默认值是 1
      children: [
        "html5/2-1",
        "html5/2-2",
      ]
    },
    "html5/3",
  ]
}