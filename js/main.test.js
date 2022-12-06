const { filterReference } = require('./main')

describe('FilterReference should filter the references and should', () => {
  it('return an empty array if no value passed', () => {
    expect(filterReference('')).toEqual([])
  })
  
  it('return an empty array if first letter is not "/"', () => {
    expect(filterReference('a')).toEqual([])
  })
  
  it('return an array with more than one elements "/"', () => {
    expect(filterReference('/').length).toBeGreaterThan(0)
  })
  
  it('return an array with only one element having the same value "/1"', () => {
    expect(filterReference('/1')[0]).toBe('/1')
  })
})
