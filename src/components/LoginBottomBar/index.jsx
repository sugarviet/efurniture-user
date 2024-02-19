import BottomBar from '@components/BottomBar'
import { useToggleLoginBottomBar } from '@hooks/useToggleBottomBar';
import { Form } from "antd";
import AppInput from "@components/ui/AppInput"

function LoginBottomBar() {

    const { closeLoginBottomBar, isOpen } = useToggleLoginBottomBar();

    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <BottomBar className="lg:max-h-[85vh] h-full" isOpen={isOpen}>

            <main className='h-full overflow-y-scroll no-scrollbar'>
                <button onClick={() => closeLoginBottomBar()} className='absolute w-3 top-[1.75rem] right-[1.75rem]'>
                    <img className='w-3' src='./images/close.svg' />
                </button>
                <Form
                    name="login"
                    labelCol={{
                        span: 24,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <section className='max-w-[43.75rem] mx-auto'>
                        <div className='mx-[1.5625rem] mt-[60px]'>
                            <h3 className='text-[1.5625rem] leading-[1.4] tracking-[0.18em] font-HelveticaBold mb-[1.5625rem]'>RETURNING CUSTOMERS</h3>

                            <Form.Item
                                label="Email"
                                name="Email"
                                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                                rules={[
                                    {
                                        required: false,
                                        message: "Please input your email!",
                                    },
                                ]}
                            >
                                <AppInput type="email" className="furniture-input w-full h-[3rem]" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                                rules={[
                                    {
                                        required: false,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <AppInput type="password" className="furniture-input w-full h-[3rem]" />
                            </Form.Item>

                            <div className="flex flex-row gap-3 pb-6">
                                <input className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
                                    type="checkbox"
                                />
                                <p>Remember Me</p>
                            </div>
                            <a href="#" className="float-left text-[0.75em] underline">Forgot password?</a>
                        </div>
                    </section>
                    <section className='absolute bottom-0 w-full pt-[0.625rem] pb-[1.25rem] shadow-bottomBar text-center'>
                        <div className='pt-[0.625rem] px-auto'>
                            <button type='submit' className='furniture-button-black-hover min-w-[15.3125rem] px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]'>
                                Login
                            </button>
                        </div>
                    </section>
                </Form>
            </main>

        </BottomBar>
    )
}
export default LoginBottomBar