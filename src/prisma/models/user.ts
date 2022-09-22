import * as z from "zod"
import { UserType } from "@prisma/client"

export const User = z.object({
  id: z.string(),
  numericId: z.number().int(),
  socialName: z.string().nullish(),
  email: z.string(),
  name: z.string(),
  gender: z.string().nullish(),
  customGender: z.string().nullish(),
  cpf: z.string().nullish(),
  birthDate: z.date().nullish(),
  password: z.string(),
  type: z.nativeEnum(UserType),
  avatar: z.string().nullish(),
  facebookToken: z.string().nullish(),
  passwordResetToken: z.string().nullish(),
  passwordResetExpires: z.date().nullish(),
  isAdmin: z.boolean(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
