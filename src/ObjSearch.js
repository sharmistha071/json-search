var elements = [{
  "fields": null,
  "id_base": "nv_container",
  "icon": "layout",
  "name": "container",
  "is_container": true,
  "elements": [
   {
      "id_base": "novo_example_elementsec",
      "name": "hello",
      "icon": "edit",
      "view": {}
    },
    {
      "id_base": "novo_example_elementsec",
      "name": "hello",
      "icon": "layout",
      "view": {}
    }
  ]
},
{
  "id_base": "novo_example_elementsec",
  "name": "hello",
  "icon": "edit",
  "view": {}
}
];

function findNested(obj, key, value) {
// Base case
if (obj[key] === value) {
  return obj;
} else {
  for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
    if (typeof obj[i] == 'object') {
      var found = this.findNested(obj[i], key, value);
      if (found) {
        // If the object was found in the recursive call, bubble it up.
        return found;
      }
    }
  }
}
}

console.log(findNested(elements, "icon", "layout")); // returns object
console.log(findNested(elements, "icon", "edit")); // returns object
console.log(findNested(elements, "foo", "bar")); // returns undefined