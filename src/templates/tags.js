// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import TagList from '../components/pages/TagList';

import { type Tag } from '../types/tag';

type Props = {
  pathContext: {
    tagList: Array<Tag>,
  },
};

export const Tags = ({ pathContext }: Props) => (
  <Fragment>
    <Helmet>
      <title>Konular</title>
      <meta name="og:title" content="Konular" />
      <meta name="twitter:title" content="Konular" />
    </Helmet>

    <TagList tags={pathContext.tagList} />
  </Fragment>
);

export default Tags;
