import React, { Component } from 'react'
import { Fragment } from 'react'
import EcomDetails from '../components/EcomDetails/EcomDetails'
import Header from '../components/Header/Header'
import PageTop from '../components/PageTop/PageTop'

export default class EcomDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

 

  render() {
    return (
      <Fragment>
                <Header />
                <PageTop pagetitle='Details Products'/>
                <EcomDetails />
      </Fragment>
    )
  }
}
