export default function Navbar({ setCategory }) {
    const categories = [
        { "category": "Technology", "slug":"technology" },
        { "category": "Business", "slug": "business" },
        { "category": "Entertainment", "slug": "entertainment" },
        { "category": "General", "slug": "general" },
        { "category": "Health", "slug": "health" },
        { "category": "Science", "slug": "science" },
        { "category": "Sports", "slug": "sports" }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsFlow</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                categories.map((category, index) => (
                                    <li className="nav-item">
                                        <div onClick={() => setCategory(category.slug)} className="nav-link active" aria-current="page" href="/">{category.category}</div>
                                    </li>
                                ))
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}