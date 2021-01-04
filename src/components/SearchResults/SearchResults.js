import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Icon from '../Icon.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.node,
    title: PropTypes.string,
  };

  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <Container>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} /></span>{title}
          </h3>
          <div className={styles.card}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;