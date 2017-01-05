const deck = [
   {
      'id': 1,
      'fullName': 'B.B. King',
      'band': null,
      'tag': 'bb_king',
      'stats': {
         'technique': 53,
         'riffage': 61,
         'songwriting': 40,
         'fame': 76,
         'originality': 51,
         'cool': 68
      }
   },
   {
      'id': 2,
      'fullName': 'Chuck Berry',
      'band': null,
      'tag': 'chuck_berry',
      'stats': {
         'technique': 70,
         'riffage': 61,
         'songwriting': 50,
         'fame': 68,
         'originality': 43,
         'cool': 62
      }
   },
   {
      'id': 3,
      'fullName': 'Hank Marvin',
      'band': 'The Shadows',
      'tag': 'hank_marvin',
      'stats': {
         'technique': 32,
         'riffage': 39,
         'songwriting': 68,
         'fame': 38,
         'originality': 83,
         'cool': 18
      }
   },
   {
      'id': 4,
      'fullName': 'George Harrison',
      'band': 'The Beatles',
      'tag': 'george_harrison',
      'stats': {
         'technique': 41,
         'riffage': 55,
         'songwriting': 98,
         'fame': 95,
         'originality': 82,
         'cool': 85
      }
   },
   {
      'id': 5,
      'fullName': 'Keith Richards',
      'band': 'The Rolling Stones',
      'tag': 'keith_richards',
      'stats': {
         'technique': 51,
         'riffage': 69,
         'songwriting': 70,
         'fame': 95,
         'originality': 63,
         'cool': 71
      }
   },
   {
      'id': 6,
      'fullName': 'Jimi Hendrix',
      'band': 'The Jimi Hendrix Experience',
      'tag': 'jimi_hendrix',
      'stats': {
         'technique': 97,
         'riffage': 91,
         'songwriting': 88,
         'fame': 100,
         'originality': 92,
         'cool': 99
      }
   },
   {
      'id': 7,
      'fullName': 'Jimmy Page',
      'band': 'Led Zeppelin',
      'tag': 'jimmy_page',
      'stats': {
         'technique': 83,
         'riffage': 97,
         'songwriting': 90,
         'fame': 88,
         'originality': 56,
         'cool': 74
      }
   },
   {
      'id': 8,
      'fullName': 'Eric Clapton',
      'band': 'Cream',
      'tag': 'eric_clapton',
      'stats': {
         'technique': 88,
         'riffage': 85,
         'songwriting': 76,
         'fame': 96,
         'originality': 62,
         'cool': 41
      }
   },
   {
      'id': 9,
      'fullName': 'Dave Gilmour',
      'band': 'Pink Floyd',
      'tag': 'dave_gilmour',
      'stats': {
         'technique': 85,
         'riffage': 62,
         'songwriting': 91,
         'fame': 83,
         'originality': 86,
         'cool': 71
      }
   },
   {
      'id': 10,
      'fullName': 'Jeff Beck',
      'band': 'The Yardbirds',
      'tag': 'jeff_beck',
      'stats': {
         'technique': 89,
         'riffage': 81,
         'songwriting': 61,
         'fame': 53,
         'originality': 77,
         'cool': 45
      }
   },
   {
      'id': 11,
      'fullName': 'Pete Townshend',
      'band': 'The Who',
      'tag': 'pete_townshend',
      'stats': {
         'technique': 73,
         'riffage': 93,
         'songwriting': 85,
         'fame': 79,
         'originality': 72,
         'cool': 54
      }
   },
   {
      'id': 12,
      'fullName': 'Neil Young',
      'band': 'Crazy Horse',
      'tag': 'neil_young',
      'stats': {
         'technique': 38,
         'riffage': 68,
         'songwriting': 97,
         'fame': 81,
         'originality': 78,
         'cool': 34
      }
   },
   {
      'id': 13,
      'fullName': 'Lou Reed',
      'band': 'Velvet Underground',
      'tag': 'lou_reed',
      'stats': {
         'technique': 38,
         'riffage': 34,
         'songwriting': 78,
         'fame': 87,
         'originality': 80,
         'cool': 92
      }
   },
   {
      'id': 14,
      'fullName': 'Steve Howe',
      'band': 'Yes',
      'tag': 'steve_howe',
      'stats': {
         'technique': 86,
         'riffage': 78,
         'songwriting': 70,
         'fame': 31,
         'originality': 95,
         'cool': 28
      }
   },
   {
      'id': 15,
      'fullName': 'Ritchie Blackmore',
      'band': 'Deep Purple',
      'tag': 'ritchie_blackmore',
      'stats': {
         'technique': 65,
         'riffage': 71,
         'songwriting': 50,
         'fame': 56,
         'originality': 67,
         'cool': 55
      }
   },
   {
      'id': 16,
      'fullName': 'Andy Summers',
      'band': 'The Police',
      'tag': 'andy_summers',
      'stats': {
         'technique': 71,
         'riffage': 58,
         'songwriting': 0,
         'fame': 48,
         'originality': 87,
         'cool': 44
      }
   },
   {
      'id': 17,
      'fullName': 'Lenny Kravitz',
      'band': null,
      'tag': 'lenny_kravitz',
      'stats': {
         'technique': 55,
         'riffage': 67,
         'songwriting': 42,
         'fame': 73,
         'originality': 8,
         'cool': 72
      }
   },
   {
      'id': 18,
      'fullName': 'Eddie Van Halen',
      'band': 'Van Halen',
      'tag': 'eddie_van_halen',
      'stats': {
         'technique': 95,
         'riffage': 86,
         'songwriting': 48,
         'fame': 89,
         'originality': 65,
         'cool': 70
      }
   },
   {
      'id': 19,
      'fullName': 'Joe Satriani',
      'band': null,
      'tag': 'joe_satriani',
      'stats': {
         'technique': 98,
         'riffage': 79,
         'songwriting': 45,
         'fame': 46,
         'originality': 34,
         'cool': 44
      }
   },
   {
      'id': 20,
      'fullName': 'Steve Vai',
      'band': null,
      'tag': 'steve_vai',
      'stats': {
         'technique': 99,
         'riffage': 78,
         'songwriting': 37,
         'fame': 48,
         'originality': 54,
         'cool': 42
      }
   },
   {
      'id': 21,
      'fullName': 'Slash',
      'band': 'Guns N Roses',
      'tag': 'slash',
      'stats': {
         'technique': 85,
         'riffage': 82,
         'songwriting': 60,
         'fame': 93,
         'originality': 55,
         'cool': 77
      }
   },
   {
      'id': 22,
      'fullName': 'John Frusciante',
      'band': 'Red Hot Chili Peppers',
      'tag': 'john_frusciante',
      'stats': {
         'technique': 68,
         'riffage': 87,
         'songwriting': 85,
         'fame': 70,
         'originality': 73,
         'cool': 84
      }
   },
   {
      'id': 23,
      'fullName': 'Tom Morello',
      'band': 'Rage Against The Machine',
      'tag': 'tom_morello',
      'stats': {
         'technique': 80,
         'riffage': 97,
         'songwriting': 20,
         'fame': 64,
         'originality': 87,
         'cool': 81
      }
   },
   {
      'id': 24,
      'fullName': 'Kurt Cobain',
      'band': 'Nirvana',
      'tag': 'kurt_cobain',
      'stats': {
         'technique': 50,
         'riffage': 73,
         'songwriting': 86,
         'fame': 99,
         'originality': 81,
         'cool': 92
      }
   },
   {
      'id': 25,
      'fullName': 'Stevie Ray Vaughan',
      'band': null,
      'tag': 'stevie_ray_vaughan',
      'stats': {
         'technique': 86,
         'riffage': 65,
         'songwriting': 40,
         'fame': 54,
         'originality': 47,
         'cool': 33
      }
   },
   {
      'id': 26,
      'fullName': 'Dimebag Darrell',
      'band': 'Pantera',
      'tag': 'dimebag_darrell',
      'stats': {
         'technique': 64,
         'riffage': 84,
         'songwriting': 35,
         'fame': 48,
         'originality': 58,
         'cool': 46
      }
   },
   {
      'id': 27,
      'fullName': 'Elliott Smith',
      'band': null,
      'tag': 'elliott_smith',
      'stats': {
         'technique': 78,
         'riffage': 18,
         'songwriting': 88,
         'fame': 56,
         'originality': 77,
         'cool': 46
      }
   },
   {
      'id': 28,
      'fullName': 'Kirk Hammett',
      'band': 'Metallica',
      'tag': 'kirk_hammett',
      'stats': {
         'technique': 80,
         'riffage': 85,
         'songwriting': 48,
         'fame': 75,
         'originality': 60,
         'cool': 40
      }
   },
   {
      'id': 29,
      'fullName': 'Duayne Allman',
      'band': 'Allman Brothers Band',
      'tag': 'duayne_allman',
      'stats': {
         'technique': 75,
         'riffage': 68,
         'songwriting': 75,
         'fame': 44,
         'originality': 52,
         'cool': 61
      }
   },
   {
      'id': 30,
      'fullName': 'Mike Einziger',
      'band': 'Incubus',
      'tag': 'mike_einziger',
      'stats': {
         'technique': 70,
         'riffage': 75,
         'songwriting': 70,
         'fame': 48,
         'originality': 86,
         'cool': 53
      }
   },
   {
      'id': 31,
      'fullName': 'Wes Borland',
      'band': 'Limp Bizkit',
      'tag': 'wes_borland',
      'stats': {
         'technique': 66,
         'riffage': 81,
         'songwriting': 28,
         'fame': 55,
         'originality': 57,
         'cool': 52
      }
   },
   {
      'id': 32,
      'fullName': 'Dave Grohl',
      'band': 'Foo Fighters',
      'tag': 'dave_grohl',
      'stats': {
         'technique': 45,
         'riffage': 69,
         'songwriting': 84,
         'fame': 99,
         'originality': 57,
         'cool': 62
      }
   },
   {
      'id': 33,
      'fullName': 'Josh Homme',
      'band': 'Queens Of The Stone Age',
      'tag': 'josh_homme',
      'stats': {
         'technique': 75,
         'riffage': 88,
         'songwriting': 84,
         'fame': 91,
         'originality': 86,
         'cool': 93
      }
   },
   {
      'id': 34,
      'fullName': 'Omar Rodriguez-Lopez',
      'band': 'At The Drive-In / The Mars Volta',
      'tag': 'omar_rodriguez-lopez',
      'stats': {
         'technique': 82,
         'riffage': 84,
         'songwriting': 96,
         'fame': 30,
         'originality': 75,
         'cool': 72
      }
   },
   {
      'id': 35,
      'fullName': 'Noel Gallagher',
      'band': 'Oasis',
      'tag': 'noel_gallagher',
      'stats': {
         'technique': 15,
         'riffage': 13,
         'songwriting': 63,
         'fame': 85,
         'originality': 33,
         'cool': 50
      }
   },
   {
      'id': 36,
      'fullName': 'Jonny Greenwood',
      'band': 'Radiohead',
      'tag': 'jonny_greenwood',
      'stats': {
         'technique': 71,
         'riffage': 68,
         'songwriting': 95,
         'fame': 76,
         'originality': 90,
         'cool': 86
      }
   },
   {
      'id': 37,
      'fullName': 'Jonny Marr',
      'band': 'The Smiths',
      'tag': 'jonny_marr',
      'stats': {
         'technique': 72,
         'riffage': 61,
         'songwriting': 62,
         'fame': 73,
         'originality': 60,
         'cool': 48
      }
   },
   {
      'id': 38,
      'fullName': 'Graham Coxon',
      'band': 'Blur',
      'tag': 'graham_coxon',
      'stats': {
         'technique': 68,
         'riffage': 40,
         'songwriting': 65,
         'fame': 44,
         'originality': 65,
         'cool': 35
      }
   },
   {
      'id': 39,
      'fullName': 'Yngwie Malmsteen',
      'band': null,
      'tag': 'yngwie_malmsteen',
      'stats': {
         'technique': 96,
         'riffage': 70,
         'songwriting': 16,
         'fame': 28,
         'originality': 38,
         'cool': 10
      }
   },
   {
      'id': 40,
      'fullName': 'Robert Fripp',
      'band': 'King Crimson',
      'tag': 'robert_fripp',
      'stats': {
         'technique': 65,
         'riffage': 63,
         'songwriting': 61,
         'fame': 40,
         'originality': 84,
         'cool': 6
      }
   },
   {
      'id': 41,
      'fullName': 'Billy Joe Armstrong',
      'band': 'Green Day',
      'tag': 'billy_joe_armstrong',
      'stats': {
         'technique': 32,
         'riffage': 47,
         'songwriting': 71,
         'fame': 89,
         'originality': 21,
         'cool': 60
      }
   },
   {
      'id': 42,
      'fullName': 'Dave Navarro',
      'band': 'Janes Addiction',
      'tag': 'dave_navarro',
      'stats': {
         'technique': 80,
         'riffage': 75,
         'songwriting': 74,
         'fame': 62,
         'originality': 68,
         'cool': 86
      }
   },
   {
      'id': 43,
      'fullName': 'Billy Corgan',
      'band': 'Smashing Pumpkins',
      'tag': 'billy_corgan',
      'stats': {
         'technique': 72,
         'riffage': 48,
         'songwriting': 79,
         'fame': 78,
         'originality': 70,
         'cool': 14
      }
   },
   {
      'id': 44,
      'fullName': 'Jack White',
      'band': 'White Stripes',
      'tag': 'jack_white',
      'stats': {
         'technique': 60,
         'riffage': 80,
         'songwriting': 57,
         'fame': 92,
         'originality': 79,
         'cool': 76
      }
   },
   {
      'id': 45,
      'fullName': 'Brian May',
      'band': 'Queen',
      'tag': 'brian_may',
      'stats': {
         'technique': 87,
         'riffage': 79,
         'songwriting': 92,
         'fame': 97,
         'originality': 92,
         'cool': 5
      }
   },
   {
      'id': 46,
      'fullName': 'Tony Iommi',
      'band': 'Black Sabbath',
      'tag': 'tony_iommi',
      'stats': {
         'technique': 60,
         'riffage': 68,
         'songwriting': 52,
         'fame': 76,
         'originality': 61,
         'cool': 45
      }
   },
   {
      'id': 47,
      'fullName': 'Daron Malakian',
      'band': 'System Of A Down',
      'tag': 'daron_malakian',
      'stats': {
         'technique': 34,
         'riffage': 86,
         'songwriting': 71,
         'fame': 47,
         'originality': 65,
         'cool': 48
      }
   },
   {
      'id': 48,
      'fullName': 'Carlos Santana',
      'band': 'Santana',
      'tag': 'carlos_santana',
      'stats': {
         'technique': 46,
         'riffage': 40,
         'songwriting': 63,
         'fame': 93,
         'originality': 72,
         'cool': 57
      }
   },
   {
      'id': 49,
      'fullName': 'The Edge',
      'band': 'U2',
      'tag': 'the_edge',
      'stats': {
         'technique': 13,
         'riffage': 8,
         'songwriting': 75,
         'fame': 94,
         'originality': 3,
         'cool': 11
      }
   },
   {
      'id': 50,
      'fullName': 'Bob Dylan',
      'band': null,
      'tag': 'bob_dylan',
      'stats': {
         'technique': 15,
         'riffage': 9,
         'songwriting': 78,
         'fame': 99,
         'originality': 67,
         'cool': 85
      }
   },
   {
      'id': 51,
      'fullName': 'Paul Kossoff',
      'band': 'Free',
      'tag': 'paul_kossoff',
      'stats': {
         'technique': 81,
         'riffage': 76,
         'songwriting': 44,
         'fame': 54,
         'originality': 42,
         'cool': 83
      }
   },
   {
      'id': 52,
      'fullName': 'Bruce Springsteen',
      'band': null,
      'tag': 'bruce_springsteen',
      'stats': {
         'technique': 32,
         'riffage': 24,
         'songwriting': 65,
         'fame': 92,
         'originality': 30,
         'cool': 72
      }
   },
   {
      'id': 53,
      'fullName': 'Mick Thomson',
      'band': 'Slipknot',
      'tag': 'mick_thomson',
      'stats': {
         'technique': 78,
         'riffage': 87,
         'songwriting': 29,
         'fame': 35,
         'originality': 61,
         'cool': 52
      }
   },
   {
      'id': 54,
      'fullName': 'Mick Ronson',
      'band': 'David Bowie',
      'tag': 'mick_ronson',
      'stats': {
         'technique': 61,
         'riffage': 73,
         'songwriting': 45,
         'fame': 54,
         'originality': 81,
         'cool': 71
      }
   },
   {
      'id': 55,
      'fullName': 'Kurt Vile',
      'band': 'The Violators',
      'tag': 'kurt_vile',
      'stats': {
         'technique': 52,
         'riffage': 34,
         'songwriting': 78,
         'fame': 28,
         'originality': 63,
         'cool': 79
      }
   },
   {
      'id': 56,
      'fullName': 'Mark Knopfler',
      'band': 'Dire Straits',
      'tag': 'mark_knopfler',
      'stats': {
         'technique': 86,
         'riffage': 49,
         'songwriting': 79,
         'fame': 75,
         'originality': 92,
         'cool': 15
      }
   },
   {
      'id': 57,
      'fullName': 'Stephen Malkmus',
      'band': 'Pavement',
      'tag': 'stephen_malkmus',
      'stats': {
         'technique': 52,
         'riffage': 42,
         'songwriting': 86,
         'fame': 67,
         'originality': 81,
         'cool': 56
      }
   },
   {
      'id': 58,
      'fullName': 'John McLaughlin',
      'band': 'Mahavishnu Orchestra',
      'tag': 'john_mclaughlin',
      'stats': {
         'technique': 93,
         'riffage': 80,
         'songwriting': 38,
         'fame': 45,
         'originality': 98,
         'cool': 24
      }
   },
   {
      'id': 59,
      'fullName': 'Prince',
      'band': null,
      'tag': 'prince',
      'stats': {
         'technique': 86,
         'riffage': 56,
         'songwriting': 96,
         'fame': 99,
         'originality': 88,
         'cool': 87
      }
   },
   {
      'id': 60,
      'fullName': 'Angus Young',
      'band': 'AC/DC',
      'tag': 'angus_young',
      'stats': {
         'technique': 78,
         'riffage': 84,
         'songwriting': 55,
         'fame': 73,
         'originality': 52,
         'cool': 48
      }
   }
]

export default deck;
