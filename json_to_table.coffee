window.to_table = (json) ->
  table = 
    cols:[]
    rows:[]
  
  # populate column names
  if(!json.length?)
    json = [json]
    table.is_array = false

  table.cols = Object.keys json[0]

  # populate rows
  for obj in json
    row = []
    for key, val of obj
      if(typeof(val) is 'string' or !isNaN(val))
        row.push val
      else
        # recurse
        row.push to_table(val)
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
      else
        # recurse
        eval('obj.'+col+'=to_json(val)')
    json.push obj

  if(json.length is 1 and !table.is_array)
    json[0]
  else
    json
