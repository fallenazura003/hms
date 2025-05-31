// RegisterPage.jsx
import React from 'react';
import { PasswordInput, TextInput, Button, Text, Select } from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm, isEmail, isNotEmpty } from "@mantine/form";
import { Link } from "react-router-dom";

// Định nghĩa kiểu dữ liệu cho form values của trang đăng ký
interface RegisterFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: 'user' | 'employee' | 'admin' | null;
}

const RegisterPage = () => {
    const form = useForm<RegisterFormValues>({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: null,
        },
        validate: {
            username: (value) => {
                if (!isNotEmpty(value)) {
                    return 'Tên người dùng không được để trống';
                }
                if (value.length < 3) {
                    return 'Tên người dùng phải có ít nhất 3 ký tự';
                }
                return null;
            },
            email: (value) => {
                if (!isNotEmpty(value)) {
                    return 'Email không được để trống';
                }
                if (!isEmail(value)) {
                    return 'Email không hợp lệ';
                }
                return null;
            },
            password: (value) => {
                if (!isNotEmpty(value)) {
                    return 'Mật khẩu không được để trống';
                }
                if (value.length < 6) {
                    return 'Mật khẩu phải có ít nhất 6 ký tự';
                }
                return null;
            },
            confirmPassword: (value, values) => {
                if (!isNotEmpty(value)) {
                    return 'Xác nhận mật khẩu không được để trống';
                }
                if (value !== values.password) {
                    return 'Mật khẩu xác nhận không khớp';
                }
                return null;
            },
            role: (value) => (value ? null : 'Vui lòng chọn vai trò'),
        },
    });

    const handleSubmit = (values: RegisterFormValues) => {
        console.log("Form values:", values);
        const { confirmPassword, ...dataToSend } = values;
        console.log("Data to send to API:", dataToSend);

        // alert(`Đăng ký thành công với Tên: ${values.username}, Email: ${values.email}, Vai trò: ${values.role}`);
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
                    Đăng ký tài khoản mới
                </Text>

                <form className={'flex flex-col gap-y-4'} onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        size="md"
                        radius="md"
                        variant="filled"
                        label="Tên người dùng"
                        placeholder="Nhập tên của bạn"
                        classNames={{
                            label: 'text-slate-300 font-medium',
                            input: 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500',
                        }}
                        {...form.getInputProps('username')}
                        error={form.errors.username}
                    />

                    <TextInput
                        size="md"
                        radius="md"
                        variant="filled"
                        label="Email"
                        placeholder="Nhập email của bạn"
                        type="email"
                        classNames={{
                            label: 'text-slate-300 font-medium',
                            input: 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500',
                        }}
                        {...form.getInputProps('email')}
                        error={form.errors.email}
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
                        {...form.getInputProps('password')}
                        error={form.errors.password}
                    />

                    <PasswordInput
                        variant="filled"
                        size="md"
                        radius="md"
                        label="Xác nhận mật khẩu"
                        placeholder="Nhập lại mật khẩu"
                        classNames={{
                            label: 'text-slate-300 font-medium',
                            input: 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500',
                        }}
                        {...form.getInputProps('confirmPassword')}
                        error={form.errors.confirmPassword}
                    />

                    {/* Dropdown menu chọn vai trò */}
                    <Select
                        size="md"
                        radius="md"
                        variant="filled"
                        label="Vai trò"
                        placeholder="Chọn vai trò của bạn"
                        data={[
                            { value: 'PATIENT', label: 'Bệnh nhân' },
                            { value: 'DOCTOR', label: 'Bác sĩ' },
                            { value: 'ADMIN', label: 'Quản trị viên' },
                        ]}
                        classNames={{
                            label: 'text-slate-300 font-medium',
                            input: 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500',
                            option: 'text-slate-300 hover:bg-slate-700 data-[selected]:!bg-primary-500 data-[selected]:!text-white', // Đã sửa 'item' thành 'option'
                            dropdown: 'bg-slate-700 border border-slate-600',
                        }}
                        {...form.getInputProps('role')}
                        error={form.errors.role}
                    />

                    <Button
                        type="submit"
                        variant="filled"
                        color="primary"
                        size="md"
                        radius="md"
                        className="mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors duration-200"
                    >
                        Đăng ký
                    </Button>
                </form>

                <Text className="text-center text-sm text-slate-400 mt-6">
                    Đã có tài khoản?{' '}
                    <Link to="/login" className="text-primary-400 hover:text-primary-500 font-medium transition-colors duration-200">
                        Đăng nhập ngay
                    </Link>
                </Text>
            </div>
        </div>
    );
};

export default RegisterPage;