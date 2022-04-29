import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Enterprises from '@/views/Enterprise/Enterprises.vue';
import EnterpriseDetail from '@/views/Enterprise/EnterpriseDetail.vue';
import Relatorios from '@/views/Relatorios.vue';
import Ferramentas from '@/views/Ferramentas.vue';

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
      path: '/relatorios',
      name: 'Relatorios',
      component: Relatorios,
      title: 'Relatórios',
      meta: { requiredAuth: true}
    },
    {
      path: '/ferramentas',
      name: 'Ferramentas',
      component: Ferramentas,
      title: 'Ferramentas',
      meta: { requiredAuth: true}
    }

]

  export default routes;