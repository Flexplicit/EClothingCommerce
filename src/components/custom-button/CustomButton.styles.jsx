import styled, { css } from 'styled-components'

const getButtonStyles = (props) => {
  console.log(props.isGoogleSignIn, 'HEEREE')
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }
  return props.inverted ? invertedButtonStyles : buttonStyles
}

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  /* background-color: black; */
  /* color: white; */
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #274e8d;
    border: none;
  }
`

const invertedButtonStyles = css`
  &.inverted {
    background-color: white;
    color: black;
    border: 1px black solid;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`

