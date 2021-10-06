import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    margin-top: 16px;
    display: flex;
    background-color: #546e7a;
    border-radius: 8px;
    margin-bottom: 12px;
    align-items: center;
    padding: 10px;

    input { 
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }

    label { 
      color: white;
      text-decoration: ${done ? "line-through" : "initial"};
      margin-bottom: 3px;
    }
 `
);
