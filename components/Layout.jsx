import Header from './Header.jsx'

export default function Layout({ children, title }) {
  return (
     <>
        <Header></Header>
        <header>
            <div className="container-fluid bg-cyan text-white my-4">
                <div className="row justify-content-center">
                    <div className="media my-pb-2">
                        {/* <img className="rounded-circle align-self-center" src="./images/img_sol.png" alt="Sol"/> */}
                        <img className="rounded-circle align-self-center" src="./images/clavesol.png" alt="Sol"/>
                    </div>
                </div>
                <div className="row justify-content-center justifica-texto-centro">
                    <div className="media-body mt-4 ff-cursive">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </header>

        <main>{children}</main>

    </>
  )
}