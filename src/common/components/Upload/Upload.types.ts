export type UploadProps =
	| {
			label: string
			name: string
			error?: boolean
			help?: string
			multiple: false
			value?: File | undefined
			onChange: (file: File | undefined) => void
			onBlur: () => void
	  }
	| {
			label: string
			name: string
			value?: File[]
			multiple: true
			error?: boolean
			help?: string
			onChange: (files: File[]) => void
			onBlur: () => void
	  }
