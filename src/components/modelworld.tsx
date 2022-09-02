import { Modal, Form, Input, message } from 'antd';

type IProps = {
  isModalVisible: boolean;
  setIsModalVisible: Function;
  setIsChecked: Function;
}
const ModalWorld = (props: IProps) => {
  const { isModalVisible, setIsModalVisible, setIsChecked } = props
  const [form] = Form.useForm();
  const handleOk = () => {
    onFinish(form.getFieldValue('password'))
  };
  const onFinish = (values: any) => {
    console.log(values)
    if (values === 'jidedashang' || values.password === 'jidedashang') {
      setIsModalVisible(false);
      setIsChecked(true)
      document.body.style.background = "url('https://aav.hxsp004.com/static/images/h/mobile/BJ.jpg') center center / cover no-repeat"
      document.body.style.backgroundAttachment = 'fixed'
      message.success('欢迎来到新世界！')
    } else {
      message.error('密码错误，请重新输入！')
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setIsChecked(false)
  };

  return <div>
    <Modal title="新世界入场密码" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{ color: '#000' }}>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '密码不能为空!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  </div>
}

export default ModalWorld