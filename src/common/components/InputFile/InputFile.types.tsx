import { Merge, Simplify } from 'type-fest'

export type InputFileProps = Simplify<
	Merge<
		Omit<Partial<HTMLInputElement>, 'type'>,
		{
			onChange: (files: File[]) => void
		}
	>
>
