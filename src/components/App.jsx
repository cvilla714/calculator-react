import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operation) {
    this.setState((prevState) => calculate(prevState, operation));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div>
        <h1 className="title">Project Calculator</h1>

        <div className="calculator">
          <Display
            result={`${total || ''}
          ${operation || ''}
          ${(total && next) || ''}
          `}
          />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
export default App;
