const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/date-list', (resp) => {
  
//   console.log(resp);

// });

let data = [{date:"2022-03-17T08:00:00.000Z", value:25},{date:"2022-03-15T08:00:00.000Z", value:15},{date:"2022-03-20T10:30:00.000Z", value:27}]

const getArray = (data) => {
  let sortedData = data.sort((e1,e2)=> {
    if(e1.date>e2.date) return 1;
    if(e1.date<e2.date) return -1;
  })
  console.log(sortedData)
  // for(let e of data){
    
  // }
}

getArray(data)