
export default {
  basePath: 'https://davideswdeveloper.github.io/Sito-web',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
