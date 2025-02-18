console.log(`STOP! YOU ARE NOT ALLOWED TO VIEW THE SOURCE CODE!\nIF YOU WANT TO SEE THE SOURCE CODE, PLEASE CONTACT THE OWNER OF THE WEBSITE!`);

function search() {
    console.log("Search button clicked");
    var input = document.getElementById("searchbar").value;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(input);
    window.open(url, "_blank");
}