import Link from "next/link";

export default function Pending() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 text-center">
                        <div className="card">
                            <div className="card-header text-danger">Pending</div>
                            <div className="card-body">
                                <h5 className="card-title text-dark">Order #32323</h5>
                                <p className="card-text text-dark">Total: Rp 20.000</p>
                                <Link href="/pay" legacyBehavior className="btn btn-primary">
                                    <a className="text-dark">Back to pay</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}