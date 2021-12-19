// Solution 7

type DNANucleotide = 'G' | 'C' | 'T' | 'A'
const convertTable: { [DNANucleotide: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export function toRna(DNA: string): string {
  const RNA = [...DNA].reduce((RNA, DNANucleotide) => {
    const RNANucleotide = convertTable[DNANucleotide as DNANucleotide]
    if (!RNANucleotide) throw new Error('Invalid input DNA.')
    return RNA + RNANucleotide
  }, '')
  return RNA
}
