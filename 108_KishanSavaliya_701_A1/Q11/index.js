
function getPercentage(value, total) {
    return (value / total) * 100;
}

function getValueFromPercentage(percentage, total) {
    return (percentage / 100) * total;
}

function increaseByPercentage(value, percentage) {
    return value + (value * percentage) / 100;
}

function decreaseByPercentage(value, percentage) {
    return value - (value * percentage) / 100;
}

function percentageDifference(oldVal, newVal) {
    return ((newVal - oldVal) / oldVal) * 100;
}

module.exports = {
    getPercentage,
    getValueFromPercentage,
    increaseByPercentage,
    decreaseByPercentage,
    percentageDifference
};
