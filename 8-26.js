// given data entries and exits for a building return
// the busiest time frame for the building
// assume that the logs are from a single day
// assume that the logs are in chronological order
function peakBusiness (logs) {
    var count = 0;
    var maxCount = 0;
    var start = 0;
    var end = 0;
    for(var i = 0; i < logs.length; i++){
        if(logs[i].type == "enter"){
            count += logs[i].count;
            if(count > maxCount){
                maxCount = count;
                start = logs[i].timestamp;
                end = 0;
            }
        } else {
            if(count == maxCount){
                end = logs[i].timestamp;
            };
            count -= logs[i].count;
        }
    }
    return {
        'start': start,
        end: end
    }
}
var logs = [
    {"timestamp": 1526579928, count: 3, "type": "enter"},
    {"timestamp": 1526580382, count: 2, "type": "exit"}
]
console.log(peakBusiness(logs));