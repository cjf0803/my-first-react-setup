/* eslint-disable */
import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Icon, } from 'antd';
import '../login/less/login.less'
import logo from '../../assets/images/logo.png'
const Item = Form.Item // 不能写在import之前
/*
登陆的路由组件
*/
class login extends Component {
    handleSubmit = (event) => {
        // 阻止事件的默认行为
    event.preventDefault()

    // 对所有表单字段进行检验
    this.props.form.validateFields(async (err, values) => {
      // 检验成功
      if (!err) {
        console.log('提交登陆的ajax请求', values)
        // 请求登陆
        const {username, password} = values
        const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
        // console.log('请求成功', result)
        if (result.status===0) { // 登陆成功
          // 提示登陆成功
          message.success('登陆成功')

          // 保存user
          const user = result.data
          memoryUtils.user = user // 保存在内存中
          storageUtils.saveUser(user) // 保存到local中

          // 跳转到管理界面 (不需要再回退回到登陆)
          this.props.history.replace('/')

        } else { // 登陆失败
          // 提示错误信息
          message.error(result.msg)
        }

      } else {
        console.log('检验失败!')
      }
    });

    }
    /*
    对密码进行自定义验证
    */
   validatePwd=(rules,value,callback)=>{
    console.log('validatePwd()',rules,value);
    if(!value) {
        callback('密码必须输入')
      } else if (value.length<4) {
        callback('密码长度不能小于4位')
      } else if (value.length>12) {
        callback('密码长度不能大于12位')
      } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        callback('密码必须是英文、数字或下划线组成')
      } else {
        callback() // 验证通过
      }
   }

    render() {
        // 得到具强大功能的form对象
        const form = this.props.form
        const { getFieldDecorator } = form;
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登陆</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            onSubmit={this.handleSubmit}

                        >
                            <Item>
                                {
                                    /*
                                  用户名/密码的的合法性要求
                                    1). 必须输入
                                    2). 必须大于等于4位
                                    3). 必须小于等于12位
                                    4). 必须是英文、数字或下划线组成
                                   */
                                }
                                {
                                    getFieldDecorator('username', { // 配置对象: 属性名是特定的一些名称
                                        // 声明式验证: 直接使用别人定义好的验证规则进行验证
                                        rules: [
                                            { required: true, whitespace: true, message: '用户名必须输入' },
                                            { min: 4, message: '用户名至少4位' },
                                            { max: 12, message: '用户名最多12位' },
                                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                                        ],
                                        // initialValue: 'admin', // 初始值
                                    })
                                        (
                                            <Input
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="用户名"
                                                allowClear
                                                autoComplete="off"

                                            />
                                        )
                                }
                            </Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('password', {
                                        rules: [
                                            {
                                                validator: this.validatePwd
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                            allowClear
                                            autoComplete="off"
                                        />
                                    )
                                }

                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember"  >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form></div>
                </section>
            </div>
        );
    }
}

/*
包装Form组件生成一个新的组件: Form(Login)
新组件会向Form组件传递一个强大的对象属性: form
 */
const WrapLogin = Form.create()(login)
export default WrapLogin