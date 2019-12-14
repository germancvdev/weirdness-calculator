import Vue from 'vue';
import Vuesax from 'vuesax';
import 'material-icons/iconfont/material-icons.css';
// import { vsButton, vsRow, vsCol, vsChip, vsInput, vsIcon } from 'vuesax';

import 'vuesax/dist/vuesax.css'; // Vuesax styles
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#CC003F',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: '#FF2F7E'
    }
  }
});

// Vue.use(vsRow);
// Vue.use(vsCol);
// Vue.use(vsChip);
// Vue.use(vsInput);
// Vue.use(vsIcon);
