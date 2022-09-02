import { CreatePatientDto } from 'patient/schemas'
import { Form } from 'common/types'

export type PatientFormProps<DTO extends CreatePatientDto> = Form<DTO>
