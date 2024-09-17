window.addEventListener('load', () => {
    const searchInput = document.querySelector('.searchbar-input');
    const searchTags = [...document.querySelectorAll('.search-tag')];
    const tagsFilter = document.querySelector('.tags-filter');
    const searchbarContainer = document.getElementById('searchbar-container');
    const tagsInput = document.querySelector('.tags-input');
    

    searchInput.addEventListener('focus', () => {
        tagsFilter.classList.remove('display-none');
    });

    searchInput.addEventListener('blur', (e) => {
        tagsFilter.classList.add('display-none');
    });

    searchTags.forEach((tagEl) => {
        tagEl.addEventListener('mousedown', (e) => {
            e.preventDefault();
            
            e.target.classList.toggle('search-tag-selected');
            e.target.dataset.selected = e.target.dataset.selected === "1" ? 0 : 1;

            let tagsQuery = "";
            searchTags.forEach((tag) => {
                if(tag.dataset.selected === "1")
                    tagsQuery += `${tag.dataset.tagName},`;
            });

            tagsInput.value = tagsQuery;
        });
    });
});


