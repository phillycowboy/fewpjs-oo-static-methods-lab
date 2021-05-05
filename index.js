class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  };
  static titleize(sentence){
    let dontCap = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let newArr = [];
    let sentArr = sentence.split(' ');
    for(let sent of sentArr){
      if(dontCap.includes(sent)){
          newArr.push(sent);
      }else{
        newArr.push(this.capitalize(sent));
      }
    }
    let firstWord = this.capitalize(newArr[0]);
    newArr.splice(0, 1, firstWord);
    return newArr.join(" ");
  };
}