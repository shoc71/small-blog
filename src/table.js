import { postData } from "./pages.js";

// ------------------
// Constant
// ------------------
const displayTableData = document.querySelector("#displayTable tbody");

// Create links dynamically
const posts = Object.fromEntries(
  postData.map(post => [
    post.name.replace(/\s+/g, "_"),
    `<a href="./posts/${post.name.toLowerCase().replace(/\s+/g, "-")}.html" class="link-white-hover">${post.name}</a>`
  ])
);

const tagColors = {
  "Analysis": "#1abc9c",
  "Hot Take": "#e74c3c",
  "New": "#3498db",
  "Idea": "#f1c40f",
  "Thought": "#9b59b6",
  "Tech": "#16a085",
  "Past": "#95a5a6",
  "Research": "#2980b9",
  "Books": "#d35400",
  "Mind": "#8e44ad",
  "Society": "#2ecc71",
  "INCOMPLETE": "#7f8c8d"
};

const tableContents = postData.map((post, index) => ({
  id: index + 1,
  link: posts[post.name.replace(/\s+/g, "_")],
  date: post.date,
  tags: post.tags
}));

// ------------------
// Render function
// ------------------
function renderTable() {

    displayTableData.innerHTML = tableContents.map(row => `
        <tr>
        <td>${row.id}</td>
        <td style="">${row.link}</td>
        <td>${row.date}</td>
        <td style="max-width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
            ${row.tags.map(tag => `
                <span class="tag-badge" style="background-color: ${tagColors[tag] || '#555'}">
                    ${tag}
                </span>
            `).join(" ")}
        </td>
        </tr>
    `).join("");
}

// Initial render
window.addEventListener("DOMContentLoaded", () => {
  renderTable();
});