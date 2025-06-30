
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davideswdeveloper.github.io/Sito-web/',
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
    'index.csr.html': {size: 1364, hash: '4d1b7b0c265aed96ab4bb5b6cdd2b266b2219973a34c48b65f847b59af0999b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: '1136be0d0ab495eb65a318cbe8155b016d354a7753b2aff27f088032b66bb3c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'servizi/index.html': {size: 16992, hash: '70b99db7ac8b9f0719e7f930f65b3e16eb5c2cbabfa123b704d579b9254bc0b0', text: () => import('./assets-chunks/servizi_index_html.mjs').then(m => m.default)},
    'chi-sono/index.html': {size: 13783, hash: 'de7800d48a9f15a494e31d1efc939e0aac77b2de3b8fb48953ca10e9515ad48a', text: () => import('./assets-chunks/chi-sono_index_html.mjs').then(m => m.default)},
    'db/index.html': {size: 14880, hash: '0f5f803e2f88e4507f756151cc08e3b3a4585b0e06ff42083dab4a09d1d5a267', text: () => import('./assets-chunks/db_index_html.mjs').then(m => m.default)},
    'ricette/index.html': {size: 27047, hash: '716190ed97aa1994a17e2fb774925ea492f2bdd22261b615b237dbeafb914021', text: () => import('./assets-chunks/ricette_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 21706, hash: '2f3e7de116e10ee62406024f8de81ea3f1ca7fe00e209cb7cddbdedac45ec231', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-X7PXL24D.css': {size: 2631, hash: 'eSKXJd9dP+I', text: () => import('./assets-chunks/styles-X7PXL24D_css.mjs').then(m => m.default)}
  },
};
