import { pool } from '../config/database.js'



async function getGifts(req, res) {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
    }catch(err) {
        res.status(409).json( { error: error.message } )
    }

    res.status(200).json(results.rows)
}

export default {
    getGifts
};