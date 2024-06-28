// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers=['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(0,2)
}


const returnLastTwoDrivers=function(drivers=['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(-2)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function(int){
    return (function(fare){
        return fare*int
    });
}
const fareDoubler=createFareMultiplier(2);

const fareTripler =createFareMultiplier(3);

const selectDifferentDrivers =function (array,arg){
    return arg (array);
}