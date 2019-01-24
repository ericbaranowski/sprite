import {IncomingMessage, ServerResponse} from 'http'
import getScreenshot from './screenshot'

const page = `
<div style="background-color: red; padding: 50px;">Hello world</div>
`

export default async (req: IncomingMessage, res: ServerResponse) => {
  const file = await getScreenshot(page)
  res.statusCode = 200
  res.setHeader('Content-Type', `image/png`)
  res.end(file)
}
