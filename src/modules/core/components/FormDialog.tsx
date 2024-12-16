import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Button } from './button'

type FormProps<T> = {
  title?: string
  children: React.ReactNode
  open: boolean
  defaultValues?: Partial<T>
  onFinish(values: T): void
  onClose(): void
}

export type DialogProps = Partial<{
  open: boolean
  create(values: any): void
  onClose(): void
}>


// FORM DIALOG WITH REACT HOOK FORM
export const FormDialog = <T extends FieldValues>({
  open,
  title,
  onClose,
  children,
  onFinish,
  defaultValues
}: FormProps<T>) => {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: T) => {
    onFinish(data)
    reset()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit(onSubmit)
      }}
    >
      {title && (
        <FormHeading>
          {title}
        </FormHeading>
      )}
      <FormProvider {...methods}>
        {children}
      </FormProvider>
    </Dialog>
  )
}

export const FormDialogContent = ({ children }: React.PropsWithChildren) => (
  <DialogContent>
    {children}
  </DialogContent>
)

export const FormHeading = ({ children }: React.PropsWithChildren) => {
  return (
    <DialogTitle sx={{ fontWeight: '700', pb: 0, fontSize: 20 }}>
      {children}
    </DialogTitle>
  )
}

export const FormActions = ({
  onClose = () => { },
  buttonText = ''
}) => {
  return (
    <DialogActions sx={{ paddingBottom: '1.5rem', paddingInline: '1.5rem', gap: 1 }}>
      <Button onClick={onClose} sx={{ boxShadow: 1, px: 2, color: 'currentColor' }}>
        Cancel
      </Button>
      <Button variant='contained' type='submit'>
        {buttonText}
      </Button>
    </DialogActions>
  )
}