import styled, { keyframes } from 'styled-components'

const grow = keyframes`
 from {
   width: 0%;
   left: 50%;
   opacity: 1;
 }
 to: {
   width: 100%;
   left: 0;
   opacity: 1;
 }
`

const Title = styled.span`
  display: inline-block;
  font-size: 40pt;
  font-weight: 300;
  position: relative;
  margin: 0 auto;
  color: ${props => props.color || '#fff'};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 16px;
  &:after {
    display: block;
    content: "";
    display: absolute;
    width: 100%;
    opacity: 1;
    height: 5px;
    background: ${props => props.color || '#fff'};
  }
`

export default Title;
