let page = document.getElementById('PageId')
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("page") && searchParams.get("page") !== "Contents") {
    page.innerText = searchParams.get('page');
    divshow = document.querySelectorAll('div.' + searchParams.get('page'));
    document.getElementById('home').classList.remove('hidden');
    divnone = document.querySelectorAll('div.none');
    divnone.forEach(div => {
        div.classList.add('hidden');
    })
    divshow.forEach(div => {
        div.classList.remove('hidden');
    })
    if (searchParams.get("page") === "hidden") {
        document.getElementById('id').classList.remove('hidden');
    } else {
        document.getElementById('id').innerText = "";
    }
} else {
    page.innerText = "Contents";
}