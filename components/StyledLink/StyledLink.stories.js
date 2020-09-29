import StyledLink from './StyledLink';
import React from 'react';

export default {
  title: 'StyledLink',
  component: StyledLink
  /*
   argTypes: {
   // e.g. backgroundColor: { control: 'color' },
   },
   */
};

const Template = ({ children }) =>
  <StyledLink>{children}</StyledLink>;
export const FirstStory = Template.bind({});
FirstStory.args = {
  children: 'link'
};