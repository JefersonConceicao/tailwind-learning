export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const unitIndex = Math.floor(Math.log10(bytes) / 3) // Determine the unit index based on the byte value
  const readableSize = (bytes / Math.pow(1024, unitIndex)).toFixed(1) // Convert bytes to the chosen unit and round to 1 decimal place

  return `${readableSize} ${units[unitIndex]}`
}
