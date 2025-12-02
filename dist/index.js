"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let APIUrl = "https://api.github.com/users/Wiebe-G/repos";
const ReposDisplay = document.getElementById('ReposDisplay');
function FetchGithubRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(APIUrl);
        if (!response.ok) {
            throw new Error("Error met fetchen van de repos");
        }
        const Repos = yield response.json();
        for (let i = 0; i < Repos.length; i++) {
            let Repo = document.createElement('div');
            let RepoTitleDisplay = document.createElement('h1');
            RepoTitleDisplay.classList.add('font-bold');
            let RepoDescDisplay = document.createElement('p');
            let RepoTitle = Repos[i].name;
            RepoTitleDisplay.textContent = RepoTitle;
            let RepoDesc = Repos[i].description;
            RepoDescDisplay.textContent = RepoDesc;
            Repo.appendChild(RepoTitleDisplay);
            Repo.appendChild(RepoDescDisplay);
            Repo.classList.add('ProjectDiv');
            Repo.addEventListener('click', () => {
                window.open(Repos[i].html_url);
            });
            ReposDisplay === null || ReposDisplay === void 0 ? void 0 : ReposDisplay.appendChild(Repo);
        }
    });
}
FetchGithubRepos();
const ShowMenu = document.getElementById('ShowMenu');
const Menu = document.getElementById('Menu');
ShowMenu.addEventListener('click', () => {
    Menu === null || Menu === void 0 ? void 0 : Menu.classList.toggle('hidden');
    // zorg ervoor dat als het zichtbaar is, de achtergrond wazig wordt en de lijst meer in focus komt
});
const DarkModeButton = document.getElementById('DarkModeButton');
DarkModeButton === null || DarkModeButton === void 0 ? void 0 : DarkModeButton.addEventListener('click', () => {
    console.log(1);
    document.documentElement.classList.toggle('dark');
});
