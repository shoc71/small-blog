const displayTable = document.querySelector("#displayTable tbody");
const orderContentButton = document.querySelector("#order");
const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("#displayTable tbody tr")
let reverseOrderButtonClicked = false;

const posts = {
    Intelligence: `<a href="./posts/intelligence.html">Intelligence</a>`,
    Smart_Chars: `<a href="./posts/smart-chars.html">Smart Characters</a>`,
    Social_Ladder: `<a href="./posts/social-status.html">Social Status</a>`
}

const tableContents = [
    { id: 1, link: posts.Intelligence, date:"2025-10-20", tags: ["Analysis", "INCOMPLETE"]},
    { id: 2, link: posts.Smart_Chars, date:"2025-10-22", tags: ["Hot Take", "INCOMPLETE"]},
    { id: 3, link: posts.Social_Ladder, date:"2025-11-11", tags: ["New", "INCOMPLETE"]},
]

function renderReversedTable() {
    return tableContents.reverse()
}

let display = reverseOrderButtonClicked ? tableContents : renderReversedTable();

// mouse clicks
orderContentButton.addEventListener("click", () => {
    reverseOrderButtonClicked = !reverseOrderButtonClicked

    displayTable.innerHTML = display
        .map(rowContent => `
        <tr>
            <td>${rowContent.id}</td>
            <td>${rowContent.link}</td>
            <td>${rowContent.date}</td>
            <td>${rowContent.related}</td>
            <td>${rowContent.tags}</td>
        </tr>
    `).join("");
});

// 
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase()

    console.log(filter)

    rows.forEach(row=> {
        const text = row.textContent.toLocaleLowerCase();

        row.classList.toggle('hidden', !text.includes(filter))
    })
});

// window init
window.addEventListener("DOMContentLoaded", () => {
    displayTable.innerHTML = display
        .map(rowContent => `
        <tr>
            <td>${rowContent.id}</td>
            <td>${rowContent.link}</td>
            <td>${rowContent.date}</td>
            <td>${rowContent.related}</td>
            <td>${rowContent.tags}</td>
        </tr>
    `).join("");
});