import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;

export default Container;
