import { z } from 'zod'

export const TemplateTypeSchema = z.enum(['ANAMNESIS', 'EVALUATION'])
