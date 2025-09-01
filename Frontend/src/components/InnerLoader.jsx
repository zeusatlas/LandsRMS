// This is for loader
export const InnerLoader = () => {
    return (
        <div className="col-12 text-center py-5">
            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}><span className="sr-only">Loading...</span></div>
            <p className="text-muted mt-2">Loading data, please wait...</p>
        </div>
    )
}
