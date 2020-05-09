import { NowRequest, NowResponse } from '@now/node'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { ProjectContent } from '../../../components/Api/Models'

const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'PUT') {
    res.status(405).end()
    return
  }
  if (!req.headers.authorization) {
    res.status(401).end()
    return
  } else {
    const response = await fetch(BASE_URL + '/api/authenticate', {
      headers: { authorization: req.headers.authorization },
      method: 'POST',
    })
    if (response.status !== 200) {
      res.status(401).end()
    } else {
      const connectedToDB = await connectToDB()
      if (!connectedToDB) {
        res.status(500).end('Database connection failed')
      } else if (!req.query.id) {
        res.status(400).end('Please provide Project Content ID')
        closeDBConnection()
      } else {
        let { content, alt } = req.body
        if (content && typeof content.isArray()) {
          content = content.toString()
        }
        const projectContentObj = {
          content,
          alt,
        }
        try {
          const updatedProjectContent = await ProjectContent.findByIdAndUpdate(
            req.query.id,
            projectContentObj,
            { new: true }
          )
          if (!updatedProjectContent) {
            res.status(400).end("Project Content doesn't exist")
            closeDBConnection()
          } else {
            res
              .status(200)
              .end(JSON.stringify(updatedProjectContent.toObject()))
            closeDBConnection()
          }
        } catch (err) {
          res.status(400).end("Project Content doesn't exist")
          closeDBConnection()
        }
      }
    }
  }
}
