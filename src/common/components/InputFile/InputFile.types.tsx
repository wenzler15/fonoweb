import { Merge, Simplify } from 'type-fest'
import { HTMLAttributes } from 'react'

export type InputFileProps = Simplify<
	Merge<
		Omit<HTMLAttributes<HTMLInputElement>, 'type'>,
		{
			onChange: (files: File[]) => void
		}
	>
>
