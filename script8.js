This function uses the slice() method. It extracts a part of a string and returns a new string
function mixUp(string1, string2) {
  return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);
}
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
