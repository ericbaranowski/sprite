import React from 'react'
import './Preview.css'
import Render from './Render'

interface Props {
  code: string
}

const Preview = ({code}: Props) => {

  return (
    <div className='preview'>
      <Render code={code} />
    </div>
  )
}

export default Preview
