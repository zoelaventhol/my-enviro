# MyEnviro

## About

### Summary

MyEnviro allows individuals in California to look up local environmental metrics, and get recommendations on how to protect against environmental hazards.

### Problem Statement

There is a lot of information available in California about environmental dangers (air quality, water quality, proximity to hazardous waste sites, etc.). However, this is often aimed at policy-makers, and inaccessible to individuals because it is too complex and time-consuming to navigate. So, individuals are often still unaware of local hazards and how to protect themselves. MyEnviro would make it easy for individuals to learn about local environmental hazards that might impact them or their family, and how to take steps to protect themselves.

### Inspirations

- [Environmental Working Group (EWG)](https://www.ewg.org/)’s [Tap Water Database](https://www.ewg.org/tapwater/), which lets US users look up their local water system by ZIP code. Search results display local water contaminants as well as links to guidance on home water filtration and how to contact your local political representative
- [California Office of Environmental Health Hazard Assessment (OEHHA)](https://oehha.ca.gov/)’s [CalEnviroScreen](https://oehha.ca.gov/calenviroscreen) tool, which aggregates data about many environmental and socioeconomic factors to determine areas that need the most support. This is where I got my source data. This tool is widely used by regulators and nonprofit organizations to prioritize how they distribute resources and services.

## Data Sources and Methodology

### Data sources

I got my data for all indicators from [CalEnviroscreen 4.0](https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40), an open-source tool and data set from California’s Office of Environmental Health Hazard Assessment.

Indicator descriptions and summaries are loosely adapted from [CalEnviroscreen exposure indicators](https://oehha.ca.gov/calenviroscreen/indicators).

`learn_more` and `protect_yourself` recommendations are from personal research, and are linked to their sources directly in the data.

### Data consolidation

Original data was separated by census tract. I consolidated data by ZIP code. For all entries in each ZIP code, I:

- Averaged the data for each indicator
- If data for that indicator was null, I changed it to -1, in order to differentiate between null data and 0-value data.
- Consolidated city/area names as follows:
  - If one city or area was a clear majority for that ZIP code, I used only that city or area name.
  - If cities for that ZIP code were split fairly evenly between 2 cities, I used the two most common city names.
  - If cities for that ZIP code were split fairly evenly between more than 2 cities, I used only the most common 1 or 2 city names.
  - If that ZIP code was split between cities and unincorporated county areas, I used only the city names
  - If that ZIP code was split fairly evenly between multiple unincorporated county areas, I used both county names

### Hazard threshholds

It’s difficult to find the line between being cautious and alarmist when communicating environmental data. You don’t want to unnecessarily stress people out or make them think they need to buy lots of things to be safe, but you also don’t want to withhold or downplay information that can impact people’s health. In general, I set my hazard thresholds low (so more people will see `bad_news` messages). I would rather alarm people a bit with cautiously-scoped `bad_news`, than make the call that their environmental health risks are not significant.

I determined hazard thresholds for each indicator as follows:

#### **Water**

Unfortunately, there were at least a few contaminants in all water sources. However, I wanted to distinguish between higher- and lower-contaminated water sources, so I chose to set the threshold at 25%. i.e. The lowest-contaminated 25% would see a `good_news` message, and the rest would see a `bad_news` message. However, because there was no completely clean water source, in the `good_news` message I qualified that water quality was relatively good, and that there may still be contaminants.

#### **Air**

The US Environmental Protection Agency sets the hazard threshold for particulate matter pollution at 12 micrograms/cubic meter, but there are [multiple studies](https://oehha.ca.gov/media/downloads/calenviroscreen/report/calenviroscreen40reportf2021.pdf#page=37) showing health impacts at much lower concentrations, especially over long time periods. So, I chose to adjust this number down to 9.

#### **Lead**

There is no safe level of lead exposure. But this indicator is about the likelihood of lead in housing rather than the level of lead in housing, so I chose to set this threshold at 10%. i.e. If less than 1 in 10 houses in your area is likely to have lead, that’s `good_news`. If it’s more likely than that, it’s `bad_news`.

#### **Hazardous Waste**

There are many different types of hazardous waste cleanup sites. Because it’s impossible to determine their unique impacts (at the scale of this project), I chose to have the threshold be 0. So - no hazardous waste is `good_news`! One or more is `bad_news`.

## Set-up

### Dependencies

- In your terminal, navigate to the project directory and run `npm install`. This will install Express and other server-related dependencies.

- `cd client` and run `npm install`. This will install React client dependencies.

### Database

- If you do not have MySQL, [install it](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) before proceeding.

- Open MySQL in your terminal by running `mysql -u root -p`

- Create a new database called "my_enviro": `CREATE DATABASE my_enviro`

- Create an `.env` file in the project folder, and write your MySQL authentication information in it. For example:

```bash
DB_HOST=localhost
DB_USER=root
DB_NAME=my_enviro
DB_PASS=(your password)
```

- Return to your MySQL terminal window. Run `SHOW GLOBAL variables LIKE 'local_infile'`. This will check if your MySQL allows data imports from a local file - we'll need to do this for our database.
  - If the value for `'local_infile'` is `ON`, open another terminal window, navigate to the project folder and run `npm run migrate`. Your database should be ready!
  - If the value for “local_infile” is `OFF`, proceed to next step. :)
- Still in the MySQL terminal, run `SET GLOBAL local_infile=true`. Then run the following commands to quit and restart MySQL with local_infile enabled:
  - `quit`
  - `mysql --local_infile=1 -u root -p`
- Open another terminal window, navigate to the project folder and run `npm run migrate`. Your database should be ready!

- (After this, if you need to reload the database you can simply run `npm run migrate` - you only need to set global permissions once.)

- In your MySQL terminal window, run `USE my_enviro;` then `SHOW TABLES;`. Your database should contain 2 tables: `enviro_data` and `indicator_details`

![db plan](data/db_plan.png)

- You can run `DESCRIBE enviro_data;` and `DESCRIBE indicator_details;` to check that your tables have been set up correctly.

### Development

- Run `npm start` in project directory to start the Express server on port 5000

- In another terminal window, `cd client` and `run npm start` to start the client in development mode with hot reloading in port 3000.

## Learn More

Full [project description here](https://docs.google.com/document/d/1EyuTybF4YVzwdO1ak_yoinMkoNYwa-Yj6S7IBZ90VEE/edit#).

Includes file map, user flow, design, data methodology, links to source data, feature extension recommendations and more.

_This is a student project that was created by Zoe Laventhol at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
