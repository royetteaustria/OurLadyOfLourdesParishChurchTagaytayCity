const getHolidays = (year: number) => {
    const holidays = [
      { date: new Date(year, 0, 1), name: 'New Year\'s Day', type: 'Regular Holiday' },
      { date: new Date(year, 0, 23), name: 'First Philippine Republic Day', type: 'Special Working Day' },
      { date: new Date(year, 0, 27), name: 'Lailatul Isra Wal Mi Raj (Tentative Date)', type: 'Common local holiday' },
      { date: new Date(year, 0, 29), name: 'Lunar New Year\'s Day', type: 'Special Non-working Holiday' },
      { date: new Date(year, 2, 12), name: 'Independence Day', type: 'Regular Holiday' },
      { date: new Date(year, 2, 17), name: 'Eid al-Adha (Feast of the Sacrifice) (Tentative Date)', type: 'Regular Holiday' },
      { date: new Date(year, 2, 18), name: 'Eid al-Adha Day 2 (Tentative Date)', type: 'Common local holiday' },
      { date: new Date(year, 2, 20), name: 'June Solstice', type: 'Season' },
      { date: new Date(year, 3, 8), name: 'Amunsafil Jadid', type: 'Muslim Common local holiday' },
      { date: new Date(year, 4, 21), name: 'Ninoy Aquino Day', type: 'Special Non-working Holiday' },
      { date: new Date(year, 4, 26), name: 'National Heroes Day', type: 'Regular Holiday' },
      { date: new Date(year, 5, 3), name: 'Yamashita Surrender Day', type: 'Special Working Day' },
      { date: new Date(year, 5, 8), name: 'Feast of the Nativity of Mary', type: 'Special Working Day' },
      { date: new Date(year, 5, 16), name: 'Maulid un-Nabi (Tentative Date)', type: 'Common local holiday' },
      { date: new Date(year, 5, 22), name: 'September Equinox', type: 'Season' },
      { date: new Date(year, 8, 1), name: 'All Saints\' Day', type: 'Special Non-working Holiday' },
      { date: new Date(year, 8, 2), name: 'All Souls\' Day', type: 'Special Non-working Holiday' },
      { date: new Date(year, 8, 30), name: 'Bonifacio Day', type: 'Regular Holiday' },
      { date: new Date(year, 9, 8), name: 'Feast of the Immaculate Conception', type: 'Special Non-working Holiday' },
      { date: new Date(year, 9, 21), name: 'December Solstice', type: 'Season' },
      { date: new Date(year, 9, 24), name: 'Christmas Eve', type: 'Special Non-working Holiday' },
      { date: new Date(year, 9, 25), name: 'Christmas Day', type: 'Regular Holiday' },
      { date: new Date(year, 9, 30), name: 'Rizal Day', type: 'Regular Holiday' },
      { date: new Date(year, 9, 31), name: 'New Year\'s Eve', type: 'Special Non-working Holiday' },
    ];
  
    return holidays;
  };
  
  export default getHolidays;