export const ApiEndpoints = {
  console: {
    list: 'console/list',
    add: 'console/add',
    delete: 'console/delete',
    edit: 'console/edit',
  },
  consoleType: {
    list: 'consoleType/list',
    add: 'consoleType/add',
    delete: 'consoleType/delete',
    edit: 'consoleType/edit'
  },
  discount: {
    list: 'discount/list',
    add: 'discount/add',
    delete: 'discount/delete',
    edit: 'discount/edit'
  },
  admin: {
    list: 'admin/list',
    add: 'admin/add',
    delete: 'admin/delete',
    edit: 'admin/edit'
  },
  buffet: {
    list: 'buffet/list',
    add: 'buffet/add',
    delete: 'buffet/delete',
    edit: 'buffet/edit'
  },
  buffetSale: {
    list: 'buffetSale/list',
    add: 'buffetSale/add',
    delete: 'buffetSale/delete',
  },
  customer: {
    register: 'customer/register.php',
    registerVerify: 'customer/registerVerify.php',
    forgetPassword: 'customer/forgetPassword.php',
    forgotVerify: 'customer/forgotVerify.php',
    changePassword: 'customer/changePassword.php'
  },
  service: {
    list: 'service/list',
    finish: 'service/finish',
    add: 'service/add',
    delete: 'service/delete',
    edit: 'service/edit',
    descriptionEdit: 'service/descriptionEdit',
    addJoystick: 'service/addJoystick',
    checkout: 'service/checkout',
    buffet: {
      list: 'service/buffet/list',
      add: 'service/buffet/add',
      delete: 'removeBuffet',
      edit: 'service/buffet/add'
    }
  },
  user: {
    login: 'login',
    changePassword: 'admin/changePassword',
    tokenValidate: 'auth/tokenValidate.php'
  },
  orders: {
    'opa': 'opa/OPAdd',
    'ordersList': 'orders/ordersList',
    'deleteOrder': 'orders/deleteOrder',
    'add': 'orders/add',
    'orderProducts': 'orders/orderProducts',
    'deleteProduct': 'shop/pod',
    'updateOrderProduct': 'orders/updateOrderProduct',
    'checkout': 'orders/checkout',
    'editOrderDescription': 'orders/editOrderDescription',
  },
  report: {
    'serviceReport': 'report/serviceReport',
    'orderReport': 'report/orderReport',
    'accountingReport': 'report/accountingReport'
  },
  costCategory: {
    list: 'costCategory/list',
    add: 'costCategory/add',
    delete: 'costCategory/delete',
    edit: 'costCategory/edit'
  },
  cost: {
    list: 'cost/list',
    add: 'cost/add',
    delete: 'cost/delete',
    edit: 'cost/edit'
  },
  layer: {
    add: 'layer/add.php',
    edit: 'layer/edit.php',
    delete: 'layer/delete.php',
    list: (enabled: number, enabledOption: number) => `layer/list.php?enabled=${enabled}&enabledOption=${enabledOption}`,
    info: (id: number, enabledOption: number) => `layer/info.php?id=${id}&enabledOption=${enabledOption}`
  },
  subLayer: {
    add: 'subLayer/add.php',
    edit: 'subLayer/edit.php',
    delete: 'subLayer/delete.php',
    list: 'subLayer/list.php'
  },
  trip: {
    add: 'trip/add.php',
    edit: 'trip/edit.php',
    delete: 'trip/delete.php',
    list: 'trip/list.php',
    details: (id: number, mobile: string) => `trip/details.php?id=${id}&mobile=${mobile}`,
    layersTrips: 'trip/layersTrips.php',
    like: 'trip/like.php'
  },
  auth: {
    sendCode: 'auth/sendCode.php',
    verifyCode: 'auth/verifyCode.php'
  },
  setting: {
    list: 'setting/list.php',
    edit: 'setting/edit.php'
  },
  comment: {
    add: 'comment/add.php',
    list: 'comment/list.php',
    delete: 'comment/delete.php'
  },
  province: {
    list: 'province/list.php'
  },
  city: {
    list: 'city/list.php'
  },
  competitions: {
    list: 'competitions/list.php',
    add: 'competitions/add.php',
    delete: 'competitions/delete.php',
    edit: 'competitions/edit.php',
    customers: 'competitions/customers.php',
    details: (id: number) => `competitions/details.php?id=${id}`,

  },
  content: {
    upload: 'content/upload.php',
    edit: 'content/edit.php',
    fetch: 'content/fetch.php',
    deleteAudio: 'content/deleteAudio.php',
    deleteImage: 'content/deleteImage.php',
    deleteVideo: 'content/deleteVideo.php',
    hasInHomePage: `content/hasInHomePage.php?lang=${localStorage.getItem('lang') ?? 'fa'}`,
  },
  group: {
    titles: (groupId: number) => `group/titles.php?groupId=${groupId}`
  },
  category: {
    list: `category/list.php?lang=${localStorage.getItem('lang') ?? 'fa'}`,
    fetch: (categoryId: number) => `category/fetch.php?categoryId=${categoryId}`
  },
  lang: {
    list: 'lang/list.php'
  }
}
