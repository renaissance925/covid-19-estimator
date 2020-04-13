const covid19ImpactEstimator = (data) => data;
{
    data: {
        region: {
            name: "Africa",
            avgAge= 19.7,
            avgDailyIncomeInUSD= 5,
            avgDailyIncomePopulation= 0.71
        };
        periodType: "days",
        timeToElapse= 58,
        reportedCases= 674,
        population= 66622705,
        totalHospitalBeds= 1380614
    };
    impact: {
        currentlyInfected: 6740,
        infectionsByRequestedTime= 3450880,
    }
    severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime= 17254400
 }   
}

export default covid19ImpactEstimator;
