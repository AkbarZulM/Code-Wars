class Ghost {
  constructor() {
    let randomColor = ["white", "yellow", "purpel", "red"];

    let randomIndex = Math.floor(Math.random() * randomColor.length);

    this.color = randomColor[randomIndex];
  }
}

let ghost = new Ghost();

console.log(ghost.color);
