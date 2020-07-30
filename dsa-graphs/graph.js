/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */  
  addVertex(vertex) {

    this.nodes.add(vertex);

  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {

    for (let v of vertexArray) {
      this.nodes.add(v);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {

    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  
  }

  /** remove edge between vertices v1,v2 */  
  removeEdge(v1, v2) {

    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)

  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */   
  removeVertex(vertex) {

    this.nodes.delete(vertex);
    vertex.adjacent.clear()

    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) node.adjacent.delete(vertex);
    }

  }

  /** traverse graph with DFS and returns array of Node values */  
  depthFirstSearch(start) {

    let seen = new Set();
    let stack = [start];
    let result = [];
    let cur;

    seen.add(start)

    while(stack.length) {

      cur = stack.pop();
      result.push(cur.value)

      for (let v of cur.adjacent) {
        if (!seen.has(v)) {
          seen.add(v);
          stack.push(v)
        }
      }
    }
    return result;
  

  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {

    let seen = new Set();
    let queue = [start];
    let result = [];
    let cur;

    seen.add(start)

    while(queue.length) {

      cur = queue.shift();
      result.push(cur.value)

      for (let v of cur.adjacent) {
        if (!seen.has(v)) {
          seen.add(v);
          queue.push(v)
        }
      }
    }
    return result;
  }
}

module.exports = {Graph, Node}
