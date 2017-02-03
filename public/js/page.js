import FastClick from 'fastclick'
import $ from 'jquery'

class Page {

  constructor() {
    this.initDefault()
  }

  initDefault() {
    console.log('Initial')
  }

}

$(document).ready(() => {
  let PageApp = new Page()
})

export default Page
