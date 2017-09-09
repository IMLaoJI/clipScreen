import React, {Component} from 'react'
import domtoimage from 'dom-to-image'
let FileSaver = require('file-saver')

export default class Image extends Component{
  constructor (props) {
    super(props)
    this.handleClip = this.handleClip.bind(this)
    this.download = this.download.bind(this)
  }
  componentDidMount () {

  }
  handleClip () {
    let ele = document.getElementById('view')
    function filter (node) {
      return (node.tagName !== 'i');
    }
    let opt = {
      height: 360,
      width: 500,
    }

    domtoimage.toPng(ele, opt)
      .then(function (dataUrl) {
          let ele = document.querySelector('.clipShow')
          ele.setAttribute('src', dataUrl)
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      })
  }
  download () {
    domtoimage.toBlob(document.getElementById('view'))
      .then(function (blob) {
        FileSaver.saveAs(blob, 'my-node.png');
      })
  }
  render () {
    return (
      <div>
        <p className='bg-info'> 使用 domtoimage 实现js截屏效果 </p>
        <figure id='view'>
          <img className='img-thumbnail' src={require('../img/can.jpg')} />
        </figure>
        <button type="button" onClick={this.handleClip}  className="btn btn-info"> clip pictures </button>
        <button type="button" onClick={this.download}  className="btn btn-info"> download </button>
        <img className='clipShow' ref='clipShow' />
      </div>
    )
  }
}
