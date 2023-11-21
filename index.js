import express from 'express'
import aboutv1 from './src/v1/about/routes.js'

console.log('Hello Mark');

const app = express();
const router = express.Router()
router.get('/', (req,res) => {
    res.send(
        {
            tite: 'Root of all paths',
            paths: [
                {title: 'About', path: 'cv/v1/about'}
            ]
        }
    )
})
app.use(router)
app.use(express.json());

app.use('/cv/v1/about', aboutv1)

export default app