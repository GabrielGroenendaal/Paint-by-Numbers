

class HintItem {
      constructor(num, crossout = false) {
            this.num = num; 
            this.crossout = crossout || false;
      }
}

module.exports = HintItem;