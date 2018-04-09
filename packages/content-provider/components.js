const defaultData = {
  title: 'Dummy'
}

export default (area) => {
  switch(area) {
    case 'Header': {
      return [
        {
          componentKey: 'Dummy',
          theme: 'ocean',
          title: 'HEADER OCEAN',
          content: 'Ocean header content'
        },
        {
          componentKey: 'Dummy',
          theme: 'divine',
          title: 'HEADER DIVINE',
          content: 'Divine header content'
        },
        {
          componentKey: 'Dummy',
          theme: 'nightfall',
          title: 'HEADER nightfall',
          content: 'Night fall header content'
        }
      ]
    }
    default:
      return defaultData;
  }
}
  
