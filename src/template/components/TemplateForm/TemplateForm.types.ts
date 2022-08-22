import { FormProps } from 'common/types'
import { CreateTemplateDto, UpdateTemplateDto } from 'template/schemas'

export type TemplateFormProps<
	T extends CreateTemplateDto | Partial<UpdateTemplateDto> | UpdateTemplateDto,
> = FormProps<T>
