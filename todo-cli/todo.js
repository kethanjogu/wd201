const todoList = () => {
  const all = []; // Use 'const' to declare the array
  const add = (todoItem) => {
    all.push({ todoItem, completed: false }); // Add the todoItem with a completed property
  };
  const markAsComplete = (index) => {
    if (all[index]) {
      all[index].completed = true;
    } else {
      console.error('Invalid index');
    }
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    return all.filter(
      (item) => item.dueDate == new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    return list
      .map(
        (item) =>
          ` ${item.completed ? "[x]" : "[ ]"} ${item.title} ${
            item.dueDate == new Date().toLocaleDateString("en-CA")
              ? ""
              : item.dueDate
          }`
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
