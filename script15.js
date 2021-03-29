function countTags (tagType) {
  var tagArray = document.getElementsByTagName(tagType);

  console.log('There are ' + tagArray.length + ' tags of type ' + tagType + ' on the page.');
}
