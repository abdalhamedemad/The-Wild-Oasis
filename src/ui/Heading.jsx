import styled ,{css} from "styled-components";

// const text = css`
// color: aliceblue;
// `;
// we can add some css styles to a variable and then use it in the styled component
// css is a function from styled-components that allows us to write css styles (JUST FOR VISUALIZATION)

const Heading = styled.h1`

  ${(props) =>
    props.as === "h1" &&
    css`
    font-size: 3rem;
    font-weight: 600;
  `}
  ${(props) =>
    props.as === "h2" &&
    css`
    font-size: 2rem;
    font-weight: 600;
  `}
  ${(props) =>
    props.as === "h3" &&
    css`
    font-size: 2rem;
    font-weight: 500;
  `}
  
  line-height: 1.5;
`;
export default Heading;