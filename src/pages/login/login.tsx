import {Layout, Card, Space, Form, Input, Checkbox, Button, Flex} from 'antd'; // Layout, Card from ant.design 
import {LockFilled, UserOutlined, LockOutlined} from '@ant-design/icons'; // icons from ant.design 
import Logo from '../../components/icons/Logo';

const LoginPage = () => {
    return(
        <>
            {/* <h1>Sign in</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Log in</button>
            {/* We need to pass htmlFor="remember-me" as input id i.e. id="remember-me" *
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me"/> 
            <a href="#">Forgot password</a> */}
            <Layout style={{height:'100vh', display:'grid', placeItems:'center'}}>
                {/* By default space horizontally items place krta hai, so hum ko vertical chaiye tha tu direction use kra */}
                <Space direction="vertical" align="center" size="large">

    {/* Card logo - SVG format*/}
    <Layout.Content style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Logo/>   yahan daal dia Logo after importing it 
    </Layout.Content>

                    {/* Card */}
                    <Card 
                        bordered={false} 
                        style={{width:300}} 
                        title={<Space style={{width:'100%', fontSize:16, justifyContent:'center'}}><LockFilled/>Sign in</Space>}>
                        {/* `https://ant.design/components/form`, jb form ko submit krein gye tu data get krnye k liye we will need name key
                        aur prefix={<icons/>} yhe props hain jo ant.design deta hai hum ko*/}
                        {/* I want by default yhe show hoon in form, so I used initialValues={{remember:true, username:"DBG", password:"secret"}} */}
                        <Form initialValues={{remember:true, username:"DBG", password:"secret"}}> 
                            
                            {/* rules is object and has array aur iss mein validation lagai hum n */}
                            <Form.Item name="username" rules={[{required:true,message:'Please input your usernmae',},{type:'email',message:'Email is not valid'}]}>
                                <Input prefix={<UserOutlined/>} placeholder="Username"/>
                            </Form.Item>
                            
                            <Form.Item name="password" rules={[{required:true,message:'Please input your password lala'}]}>
                                <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
                            </Form.Item>
                            
                            {/* Mein chata hn by default remember me checked ho, so I used initialValues={{remember:true,} and set prop valuePropName="checked"*/}
                            
                            <Flex justify="space-between">
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                {/* login-form-forgot ki css index.css mein likhi hai globally */}
                                <a href='' id="login-form-forgot">Forgot password</a>
                            </Flex>                            
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{width:'100%'}}>Log in</Button>
                            </Form.Item>

                        </Form>
                    </Card>

                </Space>
            </Layout>
        </>
    )
}
export default LoginPage;