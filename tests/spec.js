(function() {

  describe("Table", function() {
    beforeEach(function() {
      var x;
      x = [
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
      return this.table = window.to_table(x);
    });
    it("Should be an object", function() {
      return expect(typeof this.table).toBe('object');
    });
    it("Should have columns", function() {
      return expect(this.table.cols).toBeDefined();
    });
    it("Should have rows", function() {
      return expect(this.table.rows).toBeDefined();
    });
    it("Should have correctly ordered columns", function() {
      var cols;
      cols = this.table.cols;
      expect(cols[0]).toBe("one");
      expect(cols[1]).toBe("two");
      expect(cols[2]).toBe("three");
      return expect(cols[3]).toBe("four");
    });
    it("Should have correctly ordered rows", function() {
      var row;
      row = this.table.rows[0];
      expect(row[0]).toBe(1);
      expect(row[1]).toBe("2");
      expect(row[2]).toBe(3);
      return expect(row[3]).toBe("4");
    });
    it("Should have multiple rows", function() {
      expect(this.table.rows[0]).toBeDefined();
      return expect(this.table.rows[1]).toBeDefined();
    });
    it("Should have correct data", function() {
      return expect(false).toBeTruthy();
    });
    return true;
  });

}).call(this);
