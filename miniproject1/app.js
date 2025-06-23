const form = document.getElementById("searchdata");
const usernameInput = document.getElementById("takeusername");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (username) {
    fetchData(username);
  }
});

async function fetchData(username) {
  document.getElementById("avatar").style.display = "none";
  const reposDiv = document.getElementById("repos");
  reposDiv.innerHTML = "Loading......";

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("User not found......");
    const userData = await userRes.json();
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await reposRes.json();

    document.getElementById("avatar").src = userData.avatar_url;
    document.getElementById("avatar").style.display = "block";
    document.getElementById("name").textContent = userData.name || "N/A";
    document.getElementById("email").textContent = userData.email || "Not Public";
    document.getElementById("uname").textContent = userData.login;
    document.getElementById("location").textContent = userData.location || "N/A";
    document.getElementById("blog").textContent = userData.blog || "Not found";
    document.getElementById("company").textContent = userData.company || "N/A";
    document.getElementById("followers").textContent = userData.followers;
    document.getElementById("following").textContent = userData.following;
    document.getElementById("public_repos").textContent = userData.public_repos;
    document.getElementById("jdate").textContent = new Date(userData.created_at).toLocaleDateString();
    document.getElementById("type").textContent = userData.user_view_type;
    document.getElementById("lastdate").textContent = new Date(userData.updated_at).toLocaleDateString();
    let a=userData.twitter_username;
    if(a!=null)
    {
      document.getElementById("so").innerHTML = `<a href="https://x.com/${userData.twitter_username}" target="_blank">${userData.twitter_username}</a>`;
    }
    else
    {
      document.getElementById("so").textContent = "Not found"
    }
    const reposHTML = reposData.map(repo => `
      <div class="repo">
        <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong><br>
        ${repo.description} <br>
        Language: ${repo.language || "Check out repository"}
      </div>
    `).join("");

    reposDiv.innerHTML = `<h3>Repositories</h3>${reposHTML}`;

  } catch (error) {
    document.getElementById("repos").innerHTML = `<p style="color:red;">${error.message}</p>`;
    avatar.style.display = "none";
    document.getElementById("name").textContent = "User not found";
    document.getElementById("email").textContent = "User not found";
    document.getElementById("uname").textContent = "User not found";
    document.getElementById("location").textContent = "User not found";
    document.getElementById("blog").textContent = "User not found";
    document.getElementById("company").textContent = "User not found";
    document.getElementById("followers").textContent = "##";
    document.getElementById("following").textContent = "##";
    document.getElementById("public_repos").textContent = "##";
    document.getElementById("jdate").textContent = "##/##/####";
    document.getElementById("type").textContent = "User not found";
    document.getElementById("lastdate").textContent = "##/##/####";
    document.getElementById("so").textContent = "User not found";
    document.querySelectorAll(".a").forEach(function(el) {
    el.style.color = "red";
  });

  }
}
