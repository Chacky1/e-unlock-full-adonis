import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'

type FormInputProps = {
  id: string,
  label?: string,
  type?: string,
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: string,
  error?: string,
  disabled?: boolean,
  required?: boolean,
}

const FormInput = (props: FormInputProps) => {
  return (
    <Label htmlFor={props.id} className='flex flex-col gap-2'>
      <span>{props.label}</span>
      <Input
        id={props.id}
        type={props.type || 'text'}
        value={props.value}
        onChange={(e) => props.changeHandler(e)}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
      {props.error && (
        <p className="text-red-500">{props.error}</p>
      )}
    </Label>
  )
}

export default FormInput
