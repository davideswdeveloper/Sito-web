
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Sito-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Sito-web"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 854, hash: '3281458ea3fd52937f0abde65bc50222db2404b93404822f3f15d09bee6cb3d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '5b01bb003b9a86afe5cfe77be971a6aec1f381bf203e205f4f4f307b5cde9ef7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18418, hash: 'fceb1dcd665dfcc592107caf5caa1c496d69f07d5b9eea1383f431835adeaf96', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IAP7RX2C.css': {size: 1946, hash: 'QJJxTDTzBZg', text: () => import('./assets-chunks/styles-IAP7RX2C_css.mjs').then(m => m.default)}
  },
};
