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
    ag: { name: "Antígua e Barbuda", color: "#000000", url: "" },
    ar: { name: "Argentina", color: "#6CACE4", url: "https://app.warera.io/country/6813b6d546e731854c7ac832" },
    bs: { name: "Bahamas", color: "#00AEC7", url: "https://app.warera.io/country/6813b6d546e731854c7ac889" },
    bb: { name: "Barbados", color: "#00267F", url: "" },
    bz: { name: "Belize", color: "#003F87", url: "https://app.warera.io/country/6813b6d546e731854c7ac8bb" },
    bo: { name: "Bolívia", color: "#D52B1E", url: "" },
    br: { name: "Brasil", color: "#009c3b", url: "https://app.warera.io/country/6813b6d546e731854c7ac82f" },
    ca: { name: "Canadá", color: "#FF0000", url: "" },
    cl: { name: "Chile", color: "#0039A6", url: "" },
    co: { name: "Colômbia", color: "#FCD116", url: "https://app.warera.io/country/6813b6d546e731854c7ac85f" },
    cr: { name: "Costa Rica", color: "#002F6C", url: "https://app.warera.io/country/6813b6d546e731854c7ac8a9" },
    cu: { name: "Cuba", color: "#CC1823", url: "" },
    dm: { name: "Dominica", color: "#006B3F", url: "" },
    es: { name: "El Salvador", color: "#0047AB", url: "" },
    ec: { name: "Equador", color: "#FFDD00", url: "https://app.warera.io/country/6813b6d546e731854c7ac855" },    
    us: { name: "Estados Unidos", color: "#0A3161", url: "https://app.warera.io/country/6813b6d446e731854c7ac7e5" },
    gd: { name: "Granada", color: "#007A5E", url: "" },    
    gt: { name: "Guatemala", color: "#4997D0", url: "https://app.warera.io/country/6813b6d546e731854c7ac8b8" },
    gy: { name: "Guiana", color: "#009E49", url: "" },
    ht: { name: "Haiti", color: "#00209F", url: "https://app.warera.io/country/6813b6d546e731854c7ac896" },
    hn: { name: "Honduras", color: "#0073CF", url: "" },
    jm: { name: "Jamaica", color: "#009B3A", url: "" },
    mx: { name: "México", color: "#006847", url: "https://app.warera.io/country/6813b6d446e731854c7ac7f8" },
    ni: { name: "Nicarágua", color: "#0067C6", url: "" },
    pa: { name: "Panamá", color: "#005293", url: "" },
    py: { name: "Paraguai", color: "#D52B1E", url: "" },
    pe: { name: "Perú", color: "#D91023", url: "https://app.warera.io/country/6813b6d546e731854c7ac83f" },
    do: { name: "República Dominicana", color: "#002D62", url: "" },
    lc: { name: "Santa Lúcia", color: "#66CCFF", url: "" },
    kn: { name: "São Cristóvão e Névis", color: "#009E49", url: "" },
    vc: { name: "São Vicente e Granadinas", color: "#009E49", url: "" },
    sr: { name: "Suriname", color: "#377E3F", url: "" },
    tt: { name: "Trinidad e Tobago", color: "#DA291C", url: "" },
    uy: { name: "Uruguai", color: "#0081C8", url: "" },
    ve: { name: "Venezuela", color: "#FCD116", url: "https://app.warera.io/country/6813b6d546e731854c7ac858" },
    
    // Europa
    al: { name: "Albânia", color: "#E41B13", url: "" },
    de: { name: "Alemanha", color: "#000000", url: "" },
    ad: { name: "Andorra", color: "#0018A8", url: "" },
    am: { name: "Armênia", color: "#D93A30", url: "" },
    at: { name: "Áustria", color: "#EF3340", url: "" },
    az: { name: "Azerbaijão", color: "#00B5E2", url: "" },
    be: { name: "Bélgica", color: "#2D2926", url: "https://app.warera.io/country/6813b6d446e731854c7ac7a4" },
    by: { name: "Bielorrússia", color: "#E02B20", url: "" },
    ba: { name: "Bósnia e Herzegovina", color: "#002F6C", url: "" },
    bg: { name: "Bulgária", color: "#00966E", url: "" },
    cy: { name: "Chipre", color: "#D47312", url: "" },
    hr: { name: "Croácia", color: "#FF0000", url: "" },
    dk: { name: "Dinamarca", color: "#C8102E", url: "" },
    sk: { name: "Eslováquia", color: "#0B4EA2", url: "" },
    si: { name: "Eslovênia", color: "#002F6C", url: "" },
    es: { name: "Espanha", color: "#F1BF00", url: "https://app.warera.io/country/6813b6d446e731854c7ac7a8" },
    ee: { name: "Estônia", color: "#0072CE", url: "" },
    fi: { name: "Finlândia", color: "#003580", url: "" },
    fr: { name: "França", color: "#0055A4", url: "https://app.warera.io/country/6813b6d446e731854c7ac79a" },
    ge: { name: "Geórgia", color: "#FF0000", url: "" },
    gr: { name: "Grécia", color: "#0D5EAF", url: "" },
    hu: { name: "Hungria", color: "#CE1126", url: "" },
    ie: { name: "Irlanda", color: "#169B62", url: "" },
    is: { name: "Islândia", color: "#003897", url: "" },
    it: { name: "Itália", color: "#009246", url: "" },
    xk: { name: "Kosovo", color: "#24438E", url: "" },
    lv: { name: "Letônia", color: "#9E3039", url: "https://app.warera.io/country/6813b6d446e731854c7ac7c0" },
    li: { name: "Liechtenstein", color: "#002366", url: "" },
    lt: { name: "Lituânia", color: "#006A44", url: "https://app.warera.io/country/6813b6d446e731854c7ac7b8" },
    lu: { name: "Luxemburgo", color: "#EA141D", url: "" },
    mk: { name: "Macedônia do Norte", color: "#D20000", url: "" },
    mt: { name: "Malta", color: "#FFFFFF", url: "" },
    md: { name: "Moldávia", color: "#CC1133", url: "" },
    mc: { name: "Mônaco", color: "#E8112D", url: "" },
    me: { name: "Montenegro", color: "#C29B38", url: "" },
    no: { name: "Noruega", color: "#BA0C2F", url: "https://app.warera.io/country/6813b6d546e731854c7ac668" },
    nl: { name: "Países Baixos", color: "#1E4B8B", url: "" },
    pl: { name: "Polônia", color: "#DC143C", url: "https://app.warera.io/country/6813b6d446e731854c7ac7ae" },
    pt: { name: "Portugal", color: "#006600", url: "" },
    uk: { name: "Reino Unido", color: "#012169", url: "https://app.warera.io/country/6813b6d446e731854c7ac79e" },
    cz: { name: "República Checa", color: "#11457E", url: "" },
    ro: { name: "Romênia", color: "#002B7F", url: "" },
    ru: { name: "Rússia", color: "#1C3578", url: "https://app.warera.io/country/6813b6d546e731854c7ac868" },
    sm: { name: "San Marino", color: "#009EE0", url: "" },
    rs: { name: "Sérvia", color: "#C8102E", url: "" },
    se: { name: "Suécia", color: "#006AA7", url: "" },
    ch: { name: "Suiça", color: "#FFFFFF", url: "https://app.warera.io/country/6813b6d446e731854c7ac7a6" },
    ua: { name: "Ucrânia", color: "#FFD700", url: "" },
    va: { name: "Vaticano", color: "#FFE000", url: "" },

    // Oriente Medio
    sa: { name: "Arábia Saudita", color: "#006C35", url: "" },
    bh: { name: "Bahrein", color: "#DA291C", url: "" },
    qa: { name: "Catar", color: "#8A1538", url: "" },
    eg: { name: "Egito", color: "#C09304", url: "" },
    ae: { name: "Emirados Árabes Unidos", color: "#00732F", url: "" },
    ye: { name: "Iêmen", color: "#CE1126", url: "" },
    ir: { name: "Irã", color: "#239F40", url: "https://app.warera.io/country/6813b6d546e731854c7ac8a6" },
    iq: { name: "Iraque", color: "#007A3E", url: "" },
    il: { name: "Israel", color: "#005EB8", url: "" },
    jo: { name: "Jordânia", color: "#CE1126", url: "" },
    kw: { name: "Kuwait", color: "#007A3D", url: "" },
    lb: { name: "Líbano", color: "#ED1C24", url: "" },
    om: { name: "Omã", color: "#D21034", url: "" },
    ps: { name: "Palestina", color: "#000000", url: "" },
    sy: { name: "Síria", color: "#CE1126", url: "" },
    tr: { name: "Turquia", color: "#E30A17", url: "" },

    // Africa
    za: { name: "África do Sul", color: "#007A4D", url: "" },
    ao: { name: "Angola", color: "#D81B0E", url: "" },
    dz: { name: "Argélia", color: "#006233", url: "" },
    bj: { name: "Benim", color: "#008751", url: "" },
    bw: { name: "Botsuana", color: "#00A8DF", url: "" },
    bf: { name: "Burquina Faso", color: "#EF2B2D", url: "" },
    bi: { name: "Burundi", color: "#118B43", url: "" },
    cv: { name: "Cabo Verde", color: "#002F6C", url: "" },
    cm: { name: "Camarões", color: "#007A5E", url: "" },
    td: { name: "Chade", color: "#002060", url: "" },
    km: { name: "Comores", color: "#3A75C4", url: "" },
    cg: { name: "Congo", color: "#009543", url: "" },
    cd: { name: "RD Congo", color: "#007FFF", url: "" },
    ci: { name: "Costa do Marfim", color: "#F77F00", url: "" },
    dj: { name: "Djibuti", color: "#6FC26C", url: "" },
    er: { name: "Eritreia", color: "#D11919", url: "" },
    sz: { name: "Eswatini", color: "#1E3A8A", url: "" },
    et: { name: "Etiópia", color: "#009E49", url: "" },
    ga: { name: "Gabão", color: "#36A152", url: "" },
    gm: { name: "Gâmbia", color: "#31377D", url: "" },
    gh: { name: "Gana", color: "#DA291C", url: "" },
    gn: { name: "Guiné", color: "#E51D35", url: "" },
    gq: { name: "Guiné Equatorial", color: "#3E9440", url: "" },
    gw: { name: "Guiné-Bissau", color: "#C61026", url: "https://app.warera.io/country/6873d0ea1758b40e712b5f1c" },
    ls: { name: "Lesoto", color: "#00209F", url: "" },
    lr: { name: "Libéria", color: "#002060", url: "" },
    ly: { name: "Líbia", color: "#000000", url: "" },
    mg: { name: "Madagascar", color: "#FC3D32", url: "" },
    mw: { name: "Malaui", color: "#E31B23", url: "" },
    ml: { name: "Mali", color: "#14B53A", url: "" },
    ma: { name: "Marrocos", color: "#006233", url: "https://app.warera.io/country/6813b6d546e731854c7ac848" },
    mu: { name: "Maurício", color: "#EA1C24", url: "" },
    mr: { name: "Mauritânia", color: "#00A95C", url: "" },
    mz: { name: "Moçambique", color: "#009639", url: "" },
    na: { name: "Namíbia", color: "#003580", url: "" },
    ne: { name: "Níger", color: "#E05206", url: "" },
    ng: { name: "Nigéria", color: "#008751", url: "" },
    ke: { name: "Quênia", color: "#000000", url: "" },
    cf: { name: "República Centro-Africana", color: "#003082", url: "" },
    rw: { name: "Ruanda", color: "#00A3E0", url: "" },
    st: { name: "São Tomé e Príncipe", color: "#12AD2B", url: "" },
    sn: { name: "Senegal", color: "#0A8E36", url: "" },
    sc: { name: "Seychelles", color: "#003F87", url: "" },
    sl: { name: "Serra Leoa", color: "#1EB53A", url: "" },
    so: { name: "Somália", color: "#4189DD", url: "" },
    sd: { name: "Sudão", color: "#D21034", url: "" },
    ss: { name: "Sudão do Sul", color: "#078930", url: "" },
    tz: { name: "Tanzânia", color: "#1EB53A", url: "" },
    tg: { name: "Togo", color: "#006A4E", url: "" },
    tn: { name: "Tunísia", color: "#E2001A", url: "" },
    ug: { name: "Uganda", color: "#FCDC2A", url: "" },
    zm: { name: "Zâmbia", color: "#198A00", url: "" },
    zw: { name: "Zimbábue", color: "#318E2B", url: "" },

    // Asia
    af: { name: "Afeganistão", color: "#000000", url: "" },
    bd: { name: "Bangladesh", color: "#006A4E", url: "" },
    bn: { name: "Brunei", color: "#F7E017", url: "" },
    bt: { name: "Butão", color: "#FF4E00", url: "" },
    kh: { name: "Camboja", color: "#032EA1", url: "" },
    kz: { name: "Cazaquistão", color: "#00AFCA", url: "" },
    cn: { name: "China", color: "#EE1C25", url: "" },
    kp: { name: "Coreia do Norte", color: "#024FA2", url: "" },
    kr: { name: "Coreia do Sul", color: "#FFFFFF", url: "" },
    ph: { name: "Filipinas", color: "#0038A8", url: "https://app.warera.io/country/6813b6d546e731854c7ac82c" },
    in: { name: "Índia", color: "#FF9933", url: "" },
    id: { name: "Indonésia", color: "#FF0000", url: "" },
    jp: { name: "Japão", color: "#FFFFFF", url: "" },
    kg: { name: "Quirguistão", color: "#E8112D", url: "" },
    la: { name: "Laos", color: "#002868", url: "" },
    my: { name: "Malásia", color: "#010066", url: "" },
    mv: { name: "Maldivas", color: "#D21034", url: "" },
    mn: { name: "Mongólia", color: "#E21131", url: "" },
    mm: { name: "Mianmar", color: "#FECB00", url: "" },
    np: { name: "Nepal", color: "#DC143C", url: "" },
    uz: { name: "Uzbequistão", color: "#00C5FF", url: "" },
    pk: { name: "Paquistão", color: "#115E3B", url: "" },
    sg: { name: "Singapura", color: "#ED1C24", url: "" },
    lk: { name: "Sri Lanka", color: "#8D153B", url: "" },
    tj: { name: "Tajiquistão", color: "#CC0000", url: "" },
    th: { name: "Tailândia", color: "#A51931", url: "" },
    tw: { name: "Taiwan", color: "#FE0000", url: "" },
    tl: { name: "Timor-Leste", color: "#DC241F", url: "" },
    tm: { name: "Turcomenistão", color: "#2E8B57", url: "" },
    vn: { name: "Vietnã", color: "#DA251D", url: "" },

    // Oceania
    au: { name: "Austrália", color: "#000033", url: "" },
    fj: { name: "Fiji", color: "#62B5E5", url: "" },
    ki: { name: "Quiribati", color: "#CE1126", url: "" },
    mh: { name: "Ilhas Marshall", color: "#0038A8", url: "" },
    fm: { name: "Micronésia", color: "#6CACE4", url: "" },
    nr: { name: "Nauru", color: "#002B7F", url: "" },
    nz: { name: "Nova Zelândia", color: "#00247D", url: "" },
    pw: { name: "Palau", color: "#4A90E2", url: "" },
    pg: { name: "Papua-Nova Guiné", color: "#000000", url: "" },
    ws: { name: "Samoa", color: "#D21034", url: "" },
    sb: { name: "Ilhas Salomão", color: "#0051BA", url: "" },
    to: { name: "Tonga", color: "#DA291C", url: "" },
    tv: { name: "Tuvalu", color: "#4682B4", url: "" },
    vu: { name: "Vanuatu", color: "#D21034", url: "" }

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
