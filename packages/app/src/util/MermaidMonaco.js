const Red = 'FF5370'
const Pink = 'F07178'
const Orange = 'F78C6C'
const Yellow = 'FFCB6B'
const Green = 'C3E88D'
const PaleBlue = 'B2CCD6'
const Cyan = '89DDFF'
const Blue = '82AAFF'
const Purple = 'C792EA'
const Violet = 'BB80B3'
const Brown = 'AB7967'
const Gray = '666666'
const White = 'EEEEEE'

const register = monaco => {
  monaco.languages.register({id: 'mermaid'})

  monaco.languages.setMonarchTokensProvider('mermaid', {
    defaultToken: 'invalid',
    keywords: ['graph', 'subgraph', 'end', 'click', 'callback', 'style'],
    configKeywords: ['TB', 'BT', 'RL', 'LR', 'TD'],
    fullConnectors: ['-->', '---'],
    partialConnectors: ['--', '|', '---|'],

    tokenizer: {
      root: [
        [
          /((?:\[|\(|\(\(|>|{)")([^"]*)("(?:]|\)|\)\)|}))/,
          ['bracket', 'label', 'bracket']
        ],
        [
          /(\[|\(|\(\(|>|{)([^)\]}]*)(]|\)|\)\)|})/,
          ['bracket', 'label', 'bracket']
        ],
        [
          /(--|---\||-->\||-\.|==)([a-zA-Z0-9 ]*)(---|\||-->|\.->|==>)/,
          ['connector', 'label', 'connector']
        ],
        [/(-->|---|-\.->|==>)/, 'connector'],
        [
          /[a-zA-Z0-9_$][\w$]*/,
          {
            cases: {
              '@keywords': 'keyword',
              '@configKeywords': 'configKeyword',
              '@default': 'identifier'
            }
          }
        ],
        [/;/, 'line-terminator']
      ]
    }
  })

  monaco.editor.defineTheme('mermaid-theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {token: 'keyword', foreground: Yellow},
      {token: 'configKeyword', foreground: Purple},
      {token: 'connector', foreground: Blue},
      {token: 'identifier', foreground: White},
      {token: 'line-terminator', foreground: Gray},
      {token: 'bracket', foreground: Orange},
      {token: 'label', foreground: Green}
    ]
  })
}

export default register
