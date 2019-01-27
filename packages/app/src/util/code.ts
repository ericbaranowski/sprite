export const encode = (code: string) =>
  encodeURIComponent(Buffer.from(code).toString('base64'))
