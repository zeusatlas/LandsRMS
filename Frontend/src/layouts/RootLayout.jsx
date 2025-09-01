import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import AppHeader from '../components/AppHeader';
import ThemeBuilder from '../components/ThemeBuilder';
import HelpDrawer from '../components/HelpDrawer';

const RootLayout = () => {
  // Shared state for sidebar drawer open/closed
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.KTMenu) window.KTMenu.createInstances();
    if (window.KTDrawer) new window.KTDrawer(document.querySelector('#kt_app_layout_builder, #kt_help'));
    if (window.KTScrolltop) new window.KTScrolltop(document.getElementById('kt_scrolltop'));
  }, []);


  return (

    <>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">

          {/* Pass drawer state and toggle function to header */}
          <AppHeader isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />

          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

            {/* Pass drawer state + mobile flag to sidebar */}
            <SideNav isDrawerOpen={isDrawerOpen} isMobile={isMobile} />

            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

              <Outlet />

              <Footer />

            </div>
          </div>
        </div>
      </div>

      <button id="kt_app_layout_builder_toggle" className="btn btn-dark app-layout-builder-toggle btn-sm" title="Zeus Prime Builder" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover">
        <i className="fonticon-equalizer fs-4 me-1" />Customize
      </button>
      
      <div id="kt_app_layout_builder" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="app-settings" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '380px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_layout_builder_toggle" data-kt-drawer-close="#kt_app_layout_builder_close">
        <ThemeBuilder />
      </div>

      <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
        <span className="svg-icon">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
          </svg>
        </span>
      </div>


      <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2">
        <button id="kt_engage_demos_toggle" className="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover" style={{ display: 'none'}}>
          <span id="kt_engage_demos_label">Demos</span>
        </button>
        <button id="kt_help_toggle" className="engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0" title="Learn & Get Inspired" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover">Support</button>
      </div>


      <div id="kt_help" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="help" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'350px', 'md': '525px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_help_toggle" data-kt-drawer-close="#kt_help_close">
        <HelpDrawer />
      </div>


    </>

  );
};

export default RootLayout;
