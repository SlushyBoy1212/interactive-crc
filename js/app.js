let page = document.getElementById('PageId')
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("page") && searchParams.get("page") !== "Contents") {
    page.innerText = searchParams.get('page');
    divshow = document.querySelectorAll('div.' + searchParams.get('page'));
    divnone = document.querySelectorAll('div.none');
    document.getElementById('home').classList.remove('hidden');
    divshow.forEach(div => {
        div.classList.remove('hidden');
    })
    divnone.forEach(div => {
        div.style.display = 'none';
    })
} else {
    page.innerText = "Contents";
}