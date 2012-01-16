(function() {

  window.to_table = function(json) {
    var i, key, obj, row, table, val, _i, _len;
    table = {
      cols: [],
      rows: []
    };
    if (!(json.length != null) || ((json.length != null) && json.length < 1)) {
      json = [json];
      table.is_array = false;
    }
    table.cols = Object.keys(json[0]);
    for (_i = 0, _len = json.length; _i < _len; _i++) {
      obj = json[_i];
      row = [];
      i = 0;
      for (key in obj) {
        val = obj[key];
        if (key !== table.cols[i]) val = eval("obj." + table.cols[i]);
        if (!(val != null) || typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean' || (val.length != null)) {
          row.push(val);
        } else if ((val != null) && typeof val === 'object') {
          row.push(to_table(val));
        }
        i++;
      }
      table.rows.push(row);
    }
    return table;
  };

  window.to_json = function(table) {
    var col, json, key, obj, row, val, _i, _len, _ref, _ref2;
    json = [];
    _ref = table.rows;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      row = _ref[_i];
      obj = {};
      _ref2 = table.cols;
      for (key in _ref2) {
        col = _ref2[key];
        val = row[key];
        if (!(val != null) || typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean' || (val.length != null)) {
          eval("obj." + col + "=val");
        } else if ((val != null) && typeof val === 'object') {
          eval('obj.' + col + '=to_json(val)');
        } else if (!(val != null)) {
          eval("obj." + col + "=null");
        }
      }
      json.push(obj);
    }
    if (json.length === 1 && !table.is_array) {
      return json[0];
    } else {
      return json;
    }
  };

}).call(this);
