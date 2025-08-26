
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Sito-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Sito-web/home",
    "route": "/Sito-web"
  },
  {
    "renderMode": 2,
    "route": "/Sito-web/servizi"
  },
  {
    "renderMode": 2,
    "route": "/Sito-web/ricette"
  },
  {
    "renderMode": 2,
    "route": "/Sito-web/home"
  },
  {
    "renderMode": 2,
    "route": "/Sito-web/chi-sono"
  },
  {
    "renderMode": 2,
    "route": "/Sito-web/db"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1391, hash: '6a004b1bd0a98558f0428e3631f65762131071e6761cb43368e8d61e8a36765e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1171, hash: '7b2df0ce8e9420ea636e1d5a442a208c6285d47e3c2ab6c1335d534a6ba65019', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 37071, hash: '0906e1712005f162aaa17cd27c6a63d398497761bc4e41e331f7b914bfee39a1', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'ricette/index.html': {size: 29704, hash: 'a70e6722440b7e639aaa264f389f0f8b87de7f74fb227e869a9899655aae5795', text: () => import('./assets-chunks/ricette_index_html.mjs').then(m => m.default)},
    'servizi/index.html': {size: 22286, hash: '386f1dddd11bc252a9c8e6d39ee27c0b65c21732250d45d4c791b0a40f5a6ac7', text: () => import('./assets-chunks/servizi_index_html.mjs').then(m => m.default)},
    'chi-sono/index.html': {size: 15412, hash: '775e3f80863ec2818db51c5fc84d6c737423e2fbb3c81a431c822da8b81adf86', text: () => import('./assets-chunks/chi-sono_index_html.mjs').then(m => m.default)},
    'db/index.html': {size: 14775, hash: '29d4947d3d0b9c49c0e90f8ca2c3e2667a826f21157610cf2bea10ca22083802', text: () => import('./assets-chunks/db_index_html.mjs').then(m => m.default)},
    'styles-VMUP4ESU.css': {size: 2711, hash: 'zL/J/EHZYqo', text: () => import('./assets-chunks/styles-VMUP4ESU_css.mjs').then(m => m.default)}
  },
};
