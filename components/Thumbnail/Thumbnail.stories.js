import React from 'react';
import Thumbnail from './Thumbnail';

export default {
  title: 'Thumbnail',
  component: Thumbnail
  /*
   argTypes: {
   // e.g. backgroundColor: { control: 'color' },
   },
   */
};

const Template = (args) => <Thumbnail {...args}/>;
export const Default = Template.bind({});
Default.args = {};