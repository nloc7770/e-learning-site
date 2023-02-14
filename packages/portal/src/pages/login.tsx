import Button from "@/components/common/button";
import { oapcityVariants } from "@/helper/farmer-motion";
import { Form, Input } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/context/toast";
import { supabaseClient } from "@/services/supabase";

const Login = () => {
    const [loading, setLoading] = useState(true);
    const { toggleToast } = useToast();

    // const init = async () => {
    //     directus.auth.token.then((element) => { });
    //     directus.auth
    //         .refresh()
    //         .then((data: any) => {
    //             getProfile();
    //         })
    //         .catch((error) => {
    //             setLoading(true);
    //         });
    // };
    // useEffect(() => {
    //     init();
    // }, []);
    // const url = import.meta.env.VITE_CMS + "/auth/login/keycloak?redirect=" + location.href;
    // const onClick = () => {
    //     location.href = url;
    // };

    const onFinish = async (values: any) => {
        console.log(values);
        
        if (!values.password || !values.email) {
           return toggleToast({
                show: true,
                status: "fail",
                message: "Thiếu thông tin đăng nhập",
                time: 5000,
            });
        }
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        })
        if (error) {
            return toggleToast({
                show: true,
                status: "fail",
                message: error?.message,
                time: 5000,
            });
        }
    }

    return (
        <motion.div variants={oapcityVariants} exit="hidden" initial="hidden" animate="visible" className="flex flex-col h-screen w-screen">
            <div className="shadow-box p-[20px] md:p-10 md:min-h-[calc(100vh-136px)] flex items-center justify-center bg-base bg-cover bg-no-repeat bg-center flex-1">
                <div className="md:mt-[10px] mt-[250px] bg-white rounded-[24px] min-w-full md:min-w-[400px] flex shadow-box">
                    {loading && (
                        <motion.div
                            variants={oapcityVariants}
                            exit="hidden"
                            initial="hidden"
                            animate="visible"
                            className="right p-[20px] md:p-8 rounded-xl md:max-w-[400px] w-full flex flex-col"
                        >
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{ span: 24 }}
                                >
                                    <Button
                                        className="w-full"
                                        children={"Đăng nhập"}
                                    />
                                </Form.Item>
                            </Form>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
export default Login;
