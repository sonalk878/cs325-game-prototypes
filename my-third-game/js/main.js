import "./phaser.js";
var game = new Phaser.Game(config);

// Creates a new 'main' state that will contain the game
var main_state = {

    preload: function () {
        this.stage.backgroundColor = '#71c5cf';

        this.load.image('bird', './assets/bird.png');
        this.load.image('pipe', './assets/pipe.png');
    },

    create: function () {
        // Looks like I don't need this bellow line
        // this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bird = this.add.sprite(100, 245, 'bird');
        this.physics.enable([this.bird], Phaser.Physics.ARCADE);
        this.bird.body.gravity.y = 1000;

        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');

        this.pipes.forEach(function (pipe) {
            this..physics.enable([pipe], Phaser.Physics.ARCADE);
        });

        // Call the 'jump' function when the spacekey is hit
        var space_key = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);

        // Add pipes after 1500ms
        this.timer = this.time.events.loop(1500, this.add_row_of_pipes, this);

        // Score
        this.score = 0;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.add.text(20, 20, "0", style);
    },

    update: function () {
        // If the bird is out of the world (too high or too low), call the 'restart_game' function
        if (this.bird.inWorld == false) {
            this.restart_game();
        }

        // Looks like I have to kill the pipe on my own when it is out of the canvas
        this.pipes.forEach(function (pipe) {
            if (pipe.alive && !pipe.inWorld) {
                pipe.kill();
            }
        });

        this.physics.arcade.overlap(
            this.bird,
            this.pipes,
            this.restart_game,
            null,
            this
        );
    },

    render: function () {

    },

    // Make the bird jump
    jump: function () {
        // Add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;
    },

    // Restart the game
    restart_game: function () {
        this.time.events.remove(this.timer);

        // Start the 'main' state, which restarts the game
        this.state.start('main');
    },

    add_one_pipe: function (x, y) {
        console.log(this.pipes.countDead());
        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();

        // Set the new position of the pipe
        pipe.reset(x, y);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200;

        // Kill the pipe when it's no longer visible
        pipe.outOfBoundsKill = true;
    },

    add_row_of_pipes: function () {
        var hole = Math.floor(Math.random() * 4) + 1;

        for (var i = 0; i < 8; i++) {
            if (i != hole && i != hole + 1 && i != hole + 2) {
                this.add_one_pipe(400, i * 60 + 10);
            }
        }

        this.score += 1;
        this.label_score.setText(this.score);
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);
game.state.start('main');
