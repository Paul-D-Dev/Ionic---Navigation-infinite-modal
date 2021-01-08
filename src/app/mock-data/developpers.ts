import { Developer } from './../models/developper.models';
export const developpers: Developer[] = [
    {
      id:1,
      name: 'Paul',
      sites: [
        {
          id: 1,
          name: 'fts',
          deploy: '01/01/2020',
          client : {
            id:1,
            name: 'Ludovic'
          }
        },
        {
          id: 2,
          name: 'kraak',
          deploy: '25/02/2020',
          client : {
            id:2,
            name: 'Camille'
          }
    
        }
    
      ]
    },
    {
      id:2,
      name: 'Mathieu',
      sites: [
        {
          id: 3,
          name: 'Yummy',
          deploy: '01/01/2020',
          client : {
            id:3,
            name: 'Mat'
          }
        },
        {
          id: 4,
          name: 'D',
          deploy: '25/02/2020',
          client : {
            id:4,
            name: 'Paul'
          }
    
        }
    
      ]
    }
];