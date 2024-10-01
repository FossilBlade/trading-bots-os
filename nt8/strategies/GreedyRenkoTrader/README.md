# NT8 Greedy Renko Trader
This strategy works on Uni Renko Bars and Williams Alligator.

## Installation
- Download the bot zip file to your desktop
- From the NinjaTrader Control Center window, select the menu Tools > Import > NinjaScript Add-On…
- Select the downloaded file from your desktop

## Setup
- Install UniRenko for NT8: https://ninjatraderecosystem.com/user-app-share-download/unirenko-universal-renko-bartype-8/
- Tests have been performed on Renko Chart for NQ UniRenko Setting: 12/24/48

## Strategy
Takes a postion whenever the alligator is waking up (White Background) and MACD is outside of the BB.
THis uses a special Colore Coded Williams Alligator Indicator developed by me.

## Paramemters

- ATM Parameters
  - TakeProfitTicks: Take Profit Ticks Value
  - StopLossTicks: Stop Loss Ticks Value
  - BreakEven: Check to perform break even functionality
  - BreakEvenTigger: Profit Ticks whichs triggers the breakeven.
  - BreakEvenTicksOffset: Ticks to offset fromt eh breakeven price.
- Portfolio Mgmt
  - MaxDayProfit: Max day profit after which the strategy will suspend for the session/untill restarted. This is for this strategy, not at the account level.
  - MaxDayKLoss: Max day loss after which the strategy will suspend for the session/untill restarted. This is for this strategy, not at the account level.
  - DayTradeCount:  Max trades after which the strategy will suspend for the session/untill restarted. This is for this strategy, not at the account level. 

  # Options

  1. With the default settings, the strategy work with 1 contract only.
  2. RUNNER CONFIGURATION: If you want to work with runner, the strategy is hard coded to make use of 2 contracts. (Further improvements will be made to make it configurable in future)
     - When enabling the strategy, change the "Entries per direction" to 2.
     - Check the "BreakEven" Parameter.
     - Set BreakEvenTrigger to "TakeProfitTicks+1".
     - Set the BreakEvenTicksOffset to 0. (or to a value to cover the commions).
     - The strategy automatically set the runner TP to 3 times the TakeProfitTicks.

# Support Me
If you like my work or would like to develop this further please support me by buying me a coffee (donation)

<a href="https://www.buymeacoffee.com/fossilblade" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

# Disclosure 
Futures and forex trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones’ financial security or lifestyle. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results. Hypothetical performance results have many inherent limitations, some of which are described below. 

No representation is being made that any account will or is likely to achieve profits or losses similar to those shown; in fact, there are frequently sharp differences between hypothetical performance results 
and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In 
addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk of actual trading. for example, the ability to withstand 
losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets 
in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all which can adversely affect trading results.

This presentation is for educational purposes only and the opinions expressed are those of the presenteronly. All trades presented should be considered hypothetical and should not be expected to be replicated
in a live trading account.
