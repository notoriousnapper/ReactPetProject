import React, { Component } from 'react';
import './SongPage.css';

var songData = {
  name: "Lost In Japan by Shawn Mendes",
  produced: "Zedd",
  key: "Bb",
  chordProgression:
  [
    {
    part: "intro",
    chords: "Dmin7, Eb7, Bbj7, Ebj7", // major unless otherwise specified
    "time": "4", // # of times played
    "extra": "does a down progression of Eb, Dm, C ...into next"
    },
    {
    part: "bridge",
    chords: "Eb7 Bb7",
    "time": "2" // # of times played
    }
  ],
  links: [
  {
      url: "https://www.youtube.com/watch?v=OiTCDijrze8",
      desc: "Zedd Remix"
  },
  {
      url: "https://www.youtube.com/watch?v=UReHrshN3CY",
      desc: "Acoustic Version"
  }
]
};

class SongPage extends Component {
  constructor(props) {
    super(props);
    this.state = songData;
  }
  componentDidMount(){}
  render(){
    const {name, produced, key, chordProgression, links} = this.state;
    return (
      <div className="song-page">
        <img src="/acoustic-guitar.png"/>
      <div className="short-desc">
        <strong>{name} by {produced}</strong>
      </div>


      <br/>
      Memory References:
      <br/>
      Lossy JPEG
      <br/>
      Ollie
      <br/>
      <br/>
      <br/>


      KEY: {key}
      {
         chordProgression.map((data)=>{
        return <div className="progression">
        <strong>{data.part}</strong>
        <strong>{'chords'.toUpperCase()}</strong>
        <br/>
        <br/>
         {data.chords}
        <br/>
        {data.extra}
        </div>
      })}


      <br/>
      <br/>
      <br/>
      Links:
      {links.map((link)=>{
        return (
          <div>
          <a href={link.url}> {link.desc} </a>
          </div>
        );
      })}

      <br/>
      <br/>


      Personal Stats:
      1. Times performed Live, next planned performance
      2. Personal Notes for future + date & update
      3. Recordings (can load here to listen)
      4. What to practice



    </div>
    );
  }
}

export default SongPage;
