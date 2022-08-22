import * as Yup from 'yup'
import { ptForm } from 'yup-locale-pt'

Yup.setLocale(ptForm)

// eslint-disable-next-line unicorn/prefer-export-from
export { Yup }
