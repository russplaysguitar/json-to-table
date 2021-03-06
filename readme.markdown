# json-to-table

This project provides two functions that convert between JSON and "table" format:

`window.to_table(json)` : converts from JSON to table format  
`window.to_json(table)` : converts from table format to JSON

Converting to table format can be useful if you have an array of objects that have the same properties. When the resulting table is rendered as a string, it should be smaller in size than the original JSON because tables don't label every single data item like JSON does. 

Notes:

*  to_table() does not validate column names, so you must ensure that all of the objects have the same properties!
*  to_table() and to_json() will support nested objects


## Sample usage:

### CoffeeScript

Initialize array of objects  
`my_obj_array = [{"col1":"val1","col2":"val2"},{"col1":"val3","col2":"val4"}]`

Convert to table format

    my_table = window.to_table(my_obj_array)
    ### 
      my_table is:
      {
        "cols":["col1","col2"],
        "rows":[
           ["val1","val2"],
           ["val3","val4"]
        ]
      }
    ###

Convert back into array of objects  
`my_obj_array_again = window.to_json(my_table)`


### Javascript

Initialize array of objects  
`var my_obj_array = [{"col1":"val1","col2":"val2"},{"col1":"val3","col2":"val4"}];`

Convert to table format

    var my_table = window.to_table(my_obj_array);
    /* 
      my_table is:
      {
        "cols":["col1","col2"],
        "rows":[
           ["val1","val2"],
           ["val3","val4"]
        ]
      }
    */


Convert back into array of objects  
`var my_obj_array_again = window.to_json(my_table);`

