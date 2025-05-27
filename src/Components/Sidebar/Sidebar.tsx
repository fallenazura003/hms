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



const links = [
    {
        name: "Dashboard", url: "/dashboard", icon: <IconLayoutGrid stroke={1.5} />,
    },
    {
        name: "Doctors", url: "/doctors", icon: <IconStethoscope stroke={1.5} />,
    },
    {
        name: "Patients", url: "/patients", icon: <IconMoodHeart stroke={1.5} />,
    },
    {
        name: "Appointments", url: "/appointments", icon: <IconCalendarCheck stroke={1.5} />,
    },
    {
        name: "Pharmacy", url: "/pharmacy", icon: <IconVaccine stroke={1.5} />,
    }
];

const Sidebar = () => {
    return (
        <div className={'w-64 bg-slate-800 text-slate-300 flex flex-col h-screen py-6 px-4 shadow-lg'}>
            {/* Logo Section */}
            <div className={'flex items-center justify-center gap-2 mb-8'}>
                <IconHeartbeat size={40} stroke={2.5} className={'text-red-500'} /> {/* Accent color */}
                <span className={'font-bold text-3xl text-white'}>HMS</span>
            </div>

            {/* Profile Section */}
            <div className={'flex flex-col items-center mb-8'}>
                <div className={'p-1 bg-gradient-to-br from-primary-500 to-red-500 rounded-full shadow-md mb-2'}>
                    <Avatar variant={'filled'} src="avatar.jpg" size={'xl'} alt="Admin Avatar" />
                </div>
                <span className={'font-semibold text-lg text-white'}>Forsaken</span>
                <Text className={'text-sm text-slate-400'}>Quản trị viên</Text>
            </div>

            {/* Navigation Links */}
            <nav className={'flex flex-col flex-grow'}> {/* flex-grow để đẩy logout xuống dưới */}
                {
                    links.map((link) => {
                        return (
                            <NavLink
                                to={link.url}
                                key={link.url}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-5 py-3 my-1 rounded-lg text-base font-medium transition-all duration-200
                                    ${isActive
                                        ? "bg-primary-500 text-white shadow-md" // Active state
                                        : "text-slate-300 hover:bg-slate-700 hover:text-white" // Inactive state
                                    }`
                                }
                            >
                                {React.cloneElement(link.icon, { size: 24 })} {/* Đảm bảo icon có kích thước thống nhất */}
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