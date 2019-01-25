import {IncomingMessage, ServerResponse} from 'http'
import {parse} from 'url'
import getScreenshot from './util/screenshot'

const buildPage = (svg: string): string => `
<head>
  <style>
    .container {
      background-color: white;
      padding: 50px;
      display: inline-block;
    }
    .container svg {
      width: 1000px;
    }
  </style>
</head>
<body>
  <div id='target' class="mermaid container">
    ${svg}
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.0.0/mermaid.min.js"></script>
  <script>mermaid.initialize({startOnLoad:true});</script>
</body>
`

const getCodeFromPath = (path: string) => {
  let url = path.slice(7)
  return url
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const {pathname = '/', query = {}} = parse(req.url, true)
  // const { type = 'png', quality, fullPage } = query;
  const code = getCodeFromPath(pathname)
  const decoded = Buffer.from(code, 'base64').toString()

  // const svg = await render(decoded)

  const page = buildPage(decoded)

  const file = await getScreenshot(page, 'target')
  res.statusCode = 200
  res.setHeader('Content-Type', `image/png`)
  res.end(file)
}
