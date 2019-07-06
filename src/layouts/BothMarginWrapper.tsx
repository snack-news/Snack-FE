/**
 * 양사이드 여백을 설정하는 레이아웃 컴포넌트
 */

import styled from 'styled-components';
import { theme } from 'Config/index';
import { BaseLayout } from './BaseLayout';

interface IBothMarginWrapperProps {
  depth?: number;
}

export const BothMarginWrapper = styled(BaseLayout)<IBothMarginWrapperProps>`
  overflow: auto;
  margin: 0 auto;
  padding-right: ${({ depth = 1 }) => `${theme.depthWidth * depth}px`};
  padding-left: ${({ depth = 1 }) => `${theme.depthWidth * depth}px`};
  max-width: ${({ depth = 1 }) => `${theme.maxWidth - theme.depthWidth * depth}px`};
`;
