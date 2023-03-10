# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. The base case o.e when an empty event is provided, we should pre-empt the function and not expose that data to other part of the program
2. Create a separate function for the hashing function since it used multiple times
3. Rename the variable candidate as candidateKey for readability
4. exports the function for testing. 
5. Adds test cases to explore all the paths the code can take in different sceanrios. i.e If we explore the code path in the graph, all the lead nodes have been covered.