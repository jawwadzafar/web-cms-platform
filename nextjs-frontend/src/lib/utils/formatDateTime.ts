/**
 * Formats a timestamp into a MM/DD/YYYY date string.
 * 
 * @param {string} timestamp - The timestamp to format (ISO string format)
 * @returns {string} Formatted date string in MM/DD/YYYY format
 */
export const formatDateTime = (timestamp: string): string => {
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)
  const months = date.getMonth()
  const days = date.getDate()

  const MM = months + 1 < 10 ? `0${months + 1}` : months + 1
  const DD = days < 10 ? `0${days}` : days
  const YYYY = date.getFullYear()

  return `${MM}/${DD}/${YYYY}`
}