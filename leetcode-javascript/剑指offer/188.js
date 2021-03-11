function maxProfit(k, prices) {
  if (k === 1) return maxProfit2(prices)
    
}

function maxProfit2(prices) {
  let cost = Number.MAX_SAFE_INTEGER
  let profit = 0
  for (let price of prices) {
    cost = Math.min(price, cost)
    profit = Math.max(profit, price - cost)
  }
  return profit
}