import React, { Component } from 'react'
import styles from './MediumHeaderText.module.css'

export default class MediumHeaderText extends Component {
  render() {
    return (
      <div className={styles.font}>{this.props.text}</div>
    )
  }
}
