/**
 * 양사이드 여백을 설정하는 레이아웃 컴포넌트
 */

import styled from 'styled-components';
import { theme } from 'Constants';
import { BaseLayout } from './BaseLayout';

interface BothMarginWrapperProps {
  depth?: number;
}

export const BothMarginWrapper = styled(BaseLayout)<BothMarginWrapperProps>`
  overflow: auto;
  padding-right: ${({ depth = 1 }) => `${theme.depthWidth * depth}px`};
  padding-left: ${({ depth = 1 }) => `${theme.depthWidth * depth}px`};
  margin: 0 auto;
  max-width: ${({ depth = 1 }) => `${theme.maxWidth - theme.depthWidth * depth}px`};
`;
