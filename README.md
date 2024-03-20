After installation, I started creating the application
1. install -i u uid-which will help us generate IDs for the project
..........npm i u uid...................
2. next install font awesome. Refer to the link below
...............https://docs.fontawesome.com/web/use-with/react/.......................
3. To keep track of what the user is doing import -useState
---------
4. To get a user input add -onChange event - onChange={(e) => console.log(e.target.value)}
5. This - onChange={(e) => console.log(e.target.value)} - checks to see whether value is logged in console
6. Replace console.log with setValue -onChange={(e) => setValue(e.target.value)}
7. Add a function to handle submit in the form - onSubmit={handleSubmit}-
8. The function is this - 
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }

9. We need to pass value to the todo state. We can't keep the state here because other components will need to access the state as well.
10. Lets create that state in the parent component which is todoWrapper
11. import useState in the todoWrapper component
12. How to pass value from the TodoForm to the todowrapper, we have to use props..
13. In TodoWrapper, add a property called addTodo = to a function called addTodo


14. When I submit the form, I want the inserted value to disappear, value = {value}
15. After we submit the form we want to clear the form, so we set value to be an empty string, setValue("")
16. Now let's display the todos we've added.
17. Go to Todo and give a classname of todo.
18. Mark TODO as done by greying out by going to todo.jsx



1. Restart app
2. in the data.json, add mock data to test app
3. The next thing we need to do is test our ability to read a set of test data. Use useState() hook to wire up some local state in App.js.


