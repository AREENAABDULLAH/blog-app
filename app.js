import{db,
    getFirestore,collection, addDoc,getDocs,Timestamp,query,orderBy,limit,doc, deleteDoc}from"./firebase.js"
   
// Get the login button element
document.querySelector(".logout-btn").addEventListener("click", function() {
    window.location.href = "home.html"
 });


// Add event listener to the logout button
// logoutButton.addEventListener('click', handleLogout);

// document.getElementById("post-button").addEventListener("click", function() {
//     // Alert show when button is clicked
//     alert("Please fill in all fields and login first.");
// });
// Assume a variable that tracks whether the user is logged in or not



  
//DOM Elements
const postButton = document.getElementById('post-button');
const alertMessage = document.getElementById('alert');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const postContentDisplay = document.getElementById('post-content-display');
const displayTitle = document.getElementById('display-title');
const displayContent = document.getElementById('display-content');
const postTime = document.getElementById('post-time');
const deleteBtn = document.getElementById('deleteBtn');

// Function to save post to Firestore
async function savePost() {
    const title = postTitleInput.value;
    const content = postContentInput.value;

    if (!title || !content) {
        alertMessage.style.display = 'block'; // Show alert if fields are empty
        return;
    }

    alertMessage.style.display = 'none'; // Hide alert

    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            content: content,
            timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        displayPost(docRef.id, title, content, new Date());
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Function to display the post
function displayPost(id, title, content, timestamp) {
    displayTitle.textContent = title;
    displayContent.textContent = content;
    postTime.textContent = `Posted on: ${timestamp.toLocaleString()}`;
    postContentDisplay.style.display = 'block'; // Show post content
}

// Function to delete the post
async function deletePost() {
    const title = displayTitle.textContent;

    if (!title) {
        alert("No post to delete!");
        return;
    }

    const postRef = doc(db, "posts", title); // Assuming title is used as ID, change if necessary

    try {
        await deleteDoc(postRef);
        console.log("Document deleted with ID: ", title);
        postContentDisplay.style.display = 'none'; // Hide post content
        postTitleInput.value = '';
        postContentInput.value = '';
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

// Event Listeners
postButton.addEventListener('click', savePost);
deleteBtn.addEventListener('click', deletePost);
  