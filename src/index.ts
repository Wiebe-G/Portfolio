let APIUrl: string = "https://api.github.com/users/Wiebe-G/repos";
const ReposDisplay = document.getElementById('ReposDisplay');
async function FetchGithubRepos() {
    const response: Response = await fetch(APIUrl);
    if (!response.ok) {
        throw new Error("Error met fetchen van de repos");
    }
    const Repos = await response.json();
    for (let i = 0; i < Repos.length; i++) {
        let Repo = document.createElement('div');
        let RepoTitleDisplay = document.createElement('h1');
        let RepoDescDisplay = document.createElement('p');

        let RepoTitle = Repos[i].Name;
        RepoTitleDisplay.textContent = RepoTitle;

        let RepoDesc = Repos[i].description;
        RepoDescDisplay.textContent = RepoDesc;

        Repo?.appendChild(RepoTitleDisplay);
        Repo?.appendChild(RepoDescDisplay);

        Repo.classList.add('ProjectDiv');
        ReposDisplay?.appendChild(Repo)
        console.log(Repos[i]);
    }
}

FetchGithubRepos();