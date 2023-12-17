import { socialIconsData, profileData } from "./data";
import shareIcon from "../images/icon-share.svg";

document.addEventListener("click", e => {
    const shareMobileLight = document.getElementById("share-mobile-light");
    const shareMobileDark = document.getElementById("share-mobile-dark");
    const shareDesktopDark = document.getElementById("share-desktop-dark");

    if (e.target.id === "share-btn-mobile-light") {
        shareMobileLight.classList.add("hide");
        shareMobileDark.classList.remove("hide");
    } else if (e.target.id === "share-btn-mobile-dark") {
        shareMobileLight.classList.remove("hide");
        shareMobileDark.classList.add("hide");
    } else if (e.target.id === "share-btn-desktop-light") {
        shareDesktopDark.classList.toggle("hide");
    }
})

const getInfosHtml = () => {
    return `
        <img
            class="article-component__avatar"
            src=${profileData[0].picture}
            alt=${profileData[0].attribute}
        />
        <div class="article-component__texts-wrapper">
            <p class="article-component__name">Michelle Appleton</p>
            <p class="article-component__date">28 Jun 2020</p>
        </div>
    `
};

const getSocialIconHtml = () => {
    let socialIconHtml = "";
    socialIconsData.forEach(item => {
        socialIconHtml += `
            <img
                class="social-media-icon"
                src=${item.icon}
                alt="${item.attribute}"
            />
        `
    })
    return socialIconHtml
};

const getInfosDekstopDarkHtml = () => {
    return `
        <p class="article-component__share-text">share</p>
        <div class="social-icons-wrapper">
            ${getSocialIconHtml()}
        </div>
    `
};

const getInfosMobileLightHtml = () => {
    return `
        ${getInfosHtml()}
        <div
            class="article-component__share-icon-wrapper share-icon-wrapper--light light--mobile" id="share-btn-mobile-light"
        >
            <img
                class="article-component__share-icon"
                src=${shareIcon}
                alt="Share icon"
            />
        </div>
    `
};

const getInfosDesktopLightHtml = () => {
    return `
        ${getInfosHtml()}
        <div class="article-component__infos-primary-container">
            <div
                class="article-component__infos-container infos--dark desktop--dark hide"
                id="share-desktop-dark"
            >
                ${getInfosDekstopDarkHtml()}
            </div>
            <div
                class="article-component__share-icon-wrapper share-icon-wrapper--light light--dekstop" id="share-btn-desktop-light"
            >
                <img
                    class="article-component__share-icon"
                    src=${shareIcon}
                    alt="Share icon"
                />
            </div>
        </div>
    `
};

const getInfosMobileDarkHtml = () => {
    return `
        <p class="article-component__share-text">share</p>
        <div class="social-icons-wrapper">
            ${getSocialIconHtml()}
        </div>
        <div
            class="article-component__share-icon-wrapper share-icon-wrapper--dark"
            id="share-btn-mobile-dark"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" class="article-component__share-icon">
                <path
                    fill="#FFFFFF"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
            </svg>
        </div>
    `
};

const render = () => {
    document.getElementById("share-mobile-light").innerHTML = getInfosMobileLightHtml();
    document.getElementById("share-mobile-dark").innerHTML = getInfosMobileDarkHtml();
    document.getElementById("share-desktop-light").innerHTML = getInfosDesktopLightHtml();
};

render();