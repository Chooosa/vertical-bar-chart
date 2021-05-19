import React from 'react'

import {BarContainer} from './bar.styles'

interface BarProps {
   data: {
      value: number,
      color: string,
   },
   coeff: number
}

const Bar: React.FC<BarProps> = ({data, coeff}) => {
   return (
      <BarContainer
         barHeight={data.value / coeff}
         color={data.color}
      >

      </BarContainer>
   )
}

export default Bar