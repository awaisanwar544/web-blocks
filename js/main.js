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

const removeSuggestionBlock = () => {
  const suggestionsBlock = document.querySelector('#suggestions-block')
  if (suggestionsBlock) {
    suggestionsBlock.remove()
  }
}

const displaySuggestionBlock = (event) => {
  const suggestionsSection = document.querySelector('#suggestions-section')
  let suggestionsBlock = document.querySelector('#suggestions-block')

    if (suggestionsBlock) {
      suggestionsBlock.remove()
    }

    const options = Object.keys(reference).
                    filter((key) => key.includes(event.target.value))
    if (options.length > 0 && event.target.value !== '') {
      const suggestions = `
                            <div id="suggestions-block">
                              <div>
                                <h3 class="text-bold">Add blocks</h3>
                                <p class="grey-color sub-text" >Keep typing to filter, or escape to exit</p>
                              </div>
                              <div class="flex-row mt-05 mb-1">
                                <p class="p-0125">Filtering keyword</p>
                                <p class="counter p-0125" >${options.length}</p>
                              </div>
                            </div>
                          `
      const suggestionsList = options.map((item) => `
                        <div class="flex-row selectable">
                          <div>
                            <img src="./images/text.svg" />
                          </div>
                          <div>
                            <h3 id="${item}">${reference[item].defaultValue}</h3>
                            <p class="grey-color sub-text">Shortcut: type ${item}</p>
                          </div>
                        </div>
                      `
      )
      suggestionsSection.insertAdjacentHTML('beforeend', suggestions)
      suggestionsBlock = document.querySelector('#suggestions-block')

      suggestionsList.forEach((item) => {
        suggestionsBlock.insertAdjacentHTML('beforeend', item)
      })

      document.querySelectorAll('.selectable').forEach((item) => {
        item.addEventListener('click', (e) => {
          addNewBlock(reference[e.target.id])
          removeSuggestionBlock()
        })
      })
    }

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