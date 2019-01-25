import {IncomingMessage, ServerResponse} from 'http'
import {parse} from 'url'
import getScreenshot from './util/screenshot'

const buildPage = (svg: string) =>
  `<div id='target' style="background-color: red; padding: 50px;">${svg}</div>`

const getCodeFromPath = (path: string) => {
  let url = path.slice(7)
  return url
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const {pathname = '/', query = {}} = parse(req.url, true)
  // const { type = 'png', quality, fullPage } = query;
  const code = getCodeFromPath(pathname)
  const decoded = Buffer.from(code, 'base64').toString()

  console.log(decoded)

  const page = buildPage(decoded)

  const file = await getScreenshot(page, 'target')
  res.statusCode = 200
  res.setHeader('Content-Type', `image/png`)
  res.end(file)
}
