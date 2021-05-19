import React from 'react'

import {Wrapper} from './vertical-bar-chart.styles'
import Bar from './Bar/bar.component'

interface VerticalBarChartProps {
   data:
      {
      value: number,
      color: string
      }[]

}

const VerticalBarChart: React.FC<VerticalBarChartProps> = ({data}) => {
   const max = data.reduce((acc, curr) => acc.value > curr.value ? acc : curr);
   const coeff: number = max.value / 100

   return (
      <Wrapper
         customWidth={data.length * 100}
      >
         {
            data.length > 0 && data.map((item, index) => {
               return (
                  <Bar
                     key={index}
                     data={item}
                     coeff={coeff}
                  />
               )
            })
         }

      </Wrapper>
   )
}

export default VerticalBarChart