## Roulette - Money Gang Edition!

0. create homepage 
  0.1 create play button
  0.2 create balance button
  0.3 display balance amount 
1. create gameplay page
  1.1 randm numebr generator- spin circle
  1.2 spin button to trigger random gererator
  1.3 create number tables 1-12 numbers
  1.4 show result - win or loose
  1.5 show balance $ amount - need to change after every result
  1.6 show past result - reading .json file for past results
2. create data.json file
  2.1 balance amount array
  2.2 past result - array of objects

  --- Variables ---
  
  spinData = [
    {
      "resultNumber": 9,
      "resultMoney": 90,
    },
    {
      "resultNumber": 5,
      "resultMoney": -90,
    },
  ]
  
take all resultMoney numbers in an array
resultMoneyHistory = [90, -90]
resultMoneyTotal = reduce the resultMoneyHistory
initialBalance = 500
finalBalance = initialBalance + resultMoneyTotal