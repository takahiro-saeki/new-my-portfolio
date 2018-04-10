const colorPicker = id => {
  switch (id) {
    case 1:
      return { background: `linear-gradient(#B71C1C, #F44336)` };
    case 2:
      return { background: `linear-gradient(#006064, #0097A7)` };
    case 3:
      return { background: `linear-gradient(#E65100, #EF6C00)` };
    case 4:
      return { background: `linear-gradient(#1B5E20, #43A047)` };
    case 5:
      return { background: `linear-gradient(#311b92, #5e35b1)` };
    case 6:
      return { background: `linear-gradient(#f57f17, #fdd835)` };
    case 7:
      return { background: `linear-gradient(#01579b, #039be5)` };
  }
};

export default colorPicker;
