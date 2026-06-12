// ─────────────────────────────────────────────────────────────────────────────
// Álbum Virtual Panini — FIFA World Cup Russia 2018
// ─────────────────────────────────────────────────────────────────────────────

export const albumConfig = {

  // ── Identidad y almacenamiento ───────────────────────────────────────────────
  id: 'paniniRussia2018',
  owner: 'Facundo',
  title: 'ÁLBUM VIRTUAL RUSIA 2018',
  subtitle: 'FIFA WORLD CUP · RUSSIA',
  repetidasSubtitle: 'FIFA World Cup 2018 · Russia',
  exportFileName: 'panini2018_backup.json',

  // ── Conteo de figuritas ──────────────────────────────────────────────────────
  teamStickerCount: 20,   // 1 escudo + 1 foto equipo + 18 jugadores
  totalStickers: 670,     // 1 PANINI + 19 INTRO + 640 equipos + 10 LEGENDS
  promoCodePrefix: 'PROMO_NEVER_',  // sin sección promo en 2018

  // ── Navegación ───────────────────────────────────────────────────────────────
  lastSectionCode: 'LEGENDS',

  // ── Brillantes: 1 PANINI + 7 INTRO + 32 escudos + 10 LEGENDS = 50 total ────
  brillanteStickerPrefix: 'BRILLANTE_NONE_',
  brillanteStickerCount: 0,
  // Brillantes de secciones especiales (excluye los 32 escudos que se generan dinámicamente)
  brilliantSpecialCodes: [
    'PANINI',
    'INTRO1','INTRO2','INTRO3','INTRO4','INTRO5','INTRO6','INTRO7',
    'LEG1','LEG2','LEG3','LEG4','LEG5','LEG6','LEG7','LEG8','LEG9','LEG10',
  ],

  // ── Secciones especiales ─────────────────────────────────────────────────────
  specialSections: {
    INTRO: {
      count: 8,
      stickers: [
        { code: 'PANINI', label: 'PANINI',            repetidasLabel: 'PANINI', type: 'brillante', horizontal: false },
        { code: 'INTRO1',  label: 'Logo FIFA',                                 repetidasLabel: 'INTRO1',  type: 'brillante',   horizontal: false },
        { code: 'INTRO2',  label: 'Trofeo Copa del Mundo',                     repetidasLabel: 'INTRO2',  type: 'brillante',   horizontal: false },
        { code: 'INTRO3',  label: 'Poster Mascota',                            repetidasLabel: 'INTRO3',  type: 'brillante',   horizontal: true  },
        { code: 'INTRO4',  label: 'Poster Mascota',                            repetidasLabel: 'INTRO4',  type: 'brillante',   horizontal: true  },
        { code: 'INTRO5',  label: 'Logo',                                      repetidasLabel: 'INTRO5',  type: 'brillante',   horizontal: false },
        { code: 'INTRO6',  label: 'Logo',                                      repetidasLabel: 'INTRO6',  type: 'brillante',   horizontal: false },
        { code: 'INTRO7',  label: 'Balón Oficial',                             repetidasLabel: 'INTRO7',  type: 'brillante',   horizontal: false },
      ],
    },
    ESTADIOS: {
      count: 12,
      stickers: [
        { code: 'INTRO8',  label: 'Ekaterinburgo - Ekaterinburgo Arena',       repetidasLabel: 'INTRO8',  type: 'estadio', horizontal: true  },
        { code: 'INTRO9',  label: 'Kaliningrado - Kaliningrad Stadium',        repetidasLabel: 'INTRO9',  type: 'estadio', horizontal: true  },
        { code: 'INTRO10', label: 'Kazan - Kazan Arena',                       repetidasLabel: 'INTRO10', type: 'estadio', horizontal: true  },
        { code: 'INTRO11', label: 'Moscú - Spartak Stadium',                   repetidasLabel: 'INTRO11', type: 'estadio', horizontal: true  },
        { code: 'INTRO12', label: 'Nizhny Novgorod - Nizhny Novgorod Stadium', repetidasLabel: 'INTRO12', type: 'estadio', horizontal: true  },
        { code: 'INTRO13', label: 'Moscú - Luzhniki Stadium',                  repetidasLabel: 'INTRO13', type: 'estadio', horizontal: true  },
        { code: 'INTRO14', label: 'Rostov-on-Don - Rostov Arena',              repetidasLabel: 'INTRO14', type: 'estadio', horizontal: true  },
        { code: 'INTRO15', label: 'San Petersburgo - Saint Petersburg Stadium',repetidasLabel: 'INTRO15', type: 'estadio', horizontal: true  },
        { code: 'INTRO16', label: 'Samara - Samara Arena',                     repetidasLabel: 'INTRO16', type: 'estadio', horizontal: true  },
        { code: 'INTRO17', label: 'Saransk - Mordovia Arena',                  repetidasLabel: 'INTRO17', type: 'estadio', horizontal: true  },
        { code: 'INTRO18', label: 'Sochi - Fisht Stadium',                     repetidasLabel: 'INTRO18', type: 'estadio', horizontal: true  },
        { code: 'INTRO19', label: 'Volvogrado - Volvograd Arena',              repetidasLabel: 'INTRO19', type: 'estadio', horizontal: true  },
      ],
    },
    LEGENDS: {
      count: 10,
      stickers: [
        { code: 'LEG1',  label: 'Brasil 1958',                      repetidasLabel: 'LEG1',  type: 'brillante', horizontal: false },
        { code: 'LEG2',  label: 'Alemania 2014',                    repetidasLabel: 'LEG2',  type: 'brillante', horizontal: false },
        { code: 'LEG3',  label: 'Italia 1982',                      repetidasLabel: 'LEG3',  type: 'brillante', horizontal: false },
        { code: 'LEG4',  label: 'Uruguay 1930',                     repetidasLabel: 'LEG4',  type: 'brillante', horizontal: false },
        { code: 'LEG5',  label: 'Argentina 1986',                   repetidasLabel: 'LEG5',  type: 'brillante', horizontal: false },
        { code: 'LEG6',  label: 'Inglaterra 1966',                  repetidasLabel: 'LEG6',  type: 'brillante', horizontal: false },
        { code: 'LEG7',  label: 'Francia 1998',                     repetidasLabel: 'LEG7',  type: 'brillante', horizontal: false },
        { code: 'LEG8',  label: 'España 2010',                      repetidasLabel: 'LEG8',  type: 'brillante', horizontal: false },
        { code: 'LEG9',  label: 'Pelé (máximo ganador)',             repetidasLabel: 'LEG9',  type: 'brillante', horizontal: false },
        { code: 'LEG10', label: 'Miroslav Klose (máximo goleador)', repetidasLabel: 'LEG10', type: 'brillante', horizontal: false },
      ],
    },
  },

  // ── Temas visuales de secciones especiales ────────────────────────────────────
  sectionThemes: {
    INTRO:    { themeKey: 'INTRO_RUS2018',   solidBg: null, innerPanel: 'bg-[#051f4a]' },
    ESTADIOS: { themeKey: 'INTRO_RUS2018',   solidBg: null, innerPanel: 'bg-[#051f4a]' },
    LEGENDS:  { themeKey: 'LEGENDS_RUS2018', solidBg: null, innerPanel: 'bg-[#0f172a]' },
  },

  // ── Etiquetas en el buscador para secciones especiales ───────────────────────
  searchConfig: {
    INTRO:    { teamName: 'Intro Rusia 2018',    teamFlag: '🇷🇺' },
    ESTADIOS: { teamName: 'Estadios Rusia 2018', teamFlag: '🏟️' },
    LEGENDS:  { teamName: 'Legends',             teamFlag: '🏆' },
  },

  // ── Configuración de estadísticas ────────────────────────────────────────────
  statsConfig: [
    { key: 'INTRO',    emoji: '🇷🇺', name: 'INTRO',    fixedCodes: ['PANINI','INTRO1','INTRO2','INTRO3','INTRO4','INTRO5','INTRO6','INTRO7'] },
    { key: 'ESTADIOS', emoji: '🏟️', name: 'ESTADIOS', fixedCodes: ['INTRO8','INTRO9','INTRO10','INTRO11','INTRO12','INTRO13','INTRO14','INTRO15','INTRO16','INTRO17','INTRO18','INTRO19'] },
    { key: '__TEAMS__' },
    { key: 'LEGENDS',  emoji: '🏆', name: 'LEGENDS',  fixedCodes: ['LEG1','LEG2','LEG3','LEG4','LEG5','LEG6','LEG7','LEG8','LEG9','LEG10'] },
  ],

  // ── Equipos competidores (orden del álbum) ────────────────────────────────────
  competingTeams: [
    'RUS', 'KSA', 'EGY', 'URU',
    'POR', 'ESP', 'MAR', 'IRN',
    'FRA', 'AUS', 'PER', 'DEN',
    'ARG', 'ISL', 'CRO', 'NGA',
    'BRA', 'SUI', 'CRC', 'SRB',
    'GER', 'MEX', 'SWE', 'KOR',
    'BEL', 'PAN', 'TUN', 'ENG',
    'POL', 'SEN', 'COL', 'JPN',
  ],

  // ── Datos de todos los equipos ───────────────────────────────────────────────
  teamData: {
    INTRO:    { name: 'Intro',    federation: 'Opening Section',    flag: '🇷🇺' },
    ESTADIOS: { name: 'Estadios', federation: 'Venues Russia 2018', flag: '🏟️' },
    LEGENDS:  { name: 'Legends',  federation: 'World Cup Legends',  flag: '🏆' },

    RUS: { name: 'Rusia',              federation: 'Russian Football Union',                          flag: '🇷🇺' },
    KSA: { name: 'Arabia Saudita',     federation: 'Saudi Arabian Football Federation',               flag: '🇸🇦' },
    EGY: { name: 'Egipto',             federation: 'Egyptian Football Association',                   flag: '🇪🇬' },
    URU: { name: 'Uruguay',            federation: 'Asociación Uruguaya de Fútbol',                  flag: '🇺🇾' },
    POR: { name: 'Portugal',           federation: 'Federação Portuguesa de Futebol',                flag: '🇵🇹' },
    ESP: { name: 'España',             federation: 'Real Federación Española de Fútbol',             flag: '🇪🇸' },
    MAR: { name: 'Marruecos',          federation: 'Fédération Royale Marocaine de Football',        flag: '🇲🇦' },
    IRN: { name: 'Irán',               federation: 'Football Federation Islamic Republic of Iran',    flag: '🇮🇷' },
    FRA: { name: 'Francia',            federation: 'Fédération Française de Football',               flag: '🇫🇷' },
    AUS: { name: 'Australia',          federation: 'Football Australia',                              flag: '🇦🇺' },
    PER: { name: 'Perú',               federation: 'Federación Peruana de Fútbol',                   flag: '🇵🇪' },
    DEN: { name: 'Dinamarca',          federation: 'Dansk Boldspil-Union',                           flag: '🇩🇰' },
    ARG: { name: 'Argentina',          federation: 'Asociación del Fútbol Argentino',                flag: '🇦🇷' },
    ISL: { name: 'Islandia',           federation: 'Knattspyrnusamband Íslands',                     flag: '🇮🇸' },
    CRO: { name: 'Croacia',            federation: 'Hrvatski nogometni savez',                        flag: '🇭🇷' },
    NGA: { name: 'Nigeria',            federation: 'Nigeria Football Federation',                     flag: '🇳🇬' },
    BRA: { name: 'Brasil',             federation: 'Confederação Brasileira de Futebol',             flag: '🇧🇷' },
    SUI: { name: 'Suiza',              federation: 'Schweizerischer Fussballverband',                flag: '🇨🇭' },
    CRC: { name: 'Costa Rica',         federation: 'Federación Costarricense de Fútbol',             flag: '🇨🇷' },
    SRB: { name: 'Serbia',             federation: 'Fudbalski savez Srbije',                         flag: '🇷🇸' },
    GER: { name: 'Alemania',           federation: 'Deutscher Fußball-Bund',                         flag: '🇩🇪' },
    MEX: { name: 'México',             federation: 'Federación Mexicana de Fútbol',                  flag: '🇲🇽' },
    SWE: { name: 'Suecia',             federation: 'Svenska Fotbollförbundet',                        flag: '🇸🇪' },
    KOR: { name: 'República de Corea', federation: 'Korea Football Association',                      flag: '🇰🇷' },
    BEL: { name: 'Bélgica',            federation: 'Koninklijke Belgische Voetbalbond',              flag: '🇧🇪' },
    PAN: { name: 'Panamá',             federation: 'Federación Panameña de Fútbol',                  flag: '🇵🇦' },
    TUN: { name: 'Túnez',              federation: 'Fédération Tunisienne de Football',              flag: '🇹🇳' },
    ENG: { name: 'Inglaterra',         federation: 'The Football Association',                        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    POL: { name: 'Polonia',            federation: 'Polski Związek Piłki Nożnej',                    flag: '🇵🇱' },
    SEN: { name: 'Senegal',            federation: 'Fédération Sénégalaise de Football',              flag: '🇸🇳' },
    COL: { name: 'Colombia',           federation: 'Federación Colombiana de Fútbol',                flag: '🇨🇴' },
    JPN: { name: 'Japón',              federation: 'Japan Football Association',                      flag: '🇯🇵' },
  },

  // ── Asignación de grupos ─────────────────────────────────────────────────────
  teamGroups: {
    RUS: { group: 'A', members: ['Rusia',     'Arabia Saudita', 'Egipto',    'Uruguay'        ] },
    KSA: { group: 'A', members: ['Rusia',     'Arabia Saudita', 'Egipto',    'Uruguay'        ] },
    EGY: { group: 'A', members: ['Rusia',     'Arabia Saudita', 'Egipto',    'Uruguay'        ] },
    URU: { group: 'A', members: ['Rusia',     'Arabia Saudita', 'Egipto',    'Uruguay'        ] },
    POR: { group: 'B', members: ['Portugal',  'España',         'Marruecos', 'Irán'           ] },
    ESP: { group: 'B', members: ['Portugal',  'España',         'Marruecos', 'Irán'           ] },
    MAR: { group: 'B', members: ['Portugal',  'España',         'Marruecos', 'Irán'           ] },
    IRN: { group: 'B', members: ['Portugal',  'España',         'Marruecos', 'Irán'           ] },
    FRA: { group: 'C', members: ['Francia',   'Australia',      'Perú',      'Dinamarca'      ] },
    AUS: { group: 'C', members: ['Francia',   'Australia',      'Perú',      'Dinamarca'      ] },
    PER: { group: 'C', members: ['Francia',   'Australia',      'Perú',      'Dinamarca'      ] },
    DEN: { group: 'C', members: ['Francia',   'Australia',      'Perú',      'Dinamarca'      ] },
    ARG: { group: 'D', members: ['Argentina', 'Islandia',       'Croacia',   'Nigeria'        ] },
    ISL: { group: 'D', members: ['Argentina', 'Islandia',       'Croacia',   'Nigeria'        ] },
    CRO: { group: 'D', members: ['Argentina', 'Islandia',       'Croacia',   'Nigeria'        ] },
    NGA: { group: 'D', members: ['Argentina', 'Islandia',       'Croacia',   'Nigeria'        ] },
    BRA: { group: 'E', members: ['Brasil',    'Suiza',          'Costa Rica','Serbia'         ] },
    SUI: { group: 'E', members: ['Brasil',    'Suiza',          'Costa Rica','Serbia'         ] },
    CRC: { group: 'E', members: ['Brasil',    'Suiza',          'Costa Rica','Serbia'         ] },
    SRB: { group: 'E', members: ['Brasil',    'Suiza',          'Costa Rica','Serbia'         ] },
    GER: { group: 'F', members: ['Alemania',  'México',         'Suecia',    'Rep. de Corea'  ] },
    MEX: { group: 'F', members: ['Alemania',  'México',         'Suecia',    'Rep. de Corea'  ] },
    SWE: { group: 'F', members: ['Alemania',  'México',         'Suecia',    'Rep. de Corea'  ] },
    KOR: { group: 'F', members: ['Alemania',  'México',         'Suecia',    'Rep. de Corea'  ] },
    BEL: { group: 'G', members: ['Bélgica',   'Panamá',         'Túnez',     'Inglaterra'     ] },
    PAN: { group: 'G', members: ['Bélgica',   'Panamá',         'Túnez',     'Inglaterra'     ] },
    TUN: { group: 'G', members: ['Bélgica',   'Panamá',         'Túnez',     'Inglaterra'     ] },
    ENG: { group: 'G', members: ['Bélgica',   'Panamá',         'Túnez',     'Inglaterra'     ] },
    POL: { group: 'H', members: ['Polonia',   'Senegal',        'Colombia',  'Japón'          ] },
    SEN: { group: 'H', members: ['Polonia',   'Senegal',        'Colombia',  'Japón'          ] },
    COL: { group: 'H', members: ['Polonia',   'Senegal',        'Colombia',  'Japón'          ] },
    JPN: { group: 'H', members: ['Polonia',   'Senegal',        'Colombia',  'Japón'          ] },
  },

  // ── Grupos del torneo ────────────────────────────────────────────────────────
  groups: {
    A: { color: '#E42518', teams: ['RUS', 'KSA', 'EGY', 'URU'] },
    B: { color: '#C8232C', teams: ['POR', 'ESP', 'MAR', 'IRN'] },
    C: { color: '#0055A4', teams: ['FRA', 'AUS', 'PER', 'DEN'] },
    D: { color: '#2266AA', teams: ['ARG', 'ISL', 'CRO', 'NGA'] },
    E: { color: '#1a8a3a', teams: ['BRA', 'SUI', 'CRC', 'SRB'] },
    F: { color: '#333333', teams: ['GER', 'MEX', 'SWE', 'KOR'] },
    G: { color: '#8B0000', teams: ['BEL', 'PAN', 'TUN', 'ENG'] },
    H: { color: '#CC1122', teams: ['POL', 'SEN', 'COL', 'JPN'] },
  },

};

// Orden completo de navegación del álbum
albumConfig.teams = [
  'INTRO',
  'ESTADIOS',
  ...albumConfig.competingTeams,
  'LEGENDS',
];

// ── Sistema de numeración bidireccional ──────────────────────────────────────
// PANINI: '00' (caso especial)
// INTRO1-INTRO19: 1-19
// RUS1..JPN20: 20-659
// LEG1-LEG10: 660-669
export const codeToNumber = {};
export const numberToCode = {};

codeToNumber['PANINI'] = '00';
numberToCode['00'] = 'PANINI';

let _counter = 1;

const _introSection = [
  'INTRO1','INTRO2','INTRO3','INTRO4','INTRO5','INTRO6','INTRO7',
  'INTRO8','INTRO9','INTRO10','INTRO11','INTRO12','INTRO13','INTRO14',
  'INTRO15','INTRO16','INTRO17','INTRO18','INTRO19',
];
const _teamsInOrder = [
  'RUS','KSA','EGY','URU','POR','ESP','MAR','IRN',
  'FRA','AUS','PER','DEN','ARG','ISL','CRO','NGA',
  'BRA','SUI','CRC','SRB','GER','MEX','SWE','KOR',
  'BEL','PAN','TUN','ENG','POL','SEN','COL','JPN',
];
const _legendsSection = [
  'LEG1','LEG2','LEG3','LEG4','LEG5','LEG6','LEG7','LEG8','LEG9','LEG10',
];

for (const code of _introSection) {
  codeToNumber[code] = _counter;
  numberToCode[_counter] = code;
  _counter++;
}
for (const team of _teamsInOrder) {
  for (let i = 1; i <= 20; i++) {
    const code = `${team}${i}`;
    codeToNumber[code] = _counter;
    numberToCode[_counter] = code;
    _counter++;
  }
}
for (const code of _legendsSection) {
  codeToNumber[code] = _counter;
  numberToCode[_counter] = code;
  _counter++;
}
// _counter === 670: 1 PANINI('00') + 19 INTRO + 640 equipos + 10 LEGENDS

// ── Paleta general del álbum ─────────────────────────────────────────────────
export const albumPalette = {
  name: 'Rusia 2018',
  primary: '#0E4CAC',       // azul principal
  primaryLight: '#0D63CB',  // azul claro
  primaryDark: '#083994',   // azul oscuro
  secondary: '#D03030',     // rojo principal
  secondaryDark: '#B03020', // rojo oscuro
  accent: '#A39464',        // dorado
  headerBg: '#ffffff',
  headerBgDark: '#051f4a',
  darkBase: '#04193d',
  darkCard: '#0a2d6e',
  text: '#1e293b',
  textDark: '#ffffff',
};
