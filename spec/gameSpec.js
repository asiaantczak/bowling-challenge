describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();

  });

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins)
    }
  };

  describe("score", function() {
    it("scores gutter game", function() {
      rollMany(20, 0)
      expect(game.score).toEqual(0);
    });

    it("scores a game where 1 pin is knocked in each roll", function() {
      rollMany(20, 1)
      expect(game.score).toEqual(20)
      })
    });



});
