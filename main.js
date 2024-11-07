/* Students should 
design their functions to handle data structures (e.g., objects, arrays), 
maintain clean separation of concerns, 
and avoid code duplication.
*/

// Mock data
let tasks = [
    { category: 'Work', task: 'Finish project report' },
    { category: 'Work', task: 'Attend team meeting' },
    { category: 'Personal', task: 'Buy groceries' },
    { category: 'Personal', task: 'Call mom' },
    { category: 'Home', task: 'Clean the kitchen' },
    { category: 'Home', task: 'Fix the leaky faucet' },
];

function addTask(category, task) {
    tasks.push({ category: category, task: task });
}

function listTasks(category) {
    if (category === 'all') {
        return tasks.map(t => `${t.category}: ${t.task}`);
    }

    return tasks.filter(t => t.category === category)
                .map(t => `${t.category}: ${t.task}`);
}

function removeTask(category, task) {
    const index = tasks.findIndex(t => t.category === category && t.task === task);
    if (index !== -1) {
        tasks.splice(index, 1); 
    }
}


// Test cases

console.log("Test Case 1: List all tasks in all categories");
console.log(listTasks('all'));
// Expected Outcome: [ 'Work: Finish project report', 'Work: Attend team meeting', 'Personal: Buy groceries', 'Personal: Call mom', 'Home: Clean the kitchen', 'Home: Fix the leaky faucet' ]

console.log("\nTest Case 2: List all tasks in 'Work' category");
console.log(listTasks('Work'));
// Expected Outcome: [ 'Work: Finish project report', 'Work: Attend team meeting' ]

console.log("\nTest Case 3: Add a new task to 'Personal' category");
addTask('Personal', 'Go for a walk');
console.log(listTasks('Personal'));
// Expected Outcome: [ 'Personal: Buy groceries', 'Personal: Call mom', 'Personal: Go for a walk' ]

console.log("\nTest Case 4: Remove a specific task from 'Home' category");
removeTask('Home', 'Fix the leaky faucet');
console.log(listTasks('Home'));
// Expected Outcome: [ 'Home: Clean the kitchen' ]

console.log("\nTest Case 5: List all tasks in all categories after modification");
console.log(listTasks('all'));
// Expected Outcome: [ 'Work: Finish project report', 'Work: Attend team meeting', 'Personal: Buy groceries', 'Personal: Call mom', 'Personal: Go for a walk', 'Home: Clean the kitchen' ]

console.log("\nTest Case 6: Remove a task that doesn't exist");
removeTask('Work', 'Attend lunch meeting');
console.log(listTasks('Work'));
// Expected Outcome: [ 'Work: Finish project report', 'Work: Attend team meeting' ] (no change)

console.log("\nTest Case 7: List all tasks in 'Personal' category after adding new task");
console.log(listTasks('Personal'));
// Expected Outcome: [ 'Personal: Buy groceries', 'Personal: Call mom', 'Personal: Go for a walk' ]