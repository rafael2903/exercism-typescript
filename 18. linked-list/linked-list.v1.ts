// Solution 1

class Node<TElement> {
  value: TElement
  nextNode: Node<TElement> | null
  previousNode: Node<TElement> | null

  constructor({ value, nextNode, previousNode }: Node<TElement>) {
    this.value = value
    this.nextNode = nextNode
    this.previousNode = previousNode
  }
}

export class LinkedList<TElement> {
  first: Node<TElement> | null
  last: Node<TElement> | null

  constructor() {
    this.first = null
    this.last = null
  }

  push(element: TElement) {
    const newNode = new Node<TElement>({
      value: element,
      previousNode: this.last,
      nextNode: null,
    })

    if (this.isEmpty()) this.first = newNode
    else this.last!.nextNode = newNode

    this.last = newNode
  }

  pop() {
    if (this.isEmpty()) return undefined

    const lastNode = this.last!
    const removedValue = lastNode.value

    if (this.count() === 1) this.first = null
    else {
      lastNode.previousNode!.nextNode = null
    }

    this.last = lastNode.previousNode

    return removedValue
  }

  shift() {
    if (this.isEmpty()) return undefined

    const firstNode = this.first!
    const removedValue = firstNode.value

    if (this.count() === 1) this.last = null
    else {
      firstNode.nextNode!.previousNode = null
    }

    this.first = firstNode.nextNode

    return removedValue
  }

  unshift(element: TElement) {
    const newNode = new Node<TElement>({
      value: element,
      previousNode: null,
      nextNode: this.first,
    })

    if (this.isEmpty()) this.last = newNode
    else this.first!.previousNode = newNode

    this.first = newNode
  }

  delete(element: TElement) {
    if (this.isEmpty()) return

    let node = this.first

    while (node !== null && node.value !== element) {
      node = node.nextNode
    }

    if (node !== null) {
      if (this.first === node) this.first = this.first.nextNode
      else node.previousNode!.nextNode = node.nextNode

      if (this.last === node) this.last = this.last.previousNode
      else node.nextNode!.previousNode = node.previousNode
    }
  }

  isEmpty() {
    return this.first === null && this.last === null
  }

  count() {
    let node = this.first
    let length = 0

    while (node) {
      length++
      node = node.nextNode
    }

    return length
  }
}
