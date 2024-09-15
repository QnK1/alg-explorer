function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


window.addEventListener('load', () => {
    const heartBtns = [...document.querySelectorAll('.heart-info')];
    const savedBtns = [...document.querySelectorAll('.saved-info')];

    const url = window.location.origin;

    heartBtns.forEach((heartBtn) => {
        heartBtn.addEventListener('click', async (e) => {
            const hearted = !!parseInt(e.target.dataset.hearted);
            
            const algId = e.target.closest('.alg-card').dataset.id;
            const data = hearted ? {"heart" : "no"} : {"heart" : "yes"};
            
            try{
                const response = await fetch(`${url}/api/heart-alg/${algId}/`, {
                    method: "PUT",
                    credentials: "same-origin",
                    headers: {
                        "X-CSRFToken": getCookie('csrftoken'),
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const res = await response.json();
    
                if(res.errors && res.errors == "None."){
                    e.target.dataset.hearted = hearted ? "0" : "1";
    
                    const heartIcon = heartBtn.querySelector('i');
                    heartIcon.classList.toggle('fa-solid');
                    heartIcon.classList.toggle('fa-regular');
    
                    const heartCount = heartBtn.querySelector('span');
                    const heartCountNumber = parseInt(heartCount.textContent);
                    heartCount.textContent = hearted ? heartCountNumber - 1 : heartCountNumber + 1;
                }
                
            }
            catch{
    
            }
        });
    });

    savedBtns.forEach((savedBtn) => {
        savedBtn.addEventListener('click', async (e) => {
            const saved = !!parseInt(e.target.dataset.saved);
            
            const algId = e.target.closest('.alg-card').dataset.id;
            const data = saved ? {"saved" : "no"} : {"saved" : "yes"};
            
            try{
                const response = await fetch(`${url}/api/saved-alg/${algId}/`, {
                    method: "PUT",
                    credentials: "same-origin",
                    headers: {
                        "X-CSRFToken": getCookie('csrftoken'),
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const res = await response.json();
    
                if(res.errors && res.errors == "None."){
                    e.target.dataset.saved = saved ? "0" : "1";
    
                    const savedIcon = savedBtn.querySelector('i');
                    savedIcon.classList.toggle('fa-solid');
                    savedIcon.classList.toggle('fa-regular');
    
                    const savedCount = savedBtn.querySelector('span');
                    const savedCountNumber = parseInt(savedCount.textContent);
                    savedCount.textContent = saved ? savedCountNumber - 1 : savedCountNumber + 1;
                }
                
            }
            catch{
    
            }
        });
    });
});