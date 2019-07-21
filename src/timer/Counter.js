import React, { Component } from 'react';
import style from './Counter.module.css';
import PropTypes from 'prop-types';

class Counter extends Component {
    static propTypes = {
        minutes: PropTypes.number,
        restTime: PropTypes.number,
        isMove: PropTypes.bool
    }

    static defaultProps = {
        minutes: 0,
        restTime: 0,
        isMove: false
    }

    constructor(props) {
        super(props);
        this.state = {
            restTime: props.restTime,
            isMove: props.isMove,
            minutes: props.workTime,
            seconds: 0,
        }
    }

    headleNumber = () => {

        // 第一次進入
        if (this.state.minutes === this.props.workTime) {
            this.setState({
                minutes: this.state.minutes - 1,
                seconds: this.state.seconds + 59
            });
        }

        // 第二次之後
        if (this.state.seconds !== 0 && this.state.minutes - 1 >= 0) {
            this.setState({
                seconds: this.state.second - 1
            })
        }

        // 當秒數跑完的時候
        if (this.state.seconds === 0 && this.state.minutes - 1 >= 0) {
            this.setState({
                minutes: this.state.minutes - 1,
                seconds: 59,
            });
        }

        //當都跑完的時候
        if (this.state.seconds === 0 && this.state.minutes === 0) {

        }
    }

    componentDidUpdate() {
        console.log(this.state.isMove);
        if (this.state.isMove) {
            window.setInterval(function () {
                this.headleNumber();
            }, 1000);
        }
    }

    render() {
        return (
            <div className={style['counter']}>
                {this.state.minutes}:
                {
                    this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds
                }
            </div>
        );
    }
}

export default Counter;