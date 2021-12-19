// Solution 8

type DNANucleotide = 'G' | 'C' | 'T' | 'A'
const convertTable: { [DNANucleotide: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export function toRna(DNA: string): string {
  const RNA = [...DNA].reduce((RNA, DNANucleotide) => {
    if (DNANucleotide in convertTable)
      return RNA + convertTable[DNANucleotide as DNANucleotide]
    throw new Error('Invalid input DNA.')
  }, '')
  return RNA
}
