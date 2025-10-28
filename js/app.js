const page = document.getElementById('PageId');
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("page")){
    page.innerText = searchParams.page;
}