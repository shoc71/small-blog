// window init
window.addEventListener("DOMContentLoaded", () => {
    const displayTable = document.querySelector("#displayTable tbody");
    const orderContentButton = document.querySelector("#order");
    const searchInput = document.getElementById("searchInput");
    let reverseOrderButtonClicked = false;

    const posts = {
        Intelligence: `<a href="./posts/intelligence.html" class="link-white-hover">Intelligence</a>`,
        Smart_Chars: `<a href="./posts/smart-chars.html" class="link-white-hover">Smart Characters</a>`,
        Social_Ladder: `<a href="./posts/social-status.html" class="link-white-hover">Social Status</a>`
    }

    const tableContents = [
        { id: 1, link: posts.Intelligence, date:"2025-10-20", tags: ["Analysis", "INCOMPLETE"]},
        { id: 2, link: posts.Smart_Chars, date:"2025-10-22", tags: ["Hot Take", "INCOMPLETE"]},
        { id: 3, link: posts.Social_Ladder, date:"2025-11-11", tags: ["New", "INCOMPLETE"]},
    ]

    function renderTable(data) {
        displayTable.innerHTML = data.map(row => `
            <tr>
                <td>${row.id}</td>
                <td>${row.link}</td>
                <td>${row.date}</td>
                <td>${row.related || undefined}</td>
                <td>${row.tags.join(", ")}</td>
            </tr>
        `).join("");
    }

    // init render
    let display = reverseOrderButtonClicked ? tableContents : [...tableContents].reverse();
    renderTable(display)

    // mouse clicks
    orderContentButton.addEventListener("click", () => {
        reverseOrderButtonClicked = !reverseOrderButtonClicked
        let display = reverseOrderButtonClicked ? tableContents : [...tableContents].reverse();
        renderTable(display)
    });

    // search filter
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase()
        const rows = document.querySelectorAll("#displayTable tbody tr")
        rows.forEach(row=> {
            const text = row.textContent.toLocaleLowerCase();
            row.classList.toggle('hidden', !text.includes(filter))
        })
    });
});