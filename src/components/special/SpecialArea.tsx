import { Card, Col, Divider, Row } from 'antd';
import studydata from './studydata';
import navs from './sexdata';
type IProps = {
  isChecked: boolean;
  setIsModal: Function;
}
const SpecialArea = (props: IProps) => {
  const { setIsModal, isChecked } = props

  const createDomSpecial = (navarr: any[], special: string, strD: string) => {
    const JumpSrc = (src: string) => {
      if (src.length !== 0) {
        window.open(src)
      } else {
        setIsModal(true)
      }
    }
    return (<div>
      <div className="ruanjian">
        <Divider style={{ borderColor: 'rgb(216, 216, 216)',color: 'rgb(216, 216, 216)' }} orientation="left">{special}</Divider>
        <Row justify="start" wrap={true}>
          {navarr.map(item => {
            return <Col style={{ minWidth: 200 }} span={4}><Card className='itemDiv' title={<span style={{color: 'rgb(216, 216, 216)'}}>{item.interName}</span>} extra={<span onClick={() => JumpSrc(item.url)} style={{ color: 'rgb(216, 216, 216)', cursor: 'pointer' }}>More</span>} size="small"><p style={{ fontSize: '8px', color: 'rgb(216, 216, 216)' }}>{strD}:{item.interDescribe}</p></Card></Col>
          })}
        </Row>
      </div>
    </div>)
  }
  const sexCreateIndex = () => {
    return <div>
      {createDomSpecial(navs.nav, '网址专区', '网址描述')}
      {createDomSpecial(navs.imgNav, '动漫专区', '漫画描述')}
      {createDomSpecial(navs.Journalismnav, '黑料专区', '黑料描述')}
      {createDomSpecial(navs.softwareArr, '软件专区', '软件描述')}
    </div>
  }
  const bookCreateIndex = () => {
    return <div>
      {createDomSpecial(studydata.lRouteNav, '学习路线','三剑客描述')}
      {createDomSpecial(studydata.Frame, '前端必学技术','框架描述')}
      {createDomSpecial(studydata.uiNav, 'UI框架官网','框架描述')}
      {createDomSpecial(studydata.problemNav, '答疑解惑区','网址描述')}
      {createDomSpecial(studydata.StateMachine, 'State machine','状态机描述')}
      {createDomSpecial(studydata.codeNav, '编辑器推荐','状态机描述')}
    </div>
  }

  return <div>
    {isChecked && sexCreateIndex()}
    {!isChecked && bookCreateIndex()}
  </div>
}
export default SpecialArea