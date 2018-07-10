import React, { Component } from "react";

import Buttons from "../components/Buttons";

const N = 1000;

class VanillaBenchmark extends Component {
  nodes = [];
  times = [];

  get newNodes() {
    return new Array(N)
      .fill()
      .map(() => `${Math.random()}:${new Date().getTime()}`);
  }

  get averageTime() {
    return Math.round(
      this.times.reduce((m, n) => m + n, 0) / this.times.length
    );
  }

  prepend = () => {
    this.nodes = [...this.newNodes, ...this.nodes];
    this.naiveRender("prepend1000");
  }

  insert = () => {
    const nodes = this.nodes;
    this.nodes = [
      ...nodes.slice(0, nodes.length / 2),
      ...this.newNodes,
      ...nodes.slice(nodes.length / 2, nodes.length)
    ];
    this.naiveRender("insert1000");
  }

  append = () => {
    this.nodes = [...this.nodes, ...this.newNodes];
    this.naiveRender("append1000");
  }

  drop = () => {
    this.nodes = [];
    this.naiveRender("dropAll");
  }

  remove = () => {
    const nodes = this.nodes,
    pivot = Math.floor(Math.random() * nodes.length);

    this.nodes = [
      ...nodes.slice(0, pivot),
      ...nodes.slice(pivot + 1, nodes.length)
    ];
    this.naiveRender("remove1");
  }

  naiveRender(type) {
    let start = new Date();
    // remove all existing nodes
    let scratchpad = this.refs.scratchpad;

    while (scratchpad.firstChild) {
      scratchpad.removeChild(scratchpad.firstChild);
    }

    // append all nodes from scratch
    this.nodes.forEach(k => {
      let node = document.createElement("div");
      node.appendChild(document.createTextNode(k));
      scratchpad.appendChild(node);
    });

    let end = new Date();
    this.times.push(end - start);

    // update meta info
    this.refs.time.innerHTML = `<code>${end - start}ms</code>`;
    this.refs.currentCount.innerHTML = this.nodes.length;
    this.refs.avgTime.innerHTML = `<code>${this.averageTime}ms</code>`;
  }

  render() {
    return (
      <div>
        <Buttons
          prepend={this.prepend}
          insert={this.insert}
          append={this.append}
          drop={this.drop}
          remove={this.remove}
          N={N}
        />
        <div className="padding5">
          <p>
            Nodes #: <code ref="currentCount" />
          </p>
          <p>
            Rendered time: <span ref="time" />
          </p>
          <p>
            Average rendered time: <code ref="avgTime" />
          </p>
        </div>
        <div className="row benchmark-scratchpad" ref="scratchpad" />
      </div>
    );
  }
}

export default VanillaBenchmark;
