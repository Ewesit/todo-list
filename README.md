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
10. 

