import React from 'react';

import { ListItem } from './ListItem';
import { IconWeb3 } from '../IconWeb3';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  title: 'Design System/tooltip/ListItem',

  decorators: [
    storyFn => (
      <div style={{ width: 200, border: '1px solid #ddd', margin: '3rem' }}>{storyFn()}</div>
    ),
  ],

  parameters: {
    component: ListItem,
  },
};

export const all = () => (
  <div>
    <ListItem isLoading />
    <ListItem title="Default" />
    <ListItem title="lorem ipsum dolor sit amet consectatur" />
    <ListItem title="Default icon" right={<IconWeb3 icon="eye" size="tiny" />} />
    <ListItem left="left" title="title" center="center" right="right" />
    <ListItem active left="left" title="active" center="center" right="right" />
    <ListItem
      appearance="secondary"
      active
      left="left"
      title="secondary active"
      center="center"
      right={<IconWeb3 icon="eye" size="tiny" />}
    />
    <ListItem
      active
      left="left"
      title="active icon"
      center="center"
      right={<IconWeb3 icon="eye" size="tiny" />}
    />
    <ListItem
      active
      left="✅"
      title="lorem ipsum dolor sit amet consectatur"
      center="center"
      right={<IconWeb3 icon="eye" size="tiny" />}
    />
    <ListItem disabled left="left" title="disabled" center="center" right="right" />
  </div>
);

export const loading = () => <ListItem isLoading />;
export const defaultStory = () => <ListItem title="Default" />;

defaultStory.story = {
  name: 'default',
};

export const longTitle = () => <ListItem title="lorem ipsum dolor sit amet consectatur" />;

longTitle.story = {
  name: 'long title',
};

export const defaultIcon = () => (
  <ListItem title="Default icon" right={<IconWeb3 icon="eye" size="tiny" />} />
);

defaultIcon.story = {
  name: 'default icon',
};

export const activeIcon = () => (
  <ListItem active title="active icon" right={<IconWeb3 icon="eye" size="tiny" />} />
);

activeIcon.story = {
  name: 'active icon',
};

export const wPositions = () => (
  <ListItem left="left" title="title" center="center" right="right" />
);

wPositions.story = {
  name: 'w/positions',
};

export const wPositionsActive = () => (
  <ListItem active left="left" title="active" center="center" right="right" />
);

wPositionsActive.story = {
  name: 'w/positions active',
};

export const wPositionsActiveLongTitle = () => (
  <ListItem
    active
    left="✅"
    title="lorem ipsum dolor sit amet consectatur"
    center="center"
    right={<IconWeb3 icon="eye" size="tiny" />}
  />
);

wPositionsActiveLongTitle.story = {
  name: 'w/positions active long title',
};

export const disabled = () => (
  <ListItem disabled left="left" title="disabled" center="center" right="right" />
);

export const withLinkWrapper = () => (
  <>
    <ListItem LinkWrapper={StoryLinkWrapper} isLoading href="http://www.google.com" />
    <ListItem LinkWrapper={StoryLinkWrapper} title="Default" href="http://www.google.com" />
    <ListItem
      LinkWrapper={StoryLinkWrapper}
      title="lorem ipsum dolor sit amet consectatur"
      to="http://www.google.com"
    />
    <ListItem
      LinkWrapper={StoryLinkWrapper}
      title="Default icon"
      right={<IconWeb3 icon="eye" size="tiny" />}
      to="http://www.google.com"
    />
  </>
);

withLinkWrapper.story = {
  name: 'with LinkWrapper',
};
