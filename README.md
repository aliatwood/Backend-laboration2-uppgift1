# CV API

Ett REST-baserat API för att hantera arbetserfarenheter, byggt med Node.js, Express och MariaDB.

## Installation

1. Klona repot
2. Kör `npm install`
3. Skapa en `.env`-fil med dina databasuppgifter
4. Starta servern med `node server.js`

## Endpoints

| Metod  | URI                          | Beskrivning                  |
|--------|------------------------------|------------------------------|
| GET    | /api/workexperience          | Hämtar alla arbetserfarenheter|
| POST   | /api/workexperience          | Skapar en ny arbetserfarenhet |
| PUT    | /api/workexperience/:id      | Uppdaterar en arbetserfarenhet|
| DELETE | /api/workexperience/:id      | Raderar en arbetserfarenhet   |

## Ett kurs-objekt returneras/skickas som JSON med följande struktur:
{"id":1,"companyName":"Sfmovie","jobTitle":"cashier","location":"Linkoping","startDate":"2015-01-04T23:00:00.000Z","endDate":"2025-02-04T23:00:00.000Z","description":"Took on customers"}
