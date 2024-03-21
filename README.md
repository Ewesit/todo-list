
1. Restart app
2. in the data.json, add mock data to test app
3. The next thing we need to do is test our ability to read a set of test data. Use useState() hook to wire up some local state in App.js.
4.  Map the toDoList and create individual todo components
5. Create two new files in the src directory called ToDoList.js and ToDo.js.
6. Let The ToDoList.js file be the container that holds all of our todos.
7.  ToDo.js is one single row in our To Do List.
8. In the ToDoList, we will map over the todoList object that was passed down as props to create individual todos.
9. All we want from the ToDo component is the actual task that is on our list. We will also need to make use of the complete property on the todo object to indicate whether or not something is decorated with a strikethrough.

10. Toggle task completion
11. Let’s tackle toggling on and off whether or not a task is completed
12. Let’s first add a className to our individual To-Do component that will help us with styling. We are going to use a little bit of JavaScript to help us here. Here we add the attribute className and set it equal to a JavaScript expression that asks the question of whether or not the to-do is complete.
13. If our task is completed, we will use the className strike to enforce styling. Otherwise, there won’t be a className. 
14. Next, we have to create a function that will toggle the complete from true to false. This requires going back to App.js since our state resides there.
15. What we want to do is that when a user clicks on a task, we want to change the state of complete to true if it’s false or vice versa. We will use the second variable in our deconstructed useState array to do this.
16. the code below updates the completion status of a task if its id matches the provided id, and otherwise returns the task unchanged.

return task.id == id ? { ...task, complete: !task.complete } : { ...task};

17. delete completed tasks
18. Create a button that will have an onClick handler that filters out all of the completed items.

// const ToDoList = ({toDoList}) => {
//    return (
//        <div>
//            {toDoList.map(todo => {
//                return (
//                    <ToDo todo={todo} />
//                )
//            })}
//        </div>
//    );
// };
 
// export default ToDoList;
