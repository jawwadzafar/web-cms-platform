/**
 * Formats an array of authors into a prettified string.
 * 
 * @param authors - Array of author objects with name property
 * @returns A prettified string of authors
 * 
 * Examples:
 * - [Author1, Author2] becomes 'Author1 and Author2'
 * - [Author1, Author2, Author3] becomes 'Author1, Author2, and Author3'
 */
export const formatAuthors = (authors: Array<{ name: string }> | undefined): string => {
  if (!authors || authors.length === 0) return ''
  
  // Filter out authors without names
  const filteredAuthors = authors.filter((author) => Boolean(author.name))

  if (filteredAuthors.length === 0) return ''
  if (filteredAuthors.length === 1) return filteredAuthors[0].name
  if (filteredAuthors.length === 2)
    return `${filteredAuthors[0].name} and ${filteredAuthors[1].name}`

  return `${filteredAuthors
    .slice(0, -1)
    .map((author) => author?.name)
    .join(', ')} and ${filteredAuthors[filteredAuthors.length - 1].name}`
}