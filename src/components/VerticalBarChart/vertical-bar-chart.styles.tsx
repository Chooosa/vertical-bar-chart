import styled from 'styled-components'

interface WrapperProps {
   customWidth: number
}

export const Wrapper = styled.div<WrapperProps>`
   width: ${props => props.customWidth > 1200 ? '1200' : props.customWidth}px;
   max-width: 1200px;
   height: 500px;
   display: flex;
   align-items: flex-end;
   justify-content: space-around;
   margin: 80px auto;
   border: 1px solid #000;
`