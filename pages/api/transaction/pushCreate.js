const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { payment_type, transaction_status, pdf_url, finish_url_redirect, status_code, transaction_time, gross_amount, order_id, transaction_id, fraud_status, status_message } = req.body;
        await prisma.transactions.create({
            data: {
                payment_type: payment_type,
                transaction_status: transaction_status,
                pdf_url: pdf_url,
                finish_url_redirect: finish_url_redirect,
                status_code: status_code,
                transaction_time: transaction_time,
                gross_amount: gross_amount,
                order_id: order_id,
                transaction_id: transaction_id,
                fraud_status: fraud_status,
                status_message: status_message
            }
        }).then((transaction) => {
            res.status(200).json({ message: "Success", transaction: transaction })
        }).catch((e) => {
            res.status(500).json({ message: "Error Lagi", e: e.message, })
        })
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}