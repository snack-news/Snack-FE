/**
 * 양사이드 여백을 설정하는 레이아웃 컴포넌트
 */

import styled from 'styled-components';

interface BothMarginWrapperProps {
  depth?: number;
}

export const BothMarginWrapper = styled.div<BothMarginWrapperProps>`
  display: flex;
  overflow: auto;

  padding: 0px ${({ depth = 1 }) => `${20 * depth}px`};
  margin: 0 auto;
  max-width: ${({ depth = 1 }) => `${600 - 20 * depth}px`};
`;
