import logos from '../logo';

const Header = (props: any) => {
  const { isChecked } = props
  const search = () => {
    window.open('https://yandex.com/')
  }
  return <div style={{ height: 140 }}>
  <header>
    <div className="flex-div">
      <div>
        <img className="imghead" src={logos.indexLogo} alt="" />
      </div>
      <div style={{ width: '60%' }}>
        <h1 style={{ color: 'rgb(216, 216, 216)' }}>
          {isChecked && <span>内容免费，仅供学习，加油学习好少年（好少女）！！！点我进
          <span onClick={search} style={{ color: 'rgb(216, 216, 216)', cursor: 'pointer' }}>"👉俄罗斯搜索👈"</span></span>}
          {!isChecked && <span>《萌新导航》励志于为想成为程序猿（前端）的萌新做个撑伞人！</span>}
        </h1>
      </div>
      <div>
        <img className="imghead2 imghead" src={logos.indexLogo} alt="" />
      </div>
    </div>
  </header>
</div>
}

export default Header