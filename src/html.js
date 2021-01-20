import React from 'react'
import PropTypes from 'prop-types'
import LoaderGIF from './images/logo-animated.gif'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: '#181a22',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          <img
            src={LoaderGIF}
            alt="loading spinner"
            width="150"
            height="150"
            style={{ filter: 'drop-shadow(0 0 0.75rem #f8f8f8)' }}
          />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
