document.getElementById("add-popup-button").addEventListener("click", function () {
    // Create a popup form dynamically
    let popup = document.createElement("div");
    popup.classList.add("popup-form");

    popup.innerHTML = `
        <div class="popup-content">
            <h2>Add a New Book</h2>
            <input type="text" id="title" placeholder="Book Title">
            <input type="text" id="author" placeholder="Author">
            <textarea id="desc" placeholder="Description"></textarea>
            <button onclick="addBook()">Add Book</button>
            <button onclick="closePopup()">Cancel</button>
        </div>
    `;

    document.body.appendChild(popup);
});

// Function to add a book
function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let desc = document.getElementById("desc").value;

    if (title.trim() === "" || author.trim() === "" || desc.trim() === "") {
        alert("Please fill all fields.");
        return;
    }

    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    bookContainer.innerHTML = `
        <h1>${title}</h1>
        <h2>${author}</h2>
        <p>${desc}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.querySelector(".container").appendChild(bookContainer);
    closePopup();  // Close the popup after adding
}

// Function to close the popup
function closePopup() {
    document.querySelector(".popup-form").remove();
}

