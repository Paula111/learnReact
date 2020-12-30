import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';



class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    card: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    const { columns, title, image, description, addColumn } = this.props;
    console.log(columns);
    return (
      <section className={styles.component}>
        <Container>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </Container>
      </section>
    );
  }
}

export default List;