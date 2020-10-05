import React from 'react';
import Footer from './index';

export default {
  title: 'Footer',
  component: Footer
  /*
   argTypes: {
   // e.g. backgroundColor: { control: 'color' },
   },
   */
};

const Template = (args) => <Footer {...args}/>;
export const Default = Template.bind({});
Default.args = {};