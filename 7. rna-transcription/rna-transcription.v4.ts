// Solution 4

type DNANucleotide = 'G' | 'C' | 'T' | 'A'
const convertTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export function toRna(DNA: string): string {
  const RNA = Object.values(DNA).reduce((RNA, DNANucleotide) => {
    const RNANucleotide = convertTable[DNANucleotide as DNANucleotide]
    if (!RNANucleotide) throw new Error('Invalid input DNA.')
    return RNA.concat(RNANucleotide)
  }, '')
  return RNA
}
