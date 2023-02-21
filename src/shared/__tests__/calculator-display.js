import React from 'react';
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display';

test('should render', () => {
  const {container} = render(<CalculatorDisplay value="0"/>)
  console.log(container);
})
