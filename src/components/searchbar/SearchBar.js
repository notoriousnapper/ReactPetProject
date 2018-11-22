import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

  }


  componentDidMount(){
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      console.log("event" + e);
      console.log("event" + e.target.value);
      this.setState({
        input: e.target.value
      })
    }
  }
  render() {
    return (
      <div className="search-bar">
      <div className="stuff" >
      </div>
      <input
        type="text" onKeyPress={this._handleKeyPress} placeholder='start with sth simple'/>

      state is: {this.state.input}
      <button onClick={this._handleKeyPress}></button>
      </div>
    );
  }
}

export default SearchBar;
