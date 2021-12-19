export class Matrix {
  constructor(readonly matrix: string) {}

  get rows(): number[][] {
    return this.matrix
      .split('\n')
      .map((row) => row.split(' ').map((item) => Number(item)))
  }

  get columns(): number[][] {
    const rows = this.rows
    return rows.reduce(
      (columns, row) => columns.map((column, index) => [...column, row[index]]),
      Array(rows[0].length).fill([])
    )
  }
}
