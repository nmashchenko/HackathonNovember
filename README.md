# ✨CandyMarket - marketplace for candies exchange

## Awards
Awarded in 2 nominations: <br>

🏆 Develop a program/tool that creates a virtual marketplace and facilitates a safe in-person candy exchange. <br>
🏆 Best overall - Hackathon winners! <br>

## How to set up
### First clone the project
`git clone https://github.com/exortme1ster/HackathonNovember.git`
### Move to Demohacks Marketplace folder
`cd '.\HackathonNovember\Demohacks Marketplace\'`
### Install all the dependencies
`npm install`
### Run the application
`npm run dev`
### Open browser with the following url:
`http://localhost:8080`

## Inspiration
We took inspiration from various marketplaces and combined it with Halloween theme.

## What it does
CandyMarket is platform on which users can exchange their candies based on their personal preferences. At start, user can buy Candy Points which is used as a main currency on the market to buy and sell items. Moreover, the platform can show analyzed statistics of transactions to help users to control their budget.

## How we built it
The frontend of the platform is implemented with ReactJS (+ styled-components) while the backend is implemented with Supabase (https://supabase.com) and their security/database(postgresql) /realtime APIs features. 

## Challenges we ran into
During coding we run into several challenges. The biggest problems occurred during the implementation of database and trading systems.

Implementation of realtime API that was needed to track recent purchases (whenever one user adds/purchases an item it should appear/disappear for everyone on platform)

## Accomplishments that we're proud of
We really like the design that we come up with, the real-time API feature that simulates real-time marketplace and allows scaling and technology stack we chose

## What we learned
We were new to Supabase on which we implemented our data base and security system. My teammate Zhangir was completely new to React and was able to catch up in several hours!

## What's next for CandyMarket
New features like dividing candies into categories, messaging system between the seller and buyer.


