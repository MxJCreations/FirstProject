const getGreeting = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    switch(randomNumber) {
      case 0:
      return 'Gday mate!';
      break;
      case 1:
      return 'Hello!';
      break;
      case 2:
      return 'Konnichiwa!';
      break;
      case 3:
          return 'Guten tag!';
          break;
          case 4:
              return 'Hola!';
              break;
              case 5:
                  return 'Ciao!';
                  break;
                  case 6:
                      return 'Bonjour!';
                      break;
                      case 7:
                          return 'Howdy!';
    }
  };
  console.log(getGreeting());
