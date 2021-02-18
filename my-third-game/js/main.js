import "./phaser.js";
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        //update: update
    }
};

var player;
var stars;
var platforms;
var cursors;
var score = 0;
var music;
var scoreText;

var game = new Phaser.Game(config);

function preload() {

    this.load.image('sky', './assets/tealBackground.png');
    this.load.image('ground', './assets/platform.png');
    this.load.image('star', './assets/bird.png');
    this.load.image('bomb', './assets/bomb.png');
    this.load.spritesheet('dude', './assets/pipe.png', { frameWidth: 32, frameHeight: 48 });
    this.load.audio('gemAudio', ['./assets/game.mp3']);
    this.load.image('bird', './assets/bird.png');
    this.load.image('pipe', './assets/pipe.png');

/*    this.load.audio('gemAudio', ['./assets/gem.mp3']);
*/}

function create() {
    this.add.image(400, 300, 'sky');
    this.bird = this.add.sprite(100, 245, 'bird');
    this.physics.world.enable([this.bird], Phaser.Physics.ARCADE);//adds collison and other attributes to it
    this.bird.body.gravity.y = 1000;

    this.pipes = this.add.group();
    this.pipes.createMultiple(20, 'pipe');//creates multiple pipes (20)

  /*  for (var i = 0; i < this.pipes.length; i++) {
        var thisPipe = pipes[i];
        this.physics.world.enable([this.thisPipe], Phaser.Physics.ARCADE);//adds collison and other attributes to it
    }*/
    [this.pipes].forEach(function (pipe) {
        this.physics.world.enable([this.pipe], Phaser.Physics.ARCADE);//adds collison and other attributes to it
    });
/*     
    music = this.sound.add('gemAudio', { volume: 0.70 });
    music.loop = true;
    music.play();
    *//*this.physics.add.collider(this.dude, this.star, function (dude, star) {
        gemAudio.play();
    });*//*

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    *//*this.physics.add.collider(player, stars, function (player, star) {
        gemSound.play();

    });*//*

    this.physics.add.overlap(player, stars, collectStar, null, this);*/
}
/*
function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}

function collectStar(player, star) {
    star.disableBody(true, true);
    *//*    music = this.add.audio('gemAudio');
        music.play();*//*

    //let soundSample = this.sound.add('gemAudio');
    //soundSample.play();
    score += 10;
    if (score === 120) {
        scoreText.setText("WINNERRR");
    }
    scoreText.setText('Score: ' + score);
}
*/