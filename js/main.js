const reference = {
  '/1': {
    element: 'h1',
    defaultValue: 'Heading 1'
  },
  '/+1': {
    element: 'p',
    defaultValue: `Add normal text`
  },
}

const newDiv = () => {
  const newBlock = document.createElement('div')
  newBlock.classList = 'text-div'
  return newBlock
}