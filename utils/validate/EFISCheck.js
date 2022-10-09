

export default function EFISCheck(efis) {
  console.log(Number.isInteger(efis))
    if(efis.length!=4 || isNaN(efis)){
      return false
    }
    return true
  }