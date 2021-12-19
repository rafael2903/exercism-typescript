// Solution 3

type DNANucleotide = 'G' | 'C' | 'T' | 'A'
const convertTable = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export function toRna(DNA: string): string {
  let RNA = ''
  for (const nucleotide of DNA as any) {
    if (!Object.keys(convertTable).includes(nucleotide))
      throw new Error('Invalid input DNA.')
    RNA = RNA.concat(convertTable[nucleotide as DNANucleotide])
  }
  return RNA
}
