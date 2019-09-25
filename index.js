// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
    }); 
}

function driverNamesWithRevenueOver(drivers, revenue) {
 return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
 }); 
}

function exactMatch(drivers, crit) {
  const key = Object.keys(crit)[0];
  return drivers.filter(function(driver) {
    return driver[key] === crit[key];
  });
}

function exactMatchToList(drivers, crit) {
  return exactMatch(drivers, crit).map(function(driver) {
    return driver.name;
  })
}