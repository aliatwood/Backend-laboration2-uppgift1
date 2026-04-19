# CV API

Detta repository innehåller kod för ett REST API byggt med Express och MariaDB. APIet är byggt för att hantera arbetserfarenheter. Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

## Installation, databas

APIet använder en MariaDB-databas. Klona ner källkodsfilerna, kör kommando `npm install` för att installera nödvändiga npm-paket.

Databasen innehåller följande tabell:

| Tabell-namn    | Fält                                                                 |
|----------------|----------------------------------------------------------------------|
| workexperience | id (int), companyName (varchar(30)), jobTitle (varchar(25)), location (varchar(30)), startDate (date), endDate (date), description (varchar(200)) |

## Användning

Nedan finns beskrivet hur man når APIet:

| Metod  | Ändpunkt                    | Beskrivning                            |
|--------|-----------------------------|----------------------------------------|
| GET    | /api/workexperience         | Hämtar alla arbetserfarenheter         |
| GET    | /api/workexperience/:id     | Hämtar en specifik arbetserfarenhet    |
| POST   | /api/workexperience         | Skapar en ny arbetserfarenhet          |
| PUT    | /api/workexperience/:id     | Uppdaterar en befintlig arbetserfarenhet|
| DELETE | /api/workexperience/:id     | Raderar en arbetserfarenhet            |

Ett objekt returneras/skickas som JSON med följande struktur:

```json
{
    "companyName": "Sfmovie",
    "jobTitle": "cashier",
    "location": "Linkoping",
    "startDate": "2015-01-05",
    "endDate": "2025-02-05",
    "description": "Took on customers"
}
```

## Länk
En liveversion av APIet finns tillgänglig på följande URL:
https://backend-laboration2-uppgift1-production.up.railway.app/api/workexperience
