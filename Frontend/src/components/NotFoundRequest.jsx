
export const NotFoundRequest = () => {

  return (
    <div className="col-12 text-center" style={{ padding: "20px 0" }}>
      <i className="fe-alert-circle" style={{ fontSize: "68px", color: "#999" }}></i>
      <h3 className="mt-1 text-muted">No record found</h3>
      <p className="text-muted mb-0">There is no record found for this request made under this section for now, try again later or refresh the page.</p>
    </div>
  )

}