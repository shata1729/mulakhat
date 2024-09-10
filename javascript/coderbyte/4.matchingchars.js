function MatchingCharacters(str) { 

    let visited = {}
    for(let ch of str){
      if(visited[ch]>=1){
        visited[ch]+=1;
      } else {
        visited[ch] = 1;
      }
    }
    // console.log(visited)
    let array = Object.entries(visited)
    console.log(array)
}
     
  // keep this function call here 
  console.log(MatchingCharacters('abcabsddff'));