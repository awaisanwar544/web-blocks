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

const addNewBlock = (ele) => {
  const contentDiv = document.querySelector('#added-content')
  const newBlock = newDiv()
  const newElement = newHtmlTag(ele)
  newBlock.appendChild(newElement)
  contentDiv.appendChild(newBlock);
  newElement.click()
}

const inputEvents = (event) => {
  if (event.key === 'Enter' && reference.hasOwnProperty(event.target.value)) {
    removeSuggestionBlock()
    addNewBlock(reference[event.target.value])
  }

  if (event.key === 'Escape') {
    removeSuggestionBlock()
    event.target.value = ''
  }
}

window.onload = () => {
  const input = document.querySelector('#block')
  if (input) {
    document.querySelector('#block').addEventListener('input', displaySuggestionBlock)
    document.querySelector('#block').addEventListener('keyup', inputEvents)
  }
};