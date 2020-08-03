import React from 'react';
import './App.css';

const socialImages = [
  'Email',
  'RSS',
  'Pinterest',
  'Flickr',
  'Instagram',
  'GP',
  'Twitter',
  'Facebook'
]

class Social extends React.Component {
  
  render() {
    return <p>
      
        {this.props.socialImage}
      
    </p>
  }
}

class App extends React.Component {
  render() {
    return (
      <header className="heading">
        <div className="left">
          <div>This is an image</div>
          <div>
            <h2>Delicious</h2>
            <div>THE BEST FOOD BLOG ON THE WEB</div>
          </div>
        </div>
        <div className="right">
          {
            socialImages.map(socialImage => (
              <Social socialImage={socialImage} />

            ))
          }
        </div>
      </header>
    );
  }
}
    

export default App;
