export default function sliceArray (array, size) {
  let result = []
  let x = 0
  let len = array.length
  for (; x < Math.ceil(len / size); x++) {
    let start = x * size
    let end = start + size
    result.push(array.slice(start, end))
  }
  return result
}
