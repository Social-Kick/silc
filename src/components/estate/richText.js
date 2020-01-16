import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = props => {
  let text = props.text
  const options = {
    renderNode: {
      "embedded-asset-block": (text) => {
        const alt = text.data.target.fields.title['en-US']
        const url = text.data.target.fields.file['en-US'].url
        return (<img alt={alt} src={url} />)
      }
    }
  }
  return (
    documentToReactComponents(text, options)
  );
}

export default RichText;