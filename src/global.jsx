import React from 'react'
import { css, Global } from '@emotion/core'

const global = css`
  html,
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
`

export default () => <Global styles={global} />
