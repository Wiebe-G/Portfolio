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
            let RepoDescDisplay = document.createElement('p');
            let RepoTitle = Repos[i].Name;
            RepoTitleDisplay.textContent = RepoTitle;
            let RepoDesc = Repos[i].description;
            RepoDescDisplay.textContent = RepoDesc;
            Repo === null || Repo === void 0 ? void 0 : Repo.appendChild(RepoTitleDisplay);
            Repo === null || Repo === void 0 ? void 0 : Repo.appendChild(RepoDescDisplay);
            Repo.classList.add('ProjectDiv');
            ReposDisplay === null || ReposDisplay === void 0 ? void 0 : ReposDisplay.appendChild(Repo);
            console.log(Repos[i]);
        }
    });
}
FetchGithubRepos();
