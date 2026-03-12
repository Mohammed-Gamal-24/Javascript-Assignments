console.groupCollapsed("Group 1");
  console.log("Message One");
  console.log("Message Two");
  console.groupCollapsed("Group Child");
    console.log("Message One");
    console.log("Message Two");
    console.groupCollapsed("Grand Child Group")
      console.log("Message One");
      console.log("Message Two");
    console.groupEnd()
  console.groupEnd()
console.groupEnd()

console.groupCollapsed("Group 2")
  console.log("Message One");
  console.log("Message Two");