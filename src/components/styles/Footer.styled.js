import styled from "styled-components";
export const StyledFooter = styled.footer`
background-color: black;
color: #fff;
padding: 100px 0 60px;
ul {
  list-style-type: none;
}
ul li {
  margin-bottom: 20px;
}
p {
  text-align: right;
}
@media (max-width: 768px) {
  text-align: center;
  ul {
    padding: 0;
  }
  p {
    text-align: center;
  }
}
`