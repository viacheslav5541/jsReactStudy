
import React, { Component } from 'react'





const TitleContext = React.createContext();

const LevelOneT = ({ onChangeIndex, numbers }) => (
  numbers.map((item) => (<div>{item.head ? <div><text>{item.head}</text><LevelOneT onChangeIndex={onChangeIndex} numbers={item.numbers}></LevelOneT></div> : <div onClick={() => onChangeIndex(item)}>{item}</div>}</div>))
)


const LevelThreeT = ({ result }) => (
  <div>{result.first + ' + ' + result.second + ' = ' + `${result.first + result.second}`}</div>
)


const HOC = (number) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render() {
      return (
        <TitleContext.Consumer>
          {(props) => <WrappedComponent result={number == 3 ? { first: props.firstIndex, second: props.secondIndex } : null} onChangeIndex={number == 1 ? props.changeFirstIndex : props.changeSecondIndex} numbers={props.numbers}></WrappedComponent>
          }
        </TitleContext.Consumer>);
    }
  }
}
const LevelOne = HOC(1)(LevelOneT)
const LevelTwo = HOC(2)(LevelOneT)
const LevelThree = HOC(3)(LevelThreeT)

class MegaApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstIndex: 0,
      secondIndex: 0
    }
    this.numbers = [1, { head: 'Супер положительные', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9] }, 2, 3, 4, 5, 6, { head: 'Супер отрицательные', numbers: [-1, -2, -3, -4, -5, -6, -7, -8, -9] }, 8, 9]
  }

  changeFirstIndex = (index) => {
    this.setState({ firstIndex: index })
  }

  changeSecondIndex = (index) => {
    this.setState({ secondIndex: index })
  }

  render() {
    return (
      <TitleContext.Provider value={{ numbers: this.numbers, changeFirstIndex: this.changeFirstIndex, changeSecondIndex: this.changeSecondIndex, firstIndex: this.state.firstIndex, secondIndex: this.state.secondIndex }}>
        <LevelOne />
        или
        <LevelTwo></LevelTwo>
        Результат
        <LevelThree></LevelThree>
      </TitleContext.Provider>
    );
  }
}

export default MegaApp;
