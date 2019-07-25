import React, { Component } from 'react';
import style from './Timer.module.css';
import Counter from './Counter';
import Icon from '@material-ui/core/Icon';


class Timer extends Component {
    state = {
        open: false
    }

    toogle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className={style['timer-container']}>
                <Counter workTime={0} seconds={5} restTime={5} changeState={this.toggle} isMove={this.state.open} />
                <div className={style['circle-body']}>
                    <div className={`${style['circle-inner']} ${this.state.open ? style['circle-inner-active'] : ''}`} onClick={this.toogle}>
                        <span className={style['play-btn']}>
                            <Icon className={style['arrow-right']}>arrow_right</Icon>
                            <span className={style['dot']}></span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;