import React from 'react'

const ThemeBuilder = () => {
  return (
    <div className="card border-0 shadow-none rounded-0 w-100">
      <div className="card-header bgi-position-y-bottom bgi-position-x-end bgi-size-cover bgi-no-repeat rounded-0 border-0 py-4" id="kt_app_layout_builder_header" style={{ backgroundImage: 'url("/assets/media/misc/layout/header-bg.jpg")' }}>
        <h3 className="card-title fs-3 fw-bold text-white flex-column m-0">Zeus Prime Builder
          <small className="text-white opacity-50 fs-7 fw-semibold pt-1">Get your product deeply customized</small>
        </h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-icon bg-white bg-opacity-25 btn-color-white p-0 w-20px h-20px rounded-1" id="kt_app_layout_builder_close">
            <span className="svg-icon svg-icon-3">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="card-body position-relative" id="kt_app_layout_builder_body">
        <div id="kt_app_settings_content" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_app_layout_builder_body" data-kt-scroll-dependencies="#kt_app_layout_builder_header, #kt_app_layout_builder_footer" data-kt-scroll-offset="5px">
          <form className="form" method="POST" id="kt_app_layout_builder_form" action="https://preview.keenthemes.com/metronic8/demo1/index.php">
            <input type="hidden" id="kt_app_layout_builder_action" name="layout-builder[action]" />
            <div className="card-body p-0">
              <div className="form-group">
                <div className="mb-6">
                  <h4 className="fw-bold text-dark">Theme Mode</h4>
                  <div className="fw-semibold text-muted fs-7 d-block lh-1">Enjoy Dark &amp; Light modes.
                    <a className="fw-semibold" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/dark-mode" target="_blank">See docs</a>
                  </div>
                </div>
                <div className="row" data-kt-buttons="true" data-kt-buttons-target=".form-check-image,.form-check-input">
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper">
                        <img src="/assets/media/misc/layout/light.png" className="mw-100" alt="zeus" />
                      </div>
                      <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                        <input className="form-check-input" type="radio" defaultValue="light" name="theme_mode" id="kt_layout_builder_theme_mode_light" />
                        <div className="form-check-label text-gray-700">Light</div>
                      </div>
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper">
                        <img src="/assets/media/misc/layout/dark.png" className="mw-100" alt="zeus" />
                      </div>
                      <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                        <input className="form-check-input" type="radio" defaultValue="dark" name="theme_mode" id="kt_layout_builder_theme_mode_dark" />
                        <div className="form-check-label text-gray-700">Dark</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="separator separator-dashed my-5" />
              <div className="form-group d-flex flex-stack">
                <div className="d-flex flex-column">
                  <h4 className="fw-bold text-dark">RTL Mode</h4>
                  <div className="fs-7 fw-semibold text-muted">Change Language Direction.
                    <a className="fw-semibold" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/rtl" target="_blank">See docs</a>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="form-check form-check-custom form-check-solid form-check-success form-switch">
                    <input type="hidden" defaultValue="false" name="layout-builder[layout][app][general][rtl]" />
                    <input className="form-check-input w-45px h-30px" type="checkbox" defaultValue="true" name="layout-builder[layout][app][general][rtl]" id="kt_builder_rtl" />
                    <label className="form-check-label" htmlFor="kt_builder_rtl" />
                  </div>
                </div>
              </div>
              <div className="separator separator-dashed my-5" />
              <div className="form-group">
                <div className="d-flex flex-column mb-4">
                  <h4 className="fw-bold text-dark">Width Mode</h4>
                  <div className="fs-7 fw-semibold text-muted">Page width options</div>
                </div>
                <div className="d-flex">
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5">
                    <input className="form-check-input" type="radio" defaultChecked="checked" defaultValue="default" id="kt_builder_page_width_default" name="layout-builder[layout][app][general][page-width]" />
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" htmlFor="kt_builder_page_width_default">Default</label>
                  </div>
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5">
                    <input className="form-check-input" type="radio" defaultValue="fluid" id="kt_builder_page_width_fluid" name="layout-builder[layout][app][general][page-width]" />
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" htmlFor="kt_builder_page_width_fluid">Fluid</label>
                  </div>
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5">
                    <input className="form-check-input" type="radio" defaultValue="fixed" id="kt_builder_page_width_fixed" name="layout-builder[layout][app][general][page-width]" />
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" htmlFor="kt_builder_page_width_fixed">Fixed</label>
                  </div>
                </div>
              </div>
              <div className="separator separator-dashed my-5" />
              <div className="form-group">
                <div className="d-flex flex-column mb-4">
                  <h4 className="fw-bold text-dark">Menu Icon</h4>
                  <div className="fs-7 fw-semibold text-muted">Sidebar menu icon options</div>
                </div>
                <div className="d-flex">
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5">
                    <input className="form-check-input" type="radio" defaultChecked="checked" defaultValue="svg" id="kt_builder_icon_svg" name="layout-builder[layout][app][sidebar][default][menu][icon-type]" />
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" htmlFor="kt_builder_icon_svg">SVG Duotone</label>
                  </div>
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5">
                    <input className="form-check-input" type="radio" defaultValue="font" id="kt_builder_icon_font" name="layout-builder[layout][app][sidebar][default][menu][icon-type]" />
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" htmlFor="kt_builder_icon_font">Font Icons</label>
                  </div>
                </div>
              </div>
              <div className="separator separator-dashed my-5" />
              <div className="form-group">
                <div className="mb-6">
                  <h4 className="fw-bold text-dark">Layouts</h4>
                  <span className="fw-semibold text-muted fs-7 lh-1">4 main layouts.</span>
                  <a href="layout-builder.html" className="fw-semibold text-primary">More layout options</a>
                </div>
                <div className="row gy-3" data-kt-buttons="true" data-kt-buttons-target=".form-check-image:not(.disabled),.form-check-input:not([disabled])">
                  <div className="col-6">
                    <label className="form-check-image form-check-success active active">
                      <div className="form-check-wrapper">
                        <img src="/assets/media/misc/layout/dark-sidebar.png" className="mw-100" alt="zeus" />
                      </div>
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input className="form-check-input" type="radio" defaultChecked="checked" defaultValue="dark-sidebar" name="layout-builder[layout][app][general][layout]" />
                        <div className="form-check-label text-gray-700">Dark Sidebar</div>
                      </div>
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper">
                        <img src="/assets/media/misc/layout/light-sidebar.png" className="mw-100" alt="zeus" />
                      </div>
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input className="form-check-input" type="radio" defaultValue="light-sidebar" name="layout-builder[layout][app][general][layout]" />
                        <div className="form-check-label text-gray-700">Light Sidebar</div>
                      </div>
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper">
                        <img src="/assets/media/misc/layout/dark-header.png" className="mw-100" alt="zeus" />
                      </div>
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input className="form-check-input" type="radio" defaultValue="dark-header" name="layout-builder[layout][app][general][layout]" />
                        <div className="form-check-label text-gray-700">Dark Header</div>
                      </div>
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper">
                        <img src="/assets/media/misc/layout/light-header.png" className="mw-100" alt="zeus" />
                      </div>
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input className="form-check-input" type="radio" defaultValue="light-header" name="layout-builder[layout][app][general][layout]" />
                        <div className="form-check-label text-gray-700">Light Header</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card-footer border-0 d-flex gap-3 pb-9 pt-0" id="kt_app_layout_builder_footer">
        <button type="button" id="kt_app_layout_builder_preview" className="btn btn-primary flex-grow-1 fw-semibold">
          <span className="indicator-label">Preview</span>
          <span className="indicator-progress">Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
        </button>
        <button type="button" id="kt_app_layout_builder_reset" className="btn btn-light flex-grow-1 fw-semibold">
          <span className="indicator-label">Reset</span>
          <span className="indicator-progress">Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
        </button>
      </div>
    </div>
  )
}

export default ThemeBuilder
