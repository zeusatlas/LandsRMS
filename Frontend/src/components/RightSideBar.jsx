
import React from 'react'

const RightSideBar = () => {
    return (


        <div className="offcanvas offcanvas-end" tabIndex={-1} id="theme-settings-offcanvas">
            <div className="d-flex align-items-center w-100 bg-primary p-0 offcanvas-header">
                <h6 className="fw-medium py-2 px-3 font-16 text-white">
                    <span className="d-block py-1">Theme Settings</span>
                </h6>
            </div>
            <div className="offcanvas-body p-3 h-100" data-simplebar>
                <div>
                    <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h5>
                    <div className="d-flex gap-2">
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-bs-theme" id="layout-color-light" defaultValue="light" />
                            <label className="form-check-label" htmlFor="layout-color-light">Light</label>
                        </div>
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-bs-theme" id="layout-color-dark" defaultValue="dark" />
                            <label className="form-check-label" htmlFor="layout-color-dark">Dark</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Layout Mode</h5>
                    <div className="d-flex gap-2">
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-fluid" defaultValue="default" />
                            <label className="form-check-label" htmlFor="layout-mode-fluid">Default</label>
                        </div>
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-detached" defaultValue="detached" />
                            <label className="form-check-label" htmlFor="layout-mode-detached">Detached</label>
                        </div>
                    </div>
                </div>
                <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Topbar Color</h5>
                <div className="d-flex gap-2">
                    <div className="form-check form-radio w-50">
                        <input className="form-check-input" type="radio" name="data-topbar-color" id="topbar-color-light" defaultValue="light" />
                        <label className="form-check-label" htmlFor="topbar-color-light">Light</label>
                    </div>
                    <div className="form-check form-radio w-50">
                        <input className="form-check-input" type="radio" name="data-topbar-color" id="topbar-color-dark" defaultValue="dark" />
                        <label className="form-check-label" htmlFor="topbar-color-dark">Dark</label>
                    </div>
                    <div className="form-check form-radio w-50">
                        <input className="form-check-input" type="radio" name="data-topbar-color" id="topbar-color-brand" defaultValue="brand" />
                        <label className="form-check-label" htmlFor="topbar-color-brand">Brand</label>
                    </div>
                </div>
                <div>
                    <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Menu Color</h5>
                    <div className="d-flex gap-2">
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-color" id="leftbar-color-light" defaultValue="light" />
                            <label className="form-check-label" htmlFor="leftbar-color-light">Light</label>
                        </div>
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-color" id="leftbar-color-dark" defaultValue="dark" />
                            <label className="form-check-label" htmlFor="leftbar-color-dark">Dark</label>
                        </div>
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-color" id="leftbar-color-brand" defaultValue="brand" />
                            <label className="form-check-label" htmlFor="leftbar-color-brand">Brand</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Sidebar Size</h5>
                    <div className="d-flex gap-2 mb-2">
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-size" id="sidenav-size-default" defaultValue="default" />
                            <label className="form-check-label" htmlFor="sidenav-size-default">Default</label>
                        </div>
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-size" id="sidenav-size-md" defaultValue="md" />
                            <label className="form-check-label" htmlFor="sidenav-size-md">Compact</label>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mb-2">
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-size" id="sidenav-size-small" defaultValue="sm" />
                            <label className="form-check-label" htmlFor="sidenav-size-small">Small</label>
                        </div>
                        <div className="form-check form-radio w-50">
                            <input className="form-check-input" type="radio" name="data-sidenav-size" id="sidenav-size-overlay" defaultValue="overlay" />
                            <label className="form-check-label" htmlFor="sidenav-size-overlay">Overlay</label>
                        </div>
                    </div>
                    <div className="form-check form-radio w-50">
                        <input className="form-check-input" type="radio" name="data-sidenav-size" id="sidenav-size-hidden" defaultValue="hidden" />
                        <label className="form-check-label" htmlFor="sidenav-size-hidden">Hidden</label>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer border-top py-2 px-2 text-center">
                <div className="d-flex gap-2">
                    <button type="button" className="btn btn-soft-danger w-100" id="reset-layout">Reset</button>
                </div>
            </div>
        </div>



    )
}

export default RightSideBar