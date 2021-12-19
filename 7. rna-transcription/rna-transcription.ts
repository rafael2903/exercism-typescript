// Solution 9

const convertTable: { [key: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export function toRna(DNA: string): string {
  const RNA = [...DNA].reduce((RNA, DNANucleotide) => {
    const RNANucleotide = convertTable[DNANucleotide]
    if (!RNANucleotide) throw new Error('Invalid input DNA.')
    return RNA + RNANucleotide
  }, '')
  return RNA
}
