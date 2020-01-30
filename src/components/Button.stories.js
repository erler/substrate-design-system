import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { StoryLinkWrapper } from './StoryLinkWrapper';
import { IconFont } from './IconFont';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
  title: 'Design System/Button',
  component: Button,
};

export const buttons = () => (
  <>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="outline">Outline</Button>
  </>
);

export const sizes = () => (
  <>
    <Button appearance="primary">Default</Button>
    <Button appearance="primary" size="small">
      Small
    </Button>
    <Button appearance="outline" size="small">
      Small Outline
    </Button>
  </>
);

export const loading = () => (
  <>
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="outline" isLoading loadingText="Wait...">
      Outline
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button appearance="primary" isDisabled>
      Primary
    </Button>
    <Button appearance="secondary" isDisabled>
      Secondary
    </Button>
    <Button appearance="outline" isDisabled>
      Outline
    </Button>
  </>
);

export const containsIcon = () => (
  <>
    <Button appearance="primary" containsIcon size="small">
      <IconFont lib="web3" icon="identicon" aria-label="identicon" size="tiny" />
    </Button>
    <Button appearance="secondary" containsIcon>
      <IconFont lib="web3" icon="identicon" aria-label="identicon" size="small" />
    </Button>
    <Button appearance="outline" containsIcon>
      <IconFont lib="web3" icon="identicon" aria-label="identicon" size="large" />
    </Button>
  </>
);

export const buttonWrapper = () => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary">
      Button that passes clicks through
    </Button>
  </div>
);

buttonWrapper.story = {
  name: 'button wrapper',
};

export const anchorWrapper = () => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">Original Link Wrapper</StoryLinkWrapper>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
      Button that passes href through
    </Button>
  </div>
);

anchorWrapper.story = {
  name: 'anchor wrapper',
};
