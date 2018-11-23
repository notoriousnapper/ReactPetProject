import React, { Component } from 'react';
import './Randomizer.css';
import { createTimer, invokeFunctionOnList } from '../../util/timer.js';

var numberList = [1,2,3,4,5,6,7,8,9];
var music = ['c','d','e','f','g','a','b'];
class Randomizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterList: {
        music: music,
        number: numberList
      },
      timer: null,
      value: 1
    };
    this.changeTimerConfig = this.changeTimerConfig.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount(){
    var newTimer = createTimer();
    var boundFn = ()=>{
      this.setState({
        value: this.state.value + 1
      });
      console.log(this.state.value + 1);
    };

    var numberList = [1,2,3,4,5]; // list

    var that = this;
    newTimer.configure(
      numberList,
      function(){
        invokeFunctionOnList(
          numberList,
        (a)=>{ console.log(a); that.setState({ value: a }); }
      )}, 1000 // speed
      // createRandomizer(numberList, (a)=>{
      //   console.log()
      // })
      // ()=>{invokeFunctionOnList();},
      // boundFn // fn
    );

    this.setState({
      timer: newTimer
    });
  }

  changeTimerConfig = ()=>{} // TODO: fill
  // TODO: have config be a state object, and reset timer config
  // via replacement

  startTimer = ()=>{
    if (this.state.timer != null){
      this.state.timer.start();
    }
  }
  stopTimer = ()=>{
    if (this.state.timer != null){
      this.state.timer.stop();
    }

  }

  setNumberList = ()=>{
    this.setState({
      selectedList: this.state.masterList['number']
    });
  }

  setMusicList = ()=>{
    this.setState({
      selectedList: this.state.masterList['music']
    });
  }

  render(){
    const {name, produced, key, chordProgression, links} = this.state;
    return (
      <div className="randomizer-page">
      <div className="random-value">
      VALUE:
      {this.state.value}
      </div>
      <button onClick={this.changeTimerConfig}>CHANGE CONFIG</button>
      <button onClick={this.startTimer}>START </button>
      <button onClick={this.stopTimer}>STOP</button>
      <br/>
      <br/>
      <button onClick={this.setNumberList}>SWITCH TO NUMBERLIST</button>
      <button onClick={this.setMusicList}>SWITCH TO MUSICLIST</button>
      <br/>
    </div>
    );
  }
}

// Figure out why React needs binding ---> etc.

export default Randomizer;
