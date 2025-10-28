const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("page")){
    document.getElementById('PageId').innerText = searchParams.get('page');
}