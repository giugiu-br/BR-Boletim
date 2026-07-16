// script-war-era.js

const iconsDatabase = {
    war:         { emoji: "🔥", color: "var(--red)" },
    peace:       { emoji: "🕊️", color: "var(--white)" },
    pact:        { emoji: "🛡️", color: "var(--green)" },
    nopact:      { emoji: "🛡️❌", color: "var(--red)" },
    binoculars:  { emoji: "🔭", color: "var(--white)" },
    money:       { emoji: "💰", color: "var(--yellow)" },
    alliance:    { emoji: "🤝", color: "var(--green)" },
    noalliance:  { emoji: "🤝❌", color: "var(--red)" },
    alert:       { emoji: "⚠️", color: "var(--yellow)" },
    victory:     { emoji: "🏆", color: "var(--yellow)" },
    sword:       { emoji: "⚔️", color: "var(--green)" },
    sport:       { emoji: "⚽", color: "var(--black)" },
    map:         { emoji: "🗺️", color: "var(--blue)" }
};

// Banco de dados global de 197 países
const countriesDatabase = {
    // Americas
    br: { name: "Brasil", color: "#009c3b", url: "https://app.warera.io/country/6813b6d546e731854c7ac82f" },
    us: { name: "Estados Unidos", color: "#0A3161", url: "https://app.warera.io/country/6813b6d446e731854c7ac7e5" },
    ec: { name: "Equador", color: "#FFDD00", url: "https://app.warera.io/country/6813b6d546e731854c7ac855" },
    gt: { name: "Guatemala", color: "#4997D0", url: "https://app.warera.io/country/6813b6d546e731854c7ac8b8" },
    mx: { name: "México", color: "#006847", url: "https://app.warera.io/country/6813b6d446e731854c7ac7f8" },
    ar: { name: "Argentina", color: "#6CACE4", url: "https://app.warera.io/country/6813b6d546e731854c7ac832" },
    pe: { name: "Perú", color: "#D91023", url: "https://app.warera.io/country/6813b6d546e731854c7ac83f" },

    // Europa
    pl: { name: "Polônia", color: "#DC143C", url: "https://app.warera.io/country/6813b6d446e731854c7ac7ae" },
    lt: { name: "Lituânia", color: "#006A44", url: "https://app.warera.io/country/6813b6d446e731854c7ac7b8" },
    no: { name: "Noruega", color: "#BA0C2F", url: "https://app.warera.io/country/6813b6d546e731854c7ac668" },
    ru: { name: "Rússia", color: "#1C3578", url: "https://app.warera.io/country/6813b6d546e731854c7ac868" },
    fr: { name: "França", color: "#0055A4", url: "https://app.warera.io/country/6813b6d446e731854c7ac79a" },
    uk: { name: "Reino Unido", color: "#012169", url: "https://app.warera.io/country/6813b6d446e731854c7ac79e" },
    es: { name: "Espanha", color: "#F1BF00", url: "https://app.warera.io/country/6813b6d446e731854c7ac7a8" },
    be: { name: "Bélgica", color: "#2D2926", url: "https://app.warera.io/country/6813b6d446e731854c7ac7a4" },
    ch: { name: "Suiça", color: "#FFFFFF", url: "https://app.warera.io/country/6813b6d446e731854c7ac7a6" },

    // Oriente Medio
    ir: { name: "Irã", color: "#239F40", url: "https://app.warera.io/country/6813b6d546e731854c7ac8a6" },

    // Africa
    ma: { name: "Marrocos", color: "#006233", url: "https://app.warera.io/country/6813b6d546e731854c7ac848" },

    // Asia

    // Oceania
};

// Corrige a mesclagem usando os nomes corretos dos bancos globais declarados acima
if (typeof countries !== 'undefined') {
    Object.assign(countries, countriesDatabase);
} else {
    window.countries = countriesDatabase;
}

if (typeof icons !== 'undefined') {
    Object.assign(icons, iconsDatabase);
} else {
    window.icons = iconsDatabase;
}

// Converte código de 2 letras para emoji de bandeira oficial ISO
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

// Registra as funções de contingência no escopo global (essencial para o onerror do HTML funcionar)
window.getFlagEmoji = getFlagEmoji;

window.handleFlagError = function(imgElement, countryCode) {
    const emoji = getFlagEmoji(countryCode);
    
    const emojiSpan = document.createElement('span');
    emojiSpan.style.fontSize = '1.3rem';
    emojiSpan.style.marginRight = '6px';
    emojiSpan.style.display = 'inline-block';
    emojiSpan.style.verticalAlign = 'middle';
    emojiSpan.innerText = emoji;
    
    if (imgElement.parentNode) {
        imgElement.parentNode.replaceChild(emojiSpan, imgElement);
    }
};
