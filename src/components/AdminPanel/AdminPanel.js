import React from 'react';
import { Outlet, Link } from 'react-router-dom'

const AdminPanel = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="admin-panel-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content border p-5">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="admin-panel-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/admin'>Text to Speech Settings</Link></li>
                    <li><Link to='/admin/sttadmin'>Speech to Text Settings</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminPanel;