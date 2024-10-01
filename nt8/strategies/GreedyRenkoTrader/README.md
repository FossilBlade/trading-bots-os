# Greedy Renko Trader
This strategy works on Uni Renko Bars and Williams Alligator.

## Strategy
Takes a postion whenever the alligator is waking up (White Background) and MACD is outside of the BB.
THis uses a special Colore Coded Williams Alligator Indicator developed by me.

## Paramemters

- ATM Parameters
  - Take Profit Ticks: Take Profit Ticks Value
  - StopLossTicks: Stop Loss Ticks Value
  - Break Even: Check to perform break even functionality
  - BreakEvenTigger: Profit Ticks whichs triggers the breakeven.
  - BreakEvenTicksOffset: Ticks to offset fromt eh breakeven price.
- Portfolio Mgmt
  - MaxDayProfit: Max day profit after which the strategy will suspend for the session/untill restarted. This is for this strategy, not at the account level.
  - MaxDayKLoss: Max day loss after which the strategy will suspend for the session/untill restarted. This is for this strategy, not at the account level.
  - DayTradeCount:  Max trades after which the strategy will suspend for the session/untill restarted. This is for this strategy, not at the account level. 

  # Options

  1. With the default settings, the strategy work with 1 contract only.
  2. If you want to work with runner, the strategy is hard coded to make use of 2 contracts. (Further improvements will be made to make it configurable in future)
     a. When enabling the strategy, change the "Entries per direction" to 2.
     b. Check the "BreakEven" Parameter.
     c. Set BreakEvenTrigger to "TakeProfitTicks+1".
     d. Set the BreakEvenTicksOffset to 0. (or to a value to cover the commions).
     e. The strategies automatically set the runner TP to 3 times the TakeProfitTicks.

     
