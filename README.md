# Covid19 Scraper
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />

NPM Package to retrieve worldometers' live statistics of the Covid-19 pandemic. Scraper of [worldometers](https://www.worldometers.info).

# Disclaimer
This packages uses web scraping to retrieve the statistical information. This could potentially mean a copyright infringement and be criminally prosecuted. The scraped information belongs to Worldometers and its sources. Use by your own risk.

## Install

```sh
npm install covid19-scraper --save
```

## Features

*   Get Total data
*   Get All data by country name
*   Get Total death data by day
*   Get Daily death data by day

## Usage

### Get [Total](https://www.worldometers.info/coronavirus/) data

```javascript
var covid19 = require('covid19-scraper');

covid19.Stats.getTotalStats().then(function(data) {
    console.log(data)
});
```

`getTotalStats` returns an array containing total stats.

```javascript
{
  total: [
    {
      totalCases: '1,092,986',
      newCases: '+77,921',
      totalDeaths: '58,727',
      newDeaths: '+5,560',
      totalRecovered: '228,038',
      activeCases: '806,221',
      criticalCases: '39,402',
      ratio: '140.2',
      deathRatio: '7.5'
    }
  ]
}
```

### Get [All](https://www.worldometers.info/coronavirus/) data

```javascript
var covid19 = require('covid19-scraper');

covid19.Stats.all().then(function(data) {
    console.log(data)
});
```

`all` returns an array containing the stats by country . The countries are named as listed in worldometers.

```javascript
{
  stats: [
     {
          country: 'Japan',
          searchLink: null,
          searchKeyword: null,
          totalCases: '2,617',
          newCases: '',
          totalDeaths: '63 ',
          newDeaths: null,
          totalRecovered: '514',
          activeCases: '2,040',
          criticalCases: '60',
          ratio: '21',
          deathRatio: '0.5'
    },
    {
          country: 'Indonesia',
          searchLink: 'country/indonesia/',
          searchKeyword: 'indonesia',
          totalCases: '1,986',
          newCases: '+196',
          totalDeaths: '181 ',
          newDeaths: '+11',
          totalRecovered: '134',
          activeCases: '1,671',
          criticalCases: null,
          ratio: '7',
          deathRatio: '0.7'
    },
  ]
}
```

### Get [Total death](https://www.worldometers.info/coronavirus/coronavirus-death-toll/) data by day

```javascript
var covid19 = require('covid19-scraper');

covid19.Stats.getTotalDeathByDay().then(function(data) {
    console.log(data)
});
```

`getTotalDeathByDay` returns an array containing total death by daily.

```javascript
{
 stats: [
     {
       date: ' Apr. 2  ',
       totalDeath: '53,167',
       changeDeath: '5,969',
       changeDeathPercent: '13%'
     },
     {
       date: ' Apr. 1  ',
       totalDeath: '47,198',
       changeDeath: '4,889',
       changeDeathPercent: '12%'
     },
    ]
}
```

### Get [Daily death](https://www.worldometers.info/coronavirus/coronavirus-death-toll/) data by day

```javascript
var covid19 = require('covid19-scraper');

covid19.Stats.getDailyDeathByDay().then(function(data) {
    console.log(data)
});
```

`getDailyDeathByDay` returns an array containing daily death by daily.

```javascript
{
 stats: [
    {
      date: ' Apr. 2  ',
      dailyDeath: '5,969',
      dailyChange: '1,080',
      dailyChangePercent: '22%'
    },
    {
      date: ' Apr. 1  ',
      dailyDeath: '4,889',
      dailyChange: '354',
      dailyChangePercent: '8%'
    },
    ]
}
```

## Issues
If any issues are found, they can be reported [here](https://github.com/Faridbabayev001/covid19-scraper/issues).

## License

This project is licensed under the [MIT](LICENSE) license.