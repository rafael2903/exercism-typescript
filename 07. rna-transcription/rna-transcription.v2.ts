// Solution 2

export function toRna(DNA: string): string {
  const RNA = Object.values(DNA).reduce((RNA, nucleotide) => {
    switch (nucleotide) {
      case 'G':
        return RNA.concat('C')
      case 'C':
        return RNA.concat('G')
      case 'T':
        return RNA.concat('A')
      case 'A':
        return RNA.concat('U')
      default:
        throw new Error('Invalid input DNA.')
    }
  }, '')
  return RNA
}
