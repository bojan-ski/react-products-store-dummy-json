const PageHeader = ({ page }) => {
    return (
        <section className="page-header my-5">
            <h2 className="fw-bold text-center">
                {page}
            </h2>
        </section>
    )
}

export default PageHeader