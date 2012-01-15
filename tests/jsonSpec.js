(function() {

  describe("Json", function() {
    beforeEach(function() {
      this.original = [
        {
          one: 1,
          two: "2",
          three: 3,
          four: "4"
        }, {
          one: 10,
          two: "20",
          three: 30,
          four: "40"
        }
      ];
      this.table = window.to_table(this.original);
      return this.json = window.to_json(this.table);
    });
    it("Should be an object", function() {
      return expect(typeof this.json).toBe('object');
    });
    return it("Should match the original object", function() {
      return expect(this.json).toEqual(this.original);
    });
  });

}).call(this);
