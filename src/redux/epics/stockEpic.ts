import { ofType } from 'redux-observable';
import { catchError, of } from "rxjs";
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { createWebSocketConnection } from "../../services/websocket.ts";
import { ITradeTdo } from "../../types/trade.ts";
import { StockAction, stocksWebSocketError, stocksWebSocketPriceUpdate } from "../actions/stockActions.ts";

const wsConnection = createWebSocketConnection();

export const stockEpic = (action$: any, $state: any) =>
  action$.pipe(
    ofType(StockAction.START_WEBSOCKET),
    mergeMap((action: any) => {
      const prevSymbol = $state.value.stocks.prevSymbol;
      const symbol = action.payload;

      if (prevSymbol) {
        wsConnection.unsubscribe(prevSymbol)
      }
      wsConnection.subscribe(symbol);

      return wsConnection.socket.pipe(
        map((message) => stocksWebSocketPriceUpdate(message as ITradeTdo)),
        takeUntil(action$.pipe(ofType(StockAction.STOP_WEBSOCKET))),
        catchError((error) =>
          of(stocksWebSocketError(error.message || 'WebSocket Error'))
        )
      );
    })
  );
