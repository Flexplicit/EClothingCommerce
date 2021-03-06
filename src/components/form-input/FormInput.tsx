import './FormInput.styles.scss'

interface IFormInputState {
  handlechange: (Ev: HTMLInputElement) => void
  label?: string
  [x: string]: any
}

const FormInput = (props: { inputState: IFormInputState }) => {
  const { handlechange, label, ...rest } = props.inputState 
  return (
    <div className="group">
      <input className="form-input" onChange={(ev) => props.inputState.handlechange(ev.target)} {...rest} />
      {props.inputState.label ? <label className={`${rest.value?.length ? 'shrink' : ''} form-input-label`}>{props.inputState.label}</label> : null}
    </div>
  )
}

export default FormInput
