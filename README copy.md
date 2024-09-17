# Learning React

## Styled Components

> npm install styled-components

- styled-components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS.
- example:

```jsx
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1.5em;
`;

function App() {
  return <Button>Click me</Button>;
}
```

- global styles:

```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle whiteColor />
      <h1>Hello world</h1>
    </>
  );
}
```

- props in styled components:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  font-size: 1.5em;
`;

## React-Query
- >> npm install react-query
- >> npm install react-query-devtools
```
