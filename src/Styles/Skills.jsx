import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: #111;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  font-size: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  transition: 0.3s;

  svg {
    font-size: 3rem;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;