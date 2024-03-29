export default function Modal(opt) {
  this.element = opt.element;
  //function to call Run user from Modal
  this.referenceToUserFunction = opt.runUser;
  this.form = this.element.querySelector('form');
  this.runUserFunction();
}

Modal.prototype.open = function () {
  console.log('open', this.element);
  //Reseting current form before displaying it
  this.form.reset();
  //Adding show class to modal form to display it
  this.element.classList.add('show');
};

Modal.prototype.close = function () {
  console.log('close', this.element);
  this.element.classList.remove('show');
};

Modal.prototype.edit = function () {
  console.log('open', this.element);
  this.element.classList.add('show');
};

Modal.prototype.runUserFunction = function () {
  this.waitsubmit(this.referenceToUserFunction);
  this.cancelModal();
};

Modal.prototype.waitsubmit = function (runUser) {
  this.form.onsubmit = submit.bind(this); //I didn't use submit() first because it means I'm calling the function and onsubmit won't work
  function submit(e) {
    e.preventDefault();
    this.close();
    new runUser(this.element);
  }
}

Modal.prototype.cancelModal = function () {
  let  upperCloseBtn = this.element.querySelector('.js_close_upper_corner');
  let  lowerCloseBtn = this.element.querySelector('.js_close_modal');
  upperCloseBtn.onclick = this.close.bind(this);
  lowerCloseBtn.onclick = this.close.bind(this);
}


