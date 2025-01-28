The solution is to ensure that you only access the data after the promise returned by `get()` has been resolved.  This is efficiently done using `async/await`:

```javascript
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    console.log(doc.data().myField); // Access data safely here
  } else {
    console.log('No such document!');
  }
}

getData();
```

This ensures that the `doc.data()` call happens only after the data has been fully loaded, avoiding errors.  Always check `doc.exists` to ensure a document was found before attempting to access the data.