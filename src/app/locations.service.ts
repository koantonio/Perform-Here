import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }
  states(){
    return [
      {
        id: 1,
        name: "Alabama"
      },
      {
        id: 2,
        name: "Alaska"
      },
      {
        id: 3,
        name: "Arizona"
      },
      {
        id: 4,
        name: "Arkansas"
      },
      {
        id: 5,
        name: "California"
      },
      {
        id: 6,
        name: "Colorado"
      },
      {
        id: 7,
        name: "Connecticut"
      },
      {
        id: 8,
        name: "District of Columbia"
      },
      {
        id: 9,
        name: "Florida"
      },
      {
        id: 10,
        name: "Georgia"
      },
      {
        id: 11,
        name: "Hawaii"
      },
      {
        id: 12,
        name: "Idaho"
      },
      {
        id: 13,
        name: "Illinois"
      },
      {
        id: 14,
        name: "Indiana"
      },
      {
        id: 15,
        name: "Iowa"
      },
      {
        id: 16,
        name: "Kansas"
      },
      {
        id: 17,
        name: "Kentucky"
      },
      {
        id: 18,
        name: "Louisiana"
      },
      {
        id: 19,
        name: "Maryland"
      },
      {
        id: 20,
        name: "Masachusetts"
      },
      {
        id: 21,
        name: "Michigan"
      },
      {
        id: 22,
        name: "Minnesota"
      },
      {
        id: 23,
        name: "Mississippi"
      },
      {
        id: 24,
        name: "Missouri"
      },
      {
        id: 25,
        name: "Nebraska"
      },
      {
        id: 26,
        name: "Nevada"
      },
      {
        id: 27,
        name: "New Jersey"
      },
      {
        id: 28,
        name: "New Mexico"
      },
      {
        id: 29,
        name: "New York"
      },
      {
        id: 30,
        name: "North Carolina"
      },
      {
        id: 31,
        name: "Ohio"
      },
      {
        id: 32,
        name: "Oklahoma"
      },
      {
        id: 33,
        name: "Rhode Island"
      },
      {
        id: 34,
        name: "South Carolina"
      },
      {
        id: 35,
        name: "South Dakota"
      },
      {
        id: 36,
        name: "Tennessee"
      },
      {
        id: 37,
        name: "Texas"
      },
      {
        id: 38,
        name: "Utah"
      },
      {
        id: 39,
        name: "Virginia"
      },
      {
        id: 40,
        name: "Washington"
      },
      {
        id: 41,
        name: "Wisconsin"
      }
    ]
  }

  cities(){
    return [
      {
        id: 1,
        name: "Huntsville"
      },
      {
        id: 1,
        name: "Montgomery"
      },
      {
        id: 1,
        name: "Birmingham"
      },
      {
        id: 1,
        name: "Mobile"
      },
      {
        id: 2,
        name: "Anchorage"
      },
      {
        id: 3,
        name: "Pheonix"
      },
      {
        id: 3,
        name: "Tucson"
      },
      {
        id: 3,
        name: "Mesa"
      },
      {
        id: 3,
        name: "Chandler"
      },
      {
        id: 3,
        name: "Gilbert"
      },
      {
        id: 3,
        name: "Glendale"
      },
      {
        id: 3,
        name: "Scottsdale"
      },
      {
        id: 3,
        name: "Peoria"
      },
      {
        id: 3,
        name: "Tempe"
      },
      {
        id: 3,
        name: "Surprise"
      },
      {
        id: 4,
        name: "Little Rock"
      },
      {
        id: 5,
        name: "Los Angeles"
      },
      {
        id: 5,
        name: "San Diego"
      },
      {
        id: 5,
        name: "San Jose"
      },
      {
        id: 5,
        name: "San Francisco"
      },      
      {
        id: 5,
        name: "Fresno"
      },      
      {
        id: 5,
        name: "Sacramento"
      },      {
        id: 5,
        name: "Long Beach"
      },      {
        id: 5,
        name: "Oakland"
      },      {
        id: 5,
        name: "Bakersfield"
      },      {
        id: 5,
        name: "Anaheim"
      },      {
        id: 5,
        name: "Irvine"
      },      {
        id: 5,
        name: "Stockton"
      },      {
        id: 5,
        name: "Riverside"
      },      {
        id: 5,
        name: "Santa Ana"
      },      {
        id: 5,
        name: "Chula Vista"
      },      {
        id: 5,
        name: "Santa Clarita"
      },      {
        id: 5,
        name: "Fremont"
      },      {
        id: 5,
        name: "San Bernardino"
      },      {
        id: 5,
        name: "Modesto"
      },      {
        id: 5,
        name: "Moreno Valley"
      },      {
        id: 5,
        name: "Fontana"
      },      {
        id: 5,
        name: "Oxnard"
      },      {
        id: 5,
        name: "Huntington Beach"
      },      {
        id: 5,
        name: "Glendale"
      },      {
        id: 5,
        name: "Elk Grove"
      },      {
        id: 5,
        name: "Santa Rosa"
      },      {
        id: 5,
        name: "Ontario"
      },      {
        id: 5,
        name: "Lancaster"
      },      {
        id: 5,
        name: "Rancho Cucamonga"
      },      {
        id: 5,
        name: "Oceanside"
      },      {
        id: 5,
        name: "Palmdale"
      },      {
        id: 5,
        name: "Garden Grove"
      },      {
        id: 5,
        name: "Hayward"
      },      {
        id: 5,
        name: "Salinas"
      },      {
        id: 5,
        name: "Sunnyvale"
      },      {
        id: 5,
        name: "Corona"
      },      {
        id: 5,
        name: "Roseville"
      },      {
        id: 5,
        name: "Escondido"
      },      {
        id: 5,
        name: "Pomona"
      },      {
        id: 5,
        name: "Torrance"
      },      {
        id: 5,
        name: "Fullerton"
      },      {
        id: 5,
        name: "Visalia"
      },      
      {
        id: 6,
        name: "Denver"
      },      
      {
        id: 6,
        name: "Colorado Springs"
      },     
       {
        id: 6,
        name: "Aurora"
      },
      {
        id: 6,
        name: "Fort Collins"
      },
      {
        id: 6,
        name: "Lakewood"
      },
      {
        id: 6,
        name: "Thornton"
      },
      {
        id: 7,
        name: "Bridgeport"
      },
      {
        id: 8,
        name: "Washington"
      },
      {
        id: 9,
        name: "Jacksonville"
      },
      {
        id: 9,
        name: "Miami"
      },
      {
        id: 9,
        name: "Tampa"
      },
      {
        id: 9,
        name: "Orlando"
      },
      {
        id: 9,
        name: "St. Petersburg"
      },
      {
        id: 9,
        name: "Hialeah"
      },
      {
        id: 9,
        name: "Port St. Lucie"
      },
      {
        id: 9,
        name: "Cape Coral"
      },
      {
        id: 9,
        name: "Tallahassee"
      },
      {
        id: 9,
        name: "Fort Lauderdale"
      },
      {
        id: 9,
        name: "Pembroke Pines"
      },
      {
        id: 9,
        name: "Hollywood"
      },
      {
        id: 10,
        name: "Atlanta"
      },
      {
        id: 10,
        name: "Columbus"
      },
      {
        id: 10,
        name: "Augusta"
      },
      {
        id: 10,
        name: "Savannah"
      },
      {
        id: 11,
        name: "Honolulu"
      },
      {
        id: 12,
        name: "Boise"
      },
      {
        id: 13,
        name: "Chicago"
      },
      {
        id: 13,
        name: "Aurora"
      },
      {
        id: 13,
        name: "Naperville"
      },
      {
        id: 13,
        name: "Joliet"
      },
      {
        id: 13,
        name: "Rockford"
      },
      {
        id: 14,
        name: "Indianapolis"
      },
      {
        id: 14,
        name: "Fort Wayne"
      },
      {
        id: 15,
        name: "Des Moines"
      },
      {
        id: 16,
        name: "Wichita"
      },
      {
        id: 16,
        name: "Overland Park"
      },
      {
        id: 16,
        name: "Kansas City"
      },
      {
        id: 17,
        name: "Louisville"
      },
      {
        id: 17,
        name: "Lexington"
      },
      {
        id: 18,
        name: "New Orleans"
      },
      {
        id: 18,
        name: "Baton Rouge"
      },
      {
        id: 18,
        name: "Shreveport"
      },
      {
        id: 19,
        name: "Baltimore"
      },
      {
        id: 20,
        name: "Boston"
      },
      {
        id: 20,
        name: "Worcester"
      },
      {
        id: 20,
        name: "Springfield"
      },
      {
        id: 21,
        name: "Detroit"
      },
      {
        id: 21,
        name: "Grand Rapids"
      },
      {
        id: 22,
        name: "Minneapolis"
      },
      {
        id: 22,
        name: "St. Paul"
      },
      {
        id: 23,
        name: "Jackson"
      },
      {
        id: 24,
        name: "Kansas City"
      },
      {
        id: 24,
        name: "St. Louis"
      },
      {
        id: 24,
        name: "Springfield"
      },
      {
        id: 25,
        name: "Omaha"
      },
      {
        id: 25,
        name: "Lincoln"
      },
      {
        id: 26,
        name: "Las Vegas"
      },
      {
        id: 26,
        name: "Henderson"
      },
      {
        id: 26,
        name: "Reno"
      },
      {
        id: 26,
        name: "North Las Vegas"
      },
      {
        id: 26,
        name: "Enterprise"
      },
      {
        id: 26,
        name: "Spring Valley"
      },
      {
        id: 26,
        name: "Sunrise Manor"
      },
      {
        id: 26,
        name: "Paradise"
      },
      {
        id: 27,
        name:"Newark"
      },
      {
        id: 27,
        name:"Jersey City"
      },
      {
        id: 27,
        name:"Paterson"
      },
      {
        id: 28,
        name:"Albuquerque"
      },
      {
        id: 29,
        name:"Syracuse"
      },
      {
        id: 29,
        name:"Rochester"
      },
      {
        id: 29,
        name:"Yonkers"
      },
      {
        id: 29,
        name:"Buffalo"
      },
      {
        id: 29,
        name:"New York City"
      },
      {
        id: 30,
        name:"Charlotte"
      },
      {
        id: 30,
        name:"Raleigh"
      },
      {
        id: 30,
        name:"Greensboro"
      },
      {
        id: 30,
        name:"Durham"
      },
      {
        id: 30,
        name:"Winston-Salem"
      },
      {
        id: 30,
        name:"Fayetteville"
      },
      {
        id: 30,
        name:"Cary"
      },
      {
        id: 31,
        name:"Columbus"
      },
      {
        id: 31,
        name:"Cleveland"
      },
      {
        id: 31,
        name:"Cincinnati"
      },
      {
        id: 31,
        name:"Toledo"
      },
      {
        id: 31,
        name:"Akron"
      },
      {
        id: 32,
        name:"Oklahoma City"
      },
      {
        id: 32,
        name:"Tulsa"
      },
      {
        id: 33,
        name:"Providence"
      },
      {
        id: 34,
        name:"Charleston"
      },
      {
        id: 35,
        name:"Sioux Falls"
      },
      {
        id: 36,
        name: "Nashville"
      },
      {
        id: 36,
        name: "Memphis"
      },
      {
        id: 36,
        name: "Knoxville"
      },
      {
        id: 36,
        name: "Chattanooga"
      },
      {
        id: 36,
        name: "Clarksville"
      },
      {
        id: 36,
        name: "Murfreesboro"
      },
      {
        id: 37,
        name: "Houston"
      },
      {
        id: 37,
        name: "San Antonio"
      },
      {
        id: 37,
        name: "Dallas"
      },
      {
        id: 37,
        name: "Austin"
      },
      {
        id: 37,
        name: "Fort Worth"
      },
      {
        id: 37,
        name: "El Paso"
      },
      {
        id: 37,
        name: "Arlington"
      },
      {
        id: 37,
        name: "Corpus Christi"
      },
      {
        id: 37,
        name: "Plano"
      },
      {
        id: 37,
        name: "Irving"
      },
      {
        id: 37,
        name:  "Lubbock"
      },
      {
        id: 37,
        name: "Laredo"
      },
      {
        id: 37,
        name: "Garland"
      },
      {
        id: 37,
        name: "Frisco"
      },
      {
        id: 37,
        name: "McKinney"
      },
      {
        id: 37,
        name: "Amarillo"
      },
      {
        id: 37,
        name:"Grand Prairie" 
      },
      {
        id: 37,
        name: "Brownsville"
      },
      {
        id: 37,
        name: "Killeen"
      },
      {
        id: 37,
        name: "Pasadena"
      },
      {
        id: 37,
        name: "Mesquite"
      },
      {
        id: 37,
        name: "Denton"
      },
      {
        id: 37,
        name: "McAllen"
      },
      {
        id: 38,
        name: "Salt Lake City"
      },
      {
        id: 39,
        name: "Virginia Beach"
      },
      {
        id: 39,
        name: "Chesapeake"
      },
      {
        id: 39,
        name: "Arlington"
      },
      {
        id: 39,
        name: "Norfolk"
      },
      {
        id: 39,
        name: "Richmond"
      },
      {
        id: 39,
        name: "Newport News"
      },
      {
        id: 39,
        name: "Alexandria"
      },
      {
        id: 40,
        name: "Seattle"
      },
      {
        id: 40,
        name: "Spokane"
      },
      {
        id: 40,
        name: "Tacoma"
      },

      {
        id: 40,
        name: "Vancouver"
      },

      {
        id: 40,
        name: "Bellevue"
      },

      {
        id: 40,
        name: "Kent"
      },

      {
        id: 41,
        name: "Milwaukee"
      },

      {
        id: 41,
        name: "Madison"
      }
    ]
  }
}
