tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Ovo: ["Ovo", "serif"]
    },
    animation: {
      spin_slow: 'spin 6s linear infinite'
    },
    colors: {
      light_hover: '#fcf4ff',
      dark_hover: '#2a004a',
      dark_theme: '#11001f'
    },
    boxShadow: {
      'black': '4px 4px 0 #000', 
      'white': '4px 4px 0 #fff'
      }
    }
  },
 darkMode: 'selector'
}