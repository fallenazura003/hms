// Header.jsx
import React from 'react';
import ProfileMenu from "./ProfileMenu";
import { ActionIcon, Button } from "@mantine/core";
import { IconBellRinging, IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={'bg-slate-800 shadow-md h-16 flex justify-between px-6 items-center text-slate-300'}>
            {/* Nút collapse sidebar */}
            <div>
                <ActionIcon
                    variant="transparent"
                    size="lg" // Mantine 'lg' size (~36px-40px)
                    aria-label="Collapse Sidebar"
                    className="text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                >
                    {/* Đổi từ style sang prop size của Tabler Icons */}
                    <IconLayoutSidebarLeftCollapse size={240} stroke={1.5} /> {/* Kích thước 24px là phổ biến và hiển thị rõ */}
                </ActionIcon>
            </div>


            {/* Các thành phần bên phải */}
            <div className={'flex gap-4 items-center'}>
                <Link to={"/login"}>
                    <Button
                        variant="filled"
                        color="primary"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
                    >
                        Đăng nhập
                    </Button>
                </Link>

                <ActionIcon
                    variant="transparent"
                    size="lg"
                    aria-label="Notifications"
                    className="text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                >
                    {/* Đổi từ style sang prop size của Tabler Icons */}
                    <IconBellRinging size={24} stroke={2} />
                </ActionIcon>


                <ProfileMenu />
            </div>
        </div>
    );
}

export default Header;