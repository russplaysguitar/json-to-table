window.to_table = (json) ->
  table = 
    cols:[]
    rows:[]
  
  # wrap json in array if necessary
  if(!json.length?)
    json = [json]
    table.is_array = false

  # populate column names
  table.cols = Object.keys json[0]

  # populate rows
  for obj in json
    row = []
    i = 0
    for key, val of obj
      if key isnt table.cols[i]
        # fix invalid column order
        val = eval("obj."+table.cols[i])
        
      if(typeof(val) is 'string' or !isNaN(val))
        # handle normal value
        row.push val
      else if val?
        # recurse for nested objects
        row.push to_table(val)
      i++
    table.rows.push row

  table


window.to_json = (table) ->
  json = []

  for row in table.rows
    obj = {}
    for key, col of table.cols
      val = row[key]
      if typeof(val) is 'string' or !isNaN(val)
        eval("obj."+col+"=val")
      else if val?
        # recurse
        eval('obj.'+col+'=to_json(val)')
    json.push obj

  if(json.length is 1 and !table.is_array)
    json[0]
  else
    json
