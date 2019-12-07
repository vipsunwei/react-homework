import React from 'react'
import ReactDOM from 'react-dom'
import './confirm.css'
/**
 * 请写一个满足以下要求的confirm方法组件：

（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；

（2）能通过该promise返回的结果判断confirm组件是否成功挂载。
 */
// function Confirm(props) {
//   const { text } = props
//   return (
//     <>
//       <div className="confirm">{text}</div>
//     </>
//   )
// }
class Confirm extends React.Component {
  render() {
    const { text } = this.props

    return (
      <>
        <div className="confirm">{text}</div>
      </>
    )
  }
}

export default function confirm(txt) {
  return new Promise(resolve => {
    let confirmRef = React.createRef()
    let node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Confirm ref={confirmRef} text={txt} />, node, () => {
      let res = ReactDOM.findDOMNode(confirmRef.current)
      resolve(res)
    })
  })
}
