import { CreateAnamnesisDto } from 'anamnesis/schemas'
import { Form } from 'common/types'

export type AnamnesisFormProps<DTO extends CreateAnamnesisDto> = Form<DTO>
