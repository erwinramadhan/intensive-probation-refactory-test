const datas = require('./data.json')

const findItemsInTheMeetingRoom = () => {
  const result = datas.filter((data) => {
    return data.placement.name === 'Meeting Room'
  })
  return result
}

const findAllElectronicDevices = () => {
  const result = datas.filter((data) => {
    return data.type === 'electronic'
  })
  return result
}

const findAllTheFurniture = () => {
  const result = datas.filter((data) => {
    return data.type === 'furniture'
  })
  return result
}

const findAllItemsPurchasedOn16Januari2020 = () => {
  const result = datas.filter((data) => {
    const pureDate = data.purchased_at
    const convertedDate = new Date(pureDate*1000)
    return convertedDate.toDateString().includes('Jan 16 2020')
  })
  return result
}

const findAllItemsWithBrownColor = () => {
  const result = datas.filter((data) => {
    return data.tags === 'brown'
  })
  return result
}

console.log(findItemsInTheMeetingRoom());
console.log(findAllElectronicDevices());
console.log(findAllTheFurniture());
console.log(findAllItemsPurchasedOn16Januari2020())
console.log(findAllItemsWithBrownColor());