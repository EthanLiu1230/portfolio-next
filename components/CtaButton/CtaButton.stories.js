import CtaButton from './CtaButton';
import React from 'react';

export default {
  title: 'CtaButton',
  component: CtaButton
};

const Template = (args) => <CtaButton {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: 'see this project'
};