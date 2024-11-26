import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>
export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize rounded-lg border border-zinc-300 px-3"
      {...props}
    />
  )
}
