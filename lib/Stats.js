var htmlToJson = require('html-to-json');

module.exports = {
    all: function (selectDate) {
        var tableIdAttrName = selectDate == "yesterday" ? "#main_table_countries_yesterday" : "#main_table_countries_today"
        var data = htmlToJson.request("https://www.worldometers.info/coronavirus/", {
            "stats": [tableIdAttrName + ' tbody tr', {
                "country": function ($countrName) {
                    return $countrName.find("td:nth-child(1)").text()
                },
                "searchLink": function ($searchLink) {
                    var search_link = $searchLink.find("td:nth-child(1) a").attr("href");
                    return typeof search_link == "undefined" ? null : search_link
                },
                "searchKeyword": function ($searchKeyword) {
                    var search_keyword = $searchKeyword.find("td:nth-child(1) a").attr("href");
                    return typeof search_keyword == "undefined" ? null : search_keyword.split("/", 2)[1]
                },
                "totalCases": function ($totalCases) {
                    return $totalCases.find("td:nth-child(2)").text()
                },
                "newCases": function ($newCases) {
                    return $newCases.find("td:nth-child(3)").text()
                },
                "totalDeaths": function ($totalDeaths) {
                    var total_deaths = $totalDeaths.find("td:nth-child(4)").text()
                    return !total_deaths.trim() ? null : total_deaths
                },
                "newDeaths": function ($newDeaths) {
                    var new_deaths = $newDeaths.find("td:nth-child(5)").text()
                    return !new_deaths.trim() ? null : new_deaths
                },
                "totalRecovered": function ($totalRecovered) {
                    var total_recovered = $totalRecovered.find("td:nth-child(6)").text()
                    return !total_recovered.trim() ? null : total_recovered
                },
                "activeCases": function ($activeCases) {
                    var active_cases = $activeCases.find("td:nth-child(7)").text()
                    return !active_cases.trim() ? null : active_cases
                },
                "criticalCases": function ($seriousCritical) {
                    var serious_critical = $seriousCritical.find("td:nth-child(8)").text()
                    return !serious_critical.trim() ? null : serious_critical
                },
                "ratio": function ($totCasesOneMPop) {
                    var tot_cases_1m_pop = $totCasesOneMPop.find("td:nth-child(9)").text()
                    return !tot_cases_1m_pop.trim() ? null : tot_cases_1m_pop
                },
                "deathRatio": function ($deathOneMPop) {
                    var death_1m_pop = $deathOneMPop.find("td:nth-child(10)").text()
                    return !death_1m_pop.trim() ? null : death_1m_pop
                }
            }]
        });
        return data;
    },
    getTotalStats: function(selectDate) {
        var tableIdAttrName = selectDate == "yesterday" ? "#main_table_countries_yesterday" : "#main_table_countries_today"
        var data = htmlToJson.request("https://www.worldometers.info/coronavirus/", {
            "total": [tableIdAttrName + " .total_row", {
                "totalCases": function ($totalCases) {
                    return $totalCases.find("td:nth-child(2)").text()
                },
                "newCases": function ($newCases) {
                    return $newCases.find("td:nth-child(3)").text()
                },
                "totalDeaths": function ($totalDeaths) {
                    var total_deaths = $totalDeaths.find("td:nth-child(4)").text()
                    return !total_deaths.trim() ? null : total_deaths
                },
                "newDeaths": function ($newDeaths) {
                    var new_deaths = $newDeaths.find("td:nth-child(5)").text()
                    return !new_deaths.trim() ? null : new_deaths
                },
                "totalRecovered": function ($totalRecovered) {
                    var total_recovered = $totalRecovered.find("td:nth-child(6)").text()
                    return !total_recovered.trim() ? null : total_recovered
                },
                "activeCases": function ($activeCases) {
                    var active_cases = $activeCases.find("td:nth-child(7)").text()
                    return !active_cases.trim() ? null : active_cases
                },
                "criticalCases": function ($seriousCritical) {
                    var serious_critical = $seriousCritical.find("td:nth-child(8)").text()
                    return !serious_critical.trim() ? null : serious_critical
                },
                "ratio": function ($totCasesOneMPop) {
                    var tot_cases_1m_pop = $totCasesOneMPop.find("td:nth-child(9)").text()
                    return !tot_cases_1m_pop.trim() ? null : tot_cases_1m_pop
                },
                "deathRatio": function ($deathOneMPop) {
                    var death_1m_pop = $deathOneMPop.find("td:nth-child(10)").text()
                    return !death_1m_pop.trim() ? null : death_1m_pop
                }
            }]
        });
        return data;
    },
    getTotalDeathByDay: function () {
        var data = htmlToJson.request("https://www.worldometers.info/coronavirus/coronavirus-death-toll/", {
            "stats": ['table:nth-child(1) tbody tr', {
                "date": function ($date) {
                    return $date.find("td:nth-child(1)").text()
                },
                "totalDeath": function($totalDeath) {
                    return $totalDeath.find("td:nth-child(2)").text()
                },
                "changeDeath": function($changeDeath) {
                    return $changeDeath.find("td:nth-child(3)").text()
                },
                "changeDeathPercent":function($changeDeathPercent) {
                    return $changeDeathPercent.find("td:nth-child(4)").text()
                }
            }]
        });

        return data
    },
    getDailyDeathByDay: function () {
        var data = htmlToJson.request("https://www.worldometers.info/coronavirus/coronavirus-death-toll/", {
            "stats": ['table:nth-last-child(odd) tbody tr', {
                "date": function ($date) {
                    return $date.find("td:nth-child(1)").text()
                },
                "dailyDeath": function($dailyDeath) {
                    return $dailyDeath.find("td:nth-child(2)").text()
                },
                "dailyChange": function($dailyChange) {
                    return $dailyChange.find("td:nth-child(3)").text()
                },
                "dailyChangePercent":function($dailyChangePercent) {
                    return $dailyChangePercent.find("td:nth-child(4)").text()
                }
            }]
        });

        return data
    }
}