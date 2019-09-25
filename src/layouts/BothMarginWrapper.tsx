/**
 * 양사이드 여백을 설정하는 레이아웃 컴포넌트
 */

import styled from 'styled-components';

import { BaseLayout } from './BaseLayout';

const DEPTH_WIDTH = 20;

interface IBothMarginWrapperProps {
  depth?: number;
}

export const BothMarginWrapper = styled(BaseLayout)<IBothMarginWrapperProps>`
  overflow: auto;
  padding-right: ${({ depth = 1 }) => `${DEPTH_WIDTH * depth}px`};
  padding-left: ${({ depth = 1 }) => `${DEPTH_WIDTH * depth}px`};
`;
