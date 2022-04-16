import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ListaEmpresas from '@/views/Empresa/ListaEmpresas.vue';
import EmpresaDetalhe from '@/views/Empresa/EmpresaDetalhe.vue';
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
      path: '/empresas',
      name: 'Empresas',
      component: ListaEmpresas,
      title: 'Empresas',
      meta: { requiredAuth: true}
    },
    {
      path: '/empresas/detalhe',
      name: 'EmpresaDetalhe',
      component: EmpresaDetalhe,
      title: 'Empresa',
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