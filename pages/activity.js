import { google } from 'googleapis'

export default function Home({ data }) {
    console.log(data)
    return (<>
        <div className="flex flex-wrap">
            {data.data.map((val, i) => {
                return (
                    <div key={i} className="card w-96 m-1 bg-red-500 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{val.kegiatan}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end" >
                                <button className="btn" > Buy Now</button >
                            </div >
                        </div >
                    </div >
                )
            })}
        </div>
    </>)
}
export async function getServerSideProps() {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })

    const sheet = google.sheets({ version: "v4", auth })
    let query = await sheet.spreadsheets.values.get({
        spreadsheetId: "187OEiTFX1xk2s59k500BiKaW3v_d5J1OKn2_sGP5UWY",
        range: "Wacana!A1:F"
    })
    console.log(queryDataFormatter(query.data.values))
    return {
        props: {
            data: queryDataFormatter(query.data.values)
        }
    }
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