import React, { useReducer } from "react";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: #555555;
  border: 0;
  border-radius: 0.25em;
  color: white;
  font-family: inherit;
  font-size: 1.25rem;
  margin: 0 0.5rem;
  outline: none;
  padding: 0.5em 1em;
  user-select: none;

  &:hover {
    background-color: #333333;
    cursor: pointer;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const CounterValue = styled.strong`
  display: block;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 0.375em;
`;

const Counter = () => {
  const [counter, dispatch] = useReducer(
    (counter, addAmount) => counter + addAmount,
    0
  );

  return (
    <div>
      <CounterValue data-testid="counter-value">Count: {counter}</CounterValue>
      <ButtonRow>
        <Button onClick={() => dispatch(-2)}>-2</Button>
        <Button onClick={() => dispatch(-1)}>-1</Button>
        <Button onClick={() => dispatch(1)}>+1</Button>
        <Button onClick={() => dispatch(2)}>+2</Button>
      </ButtonRow>
    </div>
  );
};

export default Counter;
