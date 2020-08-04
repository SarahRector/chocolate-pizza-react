import React from 'react';
import './App.css';
import Social from './Social.js';
import SubHead from './Sub-Head.js';
import Instructions from './Instructions.js';
import Recipe from './Recipe.js';
import Bio from './Bio.js';
import { socialImages, ingredients, instructionArray } from './data.js';

class App extends React.Component {
  render() {
    return (
      <body>
        <header className="heading">
          <div className="left">
            <img src="assets/logo.png" alt="this is a fork and knife" />
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
        <section>
            <SubHead />
            <img src='assets/choco-pizza.png' alt="this is chocolate pizza"/>
        </section>
        <section className="instructions"> 
            {
              instructionArray.map(instruction => (
                <Instructions instruction={instruction} />
              ))
            }
        </section>
        <section className="recipe">
            <ul>
              {
                ingredients.map(ingredient => (
                  <Recipe ingredient={ingredient} />
                ))
              }
            </ul>
        </section>
        <Bio />
        <footer>
          <div>
              <img src="assets/small-logo.png" alt="this is a fork and knife"></img>
              <p>Delicious &copy; &middot; All Rights Reserved.</p>
              <p>Proudly published with Ghost.</p>
          </div>
    </footer>
    </body>
    );
  }
}
    

export default App;
