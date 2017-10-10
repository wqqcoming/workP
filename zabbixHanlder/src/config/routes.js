export default {routes:[
  {
    path:"/SN/Content",
    component:require('../page/search/SN')
  },
  {
    path:'/SN',
    component:require('../page/search/SNLogin')
  },
  {
    path:'/ippool',
    component:require('../page/search/ippoolLogin')
  },
  {
    path:'/ippool/Content',
    component:require('../page/search/ippool')
  },
  {
    path:'/gslb-agent',
    component:require('../page/search/gslb-agentLogin')
  },
  {
    path:'/gslb-agent/Content',
    component:require('../page/search/gslb-agent')
  },
  {
    path:'/cdn',
    component:require('../page/charts/cdn')
  },
  {
    path:'/program_ranking',
    component:require('../page/charts/program_ranking')
  },
  {
    path:'/program_ranking/:detail',
    name:'details',
    component:require('../page/charts/programRanking_details.vue')
  },
  {
    path:'/Acquisition program',
    component:require('../page/charts/acquisition')
  },
  {
    path:'/export',
    component:require('../page/charts/export')
  },
  {
    path:'/channel',
    component:require('../page/charts/channel')
  },
  {
    path:'/cdr',
    component:require('../page/charts/cdr'),
    children:[
      {
        path:'CDR',
        name:'CDR',
        component:require('../page/charts/cdrChild/CDR'),
        children:[
          {
            path:'once',
            name:'once',
            component:require('../page/charts/cdrChild/CDR_once')
          },
          {
            path:'ALL',
            name:'ALL',
            component:require('../page/charts/cdrChild/CDR_ALL')
          }
        ]
      },
      {
        path:'SN',
        name:'SN',
        component:require('../page/charts/cdrChild/SN')
      },
      {
        path:'TV',
        name:'TV',
        component:require('../page/charts/cdrChild/TV')
      },
      {
        path:'TOKEN',
        name:'TOKEN',
        component:require('../page/charts/cdrChild/TOKEN')
      }
    ]
  },
  {
    path:'/serverPath',
    name:'serverPath',
    component:require('../page/programRanking')
  }
]}

/*  router.map({
    '/':{name:'index',component:require('../page/login.vue')},
    '/content':{name:'content',component:require('../page/SN.vue')}
  });*/

