import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = props => {
  let text = props.text
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return (<img alt={alt} src={url} />)
      }
    }
  }
  return (
    documentToReactComponents(text, options)
  );
}

export default RichText;