// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from 'googleapis'

export default function handler(req, res) {
    const sheet = google.sheets("v4")
    sheet.spreadsheets
    res.status(200).json({ name: 'John Doe' })
}