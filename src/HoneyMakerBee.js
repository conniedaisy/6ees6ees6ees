import Bee from './Bee'

class HoneyMakerBee extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    // color property is inherited from Bee
    // food preopty is inherited from Grub
  }
  makeHoney () {
    this.honeyPot++;
  }
  giveHoney () {
    this.honeyPot--;
  }
  // eat method is inherited from Grub
};

export default HoneyMakerBee;