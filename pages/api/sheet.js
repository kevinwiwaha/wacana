// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from 'googleapis'

export default async function handler(req, res) {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })
    const sheet = google.sheets({ version: "v4", auth })
    let query = sheet.spreadsheets.values.get({
        spreadsheetId: "187OEiTFX1xk2s59k500BiKaW3v_d5J1OKn2_sGP5UWY",
        range: "Wacana!A1:F"
    })
    console.log(queryDataFormatter(query.data.values))
    res.status(200).json(queryDataFormatter(query.data.values))
    res.status(200).json({ msg: 20 })
}

let queryDataFormatter = (data) => {
    let header = []
    data[0].forEach(val => header.push(val.toLowerCase()))
    let response = {
        data: []
    }
    response.header = header
    data.forEach((val, i) => {
        if (i != 0) {
            let sub = {}
            val.forEach((subval, j) => {
                if (!isNaN(subval)) subval = parseInt(subval)
                sub[header[j]] = subval
            })
            response.data.push(sub)
        }
    })
    return response
}