import Bee from './Bee'

class ForagerBee extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    // color property is inherited from Bee
    // food property is inherited from Grub
  }  
  forage (treasure) {
    this.treasureChest.push(treasure);
  }
  // eat method is inherited from Grub
};

export default ForagerBee;