const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#87CEEB",
  scene: {
    create: create
  }
};

const game = new Phaser.Game(config);

let player;

function create() {
  player = this.add.circle(400, 300, 30, 0x3366ff);

  window.onkeydown = function(event) {
    console.log("KEY:", event.key);

    if (event.key === "d") {
      player.x += 20;
    }

    if (event.key === "a") {
      player.x -= 20;
    }

    if (event.key === "w") {
      player.y -= 20;
    }

    if (event.key === "s") {
      player.y += 20;
    }
  };
}