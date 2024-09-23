# Task Description

Need to build a React application using TS (add types\interfaces where needed), Redux (without Redux Toolkit, with simple actions\reducers) and RxJS for handling side effects. The application will consist of two main features: a weather checker by city name and a real-time market data display. You can use\change existed files\components if needed.

## 1. Weather Checker by City Name

### Requirements:

- **Form Input**: Add a form where the user can enter the name of a city.
- **Redux & Epics**: Implement the logic to handle inputs, API requests, data retrieval, and error handling using Redux and RxJS Epics.
- **Suggestion Buttons**: Add buttons with prefilled city names (e.g., New York, Warsaw, Berlin) so the user can check data either by input and submit or by clicking these buttons.
- **Display**: Show the temperature and weather description to the user.

### Resources:
- **Weather API Documentation**: [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/)

## 2. Real-Time Market Data Display

### Requirements:

- **Form Input**: Add a form where the user can enter a stock item or cryptocurrency symbol. Also, add buttons with prefilled items of your choice.
- **Desc**: At the moment, the user can only see data about one item, to see data about another item, the user must submit it using the form. Also api can give as data for short period, don't worry about this. Make sure that there is only one WS connection while the app is working
- **Redux & Epics**: Implement the logic to handle inputs, API requests, data retrieval, and error handling using Redux and RxJS Epics.
- **Grid Display**: Add a simple grid where the user can see real-time data from markets, displaying name, time, and price. The newest data should appear at the top. Previous data of another item shoudle be removed (merge new data with the previous one for the same symbol).

### Resources:
- **Market Data API Documentation**: [Finnhub Market Data API](https://finnhub.io/docs/api/open-data)
