import {ExampleoneComponent} from './exampleone/exampleone.component';


const srcUrlBase = 'https://localhost:4200/exampleone/';

export const examples: Array<IExampleData> = [
  {
    path: 'exampleone/exampleone',
    component: ExampleoneComponent,
    label: 'Example one',
    srcUrl: `${ srcUrlBase }exampleone.component.ts`,
  },
];
