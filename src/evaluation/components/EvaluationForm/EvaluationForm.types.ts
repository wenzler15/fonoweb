import { CreateEvaluationDto } from 'evaluation/schemas'
import { Form } from 'common/types'

export type EvaluationFormProps<DTO extends CreateEvaluationDto> = Form<DTO>
