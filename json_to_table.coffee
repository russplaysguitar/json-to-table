window.to_table = (json) ->
  table = 
    cols:[]
    rows:[]

  # wrap json in array if necessary
  if(!json.length? or (json.length? and json.length < 1))
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
        val = obj[table.cols[i]]

      if(!val? or typeof(val) is 'string' or typeof(val) is 'number' or typeof(val) is 'boolean' or val.length?)
        # handle normal value
        row.push val
      else if(val? and typeof(val) is 'object')
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
      if(!val? or typeof(val) is 'string' or typeof(val) is 'number' or typeof(val) is 'boolean' or val.length?)
        obj[col] = val
      else if(val? and typeof(val) is 'object')
        # recurse
        obj[col] = to_json(val)
      else if(!val?)
        obj[col] = null
    json.push obj

  if(json.length is 1 and !table.is_array)
    json[0]
  else
    json
