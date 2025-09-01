
import React, { useEffect } from 'react'

const AppHeader = ({ setIsDrawerOpen }) => {

    // Seeting the theme
    useEffect(() => {
        const buttons = document.querySelectorAll('[data-kt-element="mode"]');
    
        buttons.forEach(btn => {
          btn.addEventListener('click', e => {
            e.preventDefault();
            const mode = btn.getAttribute('data-kt-value');
    
            let themeMode = mode;
            if (mode === 'system') {
              themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
    
            // Update document and localStorage
            document.documentElement.setAttribute('data-theme', themeMode);
            localStorage.setItem('data-theme', mode);
          });
        });
    
        // Cleanup event listeners on unmount
        return () => {
          buttons.forEach(btn => btn.removeEventListener('click', () => {}));
        };
      }, []);

    return (

        <div id="kt_app_header" className="app-header">
            
            {/*begin::Header container*/}
            <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
                <div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
                    <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle" onClick={() => setIsDrawerOpen(prev => !prev)}>
                        <span className="svg-icon svg-icon-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="/" className="d-lg-none">
                        <img alt="Logo" src="/assets/media/logos/logo_dark.png" className="h-35px" />
                    </a>
                </div>
                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
                    <div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
                        <div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
                            <div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                                <span className="menu-link">
                                    <span className="menu-title">Control II</span>
                                    <span className="menu-arrow d-lg-none" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="app-navbar flex-shrink-0">
                        <div className="app-navbar-item ms-1 ms-lg-3">
                            <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor" />
                                        <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor" />
                                        <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor" />
                                        <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                            <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
                                <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ backgroundImage: 'url("/assets/media/misc/menu-header-bg.jpg")' }}>
                                    <h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
                                        <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
                                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                                        <li className="nav-item">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                        <div className="scroll-y mh-325px my-5 px-8">
                                            <div className="d-flex flex-stack py-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="symbol symbol-35px me-4">
                                                        <span className="symbol-label bg-light-warning">
                                                            <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                                <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="currentColor" />
                                                                    <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="mb-0 me-2">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                                                        <div className="text-gray-400 fs-7">Collection of SVG icons</div>
                                                    </div>
                                                </div>
                                                <span className="badge badge-light fs-8">20 March</span>
                                            </div>
                                        </div>
                                        <div className="py-3 text-center border-top">
                                            <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                <span className="svg-icon svg-icon-5">
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                                        <div className="d-flex flex-column px-9">
                                            <div className="pt-10 pb-0">
                                                <h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
                                                <div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
                                                <div className="text-center mt-5 mb-9">
                                                    <a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                                </div>
                                            </div>
                                            <div className="text-center px-4">
                                                <img className="mw-100 mh-200px" alt="image" src="/assets/media/illustrations/sketchy-1/1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                                        <div className="scroll-y mh-325px my-5 px-8">
                                            <div className="d-flex flex-stack py-4">
                                                <div className="d-flex align-items-center me-2">
                                                    <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
                                                </div>
                                                <span className="badge badge-light fs-8">Dec 10</span>
                                            </div>
                                        </div>
                                        <div className="py-3 text-center border-top">
                                            <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                <span className="svg-icon svg-icon-5">
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app-navbar-item ms-1 ms-lg-3">
                            {/*begin::Menu wrapper*/}
                            <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x={2} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                        <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                        <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                        <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">
                                {/*begin::Heading*/}
                                <div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10" style={{ backgroundImage: 'url("/assets/media/misc/menu-header-bg.jpg")' }}>
                                    {/*begin::Title*/}
                                    <h3 className="text-white fw-semibold mb-3">Quick Links</h3>
                                    {/*end::Title*/}
                                    {/*begin::Status*/}
                                    <span className="badge bg-primary py-2 px-3">25 pending tasks</span>
                                    {/*end::Status*/}
                                </div>
                                {/*end::Heading*/}
                                {/*begin:Nav*/}
                                <div className="row g-0">
                                    {/*begin:Item*/}
                                    <div className="col-6">
                                        <a href="apps/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom">
                                            {/*begin::Svg Icon | path: icons/duotune/finance/fin009.svg*/}
                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z" fill="currentColor" />
                                                    <path d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            
                                            {/*end::Svg Icon*/}
                                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Accounting</span>
                                            <span className="fs-7 text-gray-400">eCommerce</span>
                                        </a>
                                    </div>
                                    {/*end:Item*/}
                                    {/*begin:Item*/}
                                    <div className="col-6">
                                        <a href="apps/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
                                            {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Administration</span>
                                            <span className="fs-7 text-gray-400">Console</span>
                                        </a>
                                    </div>
                                    {/*end:Item*/}
                                    {/*begin:Item*/}
                                    <div className="col-6">
                                        <a href="apps/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
                                            {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Projects</span>
                                            <span className="fs-7 text-gray-400">Pending Tasks</span>
                                        </a>
                                    </div>
                                    {/*end:Item*/}
                                    {/*begin:Item*/}
                                    <div className="col-6">
                                        <a href="apps/projects/users.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
                                            {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                                                    <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Customers</span>
                                            <span className="fs-7 text-gray-400">Latest cases</span>
                                        </a>
                                    </div>
                                    {/*end:Item*/}
                                </div>
                                <div className="py-2 text-center border-top">
                                    <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                        <span className="svg-icon svg-icon-5">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="app-navbar-item ms-1 ms-lg-3">
                            <a href="#" className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <span className="svg-icon theme-light-show svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                    </svg>
                                </span>
                                <span className="svg-icon theme-dark-show svg-icon-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor" />
                                        <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor" />
                                        <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor" />
                                        <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </a>
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-175px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                                <div className="menu-item px-3 my-0">
                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                                        <span className="menu-icon" data-kt-element="icon">
                                            <span className="svg-icon svg-icon-3">
                                                <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="menu-title">Light</span>
                                    </a>
                                </div>
                                <div className="menu-item px-3 my-0">
                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                        <span className="menu-icon" data-kt-element="icon">
                                            <span className="svg-icon svg-icon-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="menu-title">Dark</span>
                                    </a>
                                </div>
                                <div className="menu-item px-3 my-0">
                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                        <span className="menu-icon" data-kt-element="icon">
                                            <span className="svg-icon svg-icon-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="menu-title">System</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="app-navbar-item ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                            <div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <img src="/assets/media/avatars/300-1.jpg" alt="user" />
                            </div>
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                                <div className="menu-item px-3">
                                    <div className="menu-content d-flex align-items-center px-3">
                                        <div className="symbol symbol-50px me-5">
                                            <img alt="Logo" src="/assets/media/avatars/300-1.jpg" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div className="fw-bold d-flex align-items-center fs-5">User Name</div>
                                            <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">username@glc.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="separator my-2" />
                                <div className="menu-item px-5">
                                    <a href="account/overview.html" className="menu-link px-5">My Profile</a>
                                </div>
                                <div className="menu-item px-5">
                                    <a href="apps/projects/list.html" className="menu-link px-5">
                                        <span className="menu-text">My Projects</span>
                                        <span className="menu-badge">
                                            <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start">
                                    <a href="#" className="menu-link px-5">
                                        <span className="menu-title">My Subscription</span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        <div className="menu-item px-3">
                                            <a href="account/referrals.html" className="menu-link px-5">Referrals</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="account/billing.html" className="menu-link px-5">Billing</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="account/statements.html" className="menu-link px-5">Payments</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements" /></a>
                                        </div>
                                        <div className="separator my-2" />
                                        <div className="menu-item px-3">
                                            <div className="menu-content px-3">
                                                <label className="form-check form-switch form-check-custom form-check-solid">
                                                    <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                                                    <span className="form-check-label text-muted fs-7">Notifications</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item px-5">
                                    <a href="account/statements.html" className="menu-link px-5">My Statements</a>
                                </div>
                                <div className="separator my-2" />
                                <div className="menu-item px-5">
                                    <a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AppHeader