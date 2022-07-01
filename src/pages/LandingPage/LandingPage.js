import React, { Component } from 'react';
import BigHeaderText from '../../components/BigHeaderText/BigHeaderText';
import Button from '../../components/Button/Button';
import MediumHeaderText from '../../components/MediumHeaderText/MediumHeaderText';
import styles from './LandingPage.module.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className={styles.landingPage}>
        <div className={styles.paddingPageLayout}>
          <BigHeaderText text="We will help you!" />
          <MediumHeaderText text="We know how the feel when getting laid off ☹️" />
          <div className='mt-8'>
            <h3 className='text-xl mb-2 font-semibold'>Register as:</h3>
            <Button text="Affected Employee" color="blue" />
            <Button text="Talent Acquistion" color="blue" />
          </div>
        </div>

        <div className={styles.x1}>
          <div className={styles.cloud}></div>
        </div>
        <div className={styles.x2}>
          <div className={styles.cloud}></div>
        </div>
        <div className={styles.x3}>
          <div className={styles.cloud}></div>
        </div>
        <div className={styles.x4}>
          <div className={styles.cloud}></div>
        </div>
        {/* For Bottom Image */ }
        <div className={styles.image}></div>
      </div>
    )
  }
}
