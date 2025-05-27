import React from 'react';
import {
    IconCalendarCheck,
    IconHeartbeat,
    IconLayoutGrid,
    IconMoodHeart,
    IconStethoscope,
    IconVaccine,
} from "@tabler/icons-react";
import { Avatar, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

// Đảm bảo bạn đã cấu hình các màu tùy chỉnh trong tailwind.config.js như đã hướng dẫn trước đó.

const links = [
    { name: "Dashboard", url: "/dashboard", icon: <IconLayoutGrid stroke={1.5} /> },
    { name: "Doctors", url: "/doctors", icon: <IconStethoscope stroke={1.5} /> },
    { name: "Patients", url: "/patients", icon: <IconMoodHeart stroke={1.5} /> },
    { name: "Appointments", url: "/appointments", icon: <IconCalendarCheck stroke={1.5} /> },
    { name: "Pharmacy", url: "/pharmacy", icon: <IconVaccine stroke={1.5} /> }
];

const Sidebar = () => {
    return (
        // Sidebar chính: Cố định vị trí, chiếm trọn chiều cao màn hình
        <div className={'w-64 bg-slate-800 text-slate-300 flex flex-col h-screen fixed top-0 left-0 shadow-lg z-50'}>
            {/* Logo Section - Cố định ở trên cùng của sidebar */}
            {/* KHÔNG đặt overflow-y-auto ở đây */}
            <div className={'flex items-center justify-center gap-2 py-6 mb-4 bg-slate-800 z-10 sticky top-0'}>
                <IconHeartbeat size={40} stroke={2.5} className={'text-red-500'} />
                <span className={'font-bold text-3xl text-white'}>HMS</span>
            </div>

            {/* Profile Section - Cố định ngay dưới logo */}
            {/* top phải khớp với tổng chiều cao của logo section */}
            <div className={'flex flex-col items-center pb-6 mb-4 border-b border-slate-700 bg-slate-800 z-10 sticky top-[92px]'}>
                <div className={'p-1 bg-gradient-to-br from-primary-500 to-red-500 rounded-full shadow-md mb-2'}>
                    <Avatar variant={'filled'} src="avatar.jpg" size={'xl'} alt="Admin Avatar" />
                </div>
                <span className={'font-semibold text-lg text-white'}>Forsaken</span>
                <Text className={'text-sm text-slate-400'}>Quản trị viên</Text>
            </div>

            {/* Navigation Links - CUỘN ĐƯỢC nếu nội dung quá dài. overflow-y-auto chỉ áp dụng ở đây. */}
            {/* flex-grow: chiếm hết không gian còn lại. */}
            <nav className={'flex flex-col flex-grow overflow-y-auto pr-2 pl-2'}>
                {
                    links.map((link) => {
                        return (
                            <NavLink
                                to={link.url}
                                key={link.url}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-5 py-3 my-1 rounded-lg text-base font-medium transition-all duration-200
                                    ${isActive
                                        ? "bg-primary-500 text-white shadow-md"
                                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                                    }`
                                }
                            >
                                {React.cloneElement(link.icon, { size: 24 })}
                                <span>{link.name}</span>
                            </NavLink>
                        );
                    })
                }
            </nav>
        </div>
    );
}

export default Sidebar;