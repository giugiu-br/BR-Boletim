// Banco de dados centralizado do Sidebar
const weeklyEvents = [

    { date: "2026-07-26", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [es]" },
    { date: "2026-07-26", type: "Internacional", tag: "[alliance]", text: '<a href="https://app.warera.io/alliance/6a2981ad131983aa8445864d" target="_blank" rel="noopener" style="color: var(--blue);">Frente Unido de Autodefensa</a> entra [ve]' },
    
    { date: "2026-07-25", type: "Internacional", tag: "[alliance]", text: '<a href="https://app.warera.io/alliance/6a2981ad131983aa8445864d" target="_blank" rel="noopener" style="color: var(--blue);">Frente Unido de Autodefensa</a> entra [cr]' },
    { date: "2026-07-25", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [ru]" },
    
    { date: "2026-07-23", type: "Internacional", tag: "[alliance]", text: '<a href="https://app.warera.io/alliance/6a2981ad131983aa8445864d" target="_blank" rel="noopener" style="color: var(--blue);">Frente Unido de Autodefensa</a> entra [mx]' },
    
    { date: "2026-07-22", type: "Diplomacia", tag: "[money]", text: "Envio de 1200 para ao [br] da [gt]" },
    
    { date: "2026-07-21", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [ru]" },
    { date: "2026-07-21", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [cr]" },
    { date: "2026-07-19", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [gt]" },
    { date: "2026-07-19", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [ir]" },
    { date: "2026-07-19", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [ro]" },
    { date: "2026-07-19", type: "Diplomacia", tag: "[money]", text: "Envio de 2 para ao [br] da [gt]" },

    { date: "2026-07-18", type: "Diplomacia", tag: "[money]", text: "Envio de 2000 para a [gt] do [br]" },
    { date: "2026-07-18", type: "Diplomacia", tag: "[money]", text: "Envio de 300 para a [co] do [br]" },

    { date: "2026-07-17", type: "Diplomacia", tag: "[war]", text: "[br] declarou guerra a [gw]" },
    { date: "2026-07-17", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [es]" },
    { date: "2026-07-17", type: "Diplomacia", tag: "[money]", text: "Envio de 300 para o [ph] do [br]" },

    { date: "2026-07-16", type: "Diplomacia", tag: "[money]", text: "Envio de 69 para o [br] do [pe]" },
    
    { date: "2026-07-15", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [pe]" },
    
    { date: "2026-07-14", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [ir]" },
    { date: "2026-07-14", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [gt]" },

    { date: "2026-07-13", type: "Internacional", tag: "[alliance]", text: '<a href="https://app.warera.io/alliance/6a2981ad131983aa8445864d" target="_blank" rel="noopener" style="color: var(--blue);">Frente Unido de Autodefensa</a> entra [ec]' },
    { date: "2026-07-13", type: "Internacional", tag: "[alliance]", text: '<a href="https://app.warera.io/alliance/6a2981ad131983aa8445864d" target="_blank" rel="noopener" style="color: var(--blue);">Frente Unido de Autodefensa</a> entra [pe]' },
    { date: "2026-07-13", type: "Diplomacia", tag: "[money]", text: "Envio de 1200 para a [sr] do [br]" },
    { date: "2026-07-13", type: "Diplomacia", tag: "[money]", text: "Envio de 5 para a [lt] do [br]" },
    
    { date: "2026-07-12", type: "Copa do Mundo", tag: "[sport]", text: "Final: [es] é bicapeã contra [ar] por 1 x 0 (Prorrogações)" },
    { date: "2026-07-12", type: "Diplomacia", tag: "[peace]", text: "Paz entre [br] e [fr]" },
    { date: "2026-07-11", type: "Copa do Mundo", tag: "[sport]", text: "Quartas: [ch] é eliminada pela [ar] por 3 x 1" },
    { date: "2026-07-11", type: "Diplomacia", tag: "[money]", text: "Envio de 2.1 do [br] para [no]" },
    { date: "2026-07-11", type: "Copa do Mundo", tag: "[sport]", text: "Quartas: [no] é eliminada pelo [uk] (Inglaterra) por 2 x 1" },
    { date: "2026-07-10", type: "Copa do Mundo", tag: "[sport]", text: "Quartas: [be] é eliminada pela [es] por 2 x 1" },
    { date: "2026-07-10", type: "Guerra", tag: "[war]", text: "[us] declarou guerra ao [br]" },
    { date: "2026-07-09", type: "Copa do Mundo", tag: "[sport]", text: "Quartas: [ma] é eliminada pela [fr] por 2 x 0" },
    { date: "2026-07-09", type: "Internacional", tag: "[noalliance]", text: '<a href="https://app.warera.io/alliance/6a2981ad131983aa8445864d" target="_blank" rel="noopener" style="color: var(--blue);">Frente Unido de Autodefensa</a> expulsa [mx]' },
    { date: "2026-07-09", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [ir]" },
    { date: "2026-07-08", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [ir]" },
    { date: "2026-07-07", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [ru]" },
    { date: "2026-07-06", type: "Diplomacia", tag: "[peace]", text: "Paz entre [br] e [ec]" },
    { date: "2026-07-05", type: "Diplomacia", tag: "[money]", text: "Envio de 5 para a [no] do [br]" },
    { date: "2026-07-05", type: "Diplomacia", tag: "[money]", text: "Envio de 2.1 para o [br] da [no]" },
    { date: "2026-07-05", type: "Copa do Mundo", tag: "[sport]", text: "Oitavas: [br] é eliminado pela [no] por 2 x 1" },
    { date: "2026-07-05", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [mx]" },
    { date: "2026-07-04", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [mx]" },
    { date: "2026-07-04", type: "Diplomacia", tag: "[peace]", text: "Paz entre [br] e [pe]" },
    { date: "2026-07-03", type: "Diplomacia", tag: "[pact]", text: "Pacto Defensivo entre [br] e [mx]" },
    { date: "2026-07-02", type: "Diplomacia", tag: "[nopact]", text: "Fim do Pacto Defensivo entre [br] e [gt]" },
    { date: "2026-07-02", type: "Diplomacia", tag: "[money]", text: "Envio de 2000 do [br] para [pe]" }
];

/*
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
*/

// Função que filtra e renderiza no HTML
function renderSidebar(startDateStr, endDateStr) {
    const container = document.getElementById('sidebarContent');
    const rangeHeader = document.getElementById('sidebarRange');
    if (!container) return;

    const start = new Date(startDateStr);
    const end = new Date(endDateStr);

    // Ajusta o cabeçalho ex: "01/07 - 12/07"
    if (rangeHeader) {
        const formatShort = d => d.getUTCDate().toString().padStart(2, '0') + '/' + (d.getUTCMonth() + 1).toString().padStart(2, '0');
        rangeHeader.innerText = `${formatShort(start)} - ${formatShort(end)}`;
    }

    // Filtra os eventos no intervalo de datas
    const filteredEvents = weeklyEvents.filter(ev => {
        const evDate = new Date(ev.date);
        return evDate >= start && evDate <= end;
    });

    // Gera o HTML dos Cards
    container.innerHTML = filteredEvents.map(ev => {
        const dayMonth = ev.date.split('-').slice(1).reverse().join('/'); // "07-12" -> "12/07"
        return `
            <div class="card">
                <strong>${ev.type}</strong><br>
                ${dayMonth} - ${ev.tag} ${ev.text}
            </div>
        `;
    }).join('');
}
