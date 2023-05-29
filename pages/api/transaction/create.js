import Midtrans from "midtrans-client";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const snap = new Midtrans.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVER_KEY,
            clientKey: process.env.MIDTRANS_CLIENT_KEY
        });

        const parameter = req.body;

        const transaction = await snap.createTransaction(parameter)
            .then((transaction) => {
                const transactionToken = transaction.token;
                res.status(200).json({ token: transactionToken, transaction: transaction })
            })
            .catch((e) => {
                res.status(500).json({ message: "Error", e: e })
            })
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}