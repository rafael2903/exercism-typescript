// Solution 1

type RNANucleotide = 'G' | 'C' | 'U' | 'A'

export function toRna(DNA: string): string {
  const RNA = Object.values(DNA).reduce((RNA, nucleotide) => {
    let transcribedNucleotide: RNANucleotide
    switch (nucleotide) {
      case 'G':
        transcribedNucleotide = 'C'
        break
      case 'C':
        transcribedNucleotide = 'G'
        break
      case 'T':
        transcribedNucleotide = 'A'
        break
      case 'A':
        transcribedNucleotide = 'U'
        break
      default:
        throw new Error('Invalid input DNA.')
    }
    return RNA.concat(transcribedNucleotide)
  }, '')
  return RNA
}
