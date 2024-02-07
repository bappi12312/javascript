function calculateMoney(ticketSale) {
  if (ticketSale >= 0 && typeof ticketSale === 'number') {
    return ticketSale * 120 - (500 + (8 * 50))
  } else if (ticketSale < 0) {
    return 'invalid Number'
  }
}



function checkName(name) {
  if (typeof name === 'string') {
    const lastValue = name.slice(-1);
    if (lastValue === 'a' || lastValue === 'y' || lastValue === 'i' || lastValue === 'e' || lastValue === 'o' || lastValue === 'u' || lastValue === 'w') {
      return 'Good Name'
    } else if (lastValue === 'A' || lastValue === 'Y' || lastValue === 'I' || lastValue === 'E' || lastValue === 'O' || lastValue === 'U' || lastValue === 'W') {
      return 'Good Name'
    } else {
      return 'Bad Name'
    }
  } else {
    return 'invalid'
  }
}




function deleteIvalids(array) {
if(Array.isArray(array)) {
  let newArr = []
  for (const arrays of array) {
    if (typeof arrays === 'number') {
      if(arrays) {
        newArr.push(arrays)
      }
    }
  }
  return newArr;
} else {
  return 'Invalid Array'
}
}





function password(obj) {

  const name = obj.name
  const site = obj.siteName;
  const year = obj.birthYear;
  const length = Math.floor(Math.log10(year) + 1);
  if (name && site && year && length >= 4) {
    const value = `${site.charAt(0).toUpperCase() + site.slice(1)}#${name}@${year}`
    return value;
  } else {
    return 'invalid'
  }
}



function monthlySavings(arr, livingCost) {
  let totalPayment = 0;
  let savings = 0;

  if (Array.isArray(arr) && typeof livingCost === 'number') {
    for (const arrs of arr) {
      totalPayment = totalPayment + arrs
      savings = totalPayment - livingCost;
      if (arrs >= 3000) {
        let tax = (arrs * 20) / 100
        savings = totalPayment - livingCost - tax;
        if (savings > 0) {
          return savings
        } else if (savings <= 0) {
          return 'earn more'
        }
      }
    }

    if (savings > 0) {
      return savings
    } else if (savings <= 0) {
      return 'earn more'
    }

  } else {
    return 'invalid input'
  }
}


