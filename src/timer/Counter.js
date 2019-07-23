import React, { Component } from 'react';
import style from './Counter.module.css';
import PropTypes from 'prop-types';

class Counter extends Component {
    static propTypes = {
        restTime: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
        isMove: PropTypes.bool
    }

    static defaultProps = {
        restTime: 0,
        minutes: 0,
        seconds: 0,
        isMove: false
    }

    constructor(props) {
        super(props);
        this.state = {
            // 休息時間
            restTime: props.restTime,
            // 分鐘
            minutes: props.workTime,
            // 秒鐘
            seconds: props.seconds,
            // 是否啟動
            isMove: props.isMove,
        }
    }

    headleNumber() {
        if (this.state.isMove) {
            // 當秒針等於0的時候
            if (this.state.seconds === 0) {
                //先檢查分針是否有時間
                if (this.state.minutes === 0) {
                    clearInterval(this.intervalId);
                    return;
                } else {
                    this.setState({
                        minutes: this.state.minutes - 1,
                        seconds: this.state.seconds + 59
                    });
                    return;
                }
            }

            // 持續倒數
            this.setState({
                seconds: this.state.seconds - 1
            });
        }else{
            return;
        }
    }

    timerHandle() {
        if (this.state.isMove) {
            this.intervalId = setInterval(() => {
                this.headleNumber();
            }, 1000);
        } else {
            clearInterval(this.intervalId);
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.isMove !== prevProps.isMove) {
            this.setState({
                isMove: this.props.isMove
            },()=>{
            // 呼叫數字處理
            this.headleNumber();
            // 呼叫計時器
            this.timerHandle();
            });
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