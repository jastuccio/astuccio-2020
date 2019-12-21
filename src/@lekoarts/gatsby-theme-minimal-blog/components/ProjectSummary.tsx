/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Heading, Flex } from '@theme-ui/components';

// type TitleProps = {
//   children?: React.ReactNode
//   as?: string
//   className?: string
//   text: string
// }

const ProjectSummary = ({ name, desc, href }) => (
  <Flex
    sx={{
      justifyContent: `space-between`,
      // alignItems: `center`,
      // borderBottomStyle: `solid`,
      // borderBottomWidth: `1px`,
      // borderBottomColor: `divide`,
      // pb: 3,
      // mb: 4,
      // flexFlow: `wrap`,
    }}
  >
    <a href={href}>
      <h3>{name}</h3>
      <p>{desc}</p>
    </a>
  </Flex>
);

export default ProjectSummary;
