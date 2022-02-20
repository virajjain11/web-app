import styled from "styled-components";
export const StyledHeader = styled.header`
  background-color: ${(props)=> props.bg};
  padding: 40px 0;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;
`
export const Logo = styled.img`
@media (max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
  margin-bottom: 40px;
}`

export const Image = styled.img`
 width:375px;
 margin-left:30px;

`