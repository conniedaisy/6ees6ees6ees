import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    // food property is inherited from Grub
    // treasureChest property is inherited from ForagerBee
  }
  forage () {
    return "I am too old, let me play cards instead";
  }
  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
  // eat method is inherited from Grub
};

export default RetiredForagerBee;