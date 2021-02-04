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
  
  const getQuestion = () => {
      const randomNumber2 = Math.floor(Math.random() * 8);
      switch(randomNumber2) {
          case 0:
              return 'How are you today?';
              break;
              case 1:
                  return 'Are you feeling ok?';
                  break;
                  case 2:
                      return 'Is it raining outside?';
                      break;
                      case 3:
                          return 'Are you ready for your training?';
                          break;
                          case 4:
                              return 'Have you had any sleep?';
                              break;
                              case 5:
                                  return 'Have you called your mother lately?';
                                  break;
                                  case 6:
                                      return 'Have you finished your portfolio yet?';
                                      break;
                                      case 7:
                                          return 'Have you eaten anything today?';

      }
  };

  const getObservation = () => {
      const randomnumber3 = Math.floor(Math.random() * 8);
      switch(randomnumber3) {
          case 0:
              return 'You smell terrible!';
              break;
              case 1:
                  return 'You are drooling again!';
                  break;
                  case 2:
                      return 'High five, lets GO!';
                      break;
                      case 3:
                          return 'You look tired!';
                          break;
                          case 4:
                              return 'It is very dark in here!';
                              break;
                              case 5:
                                  return 'Talking to family can help!';
                                  break;
                                  case 6:
                                      return 'Stop procrastinating!';
                                      break;
                                      case 7:
                                          return 'YOU CAN DO THIS!';
      }
    };

  console.log(getGreeting() + ' ' + getQuestion() + ' ' + getObservation());
