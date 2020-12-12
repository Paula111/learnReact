import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Smart Trip Planner</h2>
        <List title={['My travel list', <sup key='1'>in the near future!</sup>]} image={'https://i.postimg.cc/SNwkwQpw/pexels-archie-binamira-672358.jpg'}>
          <p>I can see all this continents!!!</p>
        </List>
      </main>
    )
  }
}


export default App;
