(function() {

  window.to_table = function(json) {
    var key, obj, row, table, val, _i, _len;
    table = {
      cols: [],
      rows: []
    };
    if (!(json.length != null)) {
      json = [json];
      table.is_array = false;
    }
    table.cols = Object.keys(json[0]);
    for (_i = 0, _len = json.length; _i < _len; _i++) {
      obj = json[_i];
      row = [];
      for (key in obj) {
        val = obj[key];
        if (typeof val === 'string' || !isNaN(val)) {
          row.push(val);
        } else {
          row.push(to_table(val));
        }
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
        if (typeof val === 'string' || !isNaN(val)) {
          eval("obj." + col + "=val");
        } else {
          eval('obj.' + col + '=to_json(val)');
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
