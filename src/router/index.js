import Vue from 'vue';
import Router from 'vue-router';
// import Main from '@/views/Main';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Main'),
      children: [
        {
          path: 'choose',
          name: 'choose',
          component: () => import('@/components/Choose'),
        },
        {
          path: 'charge',
          name: 'charge',
          component: () => import('@/components/Charge'),
        },
      ],
    },
    /*
    { path: '/', name: 'main', component: Main },
    */
    /*
    {
      path:'/contacts', name:'contacts', component:ContactList, children : [
        { path:'add', name:'addcontact',component: ContactForm },
        { path:'update/:no', name:'updatecontact',component: ContactForm, props : true },
        { path:'photo/:no', name:'updatephoto',component: UpdatePhoto, props: true },
      ],
    },
    */
  ],
});
