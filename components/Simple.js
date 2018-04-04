import React from 'react'

export default function Simple(props) {
  return (
    React.createElement('div', {
      id: 'abc',
    }, ['Some text'])
    // <div id="abc">
    //   Some text <br />
    //   <button>{props.buttonText}</button>
    // </div>
  )
}