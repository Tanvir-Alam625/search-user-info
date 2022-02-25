const container = document.getElementById('main');
const checkUser = ()=>{
    const input= document.getElementById('userId');
    const inputValue = parseInt(input.value)
    input.value=""
    if(isNaN(inputValue)){
        document.getElementById('error').innerText = "Please Enter the Valid Number";
    }else if(inputValue<1 || inputValue>500){
        document.getElementById('error').innerText = "Please enter the number more than 0 and less than 501";
    }else{
        document.getElementById('error').innerText='';
        const url = `https://jsonplaceholder.typicode.com/comments/${inputValue}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => getUserInfo(data));
    }
}

const getUserInfo = user =>{
    container.textContent = "";
    const div = document.createElement('div');
    div.classList.add('search-result');
    div.innerHTML = `
                    <div class="user-image mb-3">
                    <img src="./image/undraw_profile_pic_ic-5-t.svg" width="100" alt="user">
                </div>
                <div class="user-email mb-3">
                    <h3>${user.email}</h3>
                </div>
                <div class="user-title mb-3">
                    <h4 class="user-name">${user.name}</h4>
                </div>
                <div class="user-description mb-3">
                    <p>${user.body}</p>
                </div>
                <div class="user-id w-75">
                    <span>User Id: ${user.id}</span>
                    <span>Post Id: ${user.postId}</span>
                </div>
    `;
    container.appendChild(div);

}