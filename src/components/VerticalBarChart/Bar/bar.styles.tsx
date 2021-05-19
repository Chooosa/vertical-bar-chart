import styled from 'styled-components'

export const BarWrapper = styled.div`
   height: 100%;

`

interface BarContainerProps {
   barHeight: number,
   color: string
}

export const BarContainer = styled.div<BarContainerProps>`
   height: ${props => props.barHeight}%;
   width: 50px;
   background-color: ${props => props.color};
   transition-duration: 0.2s;
`