export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615f32a3e320f355d3feee61',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9qpovxu2',
                  apiId: '6ac9b29a-af32-4149-a484-8a3cd2947527'
                },
                {
                  buildHookId: '615f32a3f6122f58930b4510',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ig3yb2f9',
                  apiId: 'b57b6381-6422-4f21-8b08-13fdedda4a84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aplchian/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ig3yb2f9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
