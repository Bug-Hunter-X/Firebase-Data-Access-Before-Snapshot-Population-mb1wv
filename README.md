# Firebase Data Access Before Snapshot Population

This repository demonstrates a common error when working with Firebase: attempting to access data from a document snapshot before the data has fully loaded.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The issue arises when accessing document properties too early in an asynchronous operation.  Firebase's data retrieval is asynchronous; you must await the completion of the promise before accessing data.

## Solution

The solution involves using asynchronous methods correctly.  Ensure that you're accessing data only after the promise returned by the `get()` method (or similar asynchronous function) has resolved.  `async/await` syntax simplifies this process.