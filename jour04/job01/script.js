const button = document.getElementById("button");
const result = document.getElementById("result");

button.onclick = function(){
 fetch('expression.txt')   
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
       
        result.textContent = data;
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}