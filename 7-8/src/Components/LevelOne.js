import React from "react";
import { inject, observer } from "mobx-react/index";
import commonStore from "../../stores/commonStore";






@inject('commonStore')
@observer
export class LevelOneT extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { numbers } = this.props.commonStore;
        console.log(this.props.index)
        return (
            numbers.map((item, index) => (<div key={index}> <div onClick={() => this.props.index == 1 ? this.props.commonStore.setFirstValue(item) : this.props.commonStore.setSecondValue(item)}>{item}</div></div>))
        )
    }
}