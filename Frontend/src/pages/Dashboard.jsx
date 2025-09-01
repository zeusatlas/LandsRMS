
import React from 'react'

const Dashboard = () => {
    return (


        <div className="d-flex flex-column flex-column-fluid">
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                    <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                        <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Default</h1>
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            <li className="breadcrumb-item text-muted">
                                <a href="index-2.html" className="text-muted text-hover-primary">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <span className="bullet bg-gray-400 w-5px h-2px" />
                            </li>
                            <li className="breadcrumb-item text-muted">Dashboards</li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center gap-2 gap-lg-3">
                        <a href="#" className="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Rollover</a>
                        <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Add Target</a>
                    </div>
                </div>
            </div>

            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content flex-column-fluid">
                <div id="kt_app_content_container" className="app-container container-fluid">

                    <div className="card border-transparent mb-5" data-theme="light" style={{ backgroundColor: '#1C325E' }}>
                        <div className="card-body d-flex ps-xl-15">
                            <div className="m-0">
                                <div className="position-relative fs-2x z-index-2 fw-bold text-white mb-0">
                                    <span className="me-2">You have got
                                        <span className="position-relative d-inline-block text-danger">
                                            <a href="#" className="text-danger opacity-75-hover me-2 ms-2">2300 bonus</a>
                                            <span className="position-absolute opacity-50 bottom-0 start-0 border-4 border-danger border-bottom w-100" />
                                        </span></span>points.
                                    <br />Feel free to use them in your lessons</div>
                                <div className="mb-0">
                                    <a href="#" className="btn btn-danger fw-semibold me-2 btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Get Reward</a>
                                    <a href="#" className="btn btn-color-white bg-white bg-opacity-15 bg-hover-opacity-25 fw- btn-sm">How to</a>
                                </div>
                            </div>
                            <img src="/assets/media/illustrations/sigma-1/17-dark.png" className="position-absolute me-3 bottom-0 end-0 h-200px" />
                        </div>
                    </div>

                    {/*begin::Row*/}
                    <div className="row g-5 g-xl-10">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-5">
                            <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end mb-5" style={{ backgroundColor: '#F1416C', backgroundImage: 'url("/assets/media/patterns/vector-1.png")' }}>
                                <div className="card-header pt-5">
                                    <div className="card-title d-flex flex-column">
                                        <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>
                                        <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Active Projects</span>
                                    </div>
                                </div>
                                <div className="card-body d-flex align-items-end pt-0">
                                    <div className="d-flex align-items-center flex-column mt-3 w-100">
                                        <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                                            <span>43 Pending</span>
                                            <span>72%</span>
                                        </div>
                                        <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                                            <div className="bg-white rounded h-8px" role="progressbar" style={{ width: '72%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-flush mb-5">
                                <div className="card-header pt-5">
                                    <div className="card-title d-flex flex-column">
                                        <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">357</span>
                                        <span className="text-gray-400 pt-1 fw-semibold fs-6">Professionals</span>
                                    </div>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-end pe-0">
                                    <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">Today’s Heroes</span>
                                    <div className="symbol-group symbol-hover flex-nowrap">
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                            <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                            <img alt="Pic" src="/assets/media/avatars/300-11.jpg" />
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                            <img alt="Pic" src="/assets/media/avatars/300-2.jpg" />
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                            <span className="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                            <img alt="Pic" src="/assets/media/avatars/300-12.jpg" />
                                        </div>
                                        <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                            <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end::Col*/}
                        
                        {/*begin::Col*/}
                        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-5">
                            {/*begin::Card widget 17*/}
                            <div className="card card-flush mb-5">
                                <div className="card-header pt-5">
                                    <div className="card-title d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
                                            <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                                        </div>
                                        <span className="text-gray-400 pt-1 fw-semibold fs-6">Projects Earnings in April</span>
                                    </div>
                                </div>
                                <div className="card-body pt-1 pb-2 d-flex flex-wrap align-items-center">
                                    <div className="d-flex flex-center me-5 pt-2">
                                        <div id="kt_card_widget_17_chart" style={{ minWidth: 70, minHeight: 70 }} data-kt-size={70} data-kt-line={11} />
                                    </div>
                                    <div className="d-flex flex-column content-justify-center flex-row-fluid">
                                        <div className="d-flex fw-semibold align-items-center">
                                            <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                                            <div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
                                            <div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
                                        </div>
                                        <div className="d-flex fw-semibold align-items-center my-3">
                                            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                                            <div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>
                                            <div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-flush">
                                <div className="card-header pt-5">
                                    <h3 className="card-title text-gray-800 fw-bold">External Links</h3>
                                </div>
                                <div className="card-body pt-5">
                                    <div className="d-flex flex-stack">
                                        <a href="#" className="text-primary fw-semibold fs-6 me-2">Avg. Client Rating</a>
                                        <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="separator separator-dashed my-3" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6">
                            <div className="card card-flush h-xl-90">
                                <div className="card-body py-6">
                                    <div className="row gx-9">
                                        <div className="col-sm-6">
                                            <div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-300px min-h-sm-90" style={{ backgroundSize: '100% 100%', backgroundImage: 'url("/assets/media/stock/600x600/img-65.jpg")' }} />
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex flex-column">
                                                <div className="mb-3">
                                                    <div className="d-flex flex-stack mb-6">
                                                        <div className="flex-shrink-0 me-5">
                                                            <span className="text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1">Featured</span>
                                                            <span className="text-gray-800 fs-1 fw-bold">9 Degree</span>
                                                        </div>
                                                        <span className="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">In Process</span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                                                        <div className="d-flex align-items-center me-5 me-xl-13">
                                                            <div className="symbol symbol-30px symbol-circle me-3">
                                                                <img src="/assets/media/avatars/300-3.jpg" className alt="zeus" />
                                                            </div>
                                                            <div className="m-0">
                                                                <span className="fw-semibold text-gray-400 d-block fs-8">Manager</span>
                                                                <a href="pages/user-profile/overview.html" className="fw-bold text-gray-800 text-hover-primary fs-7">Robert Fox</a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-30px symbol-circle me-3">
                                                                <span className="symbol-label bg-success">
                                                                    <span className="svg-icon svg-icon-5 svg-icon-white">
                                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                                                            <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="m-0">
                                                                <span className="fw-semibold text-gray-400 d-block fs-8">Budget</span>
                                                                <span className="fw-bold text-gray-800 fs-7">$64.800</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-1">
                                                    <span className="fw-semibold text-gray-600 fs-6 mb-8 d-block">Flat cartoony illustrations with vivid unblended colors and asymmetrical beautiful purple hair lady</span>
                                                    <div className="d-flex">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                                                            <span className="fs-6 text-gray-700 fw-bold">Feb 6, 2021</span>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                                                            <span className="fs-6 text-gray-700 fw-bold">$<span className="ms-n1" data-kt-countup="true" data-kt-countup-value="284,900.00">0</span></span>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-stack mt-auto bd-highlight">
                                                    <div className="symbol-group symbol-hover flex-nowrap">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                            <img alt="Pic" src="/assets/media/avatars/300-2.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                                            <img alt="Pic" src="/assets/media/avatars/300-3.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                        </div>
                                                    </div>
                                                    <a href="apps/projects/project.html" className="text-primary opacity-75-hover fs-6 fw-semibold">View Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*end::Row*/}


                    <div className="row g-5 g-xl-10">
                        {/*begin::Col*/}
                        <div className="col-xl-4 mb-xl-10">
                            {/*begin::Lists Widget 19*/}
                            <div className="card card-flush h-xl-100">
                                {/*begin::Heading*/}
                                <div className="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px bg-danger" style={{ backgroundImage: 'url("/assets/media/svg/shapes/wave-bg-red.svg' }}>
                                    {/*begin::Title*/}
                                    <h3 className="card-title align-items-start flex-column text-white pt-15">
                                        <span className="fw-bold fs-2x mb-3">Hello, Tyler</span>
                                        <div className="fs-4 text-white">
                                            <span className="opacity-75 me-2">You have</span>
                                            <span className="position-relative d-inline-block">
                                                <a href="../pages/user-profile/projects.html" className="link-white opacity-75-hover fw-bold d-block mb-1 me-2"> 4 tasks </a>
                                                {/*begin::Separator*/}
                                                <span className="position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100" />
                                                {/*end::Separator*/}
                                            </span>
                                            <span className="opacity-75">to comlete</span>
                                        </div>
                                    </h3>
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Body*/}
                                <div className="card-body mt-n20">
                                    {/*begin::Stats*/}
                                    <div className="mt-n20 position-relative">
                                        {/*begin::Row*/}
                                        <div className="row g-3 g-lg-6">
                                            {/*begin::Col*/}
                                            <div className="col-6">
                                                {/*begin::Items*/}
                                                <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-30px me-5 mb-8">
                                                        <span className="symbol-label">
                                                            {/*begin::Svg Icon | path: icons/duotune/medicine/med005.svg*/}
                                                            <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M17.9061 13H11.2061C11.2061 12.4 10.8061 12 10.2061 12C9.60605 12 9.20605 12.4 9.20605 13H6.50606L9.20605 8.40002V4C8.60605 4 8.20605 3.6 8.20605 3C8.20605 2.4 8.60605 2 9.20605 2H15.2061C15.8061 2 16.2061 2.4 16.2061 3C16.2061 3.6 15.8061 4 15.2061 4V8.40002L17.9061 13ZM13.2061 9C12.6061 9 12.2061 9.4 12.2061 10C12.2061 10.6 12.6061 11 13.2061 11C13.8061 11 14.2061 10.6 14.2061 10C14.2061 9.4 13.8061 9 13.2061 9Z" fill="currentColor" />
                                                                    <path d="M18.9061 22H5.40605C3.60605 22 2.40606 20 3.30606 18.4L6.40605 13H9.10605C9.10605 13.6 9.50605 14 10.106 14C10.706 14 11.106 13.6 11.106 13H17.8061L20.9061 18.4C21.9061 20 20.8061 22 18.9061 22ZM14.2061 15C13.1061 15 12.2061 15.9 12.2061 17C12.2061 18.1 13.1061 19 14.2061 19C15.3061 19 16.2061 18.1 16.2061 17C16.2061 15.9 15.3061 15 14.2061 15Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Stats*/}
                                                    <div className="m-0">
                                                        {/*begin::Number*/}
                                                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                                                        {/*end::Number*/}
                                                        {/*begin::Desc*/}
                                                        <span className="text-gray-500 fw-semibold fs-6">Courses</span>
                                                        {/*end::Desc*/}
                                                    </div>
                                                    {/*end::Stats*/}
                                                </div>
                                                {/*end::Items*/}
                                            </div>
                                            {/*end::Col*/}
                                            {/*begin::Col*/}
                                            <div className="col-6">
                                                {/*begin::Items*/}
                                                <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-30px me-5 mb-8">
                                                        <span className="symbol-label">
                                                            {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                                                            <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Stats*/}
                                                    <div className="m-0">
                                                        {/*begin::Number*/}
                                                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">6</span>
                                                        {/*end::Number*/}
                                                        {/*begin::Desc*/}
                                                        <span className="text-gray-500 fw-semibold fs-6">Certificates</span>
                                                        {/*end::Desc*/}
                                                    </div>
                                                    {/*end::Stats*/}
                                                </div>
                                                {/*end::Items*/}
                                            </div>
                                            {/*end::Col*/}
                                            {/*begin::Col*/}
                                            <div className="col-6">
                                                {/*begin::Items*/}
                                                <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-30px me-5 mb-8">
                                                        <span className="symbol-label">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen020.svg*/}
                                                            <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Stats*/}
                                                    <div className="m-0">
                                                        {/*begin::Number*/}
                                                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">4,7</span>
                                                        {/*end::Number*/}
                                                        {/*begin::Desc*/}
                                                        <span className="text-gray-500 fw-semibold fs-6">Avg. Score</span>
                                                        {/*end::Desc*/}
                                                    </div>
                                                    {/*end::Stats*/}
                                                </div>
                                                {/*end::Items*/}
                                            </div>
                                            {/*end::Col*/}
                                            {/*begin::Col*/}
                                            <div className="col-6">
                                                {/*begin::Items*/}
                                                <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-30px me-5 mb-8">
                                                        <span className="symbol-label">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                                            <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="currentColor" />
                                                                    <path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Stats*/}
                                                    <div className="m-0">
                                                        {/*begin::Number*/}
                                                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">822</span>
                                                        {/*end::Number*/}
                                                        {/*begin::Desc*/}
                                                        <span className="text-gray-500 fw-semibold fs-6">Hours Learned</span>
                                                        {/*end::Desc*/}
                                                    </div>
                                                    {/*end::Stats*/}
                                                </div>
                                                {/*end::Items*/}
                                            </div>
                                            {/*end::Col*/}
                                        </div>
                                        {/*end::Row*/}
                                    </div>
                                    {/*end::Stats*/}
                                </div>
                                {/*end::Body*/}
                            </div>
                            {/*end::Lists Widget 19*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-xl-8 mb-5 mb-xl-10">
                            {/*begin::Row*/}
                            <div className="row g-5 g-xl-10">
                                {/*begin::Col*/}
                                <div className="col-xl-6 mb-xl-10">
                                    {/*begin::Slider Widget 1*/}
                                    <div id="kt_sliders_widget_1_slider" className="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100" data-bs-ride="carousel" data-bs-interval={5000}>
                                        {/*begin::Header*/}
                                        <div className="card-header pt-5">
                                            {/*begin::Title*/}
                                            <h4 className="card-title d-flex align-items-start flex-column">
                                                <span className="card-label fw-bold text-gray-800">Today’s Course</span>
                                                <span className="text-gray-400 mt-1 fw-bold fs-7">4 lessons, 3 hours 45 minutes</span>
                                            </h4>
                                            {/*end::Title*/}
                                            {/*begin::Toolbar*/}
                                            <div className="card-toolbar">
                                                {/*begin::Carousel Indicators*/}
                                                <ol className="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary">
                                                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to={0} className="active ms-1" />
                                                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to={1} className="ms-1" />
                                                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to={2} className="ms-1" />
                                                </ol>
                                                {/*end::Carousel Indicators*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body pt-6">
                                            {/*begin::Carousel*/}
                                            <div className="carousel-inner mt-n5">
                                                {/*begin::Item*/}
                                                <div className="carousel-item active show">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Chart*/}
                                                        <div className="w-80px flex-shrink-0 me-2">
                                                            <div className="min-h-auto ms-n3" id="kt_slider_widget_1_chart_1" style={{ height: 100 }} />
                                                        </div>
                                                        {/*end::Chart*/}
                                                        {/*begin::Info*/}
                                                        <div className="m-0">
                                                            {/*begin::Subtitle*/}
                                                            <h4 className="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
                                                            {/*end::Subtitle*/}
                                                            {/*begin::Items*/}
                                                            <div className="d-flex d-grid gap-5">
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}3 Topics</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}1 Speakers</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}50 Min</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}72 students</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Items*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Action*/}
                                                    <div className="mb-1">
                                                        <a href="#" className="btn btn-sm btn-light me-2">Skip This</a>
                                                        <a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Continue</a>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="carousel-item">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Chart*/}
                                                        <div className="w-80px flex-shrink-0 me-2">
                                                            <div className="min-h-auto ms-n3" id="kt_slider_widget_1_chart_2" style={{ height: 100 }} />
                                                        </div>
                                                        {/*end::Chart*/}
                                                        {/*begin::Info*/}
                                                        <div className="m-0">
                                                            {/*begin::Subtitle*/}
                                                            <h4 className="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
                                                            {/*end::Subtitle*/}
                                                            {/*begin::Items*/}
                                                            <div className="d-flex d-grid gap-5">
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}3 Topics</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}1 Speakers</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}50 Min</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}72 students</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Items*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Action*/}
                                                    <div className="mb-1">
                                                        <a href="#" className="btn btn-sm btn-light me-2">Skip This</a>
                                                        <a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Continue</a>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="carousel-item">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Chart*/}
                                                        <div className="w-80px flex-shrink-0 me-2">
                                                            <div className="min-h-auto ms-n3" id="kt_slider_widget_1_chart_3" style={{ height: 100 }} />
                                                        </div>
                                                        {/*end::Chart*/}
                                                        {/*begin::Info*/}
                                                        <div className="m-0">
                                                            {/*begin::Subtitle*/}
                                                            <h4 className="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
                                                            {/*end::Subtitle*/}
                                                            {/*begin::Items*/}
                                                            <div className="d-flex d-grid gap-5">
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}3 Topics</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}1 Speakers</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}50 Min</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}72 students</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Items*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Action*/}
                                                    <div className="mb-1">
                                                        <a href="#" className="btn btn-sm btn-light me-2">Skip This</a>
                                                        <a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Continue</a>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Item*/}
                                            </div>
                                            {/*end::Carousel*/}
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Slider Widget 1*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-xl-6 mb-5 mb-xl-10">
                                    {/*begin::Slider Widget 2*/}
                                    <div id="kt_sliders_widget_2_slider" className="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100" data-bs-ride="carousel" data-bs-interval={5500}>
                                        {/*begin::Header*/}
                                        <div className="card-header pt-5">
                                            {/*begin::Title*/}
                                            <h4 className="card-title d-flex align-items-start flex-column">
                                                <span className="card-label fw-bold text-gray-800">Today’s Events</span>
                                                <span className="text-gray-400 mt-1 fw-bold fs-7">24 events on all activities</span>
                                            </h4>
                                            {/*end::Title*/}
                                            {/*begin::Toolbar*/}
                                            <div className="card-toolbar">
                                                {/*begin::Carousel Indicators*/}
                                                <ol className="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-success">
                                                    <li data-bs-target="#kt_sliders_widget_2_slider" data-bs-slide-to={0} className="active ms-1" />
                                                    <li data-bs-target="#kt_sliders_widget_2_slider" data-bs-slide-to={1} className="ms-1" />
                                                    <li data-bs-target="#kt_sliders_widget_2_slider" data-bs-slide-to={2} className="ms-1" />
                                                </ol>
                                                {/*end::Carousel Indicators*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body pt-6">
                                            {/*begin::Carousel*/}
                                            <div className="carousel-inner">
                                                {/*begin::Item*/}
                                                <div className="carousel-item active show">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex align-items-center mb-9">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-70px symbol-circle me-5">
                                                            <span className="symbol-label bg-light-success">
                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs025.svg*/}
                                                                <span className="svg-icon svg-icon-3x svg-icon-success">
                                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Info*/}
                                                        <div className="m-0">
                                                            {/*begin::Subtitle*/}
                                                            <h4 className="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
                                                            {/*end::Subtitle*/}
                                                            {/*begin::Items*/}
                                                            <div className="d-flex d-grid gap-5">
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}5 Topics</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}1 Speakers</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}60 Min</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}137 students</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Items*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Action*/}
                                                    <div className="mb-1">
                                                        <a href="#" className="btn btn-sm btn-light me-2">Details</a>
                                                        <a href="#" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">Join Event</a>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="carousel-item">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex align-items-center mb-9">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-70px symbol-circle me-5">
                                                            <span className="symbol-label bg-light-danger">
                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs026.svg*/}
                                                                <span className="svg-icon svg-icon-3x svg-icon-danger">
                                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="currentColor" />
                                                                        <path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Info*/}
                                                        <div className="m-0">
                                                            {/*begin::Subtitle*/}
                                                            <h4 className="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
                                                            {/*end::Subtitle*/}
                                                            {/*begin::Items*/}
                                                            <div className="d-flex d-grid gap-5">
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}12 Topics</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}1 Speakers</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}50 Min</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}72 students</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Items*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Action*/}
                                                    <div className="mb-1">
                                                        <a href="#" className="btn btn-sm btn-light me-2">Details</a>
                                                        <a href="#" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">Join Event</a>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="carousel-item">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex align-items-center mb-9">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-70px symbol-circle me-5">
                                                            <span className="symbol-label bg-light-primary">
                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs038.svg*/}
                                                                <span className="svg-icon svg-icon-3x svg-icon-primary">
                                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.0444 17.9444V12.1444L17.0444 15.0444C18.6444 15.9444 19.1445 18.0444 18.2445 19.6444C17.3445 21.2444 15.2445 21.7444 13.6445 20.8444C12.6445 20.2444 12.0444 19.1444 12.0444 17.9444ZM7.04445 15.0444L12.0444 12.1444L7.04445 9.24445C5.44445 8.34445 3.44444 8.84445 2.44444 10.4444C1.54444 12.0444 2.04445 14.0444 3.64445 15.0444C4.74445 15.6444 6.04445 15.6444 7.04445 15.0444ZM12.0444 6.34444V12.1444L17.0444 9.24445C18.6444 8.34445 19.1445 6.24444 18.2445 4.64444C17.3445 3.04444 15.2445 2.54445 13.6445 3.44445C12.6445 4.04445 12.0444 5.14444 12.0444 6.34444Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M7.04443 9.24445C6.04443 8.64445 5.34442 7.54444 5.34442 6.34444C5.34442 4.54444 6.84444 3.04443 8.64444 3.04443C10.4444 3.04443 11.9444 4.54444 11.9444 6.34444V12.1444L7.04443 9.24445ZM17.0444 15.0444C18.0444 15.6444 19.3444 15.6444 20.3444 15.0444C21.9444 14.1444 22.4444 12.0444 21.5444 10.4444C20.6444 8.84444 18.5444 8.34445 16.9444 9.24445L11.9444 12.1444L17.0444 15.0444ZM7.04443 15.0444C6.04443 15.6444 5.34442 16.7444 5.34442 17.9444C5.34442 19.7444 6.84444 21.2444 8.64444 21.2444C10.4444 21.2444 11.9444 19.7444 11.9444 17.9444V12.1444L7.04443 15.0444Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Info*/}
                                                        <div className="m-0">
                                                            {/*begin::Subtitle*/}
                                                            <h4 className="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
                                                            {/*end::Subtitle*/}
                                                            {/*begin::Items*/}
                                                            <div className="d-flex d-grid gap-5">
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}3 Topics</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}1 Speakers</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="d-flex flex-column flex-shrink-0">
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}50 Min</span>
                                                                    {/*end::Section*/}
                                                                    {/*begin::Section*/}
                                                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen057.svg*/}
                                                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}72 students</span>
                                                                    {/*end::Section*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Items*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Action*/}
                                                    <div className="mb-1">
                                                        <a href="#" className="btn btn-sm btn-light me-2">Details</a>
                                                        <a href="#" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">Join Event</a>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Item*/}
                                            </div>
                                            {/*end::Carousel*/}
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Slider Widget 2*/}
                                </div>
                                {/*end::Col*/}
                            </div>
                            {/*end::Row*/}

                            <div className="card card-flush">
                                <div className="card-header pt-5">
                                    <h3 className="card-title text-gray-800 fw-bold">External Links</h3>
                                </div>
                                <div className="card-body pt-5">
                                    <div className="d-flex flex-stack">
                                        <a href="#" className="text-primary fw-semibold fs-6 me-2">Avg. Client Rating</a>
                                        <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="separator separator-dashed my-3" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                        <div className="col-xl-12">
                            <div className="card card-flush overflow-hidden h-lg-100">
                                <div className="card-header pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold text-dark">Performance</span>
                                        <span className="text-gray-400 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" className="btn btn-sm btn-light d-flex align-items-center px-4">
                                            <div className="text-gray-600 fw-bold">Loading date range...</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body d-flex align-items-end p-0">
                                    <div id="kt_charts_widget_36" className="min-h-auto w-100 ps-4 pe-6" style={{ height: 300 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                        <div className="col-xl-12">
                            {/*begin::Tables widget 14*/}
                            <div className="card card-flush h-md-100">
                                {/*begin::Header*/}
                                <div className="card-header pt-7">
                                    {/*begin::Title*/}
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold text-gray-800">Projects Stats</span>
                                        <span className="text-gray-400 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Toolbar*/}
                                    <div className="card-toolbar">
                                        <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">History</a>
                                    </div>
                                    {/*end::Toolbar*/}
                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body pt-6">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                                    <th className="p-0 pb-3 min-w-175px text-start">ITEM</th>
                                                    <th className="p-0 pb-3 min-w-100px text-end">BUDGET</th>
                                                    <th className="p-0 pb-3 min-w-100px text-end">PROGRESS</th>
                                                    <th className="p-0 pb-3 min-w-175px text-end pe-12">STATUS</th>
                                                    <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                                                    <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-3">
                                                                <img src="/assets/media/stock/600x600/img-49.jpg" className alt="zeus" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Mivy App</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">Jane Cooper</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-600 fw-bold fs-6">$32,400</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light-success fs-base">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}9.2%</span>
                                                        {/*end::Label*/}
                                                    </td>
                                                    <td className="text-end pe-12">
                                                        <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <div id="kt_table_widget_14_chart_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-3">
                                                                <img src="/assets/media/stock/600x600/img-40.jpg" className alt="zeus" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Avionica</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">Esther Howard</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-600 fw-bold fs-6">$256,910</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light-danger fs-base">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                                                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}0.4%</span>
                                                        {/*end::Label*/}
                                                    </td>
                                                    <td className="text-end pe-12">
                                                        <span className="badge py-3 px-4 fs-7 badge-light-warning">On Hold</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <div id="kt_table_widget_14_chart_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-3">
                                                                <img src="/assets/media/stock/600x600/img-39.jpg" className alt="zeus" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Charto CRM</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">Jenny Wilson</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-600 fw-bold fs-6">$8,220</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light-success fs-base">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}9.2%</span>
                                                        {/*end::Label*/}
                                                    </td>
                                                    <td className="text-end pe-12">
                                                        <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <div id="kt_table_widget_14_chart_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-3">
                                                                <img src="/assets/media/stock/600x600/img-47.jpg" className alt="zeus" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Tower Hill</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">Cody Fisher</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-600 fw-bold fs-6">$74,000</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light-success fs-base">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}9.2%</span>
                                                        {/*end::Label*/}
                                                    </td>
                                                    <td className="text-end pe-12">
                                                        <span className="badge py-3 px-4 fs-7 badge-light-success">Complated</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <div id="kt_table_widget_14_chart_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-3">
                                                                <img src="/assets/media/stock/600x600/img-48.jpg" className alt="zeus" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">9 Degree</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">Savannah Nguyen</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-600 fw-bold fs-6">$183,300</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light-danger fs-base">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                                                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}0.4%</span>
                                                        {/*end::Label*/}
                                                    </td>
                                                    <td className="text-end pe-12">
                                                        <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <div id="kt_table_widget_14_chart_5" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                                            <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                    </div>
                                    {/*end::Table*/}
                                </div>
                                {/*end: Card Body*/}
                            </div>
                            {/*end::Tables widget 14*/}
                        </div>
                        {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                </div>
            </div>
        </div>


    )
}

export default Dashboard
