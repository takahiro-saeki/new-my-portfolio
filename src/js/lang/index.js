import ja from './ja';
import en from './en';

const lang = flag => {
  switch (flag) {
    case 'JA':
      return ja;
    case 'EN':
      return en;
    default:
      return ja;
  }
};

export default lang;
