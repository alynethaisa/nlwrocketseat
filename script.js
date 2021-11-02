const linksSocialMedias = {
  github: 'alynethaisa'
}

function changeSocialMediasLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedias[social]}`
  }
}

changeSocialMediasLink()

function getUsersGithub() {
  const url = `https://api.github.com/users/${linksSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('userName').textContent = data.name

      document.getElementById('userBio').textContent = data.bio

      document.getElementById('userGithubLink').href = data.html_url

      document.getElementById('userGithubImage').src = data.avatar_url

      document.getElementById('userGithubLogin').textContent = data.login
    })
}

getUsersGithub()
