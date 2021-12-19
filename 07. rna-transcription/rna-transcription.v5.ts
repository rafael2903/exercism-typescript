// Solution 5

type DNANucleotide = 'G' | 'C' | 'T' | 'A'
const convertTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export function toRna(DNA: string): string {
  let RNA = ''
  for (const DNANucleotide of DNA as any) {
    const RNANucleotide = convertTable[DNANucleotide as DNANucleotide]
    if (!RNANucleotide) throw new Error('Invalid input DNA.')
    RNA = RNA.concat(RNANucleotide)
  }
  return RNA
}
