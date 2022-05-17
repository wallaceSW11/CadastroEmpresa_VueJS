import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Enterprises from '@/views/Enterprise/Enterprises.vue';
import EnterpriseDetail from '@/views/Enterprise/EnterpriseDetail.vue';
import Reports from '@/views/Reports.vue';
import Tools from '@/views/Tools.vue';

const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      title: 'Dashboard',
      meta: { requiredAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      title: 'Login',
      meta: { requiredAuth: false}
    },
    {
      path: '/enterprises',
      name: 'Enterprises',
      component: Enterprises,
      title: 'Enterprises',
      meta: { requiredAuth: true}
    },
    {
      path: '/enterprise/detail',
      name: 'EnterpriseDetail',
      component: EnterpriseDetail,
      title: 'Enterprise',
      meta: { requiredAuth: true}
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports,
      title: 'Reports',
      meta: { requiredAuth: true}
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools,
      title: 'Tools',
      meta: { requiredAuth: true}
    }

]

  export default routes;