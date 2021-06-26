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
                  buildHookId: '60d76c53110f546912a9d885',
                  title: 'Sanity Studio',
                  name: 'test-sanity-studio-c832vikh',
                  apiId: '30cc6795-2bde-44c0-ba0d-8837238ab3c5'
                },
                {
                  buildHookId: '60d76c53abf1b03003a0da5c',
                  title: 'Blog Website',
                  name: 'test-sanity-web-9swxyh3u',
                  apiId: '38cbf74b-08aa-454e-ae13-7bdea559c440'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swiftly-ai/test-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-web-9swxyh3u.netlify.app', category: 'apps'}
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
