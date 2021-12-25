// Solution 2

class Node<TElement> {
  value: TElement
  nextNode?: Node<TElement>
  previousNode?: Node<TElement>

  constructor({ value, nextNode, previousNode }: Node<TElement>) {
    this.value = value
    this.nextNode = nextNode
    this.previousNode = previousNode
  }
}

export class LinkedList<TElement> {
  first?: Node<TElement>
  last?: Node<TElement>
  private length: number = 0

  isEmpty() {
    return this.length === 0
  }

  hasOnlyOneElement() {
    return this.length === 1
  }

  count() {
    return this.length
  }

  push(element: TElement) {
    const newNode = new Node<TElement>({
      value: element,
      previousNode: this.last,
    })

    if (this.isEmpty()) this.first = newNode
    else this.last!.nextNode = newNode

    this.last = newNode
    this.length++
  }

  pop() {
    if (this.isEmpty()) return

    const lastNode = this.last!
    const removedValue = lastNode.value

    if (this.hasOnlyOneElement()) delete this.first
    else {
      delete lastNode.previousNode!.nextNode
    }

    this.last = lastNode.previousNode
    this.length--

    return removedValue
  }

  shift() {
    if (this.isEmpty()) return

    const firstNode = this.first!
    const removedValue = firstNode.value

    if (this.hasOnlyOneElement()) delete this.last
    else {
      delete firstNode.nextNode!.previousNode
    }

    this.first = firstNode.nextNode
    this.length--

    return removedValue
  }

  unshift(element: TElement) {
    const newNode = new Node<TElement>({
      value: element,
      nextNode: this.first,
    })

    if (this.isEmpty()) this.last = newNode
    else this.first!.previousNode = newNode

    this.first = newNode
    this.length++
  }

  delete(element: TElement) {
    if (this.isEmpty()) return

    let node = this.first

    while (node && node.value !== element) {
      node = node.nextNode
    }

    if (node) {
      if (this.first === node) this.first = this.first.nextNode
      else node.previousNode!.nextNode = node.nextNode

      if (this.last === node) this.last = this.last.previousNode
      else node.nextNode!.previousNode = node.previousNode

      this.length--
    }
  }
}
