import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lottie from 'lottie-web';
import SearchBar from './components/searchbar/SearchBar.js';
import SongPage from './components/songpage/SongPage.js';
import Randomizer from './components/randomizer/Randomizer.js';


class App extends Component {
  ref = null;
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false,
      anim: {}
    };

    this.pauseAnimation = this.pauseAnimation.bind(this);
    this.playAnimation = this.playAnimation.bind(this);
  }

  componentDidMount(){
    var animation = lottie.loadAnimation({
      container:
      document.getElementById('bm'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/kaixv4.json' // the path to the animation json
    });
    lottie.setSpeed(0.1);
    this.setState({
      anim : animation
    })
  }

  pauseAnimation(){
    console.log(this.state.anim);
    if (this.state.anim != null){
      this.state.anim.pause();
    }
  }
  playAnimation(){
    console.log(this.state.anim);
    if (this.state.anim != null){
      // this.state.anim.pause();
      this.state.anim.playSegments([0,100],false);
    }
  }

  render() {
    return (
      <div className="App">
       <div id="bm"></div>
       <button onClick={this.pauseAnimation}> PAUSE</button>
       <button onClick={this.playAnimation}> PLAY </button>
       <SongPage></SongPage>
       <Randomizer />
      </div>
    );
  }
}

export default App;
