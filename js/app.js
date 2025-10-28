const pageId = document.getElementById('PageId');
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("page")){
    pageId.innerText = searchParams.page;
}