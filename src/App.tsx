import React from 'react';

import {Wrapper, Container} from './App.styles'
import VerticalBarChart from './components/VerticalBarChart/vertical-bar-chart.component';

const data = [
  // от 2 до 21 столбика,
  //value - высота столбика в процентах по отношению к максимальному значению,
  //color - цвет в любом формате
  {value: 40, color: '#468EC1'},
  {value: 60, color: '#468EC1'},
  {value: 70, color: '#468EC1'},
  {value: 30, color: '#468EC1'},
  {value: 65, color: '#468EC1'},
  {value: 90, color: '#468EC1'},
]

const data2 = [
  {value: 15, color: 'rgba(255, 125, 25, 0.9)'},
  {value: 130, color: 'blue'},
  {value: 45, color: 'red'},
  {value: 100, color: 'green'},
  {value: 85, color: '#757272'},
  {value: 60, color: 'purple'},
  {value: 20, color: 'red'},
  {value: 30, color: 'blue'},
  {value: 45, color: 'rgb(125, 100, 200)'},
  {value: 30, color: 'green'},
  {value: 50, color: 'red'},
  {value: 90, color: 'grey'},
]

const App = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalBarChart
          data={data}
        />
        <VerticalBarChart
          data={data2}
        />
      </Container>
    </Wrapper>
  )
}

export default App;