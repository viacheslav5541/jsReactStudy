import React from "react";
import { inject, observer } from "mobx-react/index";
import { LevelOneT } from "./LevelOne";
import commonStore from "../../stores/commonStore";
import { LevelTwo } from "./LevelTwo";
import "../Styles/App.scss";




@inject('commonStore')
@observer
class MegaApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { setFirstValue, setSecondValue, numbers, firstValue, secondValue } = this.props.commonStore;
    console.log(this.props.commonStore)
    return (
      <div>
        <LevelOneT index={1}></LevelOneT>
        <span> или </span>
        <LevelOneT index={2}></LevelOneT>
        <LevelTwo></LevelTwo>
      </div>
    )
  }
}

export default MegaApp;

