import React from 'react';
import { PasswordInput, TextInput, Button, Text } from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form"; // Đảm bảo bạn đã cài đặt @mantine/form
import { isEmail, isNotEmpty } from '@mantine/form';
import {loginUser} from "../Service/UserService";
import {errorNotification, successNotification} from "../Utility/NotificationUtil";
import {useNavigate} from "react-router-dom"; // Các validator hữu ích của Mantine

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    // Khởi tạo useForm HOOK bên trong component
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        // Định nghĩa các quy tắc kiểm tra tính hợp lệ
        validate: {
            email: (value:string) => {
                if (!isNotEmpty(value)) {
                    return 'Email không được để trống';
                }
                if (!isEmail(value)) {
                    return 'Email không hợp lệ';
                }
                return null; // Trả về null nếu hợp lệ
            },
            password: (value:string) => {
                if (!isNotEmpty(value)) {
                    return 'Mật khẩu không được để trống';
                }
                if (value.length < 6) { // Ví dụ: mật khẩu tối thiểu 6 ký tự
                    return 'Mật khẩu phải có ít nhất 6 ký tự';
                }
                return null;
            },
        },
    });

    // Hàm xử lý khi form được gửi thành công
    const handleSubmit = (values: { email: any; password: any; }) => {
        setLoading(true);
        loginUser(values).then((data) => {
            console.log(data);
            successNotification("Đăng nhập thành công!")
            setLoading(false);
            navigate("/dashboard")
        }).catch((error: any) => {
            errorNotification(error?.response?.data?.errorMessage);
        }).finally(()=>setLoading(false))
    };

    return (
        <div
            style={{
                backgroundImage: 'url("/bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
            className="w-full flex justify-center items-center p-4"
        >
            <div className={'w-full max-w-sm md:max-w-md bg-slate-800 bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8 sm:p-10 text-slate-300'}>
                <div className={'flex items-center justify-center gap-2 mb-6'}>
                    <IconHeartbeat size={40} stroke={2.5} className={'text-red-500'} />
                    <span className={'font-bold text-3xl text-white'}>HMS</span>
                </div>

                <Text className={'text-center text-2xl font-semibold text-white mb-6'}>
                    Đăng nhập tài khoản
                </Text>

                {/* Gắn form.onSubmit vào sự kiện onSubmit của thẻ <form> */}
                <form className={'flex flex-col gap-y-4'} onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        size="md"
                        radius="md"
                        variant="filled"
                        label="Email"
                        placeholder="Nhập email của bạn"
                        classNames={{
                            label: 'text-slate-300 font-medium',
                            input: 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500',
                        }}
                        // Gắn props của form vào TextInput
                        {...form.getInputProps('email')}
                        error={form.errors.email} // Hiển thị lỗi
                    />

                    <PasswordInput
                        variant="filled"
                        size="md"
                        radius="md"
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu của bạn"
                        classNames={{
                            label: 'text-slate-300 font-medium',
                            input: 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500',
                        }}
                        // Gắn props của form vào PasswordInput
                        {...form.getInputProps('password')}
                        error={form.errors.password} // Hiển thị lỗi
                    />

                    <Button
                        loading={loading}
                        type="submit"
                        variant="filled"
                        color="primary"
                        size="md"
                        radius="md"
                        className="mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors duration-200"
                        // `loading` prop có thể được sử dụng khi gửi dữ liệu
                        // loading={form.isSubmitting}
                    >
                        Đăng nhập
                    </Button>
                </form>

                <Text className="text-center text-sm text-slate-400 mt-6">
                    Chưa có tài khoản?{' '}
                    <a href="/register" className="text-primary-400 hover:text-primary-500 font-medium transition-colors duration-200 ">
                        Đăng ký ngay
                    </a>
                </Text>
            </div>
        </div>
    );
};

export default LoginPage;