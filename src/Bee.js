import Grub from './Grub'

class Bee extends Grub {
  constructor () {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
    // food property is inherited from Grub
  }
  // eat method is inherited from Grub
};

export default Bee;