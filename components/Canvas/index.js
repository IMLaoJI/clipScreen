import React, {Component} from 'react'
import html2canvas from './htmlToCanvas.js'
import './index.scss'


let width = 500
let height = 230
let canvas
let scale = 2

export default class Canvas extends Component{
  constructor (props) {
    super(props)
    this.handleClip = this.handleClip.bind(this)
  }
  componentDidMount () {
    canvas = document.createElement('canvas') // 创建一个canvas节点
    canvas.width = width * scale // 定义canvas 宽度 * 缩放
    canvas.height = height * scale // 定义canvas高度 *缩放
    canvas.getContext('2d').scale(scale, scale) // 获取context,设置scale
  }
  handleClip () {
    html2canvas(document.getElementById('view'), {
      onrendered: (canvas) => {
        let src = canvas.toDataURL('image/png')
        let ele = document.querySelector('.clipShow')
        ele.setAttribute('src', src)
      },
      useCORS: true,
      width: width,
      height: height
    })
  }
  render () {
    return (
      <div>
        <p className='bg-info'> 使用html2canvas实现js截屏效果 </p>
        <figure id='view'>
          <img className='img-thumbnail' src={require('../img/can.jpg')} />
        </figure>
        <button type="button" onClick={this.handleClip}  className="btn btn-info"> clip pictures </button>
        <img className='clipShow' ref='clipShow' />
      </div>
    )
  }
}
