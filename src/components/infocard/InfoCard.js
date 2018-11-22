import React, { Component } from 'react';
import './InfoCard.css';

class InfoCard extends Component {
  constructor(props) {
    super(props);
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

export default InfoCard;
