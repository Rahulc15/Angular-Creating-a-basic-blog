// export class MockArticles {
// }

import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My First Article',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus fringilla nunc luctus lacinia. Cras mattis diam urna, non scelerisque tellus sollicitudin in. Integer venenatis, arcu at interdum condimentum, ante enim maximus ipsum, non feugiat elit tellus a ipsum. Pellentesque bibendum felis ut accumsan tempor. Aenean tincidunt nec justo quis placerat. Duis sodales fringilla libero vel tempor. Duis eget tortor lectus.</p>',
    description: "This is my first article",
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
  },
  {
    id: 2,
    title: 'My Second Article',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus fringilla nunc luctus lacinia. Cras mattis diam urna, non scelerisque tellus sollicitudin in. Integer venenatis, arcu at interdum condimentum, ante enim maximus ipsum, non feugiat elit tellus a ipsum. Pellentesque bibendum felis ut accumsan tempor. Aenean tincidunt nec justo quis placerat. Duis sodales fringilla libero vel tempor. Duis eget tortor lectus.</p>',
    description: "This is my Second article",
    key: 'my-second-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
  }
];
