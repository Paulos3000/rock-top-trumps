const deck = [
   {
      'id': 1,
      'fullName': 'B.B King',
      'shortName': 'B.B King',
      'imgURL': 'bb_king.jpg',
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
      'shortName': 'Chuck Berry',
      'imgURL': 'chuck_berry.jpg',
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
      'shortName': 'Hank Marvin',
      'imgURL': 'hank_marvin.jpg',
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
      'shortName': 'George Harrison',
      'imgURL': 'george_harrison.jpg',
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
      'shortName': 'Keith Richards',
      'imgURL': 'keith_richards.jpg',
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
      'shortName': 'Jimi Hendrix',
      'imgURL': 'jimi_hendrix.jpg',
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
      'shortName': 'Jimmy Page',
      'imgURL': 'jimmy_page.jpg',
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
      'shortName': 'Eric Clapton',
      'imgURL': 'eric_clapton.jpg',
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
      'shortName': 'Dave Gilmour',
      'imgURL': 'dave_gilmour.jpg',
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
      'shortName': 'Jeff Beck',
      'imgURL': 'jeff_beck.jpg',
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
      'shortName': 'Pete Townshend',
      'imgURL': 'pete_townshend.jpg',
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
      'shortName': 'Neil Young',
      'imgURL': 'neil_young.jpg',
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
      'shortName': 'Lou Reed',
      'imgURL': 'lou_reed.jpg',
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
      'shortName': 'Steve Howe',
      'imgURL': 'steve_howe.jpg',
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
      'shortName': 'Ritchie Blackmore',
      'imgURL': 'ritchie_blackmore.jpg',
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
      'shortName': 'Andy Summers',
      'imgURL': 'andy_summers.jpg',
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
      'shortName': 'Lenny Kravitz',
      'imgURL': 'lenny_kravitz.jpg',
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
      'shortName': 'Eddie Van Halen',
      'imgURL': 'eddie_van_halen.jpg',
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
      'shortName': 'Joe Satriani',
      'imgURL': 'joe_satriani.jpg',
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
      'shortName': 'Steve Vai',
      'imgURL': 'steve_vai.jpg',
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
      'shortName': 'Slash',
      'imgURL': 'slash.jpg',
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
      'shortName': 'John Frusciante',
      'imgURL': 'john_frusciante.jpg',
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
      'shortName': 'Tom Morello',
      'imgURL': 'tom_morello.jpg',
      'stats': {
         'technique': 85,
         'riffage': 99,
         'songwriting': 20,
         'fame': 64,
         'originality': 87,
         'cool': 81
      }
   },
   {
      'id': 24,
      'fullName': 'Kurt Cobain',
      'shortName': 'Kurt Cobain',
      'imgURL': 'kurt_cobain.jpg',
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
      'shortName': 'Stevie Ray Vaughan',
      'imgURL': 'stevie_ray_vaughan.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 26,
      'fullName': 'Dimebag Darrell',
      'shortName': 'Dimebag Darrell',
      'imgURL': 'dimebag_darrell.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 27,
      'fullName': 'Elliott Smith',
      'shortName': 'Elliott Smith',
      'imgURL': 'elliott_smith.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 28,
      'fullName': 'Kirk Hammett',
      'shortName': 'Kirk Hammett',
      'imgURL': 'kirk_hammett.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 29,
      'fullName': 'Duayne Allman',
      'shortName': 'Duayne Allman',
      'imgURL': 'duayne_allman.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 30,
      'fullName': 'Mike Einziger',
      'shortName': 'Mike Einziger',
      'imgURL': 'mike_einziger.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 31,
      'fullName': 'Wes Borland',
      'shortName': 'Wes Borland',
      'imgURL': 'wes_borland.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 32,
      'fullName': 'Dave Grohl',
      'shortName': 'Dave Grohl',
      'imgURL': 'dave_grohl.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 33,
      'fullName': 'Josh Homme',
      'shortName': 'Josh Homme',
      'imgURL': 'josh_homme.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 34,
      'fullName': 'Omar Rodriguez-Lopez',
      'shortName': 'Omar Rodriguez-Lopez',
      'imgURL': 'omar_rodriguez-lopez.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 35,
      'fullName': 'Noel Gallagher',
      'shortName': 'Noel Gallagher',
      'imgURL': 'noel_gallagher.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 36,
      'fullName': 'Jonny Greenwood',
      'shortName': 'Jonny Greenwood',
      'imgURL': 'jonny_greenwood.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 37,
      'fullName': 'Jonny Marr',
      'shortName': 'Jonny Marr',
      'imgURL': 'jonny_marr.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 38,
      'fullName': 'Graham Coxon',
      'shortName': 'Graham Coxon',
      'imgURL': 'graham_coxon.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 39,
      'fullName': 'Yngwie Malmsteen',
      'shortName': 'Yngwie Malmsteen',
      'imgURL': 'yngwie_malmsteen.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 40,
      'fullName': 'Robert Fripp',
      'shortName': 'Robert Fripp',
      'imgURL': 'robert_fripp.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 41,
      'fullName': 'Billy Joe Armstrong',
      'shortName': 'Billy Joe Armstrong',
      'imgURL': 'billy_joe_armstrong.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 42,
      'fullName': 'Dave Navarro',
      'shortName': 'Dave Navarro',
      'imgURL': 'dave_navarro.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 43,
      'fullName': 'Billy Corgan',
      'shortName': 'Billy Corgan',
      'imgURL': 'billy_corgan.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 44,
      'fullName': 'Jack White',
      'shortName': 'Jack White',
      'imgURL': 'jack_white.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 45,
      'fullName': 'Brian May',
      'shortName': 'Brian May',
      'imgURL': 'brian_may.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 46,
      'fullName': 'Tony Iommi',
      'shortName': 'Tony Iommi',
      'imgURL': 'tony_iommi.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 47,
      'fullName': 'Daron Malakian',
      'shortName': 'Daron Malakian',
      'imgURL': 'daron_malakian.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 48,
      'fullName': 'Carlos Santana',
      'shortName': 'Carlos Santana',
      'imgURL': 'carlos_santana.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 49,
      'fullName': 'The Edge',
      'shortName': 'The Edge',
      'imgURL': 'the_edge.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 50,
      'fullName': 'Bob Dylan',
      'shortName': 'Bob Dylan',
      'imgURL': 'bob_dylan.jpg',
      'stats': {
         'technique': 0,
         'riffage': 0,
         'songwriting': 0,
         'fame': 0,
         'originality': 0,
         'cool': 0
      }
   },
   {
      'id': 51,
      'fullName': 'Paul Kossoff',
      'shortName': 'Paul Kossoff',
      'imgURL': 'paul_kossoff.jpg',
      'stats': {
         'technique': 81,
         'riffage': 76,
         'songwriting': 44,
         'fame': 54,
         'originality': 76,
         'cool': 85
      }
   },
   {
      'id': 52,
      'fullName': 'Bruce Springsteen',
      'shortName': 'Bruce Springsteen',
      'imgURL': 'bruce_springsteen.jpg',
      'stats': {
         'technique': 52,
         'riffage': 34,
         'songwriting': 76,
         'fame': 87,
         'originality': 70,
         'cool': 82
      }
   },
   {
      'id': 53,
      'fullName': 'Mick Thomson',
      'shortName': 'Mick Thomson',
      'imgURL': 'mick_thomson.jpg',
      'stats': {
         'technique': 78,
         'riffage': 91,
         'songwriting': 29,
         'fame': 35,
         'originality': 61,
         'cool': 52
      }
   },
   {
      'id': 54,
      'fullName': 'Mick Ronson',
      'shortName': 'Mick Ronson',
      'imgURL': 'mick_ronson.jpg',
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
      'shortName': 'Kurt Vile',
      'imgURL': 'kurt_vile.jpg',
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
      'shortName': 'Mark Knopfler',
      'imgURL': 'mark_knopfler.jpg',
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
      'shortName': 'Stephen Malkmus',
      'imgURL': 'stephen_malkmus.jpg',
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
      'shortName': 'John McLaughlin',
      'imgURL': 'john_mclaughlin.jpg',
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
      'shortName': 'Prince',
      'imgURL': 'prince.jpg',
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
      'shortName': 'Angus Young',
      'imgURL': 'angus_young.jpg',
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
