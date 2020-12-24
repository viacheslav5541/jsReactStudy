import React from "react";
import { inject, observer } from "mobx-react/index";
import commonStore from "../../stores/commonStore";




@inject('commonStore')
@observer
export class LevelTwo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { setFirstValue, setSecondValue, numbers, firstValue, secondValue, summ } = this.props.commonStore;
        return (<div>{firstValue + ' + ' + secondValue + ' = ' + `${summ}`}</div>)
    }
}