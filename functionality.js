let activeCell = null;
const cellColor = document.getElementById('cell-color');
const fontSize = document.getElementById('font-size')
const fontStyle = document.getElementById('font-style');
const textIndent = document.getElementById('text-indent');
const textAlign = document.getElementById('text-align');
const textColor = document.getElementById('text-color');
const bold = document.getElementById('bold');
const underline = document.getElementById('underline');
const italic = document.getElementById('italic');
const currency = document.getElementById('currency');
const percentage = document.getElementById('percentage')

const displayCellID = (e) => {
    const divCellID = document.getElementById("display-cell-ID");
    divCellID.innerText = e.target.id;
    // console.log(divCellID.innerText);    
  };

//   useless function i could have saved space by activating in above function but ... 
  const activatingCell = (e) => {
    activeCell = e.target;
  }

//   state variable 
  const functions = {
    cell_color : '#fff',
    font_style : 'san serif',
    font_size : '16px',
    text_indent : 'left',
    text_align : 'left',
    text_color : '#000',
    isBoldSelected : true,
    isItalicSelected : true,
    isUnderlineSelected : true,
    currency_format : '$',
    isPercentageSelected : true

  }

  bold.addEventListener('click', () => console.log('bold clicked')
  
  )

  italic.addEventListener('click', () => console.log('italic clicked')
  )

  underline.addEventListener('click', () => console.log('underline clicked')
  )

  cellColor.addEventListener('click', () => console.log('cellColor clicked')
  )

  fontStyle.addEventListener('click', () => console.log('fontStyle clicked')
  )

  fontSize.addEventListener('click', () => console.log('fontSize clicked')
  )

  textIndent.addEventListener('click', () => console.log('textIndent clicked')
  )

  textAlign.addEventListener('click', () => console.log('textAlign clicked')
  )

  textColor.addEventListener('click', () => console.log('textColor clicked')
  )

  currency.addEventListener('click', () => console.log('currency clicked')
  )

  percentage.addEventListener('click', () => console.log('percentage clicked')
  )


   

