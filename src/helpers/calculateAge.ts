import { differenceInYears, format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const calculateAge = (date: Date): number => {
  const formatedDate = format(utcToZonedTime(date, 'UTC'), 'yyyy-MM-dd')

  const age = differenceInYears(new Date(), new Date(formatedDate))

  return age
}
