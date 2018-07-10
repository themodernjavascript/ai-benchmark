import React from "react";
import Buttons from "../components/Buttons";

const N = 1000;

class ReactBenchmark extends React.Component {
  startTime = 0;
  endTime = 0;
  times = [];

  state = {
    nodes: [],
    lastChangeType: null
  };

  start() {
    this.startTime = new Date();
  }

  end() {
    this.endTime = new Date();
    const data = this.endTime - this.startTime;
    this.refs.time.innerHTML = `<code>${data}ms</code>`;
    this.times.push(data);
  }

  componentWillUpdate() {
    this.start();
  }

  componentWillMount() {
    this.start();
  }

  componentDidUpdate() {
    this.end();
  }

  componentDidMount() {
    this.end();
  }

  get newNodes() {
    return new Array(N)
      .fill()
      .map(() => `${Math.random()}:${new Date().getTime()}`);
  }

  get averageTime() {
    if (this.times.length === 0) return 0;
    return Math.round(
      this.times.reduce((m, n) => m + n, 0) / this.times.length
    );
  }

  prepend = () => {
    this.setState({
      nodes: [...this.newNodes, ...this.state.nodes],
      lastChangeType: "prepend1000"
    });
  }

  insert = () => {
    const { nodes } = this.state;
    this.setState({
      nodes: [
        ...nodes.slice(0, nodes.length / 2),
        ...this.newNodes,
        ...nodes.slice(nodes.length / 2, nodes.length)
      ],
      lastChangeType: "insert1000"
    });
  }

  append = () => {
    this.setState({
      nodes: [...this.state.nodes, ...this.newNodes],
      lastChangeType: "append1000"
    });
  }

  drop = () => {
    this.setState({
      nodes: [],
      lastChangeType: "dropAll"
    });
  }

  remove = () => {
    const { nodes } = this.state,
    pivot = Math.floor(Math.random() * nodes.length);

    this.setState({
      nodes: [
        ...nodes.slice(0, pivot),
        ...nodes.slice(pivot + 1, nodes.length)
      ],
      lastChangeType: "remove1"
    });
  }

  render() {
    const { nodes } = this.state;

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
            Nodes #: <code>{nodes.length}</code>
          </p>
          <p>
            Rendered times: <span ref="time" />
          </p>
          <p>
            Average rendered times: <code>{this.averageTime}ms</code>
          </p>
        </div>
        <div className="row benchmark-scratchpad">
          {nodes.map((k, i) => <div key={k}>{k}</div>)}
        </div>
      </div>
    );
  }
}

export default ReactBenchmark;