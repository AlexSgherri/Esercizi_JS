// document.getElementById("fetch-post")
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json;charset=utf-8'
//     },
//     body: new FormData(formElem)
//   });
const buttonFetch = document.querySelector("#fetch-post")
const buttonPost = document.querySelector("#save-post")

async function fetchingData(){
  const dataFetched = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json;charset=utf-8'
    },
    body: new FormData(formElem)
  })
  console.log(dataFetched)
  return dataFetched;
}


buttonFetch.addEventListener("click", fetchingData());