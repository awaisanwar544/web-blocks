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

const newHtmlTag = (ele) => {
  const newElement = document.createElement(ele.element)
  const text = document.createTextNode(ele.defaultValue);
  newElement.appendChild(text)
  newElement.addEventListener('click', editNewBlock)
  return newElement
}