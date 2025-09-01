import React, { useEffect, useState } from 'react';

const SideNav = ({ isDrawerOpen, isMobile }) => {

    useEffect(() => {
        if (window.KTDrawer) window.KTDrawer.createInstances();
    }, [isDrawerOpen, isMobile]);

    // State to keep track of which menus are open.
    const [openMenus, setOpenMenus] = useState({
        'dashboards': true,
        'landManagement': false,
        'landRecords': false,
        'leaseAgreements': false,
        'payments': false,
        'invoices': false,
        'paymentHistory': false,
        'reports': false,
        'userManagement': false,
        'appSystemManagement': false,
        'inbox': false,
    });
    const [isMinimized, setIsMinimized] = useState(false);

    // useEffect to manage body attributes based on the minimization state.
    useEffect(() => {
        const body = document.body;
        if (isMinimized) {
            body.setAttribute('data-kt-app-sidebar-minimize', 'on');
            body.setAttribute('data-kt-scrolltop', 'on');
        } else {
            body.removeAttribute('data-kt-app-sidebar-minimize');
            body.removeAttribute('data-kt-scrolltop');
        }
    }, [isMinimized]);

    // Function to toggle the open/closed state of a menu.
    const toggleMenu = (menuKey, isTopLevel = false) => {
        setOpenMenus(prevState => {
            const newState = { ...prevState };

            if (isTopLevel) {
                // If it's a top-level menu, close all others first.
                Object.keys(newState).forEach(key => {
                    newState[key] = false;
                });
                newState[menuKey] = !prevState[menuKey];
            } else {
                // If it's a sub-menu, just toggle its own state.
                newState[menuKey] = !prevState[menuKey];
            }
            return newState;
        });
    };

    const handleSidebarToggle = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div id="kt_app_sidebar" className={`app-sidebar flex-column ${isMobile ? 'drawer drawer-start' : ''} ${isDrawerOpen ? 'drawer-on' : ''}`}
            {...(isMobile
                ? {
                    'data-kt-drawer': 'true', 'data-kt-drawer-name': 'app-sidebar', 'data-kt-drawer-activate': '{default: true, lg: false}',
                    'data-kt-drawer-overlay': 'true', 'data-kt-drawer-width': '225px', 'data-kt-drawer-direction': 'start', 'data-kt-drawer-toggle': '#kt_app_sidebar_mobile_toggle',
                } : {})} style={{ width: '225px !important' }} >
            <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                <a href="#">
                    <img alt="Logo" src="/assets/media/logos/logo_light.png" className="h-45px app-sidebar-logo-default" />
                    <img alt="Logo" src="/assets/media/logos/logo_main.png" className="h-25px app-sidebar-logo-minimize" />
                </a>
                <div id="kt_app_sidebar_toggle"
                    className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
                    onClick={handleSidebarToggle}
                >
                    <span className={`svg-icon svg-icon-2 ${isMinimized ? '' : 'rotate-180'}`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
                            <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-overlay-y my-5">
                    <div className="menu menu-column menu-rounded menu-sub-indention px-3">

                        <div className="aside-user d-flex align-items-sm-center justify-content-center py-5">
                            <div className="symbol symbol-50px">
                                <img src="/assets/media/avatars/300-1.jpg" alt="zeus" />
                            </div>
                            <div className="aside-user-info flex-row-fluid flex-wrap ms-5">
                                <div className="d-flex">
                                    <div className="flex-grow-1 me-2">
                                        <a href="#" className="text-gray-600 text-hover-primary fs-6 fw-bold">User Name</a>
                                        <div className="d-flex align-items-center text-success fs-9">
                                            <span className="bullet bullet-dot bg-success me-1" />online
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dashboards Menu (untouched) */}
                        <div className={`menu-item menu-accordion ${openMenus['dashboards'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('dashboards', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x={2} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                            <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                            <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                            <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Dashboards</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['dashboards'] ? 'show' : ''}`}>
                                <div className="menu-item">
                                    <a className="menu-link active" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Default</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Projects</span>
                                    </a>
                                </div>
                                {/* Bidding Menu Item */}
                                <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot" />
                                            </span>
                                            <span className="menu-title">Bidding</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-content">
                                        <a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" href="#kt_app_sidebar_menu_dashboards_collapse" data-bs-toggle="collapse" data-kt-toggle-text="Show Less">
                                            <span data-kt-toggle-text-target="true">Show 1 More</span>
                                            <span className="svg-icon toggle-on svg-icon-2 me-0">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                    <rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span className="svg-icon toggle-off svg-icon-2 me-0">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                    <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                    <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-item pt-5">
                            <div className="menu-content">
                                <span className="menu-heading fw-bold text-uppercase fs-7">Controls</span>
                            </div>
                        </div>

                        {/* Land Management Menu */}
                        <div className={`menu-item menu-accordion ${openMenus['landManagement'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('landManagement', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 15H12C14.7 15 17 12.7 17 10C17 7.3 14.7 5 12 5H11V15Z" fill="currentColor" />
                                            <path opacity="0.3" d="M11 15C11 15.6 11.4 16 12 16C16.4 16 20 12.4 20 8C20 7.4 19.6 7 19 7H11C10.4 7 10 7.4 10 8V15H11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M10 15V19C10 19.6 10.4 20 11 20C15.4 20 19 16.4 19 12C19 11.4 18.6 11 18 11H10C9.4 11 9 11.4 9 12V15H10Z" fill="currentColor" />
                                            <path d="M22 17C22 17.6 21.6 18 21 18H20C20 18.6 19.6 19 19 19C18.4 19 18 18.6 18 18H17C16.4 18 16 17.6 16 17H15C14.4 17 14 16.6 14 16V15H13C12.4 15 12 14.6 12 14V13H11C10.4 13 10 12.6 10 12V11H9C8.4 11 8 10.6 8 10V9H7C6.4 9 6 8.6 6 8V7H5C4.4 7 4 6.6 4 6V5C4 4.4 4.4 4 5 4H10C10.6 4 11 4.4 11 5V6H12C12.6 6 13 6.4 13 7V8H14C14.6 8 15 8.4 15 9V10H16C16.6 10 17 10.4 17 11V12H18C18.6 12 19 12.4 19 13V14H20C20.6 14 21 14.4 21 15V16H22C22.6 16 23 16.4 23 17Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Land Management</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['landManagement'] ? 'show' : ''}`}>
                                <div className={`menu-item menu-accordion ${openMenus['landRecords'] ? 'show' : ''}`}>
                                    <span className="menu-link" onClick={() => toggleMenu('landRecords')}>
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Land Records</span>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className={`menu-sub menu-sub-accordion menu-active-bg ${openMenus['landRecords'] ? 'show' : ''}`}>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">View All Lands</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Add New Land</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Search Land</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`menu-item menu-accordion ${openMenus['leaseAgreements'] ? 'show' : ''}`}>
                                    <span className="menu-link" onClick={() => toggleMenu('leaseAgreements')}>
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Lease & Ownership</span>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className={`menu-sub menu-sub-accordion menu-active-bg ${openMenus['leaseAgreements'] ? 'show' : ''}`}>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">View Agreements</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Create Agreement</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Ownership Transfer</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payments & Invoices Menu */}
                        <div className={`menu-item menu-accordion ${openMenus['payments'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('payments', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M10 20.3C10 20.7 10.3 21 10.7 21H13.3C13.7 21 14 20.7 14 20.3V19H10V20.3Z" fill="currentColor" />
                                            <path d="M12 21C15.3 21 18 18.3 18 15V11C18 10.7 17.8 10.5 17.6 10.3L13.4 2.5C13.1 1.9 12.3 1.6 11.6 1.9C11.2 2.1 10.9 2.5 10.7 2.9L6.4 10.3C6.2 10.5 6 10.7 6 11V15C6 18.3 8.7 21 12 21Z" fill="currentColor" />
                                            <path opacity="0.3" d="M12 21C15.3 21 18 18.3 18 15V11C18 10.7 17.8 10.5 17.6 10.3L13.4 2.5C13.1 1.9 12.3 1.6 11.6 1.9C11.2 2.1 10.9 2.5 10.7 2.9L6.4 10.3C6.2 10.5 6 10.7 6 11V15C6 18.3 8.7 21 12 21Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Payments & Invoices</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['payments'] ? 'show' : ''}`}>
                                <div className={`menu-item menu-accordion ${openMenus['invoices'] ? 'show' : ''}`}>
                                    <span className="menu-link" onClick={() => toggleMenu('invoices')}>
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Invoices</span>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className={`menu-sub menu-sub-accordion menu-active-bg ${openMenus['invoices'] ? 'show' : ''}`}>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Generate Invoice</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">View All Invoices</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Upcoming Bills</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`menu-item menu-accordion ${openMenus['paymentHistory'] ? 'show' : ''}`}>
                                    <span className="menu-link" onClick={() => toggleMenu('paymentHistory')}>
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Payment History</span>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className={`menu-sub menu-sub-accordion menu-active-bg ${openMenus['paymentHistory'] ? 'show' : ''}`}>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Transaction Log</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Pending Payments</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="#">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Overdue Payments</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User Management Menu (Expanded) */}
                        <div className={`menu-item menu-accordion ${openMenus['userManagement'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('userManagement', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 19.7H5C4.4 19.7 4 19.3 4 18.7V5.3C4 4.7 4.4 4.3 5 4.3H19C19.6 4.3 20 4.7 20 5.3V18.7C20 19.3 19.6 19.7 19 19.7Z" fill="currentColor" />
                                            <path opacity="0.3" d="M10 16H8C7.4 16 7 15.6 7 15V13C7 12.4 7.4 12 8 12H10V16Z" fill="currentColor" />
                                            <path opacity="0.3" d="M12 16H14C14.6 16 15 15.6 15 15V13C15 12.4 14.6 12 14 12H12V16Z" fill="currentColor" />
                                            <path opacity="0.3" d="M16 16H18C18.6 16 19 15.6 19 15V13C19 12.4 18.6 12 18 12H16V16Z" fill="currentColor" />
                                            <path opacity="0.3" d="M10 8H8C7.4 8 7 7.6 7 7V5C7 4.4 7.4 4 8 4H10V8Z" fill="currentColor" />
                                            <path opacity="0.3" d="M12 8H14C14.6 8 15 7.6 15 7V5C15 4.4 14.6 4 14 4H12V8Z" fill="currentColor" />
                                            <path opacity="0.3" d="M16 8H18C18.6 8 19 7.6 19 7V5C19 4.4 18.6 4 18 4H16V8Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">User Management</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['userManagement'] ? 'show' : ''}`}>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Users & Roles</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">User Requests</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Activity Log</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Permissions</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* App & System Management Menu */}
                        <div className={`menu-item menu-accordion ${openMenus['appSystemManagement'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('appSystemManagement', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                            <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                                            <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">System Configuration</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['appSystemManagement'] ? 'show' : ''}`}>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Payment Settings</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Notifications</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Content & FAQs</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">API Keys</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">System Status</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Reports & Analytics Menu */}
                        <div className={`menu-item menu-accordion ${openMenus['reports'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('reports', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 8V20H8V8H16Z" fill="currentColor" />
                                            <path opacity="0.3" d="M16 8V20H8V8H16Z" fill="currentColor" />
                                            <rect opacity="0.3" x="4" y="16" width="4" height="4" rx="2" fill="currentColor" />
                                            <rect opacity="0.3" x="8" y="12" width="4" height="8" rx="2" fill="currentColor" />
                                            <rect x="12" y="8" width="4" height="12" rx="2" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Reports & Analytics</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['reports'] ? 'show' : ''}`}>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Financial Reports</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Land Use Reports</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Tenant Reports</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Inbox Menu */}
                        <div className={`menu-item menu-accordion ${openMenus['inbox'] ? 'show' : ''}`}>
                            <span className="menu-link" onClick={() => toggleMenu('inbox', true)}>
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                            <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Inbox</span>
                                <span className="menu-arrow" />
                            </span>
                            <div className={`menu-sub menu-sub-accordion ${openMenus['inbox'] ? 'show' : ''}`}>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Messages</span>
                                        <span className="menu-badge">
                                            <span className="badge badge-success">3</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Notifications</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="#">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot" />
                                        </span>
                                        <span className="menu-title">Alerts</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="menu-item">
                            <a className="menu-link" href="#">
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Forum</span>
                            </a>
                        </div>
                        <div className="menu-item">
                            <a className="menu-link" href="#">
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Tickets</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
                <a href="#" className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click">
                    <span className="btn-label">Documentation, T &amp; C</span>
                </a>
            </div>
        </div>
    );
};

export default SideNav;