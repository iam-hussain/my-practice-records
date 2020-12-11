import React from "react";
import logo from "./logo.svg";
import "./App.css";

const FunctionalComponent = ({ name, pcount }) => {
  React.useEffect(() => {
    console.log("Hello FunctionalComponent");
    return () => {
      console.log("Bye FunctionalComponent");
    };
  }, []);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(pcount + count);
    return () => {
      setCount(0);
    };
  }, [pcount]);

  return (
    <div>
      <p>
        {name} count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Hello ClassComponent");
  }
  componentWillUnmount() {
    console.log("Bye ClassComponent");
  }
  render() {
    return (
      <div>
        <p>count: {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
        {this.state.count%2 > 0 &&
        <h1>
          Hello, world,{" "}
          <FunctionalComponent name="ZaHu" pcount={this.state.count} />
        </h1>
        }
      </div>
    );
  }
}

export default ClassComponent;
