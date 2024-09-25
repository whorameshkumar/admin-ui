import {Layout, Card, Space, Form, Input, Checkbox, Button, Flex, Alert} from 'antd'; // Layout, Card from ant.design 
import {LockFilled, UserOutlined, LockOutlined} from '@ant-design/icons'; // icons from ant.design 
import Logo from '../../components/icons/Logo';
import { useMutation } from '@tanstack/react-query';
import { Credentials } from '../../types';
import { login } from '../../http/api';


const loginUser = async (credentials: Credentials) => { // (userData: Credentials) userData remove krdia kuch bhi bol du mene credentials bol dia 
    // server call logic here - aur server p call krnye k liye hum ko HTTP client chaiye tu we will use Axios library
    const {data} = await login(credentials); // axios kaa response mil jaye gaa 
    return data;  // ab iss data mein kaam ki cheezain hain iss ko hum useMutation mein use krein gye but abhi ki case p humara endpoint sirf user id return kr raha hai tu useless hai 
}
  

const LoginPage = () => {
    /* React Query for state manage has 2 main concepts i.e. 
    1) useQuery hook (to fetch data from server) and 
    2) Mutations to create/delete/update data from server */
    const {mutate, isPending, isError, error} = useMutation({ // look we could use data here but abhi itni importance nhi kyn k data hai user id only. IsPending hum button mein use krein gye jb tk successful naa ho tb tk button load krta rehye. And isError, error hum n Form.Item k upar use kra lazmi nhi bs aur fency bana rehye hain
        mutationKey:['login'], // mutationKey for caching aur unique key login mene dye di kuch bhi dye saktye thy
        mutationFn: loginUser, // ab loginUser function banana paryegaa outside of component and loginUser will return promise hover kr k dekh lo u will see promise tu async krna paryegaa
        // async mutation ka result handle karne ke liye, aapko onSuccess aur onError callbacks diye jate hain, to make sure all goes well or not 
        onSuccess: async () => {
            console.log('Login successful.'); 
        },
        onError: () => {
            console.log('Login failed.'); 
        },
    })

    return(
        <>
            <Layout style={{height:'100vh', display:'grid', placeItems:'center'}}>
                
                {/* By default space horizontally items place krta hai, so hum ko vertical chaiye tha tu direction use kra */}
                <Space direction="vertical" align="center" size="large">

                    {/* Card logo - SVG format*/}
                    <Layout.Content style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Logo/>  
                    </Layout.Content>

                    {/* Card */}
                    <Card 
                        bordered={false} 
                        style={{width:300}} 
                        title={<Space style={{width:'100%', fontSize:16, justifyContent:'center'}}><LockFilled/>Sign in</Space>}>
                        
                        {/* `https://ant.design/components/form`, jb form ko submit krein gye tu data get krnye k liye we will need name key
                        aur prefix={<icons/>} yhe props hain jo ant.design deta hai hum ko*/}
                       
                        {/* I want by default yhe show hoon in form, so I used initialValues={{remember:true, username:"DBG", password:"secret"}} */}
                        {/* Using event handler called onFinish to submit the form. So, in developer tool jo form mein username and password dalo gye wo developer tool mein console.log show krye gaa ab iss ko server p send krna hai tu we need `npm i @tanstack/react-query` */}
                        {/* Ab mutate mein username and password dia wo userData(kuch bhi naam dye du np mene userData hata k crendentials krdia ) hoga jo hum upar in loginUser mein use kreingye  */}
                        <Form 
                        initialValues={{remember:true, username:"DBG", password:"secret"}} 
                        onFinish={(values)=>{ 
                            mutate({email:values.username, password:values.password}); 
                            console.log(values);}}> 
                            
                            {/* Dekho isError and error yahan use kra - bola agar error hai tu hi error show krna warna nhi aur message ko hard-code kr saktye thy but nhi kra  */}
                            {isError && (<Alert style={{marginBottom: 24}} type="error" message={error?.message} />)}

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
                                <Button type="primary" htmlType="submit" style={{width:'100%'}} loading={isPending}>Log in</Button>
                            </Form.Item>

                        </Form>
                    </Card>

                </Space>

            </Layout>
        </>
    )
}
export default LoginPage;