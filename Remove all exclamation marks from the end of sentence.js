function remove(string) {
  const remove = string.replace(/!+$/g, "");

  return remove;
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!!Hi"));
