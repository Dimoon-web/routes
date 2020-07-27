import loadable from '@loadable/component'

const templates = {
  main: loadable(() => import('UI/templates/Main')),
  two: loadable(() => import('UI/templates/Two'))
}

export const Routes = [
  {
    name: 'Главная',
    path: '/',
    component: loadable(() => import('Pages/Main')),
    tmp: templates.main
  },
  {
    name: 'С другим шаблоном',
    path: '/morePage',
    component: loadable(() => import('Pages/Two')),
    tmp: templates.two
  }
]