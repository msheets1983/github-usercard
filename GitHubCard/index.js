/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')

const profilePromise = axios.get('https://api.github.com/users/msheets1983')
profilePromise
    .then(data => {
        cards.appendChild(createCard(data.data))
    })

.catch(error => {
    console.log('Error connecting to API', error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/




/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersPromise = axios.get('https://api.github.com/users/msheets1983/followers')
followersPromise
    .then(data => {
        // console.log(data.data)
        const profiles = data.data
        profiles.forEach(profile => {
            console.log(profile)
            const profilePromise = axios.get(profile.url)
            profilePromise
                .then(data => {
                    cards.appendChild(createCard(data.data))
                })


            .catch(error => {
                console.log('Error connecting to API', error)
            })
        })
    })

.catch(error => {
        console.log('Error connecting to API', error)
    })
    /* Step 3: Create a function that accepts a single object as its only argument,
              Using DOM methods and properties, create a component that will return the following DOM element:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:  
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>

    */

function createCard(object) {
    const card = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardInfo = document.createElement('div')
    const cardName = document.createElement('h3')
    const cardUsername = document.createElement('p')
    const cardLocation = document.createElement('p')
    const cardProfile = document.createElement('p')
    const cardProfileUrl = document.createElement('a')
    const cardFollowers = document.createElement('p')
    const cardFollowing = document.createElement('p')
    const cardBio = document.createElement('p')


    card.classList.add('card')
    cardInfo.classList.add('card-info')
    cardName.classList.add('name')
    cardUsername.classList.add('username')

    cardImg.src = `${object.avatar_url}`
    cardName.textContent = `${object.name}`
    cardUsername.textContent = `${object.login}`
    cardLocation.textContent = `Location: ${object.location}`
    cardProfile.textContent = `Profile:`
    cardProfileUrl.href = `${object.html_url}`
    cardFollowers.textContent = `Followers: ${object.followers}`
    cardFollowing.textContent = `Following: ${object.following}`
    cardBio.textContent = `Bio: ${object.bio}`

    card.appendChild(cardImg)
    card.appendChild(cardInfo)
    cardInfo.appendChild(cardName)
    cardInfo.appendChild(cardUsername)
    cardInfo.appendChild(cardLocation)
    cardInfo.appendChild(cardProfile)
    cardInfo.appendChild(cardFollowers)
    cardInfo.appendChild(cardFollowing)
    cardInfo.appendChild(cardBio)

    cardProfile.appendChild(cardProfileUrl)

    return card
}






/*login: "msheets1983"
id: 60555279
node_id: "MDQ6VXNlcjYwNTU1Mjc5"
avatar_url: "https://avatars3.githubusercontent.com/u/60555279?v=4"
gravatar_id: ""
url: "https://api.github.com/users/msheets1983"
html_url: "https://github.com/msheets1983"
followers_url: "https://api.github.com/users/msheets1983/followers"
following_url: "https://api.github.com/users/msheets1983/following{/other_user}"
gists_url: "https://api.github.com/users/msheets1983/gists{/gist_id}"
starred_url: "https://api.github.com/users/msheets1983/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/msheets1983/subscriptions"
organizations_url: "https://api.github.com/users/msheets1983/orgs"
repos_url: "https://api.github.com/users/msheets1983/repos"
events_url: "https://api.github.com/users/msheets1983/events{/privacy}"
received_events_url: "https://api.github.com/users/msheets1983/received_events"
type: "User"
site_admin: false
name: "Michael Sheets"
company: "Lambda School - Full Stack Web Dev Student"
blog: ""
location: "Chicago"
email: null
hireable: null
bio: null
public_repos: 20
public_gists: 0
followers: 2
following: 0
created_at: "2020-02-01T20:50:18Z"
updated_at: "2020-04-08T18:56:30Z"
}
*/
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/