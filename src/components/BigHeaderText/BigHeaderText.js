import React, { Component } from 'react'
import styles from './BigHeaderText.module.css'

export default class BigHeaderText extends Component {
  render() {
    return (
      <h1 className={styles.bigFont}>{this.props.text}</h1>
    )
  }
}
