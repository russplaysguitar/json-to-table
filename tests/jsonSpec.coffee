describe "Json", ->
	beforeEach ->
		@original = [{one:1,two:"2",three:3,four:"4"},{one:10,two:"20",three:30,four:"40"}]
		@table = window.to_table(@original)
		@json = window.to_json(@table)

	it "Should be an object", ->
		expect(typeof(@json)).toBe('object')

	it "Should match the original object", ->
		expect(@json).toEqual(@original)