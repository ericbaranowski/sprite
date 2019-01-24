import chrome from 'chrome-aws-lambda'
import * as puppeteer from 'puppeteer-core'

const getScreenshot = async (pageContent: string) => {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })

  const page = await browser.newPage()
  await page.setContent(pageContent)

  const file = await page.screenshot({type: 'png'})
  await browser.close()
  return file
}

export default getScreenshot
