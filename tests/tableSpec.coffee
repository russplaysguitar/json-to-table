
describe "Table", ->
	beforeEach ->
		x = [{one:1,two:"2",three:3,four:"4"},{one:10,two:"20",three:30,four:"40"}]
		@table = window.to_table(x)

	it "Should be an object", ->
		expect(typeof(@table)).toBe('object')

	it "Should have columns", ->
		expect(@table.cols).toBeDefined()
	
	it "Should have rows", ->
		expect(@table.rows).toBeDefined()

	it "Should have correctly ordered columns", ->
		cols = @table.cols
		expect(cols[0]).toBe "one"
		expect(cols[1]).toBe "two"
		expect(cols[2]).toBe "three"
		expect(cols[3]).toBe "four"

	it "Should have correctly ordered rows", ->
		row = @table.rows[0]
		expect(row[0]).toBe 1
		expect(row[1]).toBe "2"
		expect(row[2]).toBe 3
		expect(row[3]).toBe "4"

	it "Should have multiple rows", ->
		expect(@table.rows[0]).toBeDefined()
		expect(@table.rows[1]).toBeDefined()

	it "Should have correct data", ->
		expected =
			cols: [
				"one"
				"two"
				"three"
				"four"
			]
			rows: [
				[
					1
					"2"
					3
					"4"
				],
				[
					10
					"20"
					30
					"40"
				]
			]
		
		expect(@table).toEqual(expected)