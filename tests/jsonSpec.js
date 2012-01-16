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
    it("Should match the original object", function() {
      return expect(this.json).toEqual(this.original);
    });
    return it("Should not mix up columns", function() {
      var json, mixed_up, table;
      mixed_up = [
        {
          one: 1,
          two: "2",
          three: 3,
          four: "4"
        }, {
          four: "40",
          three: 30,
          two: "20",
          one: 10
        }
      ];
      table = window.to_table(mixed_up);
      json = window.to_json(table);
      return expect(json).toEqual(this.original);
    });
  });

}).call(this);
