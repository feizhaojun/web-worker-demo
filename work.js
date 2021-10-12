/*
 * @Author: Mukti
 * @Date: 2021-07-05 17:46:11
 * @LastEditTime: 2021-07-05 17:53:50
 * @LastEditors: Mukti
 */
addEventListener('message', e => {
  console.log(e.data);
  setTimeout(() => {
    this.postMessage('Back from Worker');
  }, 2000)
})