import React, { Component } from 'react'
/**
 * 请写一个满足以下要求的confirm方法组件：

（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；

（2）能通过该promise返回的结果判断confirm组件是否成功挂载。
 */
class App extends Component {
  // async componentDidMount() {
  //   let res = await confirm('确定删除吗')
  //   if (res) {
  //     console.log('yes')
  //   } else {
  //     console.log('no')
  //   }
  // }
  render() {
    return (
      <>
        <h2>请写一个满足以下要求的confirm方法组件：</h2>
        <h3>
          <p>
            （1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；
          </p>
          <p>（2）能通过该promise返回的结果判断confirm组件是否成功挂载。</p>
        </h3>
      </>
    )
  }
}

export default App
