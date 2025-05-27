import React from 'react';
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div className={'flex h-screen'}> {/* Thêm h-screen để đảm bảo layout chiếm toàn bộ chiều cao */}
            <Sidebar/>
            {/* THAY ĐỔI QUAN TRỌNG TẠI ĐÂY */}
            {/* Đảm bảo phần này chiếm hết không gian còn lại và có margin-left */}
            <div className={'flex-1 flex flex-col'}> {/* flex-1 sẽ tự động chiếm hết không gian còn lại */}
                <div className="ml-64 w-auto"> {/* Thêm div bao quanh Header để áp dụng ml-64 và w-auto */}
                    <Header/>
                </div>
                {/* Outlet cũng cần được đẩy sang phải nếu nó nằm ngoài div trên */}
                {/* Hoặc tốt hơn là đặt Outlet vào trong một div riêng sau Header */}
                <div className="flex-1 ml-64 p-8 overflow-auto"> {/* Thêm padding và overflow để nội dung cuộn */}
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;