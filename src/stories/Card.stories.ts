// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import CardComponent from './card.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: CardComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const TITLE = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TITLE.args = {
  title: 'Teste'
};

