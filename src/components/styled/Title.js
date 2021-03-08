import styled, { keyframes } from 'styled-components'

const grow = keyframes`
 from {
   left: 50%;
   width: 0%;
   opacity: 1;
 }
 to {
   left: 0;
   width: 100%;
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
    position: absolute;
    width: 0%;
    opacity: 0;
    height: 5px;
    background: ${props => props.color || '#fff'};
    animation: ${grow} 0.2s forwards 0.3s;
  }
`

export default Title;
