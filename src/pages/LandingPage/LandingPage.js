import React, { Component } from 'react';
import BigHeaderText from '../../components/BigHeaderText/BigHeaderText';
import Button from '../../components/Button/Button';
import MediumHeaderText from '../../components/MediumHeaderText/MediumHeaderText';
import styles from './LandingPage.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeFormPage from './EmployeeFormPage/EmployeeFormPage';
import TalentFormPage from './TalentFormPage/TalentFormPage';
import RegisterSuccessPage from './RegisterSuccessPage/RegisterSuccessPage';

class RegisterComponent extends Component {
  render() {
    return (
      <>
        <Link to="/r/employee">
          <Button text="Affected Employee" color="blue" />
        </Link>
        <Link to="/r/talent">
          <Button text="Talent Acquistion" color="blue" />
        </Link>
      </>
    )
  }
}

class LandingPageRoutes extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' exact element={<LandingPageContent />} />
          <Route path='/*' element={<LandingPageContent />} />
          <Route path='/r/success' exact element={<RegisterSuccessPage />} />
        </Routes>
      </>
    )
  }
}

class RegisterRoutes extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<RegisterComponent />} />
          <Route path='/r/employee' exact element={<EmployeeFormPage />} />
          <Route path='/r/talent' exact element={<TalentFormPage />} />
        </Routes>
      </>
    )
  }
}

class LandingPageContent extends Component {
  render() {
    return (
      <>
        <BigHeaderText text="We will help you!" />
        <br></br>
        <MediumHeaderText text="We know how the feel when getting laid off ☹️" />
        <div className='mt-4'>
          <h3 className='text-xl mb-2 font-semibold'>Register as:</h3>
          <RegisterRoutes />
        </div>
      </>
    )
  }
}

class Clouds extends Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}

export default class LandingPage extends Component {
  render() {
    return (
      <div className={styles.landingPage}>
        <div className={styles.pageLayout}>
          <LandingPageRoutes />
        </div>

        <Clouds />
        {/* For Bottom Image */ }
        <div className={styles.image}></div>
      </div>
    )
  }
}
