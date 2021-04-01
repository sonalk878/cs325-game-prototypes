import "./phaser.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload() {
    this.load.image('card1', 'assets/cardBack.png')
    this.load.image('card2', 'assets/cardBack.png')
    this.load.image('card3', 'assets/cardBack.png')
    this.load.image('card4', 'assets/cardBack.png')
    this.load.image('card5', 'assets/cardBack.png')
    this.load.image('card6', 'assets/cardBack.png')
    this.load.image('jj', 'assets/jumping_jacks.png')
    this.load.image('PU', 'assets/push_ups.png')
    this.load.image('SQ', 'assets/squats.png')
    this.load.image('5', 'assets/5.png')
    this.load.image('50', 'assets/50.png')
    this.load.image('10', 'assets/10.png')
}

function create() {
    this.add.image(100, 100, 'jj')
    this.add.image(400, 100, 'PU')
    this.add.image(700, 100, 'SQ')

    this.add.image(100, 500, '5')
    this.add.image(400, 500, '50')
    this.add.image(700, 500, '10')


    this.card1 = this.add.image(100, 100, 'card1');
    this.card2 = this.add.image(400, 100, 'card2');
    this.card3 = this.add.image(700, 100, 'card3');

    this.card4 = this.add.image(100, 500, 'card4');
    this.card5 = this.add.image(400, 500, 'card5');
    this.card6 = this.add.image(700, 500, 'card6');

    this.card1.setInteractive();
    this.card2.setInteractive();
    this.card3.setInteractive();
    this.card4.setInteractive();
    this.card5.setInteractive();
    this.card6.setInteractive();
    

    this.input.on('gameobjectdown', function (pointer, gameObject) {

        gameObject.destroy();

    });
}

function update() {
}