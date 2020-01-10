Page({

  data: {
    message: "hello,world,data",
    theName: "Jack",
    flag: true,
    items: [{
        name: "商品A"
      },
      {
        name: "商品B"
      },
      {
        name: "商品C"
      },
      {
        name: "商品D"
      },
      {
        name: "商品A"
      }
    ],
    // 数学随机数
    condition: Math.floor(Math.random() * 3 + 1),
    item: {
      name: "张三",
      phone: "18812341234",
      address: "中国"
    }


  }
})