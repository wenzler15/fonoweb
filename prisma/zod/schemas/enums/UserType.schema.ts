import { z } from 'zod'

export const UserTypeSchema = z.enum(['DOCTOR', 'PATIENT'])
