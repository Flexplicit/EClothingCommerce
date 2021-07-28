import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles'

interface IWithSpinnerProps {
  WrappedComponent: any // TODO: react comp type generic if possible
}
interface ISpinnerProps {
  isLoading: boolean
  [x: string]: any
}

const WithSpinner = ({ WrappedComponent }: IWithSpinnerProps) => {
  debugger;
  const Spinner = ({ isLoading, ...otherProps }: ISpinnerProps) => {
    debugger;
    console.log("HELLO")
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      // {console.log("hello")}
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
