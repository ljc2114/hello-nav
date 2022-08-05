/* eslint-disable no-script-url */
import { useEffect, useState } from 'react';
import VideoBg from './components/video';
import Header from './layout/Header';
import SpecialArea from './components/special/SpecialArea';
import ModalWorld from './components/modelworld';
import { Button, Modal, Switch } from 'antd';
import { DropboxOutlined } from '@ant-design/icons';

import './App.css';
import payment from './assets/img/payment.png'

function App(props: any) {
  const [widthBg, setWidthBg] = useState(501);
  const [isModal, setIsModal] = useState(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement

  const button2 = () => {
    window.open('https://wxrjs.lanzoui.com/b08yhtbdi')
    setIsModal(false)
  }
  const button1 = () => {
    setIsModal(false)
  }
  window.onresize = () => {
    setWidthBg(document.body.clientWidth)
  }
  const checkedClick = (checked: boolean) => {
    console.log(checked)
    if(checked){
      setIsModalVisible(true)
      return;
    }
    setIsChecked(checked)
    document.body.style.background = "url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F26%2F20200226015018_LjhQF.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661977396&t=05100f569f1412789d03e42fefb07413') center center / cover no-repeat"
    document.body.style.backgroundAttachment = 'fixed'
  }
  useEffect(() => {
  }, [modal,isChecked])
  const aclick = (): void => alert('微信号：18845630338')
  return (
    <div className="App">
      {widthBg > 500 && isChecked && <VideoBg />}
      {isModal && <div className="modal">
        <div className="textale">
          <h1 style={{ color: 'red' }}>重要：👉免责声明👈</h1>
          <p>视频下载后导致手机中毒，与该群，该导航开发者，设计者，贡献资源者无关，请谨慎下载，以免导致导致手机中毒🥺</p>
          <button id="button1" onClick={button1} className="buttonTrue button1">暂停访问</button>&emsp;<button id="button2" onClick={button2} className="buttonTrue button2">我已同意上述，继续访问</button>
        </div>
      </div>}
      <Header isChecked={isChecked} />
      <ModalWorld isModalVisible={isModalVisible} setIsChecked={setIsChecked} setIsModalVisible={setIsModalVisible} />
      <Switch style={{marginLeft: 10}} checkedChildren="开启" unCheckedChildren="关闭" onChange={checked => checkedClick(checked)} defaultChecked={false} checked={isChecked}/>&emsp;
      <Button type='primary' icon={<DropboxOutlined />} onClick={() => {
        Modal.warning({
          title: '开发不易，还请打赏',
          content: (
            <div>
              <img src={ payment }alt="" style={{ width: 200, height: 400}} />
              <p>获取密码请添加微信：18845630338</p>
            </div>
          ),
          onOk() {},
        });
      }}>点击打赏</Button>
      <SpecialArea isChecked={isChecked} setIsModal={setIsModal} />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <footer className="footer">更好意见请 <a onClick={aclick} href="javascript:void(0)">联系我们</a></footer>
    </div>
  );
}

export default App;
