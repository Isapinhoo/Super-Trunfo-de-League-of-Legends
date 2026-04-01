// =====================================================
// SUPER TRUNFO - LEAGUE OF LEGENDS 2026
// Todos os campeões de Runeterra!
// Atributos baseados na LORE (poder no universo)
// =====================================================

// Escala de Lore Power (1-100):
// 1-20: Campeões humanos comuns (soldados, caçadores)
// 21-40: Guerreiros habilidosos, magos treinados
// 41-60: Campeões poderosos, aspectos menores, ascendentes
// 61-80: Aspectos maiores, semideuses, dragões ancestrais
// 81-95: Deuses, entidades cósmicas, Aspectos Targonianos completos
// 96-100: Entidades suprema (Aurelion Sol, Kindred, Bard, etc.)

const campeoes = [
    // ============================================
    // A
    // ============================================
    {
        nome: "Aatrox",
        titulo: "A Espada Darkin",
        regiao: "Runeterra / Shurima",
        atributos: {
            vida: 85,
            poderMagico: 60,
            forca: 95,
            armadura: 80,
            lorePower: 85  // Darkin, destruiu aspectos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"
    },
    {
        nome: "Ahri",
        titulo: "A Raposa de Nove Caudas",
        regiao: "Ionia",
        atributos: {
            vida: 45,
            poderMagico: 75,
            forca: 30,
            armadura: 25,
            lorePower: 55  // Vastaya espiritual, manipula emoções
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg"
    },
    {
        nome: "Akali",
        titulo: "A Assassina Renegada",
        regiao: "Ionia",
        atributos: {
            vida: 50,
            poderMagico: 45,
            forca: 55,
            armadura: 30,
            lorePower: 40  // Assassina mortal, mas humana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg"
    },
    {
        nome: "Akshan",
        titulo: "O Sentinela Rebelde",
        regiao: "Shurima",
        atributos: {
            vida: 45,
            poderMagico: 35,
            forca: 50,
            armadura: 30,
            lorePower: 42  // Humano com arma ancestral
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akshan_0.jpg"
    },
    {
        nome: "Alistar",
        titulo: "O Minotauro",
        regiao: "Noxus",
        atributos: {
            vida: 80,
            poderMagico: 40,
            forca: 75,
            armadura: 70,
            lorePower: 45  // Minotauro, força bruta
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg"
    },
    {
        nome: "Ambessa",
        titulo: "A General de Noxus",
        regiao: "Noxus / Piltover",
        atributos: {
            vida: 60,
            poderMagico: 30,
            forca: 70,
            armadura: 55,
            lorePower: 48  // Campeão 2024, guerreira noxiana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ambessa_0.jpg"
    },
    {
        nome: "Amumu",
        titulo: "A Múmia Triste",
        regiao: "Shurima",
        atributos: {
            vida: 35,
            poderMagico: 70,
            forca: 25,
            armadura: 40,
            lorePower: 50  // Maldição shurimana antiga
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg"
    },
    {
        nome: "Anivia",
        titulo: "A Cryophoenix",
        regiao: "Freljord",
        atributos: {
            vida: 50,
            poderMagico: 85,
            forca: 30,
            armadura: 45,
            lorePower: 75  // Aspecto de Freljord, imortal
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg"
    },
    {
        nome: "Annie",
        titulo: "A Criança das Trevas",
        regiao: "Noxus",
        atributos: {
            vida: 25,
            poderMagico: 80,
            forca: 15,
            armadura: 20,
            lorePower: 60  // Poder pyromântico bruto, Tibbers
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg"
    },
    {
        nome: "Aphelios",
        titulo: "A Arma dos Devotos",
        regiao: "Targon",
        atributos: {
            vida: 40,
            poderMagico: 65,
            forca: 45,
            armadura: 30,
            lorePower: 55  // Aspecto da Lua, arma divina
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg"
    },
    {
        nome: "Ashe",
        titulo: "A Arqueira de Gelo",
        regiao: "Freljord",
        atributos: {
            vida: 45,
            poderMagico: 60,
            forca: 40,
            armadura: 30,
            lorePower: 50  // Portadora do arco de gelo verdadeiro
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg"
    },
    {
        nome: "Aurelion Sol",
        titulo: "O Forjador de Estrelas",
        regiao: "Targon / Cosmo",
        atributos: {
            vida: 100,
            poderMagico: 100,
            forca: 95,
            armadura: 90,
            lorePower: 100  // SER CÓSMICO SUPREMO, cria estrelas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/AurelionSol_0.jpg"
    },
    {
        nome: "Azir",
        titulo: "O Imperador das Areias",
        regiao: "Shurima",
        atributos: {
            vida: 50,
            poderMagico: 90,
            forca: 30,
            armadura: 40,
            lorePower: 80  // Ascendente, imperador shurimano
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg"
    },

    // ============================================
    // B
    // ============================================
    {
        nome: "Bard",
        titulo: "O Andarilho Cósmico",
        regiao: "Runeterra / Cosmo",
        atributos: {
            vida: 85,
            poderMagico: 100,
            forca: 40,
            armadura: 70,
            lorePower: 98  // Entidade cósmica, protetor de realidades
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Bard_0.jpg"
    },
    {
        nome: "Bel'Veth",
        titulo: "A Imperatriz do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 90,
            poderMagico: 85,
            forca: 88,
            armadura: 75,
            lorePower: 92  // Rainha do Vazio, devora cidades
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Belveth_0.jpg"
    },
    {
        nome: "Blitzcrank",
        titulo: "O Grande Golem de Vapor",
        regiao: "Zaun",
        atributos: {
            vida: 70,
            poderMagico: 45,
            forca: 75,
            armadura: 60,
            lorePower: 35  // Golem de tecnologia hextec
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Blitzcrank_0.jpg"
    },
    {
        nome: "Brand",
        titulo: "O Vingador Flamejante",
        regiao: "Runeterra",
        atributos: {
            vida: 40,
            poderMagico: 85,
            forca: 35,
            armadura: 30,
            lorePower: 65  // Fragmento de Runa Mundial, fogo vivo
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Brand_0.jpg"
    },
    {
        nome: "Braum",
        titulo: "O Coração de Freljord",
        regiao: "Freljord",
        atributos: {
            vida: 85,
            poderMagico: 30,
            forca: 80,
            armadura: 85,
            lorePower: 45  // Lenda viva, força sobrehumana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg"
    },
    {
        nome: "Briar",
        titulo: "A Sedenta",
        regiao: "Noxus",
        atributos: {
            vida: 60,
            poderMagico: 40,
            forca: 75,
            armadura: 45,
            lorePower: 50  // Vampiro noxiano, sede de sangue
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Briar_0.jpg"
    },

    // ============================================
    // C
    // ============================================
    {
        nome: "Caitlyn",
        titulo: "A Xerife de Piltover",
        regiao: "Piltover",
        atributos: {
            vida: 40,
            poderMagico: 20,
            forca: 45,
            armadura: 25,
            lorePower: 25  // Humana, tecnologia avançada
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg"
    },
    {
        nome: "Camille",
        titulo: "A Sombra de Aço",
        regiao: "Piltover",
        atributos: {
            vida: 55,
            poderMagico: 30,
            forca: 70,
            armadura: 60,
            lorePower: 40  // Ciberneticamente aprimorada
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Camille_0.jpg"
    },
    {
        nome: "Cassiopeia",
        titulo: "O Abraço da Serpente",
        regiao: "Noxus / Shurima",
        atributos: {
            vida: 50,
            poderMagico: 80,
            forca: 25,
            armadura: 35,
            lorePower: 60  // Amaldiçoada por uma tumba shurimana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Cassiopeia_0.jpg"
    },
    {
        nome: "Cho'Gath",
        titulo: "O Terror do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 95,
            poderMagico: 70,
            forca: 85,
            armadura: 80,
            lorePower: 75  // Terror do Vazio, cresce infinitamente
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Chogath_0.jpg"
    },
    {
        nome: "Corki",
        titulo: "O Bombardeiro Ousado",
        regiao: "Bandle City",
        atributos: {
            vida: 35,
            poderMagico: 40,
            forca: 30,
            armadura: 35,
            lorePower: 30  // Yordle com máquina voadora
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Corki_0.jpg"
    },

    // ============================================
    // D
    // ============================================
    {
        nome: "Darius",
        titulo: "A Mão de Noxus",
        regiao: "Noxus",
        atributos: {
            vida: 75,
            poderMagico: 15,
            forca: 85,
            armadura: 70,
            lorePower: 45  // Guerreiro humano no auge físico
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_0.jpg"
    },
    {
        nome: "Diana",
        titulo: "O Escárnio da Lua",
        regiao: "Targon",
        atributos: {
            vida: 55,
            poderMagico: 80,
            forca: 60,
            armadura: 50,
            lorePower: 70  // Aspecto da Lua, hoste de aspecto
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Diana_0.jpg"
    },
    {
        nome: "Dr. Mundo",
        titulo: "O Louco de Zaun",
        regiao: "Zaun",
        atributos: {
            vida: 90,
            poderMagico: 20,
            forca: 70,
            armadura: 65,
            lorePower: 35  // Experimento químico, regeneração
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/DrMundo_0.jpg"
    },
    {
        nome: "Draven",
        titulo: "O Carrasco de Noxus",
        regiao: "Noxus",
        atributos: {
            vida: 55,
            poderMagico: 10,
            forca: 65,
            armadura: 40,
            lorePower: 30  // Gladiador humano habilidoso
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Draven_0.jpg"
    },

    // ============================================
    // E
    // ============================================
    {
        nome: "Ekko",
        titulo: "O Rapaz que Estilhaçou o Tempo",
        regiao: "Zaun",
        atributos: {
            vida: 45,
            poderMagico: 65,
            forca: 40,
            armadura: 30,
            lorePower: 50  // Manipulação temporal com hextec
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_0.jpg"
    },
    {
        nome: "Elise",
        titulo: "A Rainha Aracnídea",
        regiao: "Noxus / Ilhas das Sombras",
        atributos: {
            vida: 50,
            poderMagico: 70,
            forca: 45,
            armadura: 40,
            lorePower: 55  // Vampiro aracnídeo, imortal
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Elise_0.jpg"
    },
    {
        nome: "Evelynn",
        titulo: "O Abraço da Agonia",
        regiao: "Runeterra / Demônios",
        atributos: {
            vida: 55,
            poderMagico: 80,
            forca: 50,
            armadura: 45,
            lorePower: 70  // Demônio primordial, alimenta-se de agonia
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Evelynn_0.jpg"
    },
    {
        nome: "Ezreal",
        titulo: "O Explorador Pródigo",
        regiao: "Piltover",
        atributos: {
            vida: 40,
            poderMagico: 60,
            forca: 35,
            armadura: 25,
            lorePower: 45  // Luva shurimana de poder
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_0.jpg"
    },

    // ============================================
    // F
    // ============================================
    {
        nome: "Fiddlesticks",
        titulo: "O Terror Ancestral",
        regiao: "Runeterra / Demônios",
        atributos: {
            vida: 60,
            poderMagico: 90,
            forca: 40,
            armadura: 50,
            lorePower: 85  // Demônio primordial do medo, antigo como Runeterra
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiddlesticks_0.jpg"
    },
    {
        nome: "Fiora",
        titulo: "A Grande Duelista",
        regiao: "Demacia",
        atributos: {
            vida: 50,
            poderMagico: 15,
            forca: 70,
            armadura: 40,
            lorePower: 35  // Duelista humana perfeita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiora_0.jpg"
    },
    {
        nome: "Fizz",
        titulo: "O Trapaceiro das Marés",
        regiao: "Bilgewater",
        atributos: {
            vida: 40,
            poderMagico: 70,
            forca: 35,
            armadura: 30,
            lorePower: 45  // Yordle aquático, tridente mágico
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fizz_0.jpg"
    },

    // ============================================
    // G
    // ============================================
    {
        nome: "Galio",
        titulo: "O Colosso",
        regiao: "Demacia",
        atributos: {
            vida: 90,
            poderMagico: 80,
            forca: 85,
            armadura: 90,
            lorePower: 75  // Golem antimágico colossal, animado
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Galio_0.jpg"
    },
    {
        nome: "Gangplank",
        titulo: "O Terror das Águas",
        regiao: "Bilgewater",
        atributos: {
            vida: 60,
            poderMagico: 30,
            forca: 70,
            armadura: 50,
            lorePower: 40  // Rei pirata, armamento pesado
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gangplank_0.jpg"
    },
    {
        nome: "Garen",
        titulo: "O Poder de Demacia",
        regiao: "Demacia",
        atributos: {
            vida: 75,
            poderMagico: 25,
            forca: 80,
            armadura: 75,
            lorePower: 45  // Guerreiro demaciano lendário
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg"
    },
    {
        nome: "Gnar",
        titulo: "O Yordle Pré-Histórico",
        regiao: "Freljord",
        atributos: {
            vida: 70,
            poderMagico: 40,
            forca: 85,
            armadura: 65,
            lorePower: 60  // Yordle ancestral, transformação mega
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gnar_0.jpg"
    },
    {
        nome: "Gragas",
        titulo: "O Rabugento",
        regiao: "Freljord",
        atributos: {
            vida: 75,
            poderMagico: 50,
            forca: 70,
            armadura: 60,
            lorePower: 40  // Mestre cervejeiro, explosivos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gragas_0.jpg"
    },
    {
        nome: "Graves",
        titulo: "O Fora da Lei",
        regiao: "Bilgewater",
        atributos: {
            vida: 55,
            poderMagico: 20,
            forca: 65,
            armadura: 45,
            lorePower: 35  // Pistoleiro, explosivos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Graves_0.jpg"
    },

    // ============================================
    // H
    // ============================================
    {
        nome: "Hecarim",
        titulo: "A Sombra da Guerra",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 65,
            poderMagico: 70,
            forca: 75,
            armadura: 60,
            lorePower: 65  // Espírito de guerra, cavaleiro espectral
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_0.jpg"
    },
    {
        nome: "Heimerdinger",
        titulo: "O Inventor Reverenciado",
        regiao: "Piltover",
        atributos: {
            vida: 40,
            poderMagico: 85,
            forca: 20,
            armadura: 30,
            lorePower: 50  // Gênio yordle, tecnologia hextec
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Heimerdinger_0.jpg"
    },
    {
        nome: "Hwei",
        titulo: "O Pintor das Trevas",
        regiao: "Ionia",
        atributos: {
            vida: 45,
            poderMagico: 85,
            forca: 25,
            armadura: 30,
            lorePower: 60  // Mago ioniano, manipula emoções através da arte
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hwei_0.jpg"
    },

    // ============================================
    // I
    // ============================================
    {
        nome: "Illaoi",
        titulo: "A Sacerdotisa Cráquem",
        regiao: "Bilgewater",
        atributos: {
            vida: 80,
            poderMagico: 50,
            forca: 85,
            armadura: 70,
            lorePower: 60  // Avatar de Nagakabouros, deus do movimento
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Illaoi_0.jpg"
    },
    {
        nome: "Irelia",
        titulo: "A Dançarina das Lâminas",
        regiao: "Ionia",
        atributos: {
            vida: 55,
            poderMagico: 50,
            forca: 70,
            armadura: 45,
            lorePower: 50  // Guerreira ioniana, telecinese com lâminas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Irelia_0.jpg"
    },
    {
        nome: "Ivern",
        titulo: "O Pai da Floresta",
        regiao: "Ionia",
        atributos: {
            vida: 60,
            poderMagico: 75,
            forca: 35,
            armadura: 45,
            lorePower: 65  // Humano transformado em espírito da natureza
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ivern_0.jpg"
    },

    // ============================================
    // J
    // ============================================
    {
        nome: "Janna",
        titulo: "A Fúria da Tormenta",
        regiao: "Zaun",
        atributos: {
            vida: 45,
            poderMagico: 85,
            forca: 20,
            armadura: 30,
            lorePower: 70  // Espírito do vento, deusa zaunita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Janna_0.jpg"
    },
    {
        nome: "Jarvan IV",
        titulo: "O Exemplo de Demacia",
        regiao: "Demacia",
        atributos: {
            vida: 70,
            poderMagico: 40,
            forca: 75,
            armadura: 70,
            lorePower: 45  // Príncipe demaciano, guerreiro
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/JarvanIV_0.jpg"
    },
    {
        nome: "Jax",
        titulo: "O Grão-Mestre das Armas",
        regiao: "Icathia / Runeterra",
        atributos: {
            vida: 65,
            poderMagico: 60,
            forca: 80,
            armadura: 65,
            lorePower: 75  // Último de Icathia, derrotou aspectos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jax_0.jpg"
    },
    {
        nome: "Jayce",
        titulo: "O Defensor do Amanhã",
        regiao: "Piltover",
        atributos: {
            vida: 55,
            poderMagico: 45,
            forca: 65,
            armadura: 50,
            lorePower: 40  // Inventor hextec, martelo/canhoneira
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jayce_0.jpg"
    },
    {
        nome: "Jhin",
        titulo: "O Virtuoso",
        regiao: "Ionia",
        atributos: {
            vida: 45,
            poderMagico: 55,
            forca: 55,
            armadura: 30,
            lorePower: 35  // Assassino serial artístico
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jhin_0.jpg"
    },
    {
        nome: "Jinx",
        titulo: "O Gatilho Desenfreado",
        regiao: "Zaun",
        atributos: {
            vida: 45,
            poderMagico: 40,
            forca: 55,
            armadura: 25,
            lorePower: 40  // Anarquista zaunita, arsenal pesado
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg"
    },

    // ============================================
    // K
    // ============================================
    {
        nome: "K'Sante",
        titulo: "O Orgulho de Nazumah",
        regiao: "Shurima",
        atributos: {
            vida: 75,
            poderMagico: 30,
            forca: 80,
            armadura: 75,
            lorePower: 50  // Guerreiro shurimano, armadura ancestral
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/KSante_0.jpg"
    },
    {
        nome: "Kai'Sa",
        titulo: "A Filha do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 55,
            poderMagico: 60,
            forca: 65,
            armadura: 45,
            lorePower: 60  // Humana adaptada ao Vazio, caçadora
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_0.jpg"
    },
    {
        nome: "Kalista",
        titulo: "O Juramento",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 55,
            poderMagico: 50,
            forca: 70,
            armadura: 45,
            lorePower: 60  // Espírito da vingança, rainha espectral
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kalista_0.jpg"
    },
    {
        nome: "Karma",
        titulo: "A Iluminada",
        regiao: "Ionia",
        atributos: {
            vida: 50,
            poderMagico: 80,
            forca: 30,
            armadura: 40,
            lorePower: 65  // Hoste de espíritos ancestrais ionianos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karma_0.jpg"
    },
    {
        nome: "Karthus",
        titulo: "A Voz Mortal",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 45,
            poderMagico: 90,
            forca: 25,
            armadura: 35,
            lorePower: 75  // Lich, mortalidade, canta a morte
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karthus_0.jpg"
    },
    {
        nome: "Kassadin",
        titulo: "O Andarilho do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 55,
            poderMagico: 75,
            forca: 55,
            armadura: 50,
            lorePower: 65  // Humano corrompido pelo Vazio, caçador
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kassadin_0.jpg"
    },
    {
        nome: "Katarina",
        titulo: "A Lâmina Sinistra",
        regiao: "Noxus",
        atributos: {
            vida: 50,
            poderMagico: 40,
            forca: 70,
            armadura: 35,
            lorePower: 40  // Assassina noxiana mestra
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Katarina_0.jpg"
    },
    {
        nome: "Kayle",
        titulo: "A Justiciera",
        regiao: "Targon / Demacia",
        atributos: {
            vida: 60,
            poderMagico: 85,
            forca: 70,
            armadura: 60,
            lorePower: 80  // Aspecto da Justiça, hoste completa
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kayle_0.jpg"
    },
    {
        nome: "Kayn",
        titulo: "O Ceifador das Sombras",
        regiao: "Ionia / Noxus",
        atributos: {
            vida: 55,
            poderMagico: 55,
            forca: 70,
            armadura: 45,
            lorePower: 60  // Humano com arma Darkin (Rhaast)
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kayn_0.jpg"
    },
    {
        nome: "Kennen",
        titulo: "O Coração da Tempestade",
        regiao: "Ionia",
        atributos: {
            vida: 40,
            poderMagico: 75,
            forca: 35,
            armadura: 30,
            lorePower: 55  // Yordle, mestre do relâmpago ioniano
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kennen_0.jpg"
    },
    {
        nome: "Kha'Zix",
        titulo: "O Ceifador do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 50,
            poderMagico: 50,
            forca: 75,
            armadura: 45,
            lorePower: 65  // Predador do Vazio, evolução adaptativa
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Khazix_0.jpg"
    },
    {
        nome: "Kindred",
        titulo: "Os Caçadores Eternos",
        regiao: "Runeterra",
        atributos: {
            vida: 70,
            poderMagico: 85,
            forca: 60,
            armadura: 60,
            lorePower: 98  // Personificação da morte, entidade cósmica
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_0.jpg"
    },
    {
        nome: "Kled",
        titulo: "O Cavaleiro Enraivecido",
        regiao: "Noxus",
        atributos: {
            vida: 65,
            poderMagico: 10,
            forca: 75,
            armadura: 60,
            lorePower: 40  // Yordle guerreiro noxiano com Skaarl
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kled_0.jpg"
    },
    {
        nome: "Kog'Maw",
        titulo: "A Boca do Abismo",
        regiao: "O Vazio",
        atributos: {
            vida: 45,
            poderMagico: 70,
            forca: 50,
            armadura: 35,
            lorePower: 60  // Cria do Vazio, devoração ácida
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/KogMaw_0.jpg"
    },

    // ============================================
    // L
    // ============================================
    {
        nome: "Lillia",
        titulo: "O Florir Adormecido",
        regiao: "Ionia",
        atributos: {
            vida: 45,
            poderMagico: 70,
            forca: 30,
            armadura: 30,
            lorePower: 50  // Espírito dos sonhos, cervo mágico
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lillia_0.jpg"
    },
    {
        nome: "Lissandra",
        titulo: "A Bruxa Gélida",
        regiao: "Freljord",
        atributos: {
            vida: 55,
            poderMagico: 90,
            forca: 35,
            armadura: 50,
            lorePower: 80  // Feiticeira ancestral, gelo verdadeiro, traiu as irmãs
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lissandra_0.jpg"
    },
    {
        nome: "Lucian",
        titulo: "O Purificador",
        regiao: "Demacia / Ilhas das Sombras",
        atributos: {
            vida: 50,
            poderMagico: 40,
            forca: 60,
            armadura: 35,
            lorePower: 45  // Caçador de espectros, armas de luz
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lucian_0.jpg"
    },
    {
        nome: "Lulu",
        titulo: "A Fada Feiticeira",
        regiao: "Bandle City",
        atributos: {
            vida: 40,
            poderMagico: 75,
            forca: 20,
            armadura: 30,
            lorePower: 55  // Yordle feiticeira, magia de ilusão
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lulu_0.jpg"
    },
    {
        nome: "Lux",
        titulo: "A Dama da Luz",
        regiao: "Demacia",
        atributos: {
            vida: 45,
            poderMagico: 85,
            forca: 25,
            armadura: 30,
            lorePower: 60  // Maga demaciana, luz arcana, hoste potencial
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg"
    },

    // ============================================
    // M
    // ============================================
    {
        nome: "Malphite",
        titulo: "O Fragmento da Monolito",
        regiao: "Ixtal / Shurima",
        atributos: {
            vida: 85,
            poderMagico: 60,
            forca: 80,
            armadura: 90,
            lorePower: 65  // Ser de pedra viva, fragmento de civilização antiga
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malphite_0.jpg"
    },
    {
        nome: "Malzahar",
        titulo: "O Profeta do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 50,
            poderMagico: 90,
            forca: 30,
            armadura: 40,
            lorePower: 75  // Profeta do Vazio, abre portais
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malzahar_0.jpg"
    },
    {
        nome: "Maokai",
        titulo: "O Ente Treveno",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 80,
            poderMagico: 65,
            forca: 70,
            armadura: 75,
            lorePower: 60  // Ente da natureza corrompido, árvore viva
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Maokai_0.jpg"
    },
    {
        nome: "Master Yi",
        titulo: "O Espadachim Wuju",
        regiao: "Ionia",
        atributos: {
            vida: 55,
            poderMagico: 45,
            forca: 75,
            armadura: 40,
            lorePower: 50  // Mestre do Wuju, velocidade extrema
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/MasterYi_0.jpg"
    },
    {
        nome: "Mel",
        titulo: "A Conselheira de Medarda",
        regiao: "Noxus",
        atributos: {
            vida: 45,
            poderMagico: 85,
            forca: 25,
            armadura: 30,
            lorePower: 70  // Arcana 2025, magia ancestral noxiana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Mel_0.jpg"
    },
    {
        nome: "Milio",
        titulo: "A Chama Gentil",
        regiao: "Ixtal",
        atributos: {
            vida: 35,
            poderMagico: 70,
            forca: 20,
            armadura: 25,
            lorePower: 45  // Yordle ixtalense, fogo curativo
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Milio_0.jpg"
    },
    {
        nome: "Miss Fortune",
        titulo: "A Caçadora de Recompensas",
        regiao: "Bilgewater",
        atributos: {
            vida: 50,
            poderMagico: 25,
            forca: 60,
            armadura: 35,
            lorePower: 40  // Pirata, mestre das armas de fogo
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_0.jpg"
    },
    {
        nome: "Mordekaiser",
        titulo: "O Revenã de Ferro",
        regiao: "Noxus / O Reino da Morte",
        atributos: {
            vida: 90,
            poderMagico: 85,
            forca: 90,
            armadura: 85,
            lorePower: 90  // Rei da morte, conquistador imortal, armadura viva
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Mordekaiser_0.jpg"
    },
    {
        nome: "Morgana",
        titulo: "A Caída",
        regiao: "Targon / Demacia",
        atributos: {
            vida: 55,
            poderMagico: 85,
            forca: 40,
            armadura: 45,
            lorePower: 75  // Aspecto caído, magia de proteção e tormento
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg"
    },

    // ============================================
    // N
    // ============================================
    {
        nome: "Nami",
        titulo: "A Conjuradora das Marés",
        regiao: "Bilgewater",
        atributos: {
            vida: 45,
            poderMagico: 80,
            forca: 30,
            armadura: 30,
            lorePower: 60  // Vastaya marinha, controla oceanos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nami_0.jpg"
    },
    {
        nome: "Nasus",
        titulo: "O Curador das Areias",
        regiao: "Shurima",
        atributos: {
            vida: 75,
            poderMagico: 80,
            forca: 85,
            armadura: 75,
            lorePower: 80  // Ascendente shurimano, anubis, sabedoria infinita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nasus_0.jpg"
    },
    {
        nome: "Nautilus",
        titulo: "O Titã das Profundezas",
        regiao: "Bilgewater",
        atributos: {
            vida: 85,
            poderMagico: 60,
            forca: 80,
            armadura: 80,
            lorePower: 65  // Armadura mergulhador amaldiçoada, titã das profundezas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nautilus_0.jpg"
    },
    {
        nome: "Neeko",
        titulo: "A Curiosa Camaleão",
        regiao: "Ixtal",
        atributos: {
            vida: 45,
            poderMagico: 70,
            forca: 35,
            armadura: 30,
            lorePower: 50  // Vastaya curiosa, transformação perfeita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Neeko_0.jpg"
    },
    {
        nome: "Nidalee",
        titulo: "A Caçadora Bestial",
        regiao: "Ixtal",
        atributos: {
            vida: 50,
            poderMagico: 60,
            forca: 70,
            armadura: 40,
            lorePower: 45  // Humana com alma de grande felino, xtal
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nidalee_0.jpg"
    },
    {
        nome: "Nilah",
        titulo: "A Alegria Irrestrita",
        regiao: "Bilgewater",
        atributos: {
            vida: 55,
            poderMagico: 40,
            forca: 70,
            armadura: 45,
            lorePower: 55  // Caçadora de demônios água, felicidade
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nilah_0.jpg"
    },
    {
        nome: "Nocturne",
        titulo: "O Eterno Pesadelo",
        regiao: "Runeterra / Demônios",
        atributos: {
            vida: 55,
            poderMagico: 80,
            forca: 65,
            armadura: 50,
            lorePower: 70  // Demônio dos pesadelos, medo manifestado
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nocturne_0.jpg"
    },
    {
        nome: "Nunu e Willump",
        titulo: "O Garoto e Seu Yeti",
        regiao: "Freljord",
        atributos: {
            vida: 70,
            poderMagico: 75,
            forca: 70,
            armadura: 60,
            lorePower: 55  // Magia infantil pura + yeti ancião
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nunu_0.jpg"
    },

    // ============================================
    // O
    // ============================================
    {
        nome: "Olaf",
        titulo: "O Berserker",
        regiao: "Freljord",
        atributos: {
            vida: 70,
            poderMagico: 20,
            forca: 85,
            armadura: 65,
            lorePower: 50  // Berserker imortal, busca morte gloriosa
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Olaf_0.jpg"
    },
    {
        nome: "Orianna",
        titulo: "A Dona do Relógio",
        regiao: "Piltover",
        atributos: {
            vida: 45,
            poderMagico: 85,
            forca: 25,
            armadura: 40,
            lorePower: 50  // Autômato hextec, consciência humana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Orianna_0.jpg"
    },
    {
        nome: "Ornn",
        titulo: "O Fogo sob a Montanha",
        regiao: "Freljord",
        atributos: {
            vida: 90,
            poderMagico: 70,
            forca: 90,
            armadura: 90,
            lorePower: 85  // Deus freljordiano, forja itens divinos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ornn_0.jpg"
    },

    // ============================================
    // P
    // ============================================
    {
        nome: "Pantheon",
        titulo: "A Lança Indestrutível",
        regiao: "Targon",
        atributos: {
            vida: 70,
            poderMagico: 60,
            forca: 90,
            armadura: 75,
            lorePower: 85  // Aspecto da Guerra, matou Aatrox
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Pantheon_0.jpg"
    },
    {
        nome: "Poppy",
        titulo: "A Guardiã do Martelo",
        regiao: "Demacia",
        atributos: {
            vida: 65,
            poderMagico: 40,
            forca: 80,
            armadura: 70,
            lorePower: 55  // Yordle com martelo de Ornn lendário
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_0.jpg"
    },
    {
        nome: "Pyke",
        titulo: "O Sangue nas Águas",
        regiao: "Bilgewater",
        atributos: {
            vida: 50,
            poderMagico: 45,
            forca: 70,
            armadura: 40,
            lorePower: 50   // Espírito vingativo de mergulhador
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Pyke_0.jpg"
    },

    // ============================================
    // Q
    // ============================================
    {
        nome: "Qiyana",
        titulo: "A Imperatriz dos Elementos",
        regiao: "Ixtal",
        atributos: {
            vida: 50,
            poderMagico: 80,
            forca: 60,
            armadura: 40,
            lorePower: 60  // Arcana ixtalense, manipula elementos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Qiyana_0.jpg"
    },
    {
        nome: "Quinn",
        titulo: "As Asas de Demacia",
        regiao: "Demacia",
        atributos: {
            vida: 50,
            poderMagico: 20,
            forca: 60,
            armadura: 40,
            lorePower: 35  // Batedora demaciana com águia de batalha
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Quinn_0.jpg"
    },

    // ============================================
    // R
    // ============================================
    {
        nome: "Rakan",
        titulo: "O Charme",
        regiao: "Ionia",
        atributos: {
            vida: 50,
            poderMagico: 70,
            forca: 45,
            armadura: 35,
            lorePower: 50  // Vastaya rebelde, magia de encantamento
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_0.jpg"
    },
    {
        nome: "Rammus",
        titulo: "O Tatu Blindado",
        regiao: "Shurima",
        atributos: {
            vida: 75,
            poderMagico: 40,
            forca: 70,
            armadura: 95,
            lorePower: 45  // Criatura shurimana misteriosa, armadura espinhosa
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rammus_0.jpg"
    },
    {
        nome: "Rek'Sai",
        titulo: "A Escavadora do Vazio",
        regiao: "O Vazio / Shurima",
        atributos: {
            vida: 70,
            poderMagico: 45,
            forca: 80,
            armadura: 70,
            lorePower: 65  // Rainha dos Xer'Sai, predadora do deserto
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/RekSai_0.jpg"
    },
    {
        nome: "Rell",
        titulo: "A Dama de Ferro",
        regiao: "Noxus",
        atributos: {
            vida: 70,
            poderMagico: 60,
            forca: 75,
            armadura: 80,
            lorePower: 55  // Maga de metal, armadura viva, fugiu de Noxus
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rell_0.jpg"
    },
    {
        nome: "Renata Glasc",
        titulo: "A Baronesa da Química",
        regiao: "Zaun",
        atributos: {
            vida: 45,
            poderMagico: 75,
            forca: 25,
            armadura: 30,
            lorePower: 50  // Baronesa zaunita, química de controle mental
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Renata_0.jpg"
    },
    {
        nome: "Renekton",
        titulo: "O Carniceiro das Areias",
        regiao: "Shurima",
        atributos: {
            vida: 80,
            poderMagico: 50,
            forca: 90,
            armadura: 80,
            lorePower: 75  // Ascendente crocodilo, louco de raiva
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Renekton_0.jpg"
    },
    {
        nome: "Rengar",
        titulo: "O Acossador da Alcateia",
        regiao: "Ixtal",
        atributos: {
            vida: 55,
            poderMagico: 30,
            forca: 80,
            armadura: 50,
            lorePower: 50  // Caçador vastaya, troféus de caça
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rengar_0.jpg"
    },
    {
        nome: "Riven",
        titulo: "A Exilada",
        regiao: "Ionia / Noxus",
        atributos: {
            vida: 60,
            poderMagico: 35,
            forca: 75,
            armadura: 55,
            lorePower: 45  // Soldado noxiana, espada rúnica quebrada
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Riven_0.jpg"
    },
    {
        nome: "Rumble",
        titulo: "A Ameaça Mecânica",
        regiao: "Bandle City",
        atributos: {
            vida: 50,
            poderMagico: 60,
            forca: 55,
            armadura: 60,
            lorePower: 40  // Yordle piloto de mecha, fogo e metal
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rumble_0.jpg"
    },
    {
        nome: "Ryze",
        titulo: "O Mago Rúnico",
        regiao: "Runeterra",
        atributos: {
            vida: 55,
            poderMagico: 95,
            forca: 40,
            armadura: 50,
            lorePower: 85  // Mago imortal, guardião das Runas Mundiais
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg"
    },

    // ============================================
    // S
    // ============================================
    {
        nome: "Samira",
        titulo: "A Rosa do Deserto",
        regiao: "Noxus / Shurima",
        atributos: {
            vida: 50,
            poderMagico: 30,
            forca: 75,
            armadura: 40,
            lorePower: 45  // Mercenária shurimana, estilo único de luta
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Samira_0.jpg"
    },
    {
        nome: "Sejuani",
        titulo: "A Ira do Inverno",
        regiao: "Freljord",
        atributos: {
            vida: 80,
            poderMagico: 50,
            forca: 80,
            armadura: 75,
            lorePower: 60  // Líder da Garra do Inverno, javali Bristle
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sejuani_0.jpg"
    },
    {
        nome: "Senna",
        titulo: "A Redentora",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 45,
            poderMagico: 80,
            forca: 60,
            armadura: 45,
            lorePower: 70  // Escapou da Lanterna, arma de luz negra
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Senna_0.jpg"
    },
    {
        nome: "Seraphine",
        titulo: "A Estrela em Ascensão",
        regiao: "Piltover / Zaun",
        atributos: {
            vida: 40,
            poderMagico: 70,
            forca: 20,
            armadura: 25,
            lorePower: 45  // Cantora pop, magia sonora hextec
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Seraphine_0.jpg"
    },
    {
        nome: "Sett",
        titulo: "O Chefe",
        regiao: "Ionia",
        atributos: {
            vida: 75,
            poderMagico: 20,
            forca: 85,
            armadura: 70,
            lorePower: 45  // Campeão de arena, meio-vastaya, punhos de ferro
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sett_0.jpg"
    },
    {
        nome: "Shaco",
        titulo: "O Bufão Demoníaco",
        regiao: "Runeterra",
        atributos: {
            vida: 40,
            poderMagico: 60,
            forca: 55,
            armadura: 30,
            lorePower: 55  // Demônio das travessuras assassinas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shaco_0.jpg"
    },
    {
        nome: "Shen",
        titulo: "O Olho do Crepúsculo",
        regiao: "Ionia",
        atributos: {
            vida: 70,
            poderMagico: 60,
            forca: 70,
            armadura: 70,
            lorePower: 65  // Ninja espiritual, equilíbrio, espada espiritual
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shen_0.jpg"
    },
    {
        nome: "Shyvana",
        titulo: "A Meio-Dragão",
        regiao: "Demacia",
        atributos: {
            vida: 75,
            poderMagico: 60,
            forca: 80,
            armadura: 70,
            lorePower: 65  // Híbrida dragão-humana, fogo verdadeiro
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shyvana_0.jpg"
    },
    {
        nome: "Singed",
        titulo: "O Químico Louco",
        regiao: "Zaun",
        atributos: {
            vida: 65,
            poderMagico: 70,
            forca: 50,
            armadura: 60,
            lorePower: 50  //    Alquimista zaunito imortal, venenos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Singed_0.jpg"
    },
    {
        nome: "Sion",
        titulo: "O Colosso Morto-Vivo",
        regiao: "Noxus",
        atributos: {
            vida: 90,
            poderMagico: 40,
            forca: 85,
            armadura: 80,
            lorePower: 60  // Guerreiro reanimado, carro de batalha vivo
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sion_0.jpg"
    },
    {
        nome: "Sivir",
        titulo: "A Mestra da Batalha",
        regiao: "Shurima",
        atributos: {
            vida: 55,
            poderMagico: 30,
            forca: 70,
            armadura: 45,
            lorePower: 50  // Descendente de Azir, lâmina shurimana
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sivir_0.jpg"
    },
    {
        nome: "Skarner",
        titulo: "A Vanguarda de Cristal",
        regiao: "Shurima",
        atributos: {
            vida: 80,
            poderMagico: 60,
            forca: 85,
            armadura: 85,
            lorePower: 65  // Escorpião de cristal vivo, ancião
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Skarner_0.jpg"
    },
    {
        nome: "Smolder",
        titulo: "O Filhote Fogo-Fátuo",
        regiao: "Runeterra",
        atributos: {
            vida: 40,
            poderMagico: 50,
            forca: 45,
            armadura: 35,
            lorePower: 55  // Dragão bebê, potencial de destruição
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Smolder_0.jpg"
    },
    {
        nome: "Sona",
        titulo: "A Mestra das Cordas",
        regiao: "Demacia / Ionia",
        atributos: {
            vida: 40,
            poderMagico: 85,
            forca: 20,
            armadura: 25,
            lorePower: 60  // Muda, magia sonora etérea, etwahl
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sona_0.jpg"
    },
    {
        nome: "Soraka",
        titulo: "A Andarilha das Estrelas",
        regiao: "Targon",
        atributos: {
            vida: 45,
            poderMagico: 90,
            forca: 20,
            armadura: 30,
            lorePower: 75  // Celestial, cura divina, sacrificou imortalidade
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Soraka_0.jpg"
    },
    {
        nome: "Swain",
        titulo: "O Estrategista Mestre",
        regiao: "Noxus",
        atributos: {
            vida: 65,
            poderMagico: 85,
            forca: 45,
            armadura: 55,
            lorePower: 75  // Líder de Noxus, demônio Raum, visões
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Swain_0.jpg"
    },
    {
        nome: "Sylas",
        titulo: "O Abjugado",
        regiao: "Demacia / Freljord",
        atributos: {
            vida: 55,
            poderMagico: 85,
            forca: 50,
            armadura: 45,
            lorePower: 65  // Ladrão de magia, escapou das correntes de petricita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sylas_0.jpg"
    },
    {
        nome: "Syndra",
        titulo: "A Soberana Sombria",
        regiao: "Ionia",
        atributos: {
            vida: 50,
            poderMagico: 95,
            forca: 30,
            armadura: 40,
            lorePower: 80  // Maga ioniana, telecinese em nível de deus
        },  
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Syndra_0.jpg"
    },

    // ============================================
    // T
    // ============================================
    {
        nome: "Tahm Kench",
        titulo: "O Rei do Rio",
        regiao: "Runeterra / Demônios",
        atributos: {
            vida: 85,
            poderMagico: 75,
            forca: 70,
            armadura: 75,
            lorePower: 75  // Demônio da gula, devora cidades inteiras
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/TahmKench_0.jpg"
    },
    {
        nome: "Taliyah",
        titulo: "A Tecelã de Pedras",
        regiao: "Shurima",
        atributos: {
            vida: 45,
            poderMagico: 80,
            forca: 35,
            armadura: 35,
            lorePower: 60  // Maga shurimana, controle de terra, terra tecelã
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_0.jpg"
    },
    {
        nome: "Talon",
        titulo: "A Sombra da Lâmina",
        regiao: "Noxus",
        atributos: {
            vida: 50,
            poderMagico: 30,
            forca: 75,
            armadura: 40,
            lorePower: 45  // Assassino da Roseira Negra, lâminas ocultas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Talon_0.jpg"
    },
    {
        nome: "Taric",
        titulo: "O Escudo de Valoran",
        regiao: "Targon / Demacia",
        atributos: {
            vida: 70,
            poderMagico: 75,
            forca: 60,
            armadura: 80,
            lorePower: 70  // Aspecto do Protetor, imortal, defesa divina
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taric_0.jpg"
    },
    {
        nome: "Teemo",
        titulo: "O Explorador Veloz",
        regiao: "Bandle City",
        atributos: {
            vida: 30,
            poderMagico: 40,
            forca: 35,
            armadura: 25,
            lorePower: 35  // Yordle explorador, cogumelos tóxicos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Teemo_0.jpg"
    },
    {
        nome: "Thresh",
        titulo: "O Guardião das Correntes",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 60,
            poderMagico: 80,
            forca: 55,
            armadura: 60,
            lorePower: 75  // Carcereiro torturador, lanterna das almas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_0.jpg"
    },
    {
        nome: "Tristana",
        titulo: "A Artilheira Yordle",
        regiao: "Bandle City",
        atributos: {
            vida: 45,
            poderMagico: 35,
            forca: 65,
            armadura: 40,
            lorePower: 40  // Yordle com canhão Boomer
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Tristana_0.jpg"
    },
    {
        nome: "Trundle",
        titulo: "O Rei dos Trolls",
        regiao: "Freljord",
        atributos: {
            vida: 75,
            poderMagico: 45,
            forca: 80,
            armadura: 70,
            lorePower: 55  // Rei troll, clava de gelo verdadeiro
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Trundle_0.jpg"
    },
    {
        nome: "Tryndamere",
        titulo: "O Rei Bárbaro",
        regiao: "Freljord",
        atributos: {
            vida: 70,
            poderMagico: 20,
            forca: 85,
            armadura: 60,
            lorePower: 50  // Bárbaro imortal, raiva infinita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Tryndamere_0.jpg"
    },
    {
        nome: "Twisted Fate",
        titulo: "O Mestre das Cartas",
        regiao: "Bilgewater",
        atributos: {
            vida: 45,
            poderMagico: 70,
            forca: 40,
            armadura: 30,
            lorePower: 50  // Mago de cartas, teletransporte
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/TwistedFate_0.jpg"
    },
    {
        nome: "Twitch",
        titulo: "O Semeador da Peste",
        regiao: "Zaun",
        atributos: {
            vida: 40,
            poderMagico: 40,
            forca: 60,
            armadura: 25,
            lorePower: 40  // Rato mutante zaunito, armas químicas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Twitch_0.jpg"
    },

    // ============================================
    // U
    // ============================================
    {
        nome: "Udyr",
        titulo: "O Andarilho Espiritual",
        regiao: "Freljord / Ionia",
        atributos: {
            vida: 75,
            poderMagico: 70,
            forca: 80,
            armadura: 65,
            lorePower: 70  // Hoste de espíritos animais, ligação natural
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Udyr_0.jpg"
    },
    {
        nome: "Urgot",
        titulo: "O Encouraçado",
        regiao: "Zaun",
        atributos: {
            vida: 80,
            poderMagico: 30,
            forca: 75,
            armadura: 75,
            lorePower: 50  // Cyborg zaunito, metralhadoras de pernas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Urgot_0.jpg"
    },

    // ============================================
    // V
    // ============================================
    {
        nome: "Varus",
        titulo: "A Flecha da Vingança",
        regiao: "Ionia / Darkin",
        atributos: {
            vida: 55,
            poderMagico: 60,
            forca: 70,
            armadura: 45,
            lorePower: 70  // Darkin em arco, dois humanos fundidos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Varus_0.jpg"
    },
    {
        nome: "Vayne",
        titulo: "A Caçadora Noturna",
        regiao: "Demacia",
        atributos: {
            vida: 45,
            poderMagico: 25,
            forca: 70,
            armadura: 35,
            lorePower: 35  // Caçadora de monstros, humana determinada
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vayne_0.jpg"
    },
    {
        nome: "Veigar",
        titulo: "O Pequeno Mestre do Mal",
        regiao: "Bandle City",
        atributos: {
            vida: 40,
            poderMagico: 90,
            forca: 25,
            armadura: 40,
            lorePower: 65  // Yordle mago, event horizon, mal infinito
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Veigar_0.jpg"
    },
    {
        nome: "Vel'Koz",
        titulo: "O Olho do Vazio",
        regiao: "O Vazio",
        atributos: {
            vida: 55,
            poderMagico: 90,
            forca: 35,
            armadura: 45,
            lorePower: 80  // Cérebro do Vazio, desintegração molecular
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Velkoz_0.jpg"
    },
    {
        nome: "Vex",
        titulo: "A Melancolista",
        regiao: "Bandle City / Ilhas das Sombras",
        atributos: {
            vida: 40,
            poderMagico: 75,
            forca: 30,
            armadura: 35,
            lorePower: 55  // Yordle sombria, magia de sombras
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vex_0.jpg"
    },
    {
        nome: "Vi",
        titulo: "A Defensora de Piltover",
        regiao: "Piltover / Zaun",
        atributos: {
            vida: 65,
            poderMagico: 25,
            forca: 80,
            armadura: 65,
            lorePower: 40  // Lutadora de rua, manoplas hextec
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_0.jpg"
    },
    {
        nome: "Viego",
        titulo: "O Rei Destruído",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 60,
            poderMagico: 85,
            forca: 75,
            armadura: 60,
            lorePower: 85  // Rei morto-vivo, Ruína, amor obsessivo
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Viego_0.jpg"
    },
    {
        nome: "Viktor",
        titulo: "O Arauto das Máquinas",
        regiao: "Zaun",
        atributos: {
            vida: 50,
            poderMagico: 85,
            forca: 30,
            armadura: 50,
            lorePower: 65  // Glorificação, cibernética, evolução zaunita
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Viktor_0.jpg"
    },
    {
        nome: "Vladimir",
        titulo: "O Sanguinário Escarlate",
        regiao: "Noxus / Ilhas das Sombras",
        atributos: {
            vida: 65,
            poderMagico: 85,
            forca: 40,
            armadura: 50,
            lorePower: 75  // Progenitor dos vampiros, hemomancia
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vladimir_0.jpg"
    },
    {
        nome: "Volibear",
        titulo: "A Tempestade Implacável",
        regiao: "Freljord",
        atributos: {
            vida: 90,
            poderMagico: 80,
            forca: 95,
            armadura: 85,
            lorePower: 90  // Deus urso freljordiano, tempestade viva
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Volibear_0.jpg"
    },

    // ============================================
    // W
    // ============================================
    {
        nome: "Warwick",
        titulo: "A Ira de Zaun",
        regiao: "Zaun",
        atributos: {
            vida: 70,
            poderMagico: 30,
            forca: 80,
            armadura: 60,
            lorePower: 50  // Experimento químico, caçador de sangue
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Warwick_0.jpg"
    },
    {
        nome: "Wukong",
        titulo: "O Macaco Rei",
        regiao: "Ionia",
        atributos: {
            vida: 65,
            poderMagico: 50,
            forca: 80,
            armadura: 60,
            lorePower: 65  // Vastaya guerreiro, bastão extenso, clones
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Wukong_0.jpg"
    },

    // ============================================
    // X
    // ============================================
    {
        nome: "Xayah",
        titulo: "A Rebelde",
        regiao: "Ionia",
        atributos: {
            vida: 50,
            poderMagico: 45,
            forca: 70,
            armadura: 40,
            lorePower: 55  // Vastaya rebelde, penas letais
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xayah_0.jpg"
    },
    {
        nome: "Xerath",
        titulo: "O Mago Ascendente",
        regiao: "Shurima",
        atributos: {
            vida: 45,
            poderMagico: 100,
            forca: 30,
            armadura: 50,
            lorePower: 90  // Ascendente de energia pura, destruiu império
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xerath_0.jpg"
    },
    {
        nome: "Xin Zhao",
        titulo: "O Senescal de Demacia",
        regiao: "Demacia",
        atributos: {
            vida: 70,
            poderMagico: 30,
            forca: 80,
            armadura: 65,
            lorePower: 45  // Guerreiro noxiano redimido, guarda real
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/XinZhao_0.jpg"
    },

    // ============================================
    // Y
    // ============================================
    {
        nome: "Yasuo",
        titulo: "O Imperdoável",
        regiao: "Ionia",
        atributos: {
            vida: 55,
            poderMagico: 50,
            forca: 80,
            armadura: 45,
            lorePower: 55  // Espadachim ioniano, vento, honra perdida
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg"
    },
    {
        nome: "Yone",
        titulo: "O Inesquecido",
        regiao: "Ionia / Espírito",
        atributos: {
            vida: 60,
            poderMagico: 60,
            forca: 85,
            armadura: 55,
            lorePower: 70  // Caçador de azakana, duas espadas, retornado
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yone_0.jpg"
    },
    {
        nome: "Yorick",
        titulo: "O Pastor de Almas",
        regiao: "Ilhas das Sombras",
        atributos: {
            vida: 80,
            poderMagico: 70,
            forca: 75,
            armadura: 75,
            lorePower: 70  // Último monge da Ilha, controle de mortos
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yorick_0.jpg"
    },
    {
        nome: "Yuumi",
        titulo: "A Gata Mágica",
        regiao: "Bandle City",
        atributos: {
            vida: 25,
            poderMagico: 75,
            forca: 15,
            armadura: 20,
            lorePower: 50  // Gata yordle mágica, livro de portais
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yuumi_0.jpg"
    },

    // ============================================
    // Z
    // ============================================
    {
        nome: "Zac",
        titulo: "A Arma Secreta",
        regiao: "Zaun",
        atributos: {
            vida: 85,
            poderMagico: 65,
            forca: 70,
            armadura: 60,
            lorePower: 50  // Golem de gosma química, consciência
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_0.jpg"
    },
    {
        nome: "Zed",
        titulo: "O Mestre das Sombras",
        regiao: "Ionia",
        atributos: {
            vida: 55,
            poderMagico: 60,
            forca: 80,
            armadura: 50,
            lorePower: 65  // Líder da Ordem das Sombras, proibido
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_0.jpg"
    },
    {
        nome: "Zeri",
        titulo: "A Faísca de Zaun",
        regiao: "Zaun",
        atributos: {
            vida: 45,
            poderMagico: 70,
            forca: 50,
            armadura: 30,
            lorePower: 50  // Zaunita com eletricidade corporal
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zeri_0.jpg"
    },
    {
        nome: "Ziggs",
        titulo: "O Especialista em Hexplosivos",
        regiao: "Bandle City / Zaun",
        atributos: {
            vida: 40,
            poderMagico: 80,
            forca: 35,
            armadura: 35,
            lorePower: 45  // Yordle zaunito, bombas hexplosivas
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ziggs_0.jpg"
    },
    {
        nome: "Zilean",
        titulo: "O Guardião do Tempo",
        regiao: "Icathia / Runeterra",
        atributos: {
            vida: 50,
            poderMagico: 90,
            forca: 30,
            armadura: 45,
            lorePower: 85  // Mago do tempo, imortal, tenta salvar Icathia
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zilean_0.jpg"
    },
    {
        nome: "Zoe",
        titulo: "O Aspecto do Crepúsculo",
        regiao: "Targon",
        atributos: {
            vida: 35,
            poderMagico: 95,
            forca: 20,
            armadura: 30,
            lorePower: 85  // Aspecto de Targon, realidade distorcida, portal
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zoe_0.jpg"
    },
    {
        nome: "Zyra",
        titulo: "A Ascensão dos Espinhos",
        regiao: "Ixtal",
        atributos: {
            vida: 45,
            poderMagico: 85,
            forca: 30,
            armadura: 35,
            lorePower: 60  // Consciência vegetal, plantas carnívoras
        },
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_0.jpg"
    }
];

// Total de campeões: 170 (atualizado para 2026)
console.log(`🎮 Super Trunfo LoL carregado com ${campeoes.length} campeões!`);