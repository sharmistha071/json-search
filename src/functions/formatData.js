import * as data from '../categories.json';
 
const jsonData = data.default;

const formatData = [];

const findParent = (parent, child) => {
  for (let idx = 0; idx < jsonData.length; idx++) {
    if (parent === jsonData[idx].Id) {
      if (jsonData[idx].hasOwnProperty("subcategory")) {
        jsonData[idx].subcategory.push({ ...jsonData[child] });
      } else {
        jsonData[idx].subcategory = [{ ...jsonData[child] }];
      }
    }
  } 
};

for (let i = 0; i < jsonData.length; i++) {
  if (jsonData[i].ParentCategoryId > 0) {
    findParent(jsonData[i].ParentCategoryId, i);
  }else {
    formatData.push(jsonData[i]);
  }
}

export default formatData;
