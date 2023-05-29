import { useEffect, useState } from 'react';

// make midtrans client
const midtransClient = require('midtrans-client');

// Create Snap API instance

export default function Index() {
    // make isLoading useState
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", "SB-Mid-client-SXm0UNqEZXVLY8Er");
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePay = async () => {
        setIsLoading(true);

        const random_order_id = (length, format) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                if (format[i] === '-') {
                    result += '-';
                } else {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
            }
            return result;
        }

        const response = await fetch('/api/transaction/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                transaction_details: {
                    order_id: random_order_id(10, 'xxxx-xxxx-xxxx'),
                    gross_amount: 20000
                },
                credit_card: {
                    secure: true
                }
            })
        });

        const { token, transaction } = await response.json();
        console.log("Ini Hasil dari Response JSON : ", transaction)

        setIsLoading(false);
        if (token) {
            window.snap.pay(token, {
                onSuccess: async (result) => {
                    const responsePushCreate = await fetch('/api/transaction/pushCreate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            payment_type: result.payment_type,
                            transaction_status: result.transaction_status,
                            pdf_url: result.pdf_url,
                            finish_url_redirect: result.finish_url_redirect,
                            status_code: result.status_code,
                            transaction_time: result.transaction_time,
                            gross_amount: result.gross_amount,
                            order_id: result.order_id,
                            transaction_id: result.transaction_id,
                            fraud_status: result.fraud_status,
                            status_message: result.status_message
                        })
                    });

                    console.log(await responsePushCreate.json())
                    window.location.replace('/pay/success');

                },
                onPending: (result) => {
                    window.location.replace('/pay/pending');
                },
                onError: (result) => {
                    window.location.replace('/pay/error');
                },
            });
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 text-center">
                        <div className="card">
                            <div className="card-header text-dark">Order</div>
                            <div className="card-body">
                                <h5 className="card-title text-dark">Order #32323</h5>
                                <p className="card-text text-dark">Total: Rp 20.000</p>
                                {isLoading ? (
                                    <div className="spinner-border text-primary" role="status">
                                    </div>
                                ) : <button className="btn btn-primary" onClick={handlePay} disabled={isLoading}>
                                    Pay
                                </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
