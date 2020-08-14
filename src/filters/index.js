import { formatDateMinute } from '@/utils'

export function formatDateMinuteF(val) {
  if (val === undefined || val === null || val === '') {
    return ''
  } else {
    return formatDateMinute(new Date(val))
  }
}
