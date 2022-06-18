const form = document.getElementById('github-form')
 
document.addEventListener('submit',function (e){
    e.preventDefault()

    const search = document.getElementById('search').value 
    
    const originalName = search.split('').join("")

    alert (originalName)

    fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
            .then ((data) => {

    

     console.log(data)

    // document.getElementById('user-list').innerHTML=
     //< a target href= "https://www.github.com/${originalName}" ></a>
            })
        })

//fetch(' https://api.github.com')
  //.then(response => response.json())
  //.then(data => console.log(data));
  //fetch();